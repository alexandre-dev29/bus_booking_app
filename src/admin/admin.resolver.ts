import { Args, Context, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { Admin, AdminCreateInput, FindManyAdminArgs } from '@data-access';
import { LoginResponse } from '@shared-types';
import { UseGuards } from '@nestjs/common';
import { MainAuthGuardGuard, SecurityActions } from '@app-security';
import { AccessGuard, UseAbility } from 'nest-casl';

@Resolver(() => Admin)
export class AdminResolver {
  constructor(private readonly adminService: AdminService) {}

  @Mutation(() => Admin)
  @UseGuards(MainAuthGuardGuard, AccessGuard)
  @UseAbility(SecurityActions.manage, Admin)
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

  @Mutation(() => LoginResponse, { name: 'loginAdmin' })
  loginAdmin(
    @Args('username', { type: () => String }) username: string,
    @Args('password', { type: () => String }) password: string,
    @Context() context: any,
  ) {
    return this.adminService.loginAdmin(username, password, context.reply);
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
