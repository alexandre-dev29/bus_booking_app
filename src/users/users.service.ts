import { Injectable } from '@nestjs/common';
import {
  PrismaService,
  StringFieldUpdateOperationsInput,
  UsersCreateInput,
} from '@data-access';

@Injectable()
export class UsersService {
  constructor(private prismaService: PrismaService) {}

  create(createUserInput: UsersCreateInput) {
    return 'This action adds a new user';
  }

  findAll() {
    return this.prismaService.users.findMany({});
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(
    id: InstanceType<typeof StringFieldUpdateOperationsInput> | undefined,
    updateUserInput,
  ) {
    return `This action updates a #${id} user`;
  }

  remove(id: string) {
    return `This action removes a #${id} user`;
  }
}
