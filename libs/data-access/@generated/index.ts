import {
  ArgsType,
  Field,
  HideField,
  ID,
  InputType,
  Int,
  ObjectType,
  registerEnumType,
} from '@nestjs/graphql';
import { Type } from 'class-transformer';

export enum UsersScalarFieldEnum {
  userId = 'userId',
  fullName = 'fullName',
  phoneNumber = 'phoneNumber',
  password = 'password',

  refreshToken = 'refreshToken',
  photoUrl = 'photoUrl',
  isPhoneConfirmed = 'isPhoneConfirmed',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum TransactionIsolationLevel {
  ReadUncommitted = 'ReadUncommitted',
  ReadCommitted = 'ReadCommitted',
  RepeatableRead = 'RepeatableRead',
  Serializable = 'Serializable',
}

export enum SortOrder {
  asc = 'asc',
  desc = 'desc',
}

export enum QueryMode {
  'default' = 'default',

  insensitive = 'insensitive',
}

registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(UsersScalarFieldEnum, {
  name: 'UsersScalarFieldEnum',
  description: undefined,
});

@ObjectType()
export class AffectedRows {
  @Field(() => Int, { nullable: false })
  count!: number;
}

@InputType()
export class BoolFieldUpdateOperationsInput {
  @Field(() => Boolean, { nullable: true })
  set?: boolean;
}

@InputType()
export class BoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class BoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class DateTimeFieldUpdateOperationsInput {
  @Field(() => Date, { nullable: true })
  set?: Date | string;
}

@InputType()
export class DateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class DateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedBoolFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedBoolWithAggregatesFilter {
  @Field(() => Boolean, { nullable: true })
  equals?: boolean;
  @Field(() => NestedBoolWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedBoolWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _min?: InstanceType<typeof NestedBoolFilter>;
  @Field(() => NestedBoolFilter, { nullable: true })
  _max?: InstanceType<typeof NestedBoolFilter>;
}

@InputType()
export class NestedDateTimeFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedDateTimeWithAggregatesFilter {
  @Field(() => Date, { nullable: true })
  equals?: Date | string;
  @Field(() => [Date], { nullable: true })
  in?: Array<Date> | Array<string>;
  @Field(() => [Date], { nullable: true })
  notIn?: Array<Date> | Array<string>;
  @Field(() => Date, { nullable: true })
  lt?: Date | string;
  @Field(() => Date, { nullable: true })
  lte?: Date | string;
  @Field(() => Date, { nullable: true })
  gt?: Date | string;
  @Field(() => Date, { nullable: true })
  gte?: Date | string;
  @Field(() => NestedDateTimeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedDateTimeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedDateTimeFilter>;
  @Field(() => NestedDateTimeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedDateTimeFilter>;
}

@InputType()
export class NestedIntFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntFilter>;
}

@InputType()
export class NestedIntNullableFilter {
  @Field(() => Int, { nullable: true })
  equals?: number;
  @Field(() => [Int], { nullable: true })
  in?: Array<number>;
  @Field(() => [Int], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Int, { nullable: true })
  lt?: number;
  @Field(() => Int, { nullable: true })
  lte?: number;
  @Field(() => Int, { nullable: true })
  gt?: number;
  @Field(() => Int, { nullable: true })
  gte?: number;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntNullableFilter>;
}

@InputType()
export class NestedStringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NestedStringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class NestedStringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class NullableStringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFieldUpdateOperationsInput {
  @Field(() => String, { nullable: true })
  set?: string;
}

@InputType()
export class StringFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringFilter>;
}

@InputType()
export class StringNullableFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringNullableWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringNullableWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringNullableWithAggregatesFilter>;
  @Field(() => NestedIntNullableFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringNullableFilter>;
  @Field(() => NestedStringNullableFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringNullableFilter>;
}

@InputType()
export class StringWithAggregatesFilter {
  @Field(() => String, { nullable: true })
  equals?: string;
  @Field(() => [String], { nullable: true })
  in?: Array<string>;
  @Field(() => [String], { nullable: true })
  notIn?: Array<string>;
  @Field(() => String, { nullable: true })
  lt?: string;
  @Field(() => String, { nullable: true })
  lte?: string;
  @Field(() => String, { nullable: true })
  gt?: string;
  @Field(() => String, { nullable: true })
  gte?: string;
  @Field(() => String, { nullable: true })
  contains?: string;
  @Field(() => String, { nullable: true })
  startsWith?: string;
  @Field(() => String, { nullable: true })
  endsWith?: string;
  @Field(() => QueryMode, { nullable: true })
  mode?: keyof typeof QueryMode;
  @Field(() => NestedStringWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedStringWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _min?: InstanceType<typeof NestedStringFilter>;
  @Field(() => NestedStringFilter, { nullable: true })
  _max?: InstanceType<typeof NestedStringFilter>;
}

@ObjectType()
export class AggregateUsers {
  @Field(() => UsersCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregate>;
  @Field(() => UsersMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregate>;
  @Field(() => UsersMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregate>;
}

@ArgsType()
export class CreateManyUsersArgs {
  @Field(() => [UsersCreateManyInput], { nullable: false })
  @Type(() => UsersCreateManyInput)
  data!: Array<UsersCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@ArgsType()
export class CreateOneUsersArgs {
  @Field(() => UsersCreateInput, { nullable: false })
  @Type(() => UsersCreateInput)
  data!: InstanceType<typeof UsersCreateInput>;
}

@ArgsType()
export class DeleteManyUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
}

@ArgsType()
export class DeleteOneUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@ArgsType()
export class FindFirstUsersOrThrowArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@ArgsType()
export class FindFirstUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@ArgsType()
export class FindManyUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [UsersScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof UsersScalarFieldEnum>;
}

@ArgsType()
export class FindUniqueUsersOrThrowArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@ArgsType()
export class FindUniqueUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@ArgsType()
export class UpdateManyUsersArgs {
  @Field(() => UsersUpdateManyMutationInput, { nullable: false })
  @Type(() => UsersUpdateManyMutationInput)
  data!: InstanceType<typeof UsersUpdateManyMutationInput>;
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
}

@ArgsType()
export class UpdateOneUsersArgs {
  @Field(() => UsersUpdateInput, { nullable: false })
  @Type(() => UsersUpdateInput)
  data!: InstanceType<typeof UsersUpdateInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@ArgsType()
export class UpsertOneUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersCreateInput, { nullable: false })
  @Type(() => UsersCreateInput)
  create!: InstanceType<typeof UsersCreateInput>;
  @Field(() => UsersUpdateInput, { nullable: false })
  @Type(() => UsersUpdateInput)
  update!: InstanceType<typeof UsersUpdateInput>;
}

@ArgsType()
export class UsersAggregateArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithRelationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UsersCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregateInput>;
  @Field(() => UsersMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregateInput>;
  @Field(() => UsersMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregateInput>;
}

@InputType()
export class UsersCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  fullName?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  photoUrl?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class UsersCountAggregate {
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  fullName!: number;
  @Field(() => Int, { nullable: false })
  phoneNumber!: number;
  @HideField()
  password!: number;
  @HideField()
  refreshToken!: number;
  @Field(() => Int, { nullable: false })
  photoUrl!: number;
  @Field(() => Int, { nullable: false })
  isPhoneConfirmed!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class UsersCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersCreateManyInput {
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UsersCreateInput {
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@ArgsType()
export class UsersGroupByArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
  @Field(() => [UsersOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<UsersOrderByWithAggregationInput>;
  @Field(() => [UsersScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof UsersScalarFieldEnum>;
  @Field(() => UsersScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof UsersScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => UsersCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregateInput>;
  @Field(() => UsersMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregateInput>;
  @Field(() => UsersMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregateInput>;
}

@ObjectType()
export class UsersGroupBy {
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @HideField()
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Boolean, { nullable: false })
  isPhoneConfirmed!: boolean;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => UsersCountAggregate, { nullable: true })
  _count?: InstanceType<typeof UsersCountAggregate>;
  @Field(() => UsersMinAggregate, { nullable: true })
  _min?: InstanceType<typeof UsersMinAggregate>;
  @Field(() => UsersMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof UsersMaxAggregate>;
}

@InputType()
export class UsersMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  fullName?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  photoUrl?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class UsersMaxAggregate {
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  fullName?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @HideField()
  password?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  photoUrl?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UsersMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  fullName?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  photoUrl?: true;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class UsersMinAggregate {
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  fullName?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @HideField()
  password?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  photoUrl?: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UsersMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => UsersCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof UsersCountOrderByAggregateInput>;
  @Field(() => UsersMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof UsersMaxOrderByAggregateInput>;
  @Field(() => UsersMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof UsersMinOrderByAggregateInput>;
}

@InputType()
export class UsersOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPhoneConfirmed?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class UsersScalarWhereWithAggregatesInput {
  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<UsersScalarWhereWithAggregatesInput>;
  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<UsersScalarWhereWithAggregatesInput>;
  @Field(() => [UsersScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<UsersScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fullName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  photoUrl?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class UsersUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Boolean, { nullable: true })
  isPhoneConfirmed?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class UsersUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class UsersWhereUniqueInput {
  @Field(() => String, { nullable: true })
  userId?: string;
}

@InputType()
export class UsersWhereInput {
  @Field(() => [UsersWhereInput], { nullable: true })
  AND?: Array<UsersWhereInput>;
  @Field(() => [UsersWhereInput], { nullable: true })
  OR?: Array<UsersWhereInput>;
  @Field(() => [UsersWhereInput], { nullable: true })
  NOT?: Array<UsersWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fullName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  photoUrl?: InstanceType<typeof StringFilter>;
  @Field(() => BoolFilter, { nullable: true })
  isPhoneConfirmed?: InstanceType<typeof BoolFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Users {
  @Field(() => ID, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @HideField()
  password!: string;
  @HideField()
  refreshToken!: string | null;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Boolean, { nullable: false, defaultValue: false })
  isPhoneConfirmed!: boolean;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}
