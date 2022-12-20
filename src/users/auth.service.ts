import { Injectable } from '@nestjs/common';
import { PrismaService, Role, Users } from '@data-access';
import { JwtService } from '@nestjs/jwt';
import { GraphQLError } from 'graphql/error';
import * as bcrypt from 'bcrypt';
import { LoginResponse } from '@shared-types';
import { UtilityService } from '../utilities/utility.service';

@Injectable()
export class AuthService {
  constructor(
    private prismaService: PrismaService,
    private jwtService: JwtService,
    private utilityService: UtilityService,
  ) {}

  async registerUser({
    phoneNumber,
    password,
    fullName,
  }: Partial<Users>): Promise<Users | any> {
    const userFounded = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (userFounded) {
      return new GraphQLError('This user already exist in the system');
    }

    const encryptedPassword = await bcrypt
      .hash(password, 10)
      .then((value) => value);

    try {
      const responseTwilio = await this.utilityService.SendOtpVerificationCode(
        `${phoneNumber}`,
      );

      if (responseTwilio.status == 'pending') {
        const responseInsert = await this.prismaService.users.create({
          data: {
            phoneNumber: `${phoneNumber}`,
            password: `${encryptedPassword}`,
            fullName: `${fullName}`,
            role: Role.User,
            photoUrl: '',
          },
        });

        return { ...responseInsert, password: '' };
      } else {
        return new GraphQLError(
          'There was an error while validating your phone number, please try again later',
        );
      }
    } catch (e) {
      return new GraphQLError(
        'An Error occur while registering please try again later',
      );
    }
  }

  async loginUser(
    phoneNumber: string,
    password: string,
    context: any,
  ): Promise<LoginResponse | any> {
    const user = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });
    if (user && (await bcrypt.compare(password, user.password))) {
      const { refresh_token, access_token } =
        await this.utilityService.getTokens({
          id: user.userId,
          isSuperAdmin: user.role == Role.SuperAdmin,
          phoneNumber: phoneNumber,
          roles: [user.role] as Array<Role>,
          userName: user.fullName,
        });
      await this.prismaService.users.update({
        data: {
          refreshToken: refresh_token,
        },
        where: {
          userId: user.userId,
        },
      });

      return {
        access_token,
        refresh_token,
        user: {
          userId: user.userId,
          phoneNumber: user.phoneNumber,
        },
      } as LoginResponse;
    } else {
      return new GraphQLError(
        'The phone number or password is invalid please try again',
      );
    }
  }

  async confirmPhoneNumber(
    phoneNumber: string,
    otpCode: string,
  ): Promise<boolean | any> {
    const foundedUser = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });
    if (foundedUser) {
      const confirmation = await this.utilityService.checkTheVerificationCode(
        phoneNumber,
        otpCode,
      );

      if (!confirmation.valid || confirmation.status !== 'approved') {
        throw new GraphQLError('The code is not correct');
      } else {
        await this.prismaService.users.update({
          where: { userId: foundedUser.userId },
          data: { isPhoneConfirmed: true },
        });
        return true;
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }

  async askingForOtpCode(phoneNumber: string): Promise<boolean | any> {
    const foundedUser = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (foundedUser) {
      const responseTwilio = await this.utilityService.SendOtpVerificationCode(
        phoneNumber,
      );
      if (responseTwilio.status == 'pending') {
        return true;
      } else {
        return new GraphQLError(
          'There was an error while validating your phone number, please try again later',
        );
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }

  async confirmOtpForForgot(phoneNumber: string, otpCode: string) {
    const foundedUser = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (foundedUser) {
      const confirmation = await this.utilityService.checkTheVerificationCode(
        phoneNumber,
        otpCode,
      );

      if (!confirmation.valid || confirmation.status !== 'approved') {
        throw new GraphQLError('The code is not correct');
      } else {
        return true;
      }
    } else {
      return new GraphQLError("This phone number doesn't exist ");
    }
  }

  async changeUserPassword(
    phoneNumber: string,
    newPassword: string,
  ): Promise<boolean | any> {
    const foundedUser = await this.prismaService.users.findFirst({
      where: { phoneNumber: phoneNumber },
    });

    if (!foundedUser)
      return new GraphQLError('incorrect phone number provided');

    const encryptedPassword = await bcrypt
      .hash(newPassword, 10)
      .then((value) => value);

    await this.prismaService.users.update({
      where: { userId: foundedUser.userId },
      data: { password: encryptedPassword },
    });
    return true;
  }

  async refreshUserRefreshToken(refreshToken: string) {
    const userByToken = await this.prismaService.users.findFirst({
      where: { refreshToken },
    });
    if (!userByToken)
      return new GraphQLError(
        'Impossible to refresh the token please login again',
      );

    const { refresh_token } = await this.utilityService.getTokens({
      id: userByToken.userId,
      isSuperAdmin: false,
      phoneNumber: '',
      roles: [Role.User],
    });
    this.prismaService.users.update({
      where: { userId: userByToken.userId },
      data: {
        refreshToken: refresh_token,
      },
    });

    return refresh_token;
  }
}
