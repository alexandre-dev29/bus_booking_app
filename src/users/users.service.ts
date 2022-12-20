import { Injectable } from '@nestjs/common';
import {
  FindManyUsersArgs,
  PrismaService,
  UpdateOneUsersArgs,
  Users,
  UsersCreateInput,
} from '@data-access';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserInput: UsersCreateInput): Promise<Users> {
    return this.prismaService.users.create({ data: createUserInput });
  }

  findAll(findManyUsers: FindManyUsersArgs) {
    return this.prismaService.users.findMany(findManyUsers);
  }

  findOne(id: string) {
    return this.prismaService.users.findUnique({ where: { userId: id } });
  }

  update(updateUserArgs: UpdateOneUsersArgs) {
    return this.prismaService.users.update(updateUserArgs);
  }

  remove(id: string) {
    return this.prismaService.users.delete({ where: { userId: id } });
  }
}
