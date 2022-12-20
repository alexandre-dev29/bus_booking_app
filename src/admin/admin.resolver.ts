import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin, AdminCreateInput, FindManyAdminArgs } from '@data-access';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => Admin)
  createAdmin(@Args('createAdminInput') createAdminInput: AdminCreateInput) {
    return this.adminService.create(createAdminInput);
  }

  @Query(() => [Admin], { name: 'admins' })
  findAll(@Args('findManyAdminsArgs') findManyUsers: FindManyAdminArgs) {
    return this.adminService.findAll(findManyUsers);
  }

  @Query(() => Admin, { name: 'admin' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.adminService.findOne(id);
  }

  // @Mutation(() => Admin)
  // updateAdmin(@Args('updateAdminInput') updateAdminInput: UpdateAdminInput) {
  //   return this.adminService.update(updateAdminInput.id, updateAdminInput);
  // }

  // @Mutation(() => Admin)
  // removeAdmin(@Args('id', { type: () => Int }) id: number) {
  //   return this.adminService.remove(id);
  // }
}
