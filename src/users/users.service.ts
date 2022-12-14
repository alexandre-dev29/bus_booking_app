import { Injectable } from '@nestjs/common';
import {
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

  findAll() {
    return this.prismaService.users.findMany({});
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
