import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';
import { UsersService } from './users.service';
import {
  FindManyUsersArgs,
  UpdateOneUsersArgs,
  Users,
  UsersCreateInput,
} from '@data-access';
import { AuthService } from './auth.service';
import { LoginResponse } from '@shared-types';

@Resolver(() => Users)
export class UsersResolver {
  constructor(
    private readonly usersService: UsersService,
    private authService: AuthService,
  ) {}

  @Mutation(() => Users)
  createUser(@Args('createUserInput') createUserInput: UsersCreateInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [Users], { name: 'users' })
  findAll(
    @Args('findManyUsersArgs', { type: () => FindManyUsersArgs })
    findManyUsersArgs: FindManyUsersArgs,
  ) {
    return this.usersService.findAll(findManyUsersArgs);
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

  @Mutation(() => Users, { name: 'registerUser' })
  registerUser(
    @Args('registerUserInputs', { type: () => UsersCreateInput })
    { password, phoneNumber, fullName }: UsersCreateInput,
  ) {
    return this.authService.registerUser({
      phoneNumber,
      fullName,
      password,
    });
  }

  @Mutation(() => LoginResponse, { name: 'loginUser' })
  loginUser(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('password', { type: () => String }) password: string,
    @Context() context: any,
  ) {
    return this.authService.loginUser(phoneNumber, password, context.reply);
  }

  @Mutation(() => Boolean, { name: 'confirmPhoneNumber' })
  confirmPhoneNumber(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('otpCode', { type: () => String }) otpCode: string,
  ) {
    return this.authService.confirmPhoneNumber(phoneNumber, otpCode);
  }

  @Mutation(() => Boolean, { name: 'confirmOtpForForgot' })
  confirmOtpForForgot(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('otpCode', { type: () => String }) otpCode: string,
  ) {
    return this.authService.confirmOtpForForgot(phoneNumber, otpCode);
  }

  @Mutation(() => Boolean, { name: 'changePassword' })
  changePassword(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
    @Args('newPassword', { type: () => String }) newPassword: string,
  ) {
    return this.authService.changeUserPassword(phoneNumber, newPassword);
  }

  @Mutation(() => Boolean, { name: 'startForgotPassword' })
  forgotPasswordStart(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
  ) {
    return this.authService.askingForOtpCode(phoneNumber);
  }

  @Mutation(() => Boolean, { name: 'askingForOtpCode' })
  askingForOtpCode(
    @Args('phoneNumber', { type: () => String }) phoneNumber: string,
  ) {
    return this.authService.askingForOtpCode(phoneNumber);
  }

  @Mutation(() => Boolean, { name: 'refreshToken' })
  refreshToken(
    @Args('oldRefreshToken', { type: () => String }) refreshToken: string,
  ) {
    return this.authService.refreshUserRefreshToken(refreshToken);
  }
}
