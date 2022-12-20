import { Injectable } from '@nestjs/common';
import { cookieOption, LoginResponse, LoginResponseAdmin } from '@shared-types';
import {
  AdminCreateInput,
  FindManyAdminArgs,
  PrismaService,
  Role,
} from '@data-access';
import { GraphQLError } from 'graphql/error';
import { UtilityService } from '../utilities/utility.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AdminService {
  constructor(
    private prismaService: PrismaService,
    private utilityService: UtilityService,
  ) {}

  async create(createAdminInput: AdminCreateInput) {
    const currentAdmin = await this.prismaService.admin.findFirst({
      where: {
        username: createAdminInput.username,
        OR: { phoneNumber: createAdminInput.phoneNumber },
      },
    });
    if (currentAdmin !== null) {
      return new GraphQLError('This admin already exist in the system');
    }
    const encryptedPassword = await bcrypt
      .hash(createAdminInput.password, 10)
      .then((value) => value);

    return this.prismaService.admin.create({
      data: { ...createAdminInput, password: encryptedPassword },
    });
  }

  findAll(findAdminArgs: FindManyAdminArgs) {
    return this.prismaService.admin.findMany(findAdminArgs);
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  // update(id: number, updateAdminInput: UpdateAdminInput) {
  //   return `This action updates a #${id} admin`;
  // }
  //
  // remove(id: number) {
  //   return `This action removes a #${id} admin`;
  // }

  async loginAdmin(
    username: string,
    password: string,
    context: any,
  ): Promise<LoginResponse | any> {
    const adminFounded = await this.prismaService.admin.findFirst({
      where: { username: username },
    });
    if (
      adminFounded &&
      (await bcrypt.compare(password, adminFounded.password))
    ) {
      const { refresh_token, access_token } =
        await this.utilityService.getTokens({
          id: adminFounded.adminId,
          isSuperAdmin: adminFounded.role == Role.SuperAdmin,
          phoneNumber: adminFounded.phoneNumber,
          roles: [adminFounded.role] as Array<Role>,
          userName: adminFounded.fullName,
        });
      await this.prismaService.admin.update({
        data: {
          refreshToken: refresh_token,
        },
        where: {
          adminId: adminFounded.adminId,
        },
      });

      const tokenString = `token=${access_token};HttpOnly;Path=/;Max-Age=${86400};samesite=Strict;`;
      context.cookie(tokenString, cookieOption);
      return {
        refresh_token,
        admin: {
          adminId: adminFounded.adminId,
          phoneNumber: adminFounded.phoneNumber,
          username: username,
          fullName: adminFounded.fullName,
        },
      } as LoginResponseAdmin;
    } else {
      return new GraphQLError(
        'The phone number or password is invalid please try again',
      );
    }
  }
}
