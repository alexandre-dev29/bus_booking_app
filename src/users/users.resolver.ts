import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UpdateOneUsersArgs, Users, UsersCreateInput } from '@data-access';

@Resolver(() => Users)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => Users)
  createUser(@Args('createUserInput') createUserInput: UsersCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [Users], { name: 'users' })
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => Users, { name: 'user' })
  findOne(@Args('userId', { type: () => String }) id: string) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => Users)
  updateUser(@Args('updateUserInput') updateUserInput: UpdateOneUsersArgs) {
    return this.usersService.update(updateUserInput);
  }

  @Mutation(() => Users)
  removeUser(@Args('userId', { type: () => String }) userId: string) {
    return this.usersService.remove(userId);
  }
}
