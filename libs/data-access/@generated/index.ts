import {
  Field,
  Float,
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
  role = 'role',
}

export enum TransportLineScalarFieldEnum {
  transportLineId = 'transportLineId',
  townDepart = 'townDepart',
  townArrival = 'townArrival',
  distance = 'distance',
  price = 'price',
}

export enum TownScalarFieldEnum {
  townId = 'townId',
  townName = 'townName',
  provice = 'provice',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum ScheduleScalarFieldEnum {
  scheduleId = 'scheduleId',
  transportLineId = 'transportLineId',
  hourDepart = 'hourDepart',
  hourArrival = 'hourArrival',
  hourEmbarquing = 'hourEmbarquing',
  isPaid = 'isPaid',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum ReservationScalarFieldEnum {
  reservationId = 'reservationId',
  userId = 'userId',
  scheduleId = 'scheduleId',
  dateOfReservation = 'dateOfReservation',
  rowNumber = 'rowNumber',
  columnNumber = 'columnNumber',
  placeNumber = 'placeNumber',
  totalPrice = 'totalPrice',
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

export enum Role {
  SuperAdmin = 'SuperAdmin',
  User = 'User',
  Admin = 'Admin',
}

export enum QueryMode {
  'default' = 'default',
  insensitive = 'insensitive',
}

export enum PaymentMode {
  AirtelMoney = 'AirtelMoney',
  Mpesa = 'Mpesa',
  OrangeMoney = 'OrangeMoney',
  AfricelMoney = 'AfricelMoney',
}

export enum PaymentScalarFieldEnum {
  paymentId = 'paymentId',
  reservationId = 'reservationId',
  datePayment = 'datePayment',
  amount = 'amount',
  isPaid = 'isPaid',
  paymentMode = 'paymentMode',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum BusTypeScalarFieldEnum {
  busTypeId = 'busTypeId',
  typeName = 'typeName',
  capacity = 'capacity',
  numberRow = 'numberRow',
  columnRow = 'columnRow',
  lastRowPlaces = 'lastRowPlaces',
  withToilet = 'withToilet',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum BusScalarFieldEnum {
  busId = 'busId',
  busName = 'busName',
  busTypeId = 'busTypeId',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
}

export enum AdminScalarFieldEnum {
  adminId = 'adminId',
  fullName = 'fullName',
  phoneNumber = 'phoneNumber',
  username = 'username',
  password = 'password',
  refreshToken = 'refreshToken',
  photoUrl = 'photoUrl',
  createdAt = 'createdAt',
  updatedAt = 'updatedAt',
  role = 'role',
}

registerEnumType(AdminScalarFieldEnum, {
  name: 'AdminScalarFieldEnum',
  description: undefined,
});
registerEnumType(BusScalarFieldEnum, {
  name: 'BusScalarFieldEnum',
  description: undefined,
});
registerEnumType(BusTypeScalarFieldEnum, {
  name: 'BusTypeScalarFieldEnum',
  description: undefined,
});
registerEnumType(PaymentScalarFieldEnum, {
  name: 'PaymentScalarFieldEnum',
  description: undefined,
});
registerEnumType(PaymentMode, { name: 'PaymentMode', description: undefined });
registerEnumType(QueryMode, { name: 'QueryMode', description: undefined });
registerEnumType(Role, { name: 'Role', description: undefined });
registerEnumType(SortOrder, { name: 'SortOrder', description: undefined });
registerEnumType(TransactionIsolationLevel, {
  name: 'TransactionIsolationLevel',
  description: undefined,
});
registerEnumType(ReservationScalarFieldEnum, {
  name: 'ReservationScalarFieldEnum',
  description: undefined,
});
registerEnumType(ScheduleScalarFieldEnum, {
  name: 'ScheduleScalarFieldEnum',
  description: undefined,
});
registerEnumType(TownScalarFieldEnum, {
  name: 'TownScalarFieldEnum',
  description: undefined,
});
registerEnumType(TransportLineScalarFieldEnum, {
  name: 'TransportLineScalarFieldEnum',
  description: undefined,
});
registerEnumType(UsersScalarFieldEnum, {
  name: 'UsersScalarFieldEnum',
  description: undefined,
});

@InputType()
export class AdminAggregateArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: InstanceType<typeof AdminWhereInput>;
  @Field(() => [AdminOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdminOrderByWithRelationInput>;
  @Field(() => AdminWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdminWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AdminCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AdminCountAggregateInput>;
  @Field(() => AdminMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AdminMinAggregateInput>;
  @Field(() => AdminMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AdminMaxAggregateInput>;
}

@InputType()
export class AdminCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  adminId?: true;
  @Field(() => Boolean, { nullable: true })
  fullName?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  photoUrl?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class AdminCountAggregate {
  @Field(() => Int, { nullable: false })
  adminId!: number;
  @Field(() => Int, { nullable: false })
  fullName!: number;
  @Field(() => Int, { nullable: false })
  phoneNumber!: number;
  @Field(() => Int, { nullable: false })
  username!: number;
  @HideField()
  password!: number;
  @HideField()
  refreshToken!: number;
  @Field(() => Int, { nullable: false })
  photoUrl!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  role!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class AdminCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  adminId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AdminCreateManyInput {
  @Field(() => String, { nullable: true })
  adminId?: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AdminCreateInput {
  @Field(() => String, { nullable: true })
  adminId?: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AdminGroupByArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: InstanceType<typeof AdminWhereInput>;
  @Field(() => [AdminOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<AdminOrderByWithAggregationInput>;
  @Field(() => [AdminScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof AdminScalarFieldEnum>;
  @Field(() => AdminScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof AdminScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => AdminCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AdminCountAggregateInput>;
  @Field(() => AdminMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AdminMinAggregateInput>;
  @Field(() => AdminMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AdminMaxAggregateInput>;
}

@ObjectType()
export class AdminGroupBy {
  @Field(() => String, { nullable: false })
  adminId!: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @HideField()
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => Role, { nullable: false })
  role!: keyof typeof Role;
  @Field(() => AdminCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AdminCountAggregate>;
  @Field(() => AdminMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AdminMinAggregate>;
  @Field(() => AdminMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AdminMaxAggregate>;
}

@InputType()
export class AdminMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  adminId?: true;
  @Field(() => Boolean, { nullable: true })
  fullName?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  photoUrl?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
}

@ObjectType()
export class AdminMaxAggregate {
  @Field(() => String, { nullable: true })
  adminId?: string;
  @Field(() => String, { nullable: true })
  fullName?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @HideField()
  password?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  photoUrl?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AdminMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  adminId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AdminMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  adminId?: true;
  @Field(() => Boolean, { nullable: true })
  fullName?: true;
  @Field(() => Boolean, { nullable: true })
  phoneNumber?: true;
  @Field(() => Boolean, { nullable: true })
  username?: true;
  @Field(() => Boolean, { nullable: true })
  password?: true;
  @HideField()
  refreshToken?: true;
  @Field(() => Boolean, { nullable: true })
  photoUrl?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  role?: true;
}

@ObjectType()
export class AdminMinAggregate {
  @Field(() => String, { nullable: true })
  adminId?: string;
  @Field(() => String, { nullable: true })
  fullName?: string;
  @Field(() => String, { nullable: true })
  phoneNumber?: string;
  @Field(() => String, { nullable: true })
  username?: string;
  @HideField()
  password?: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: true })
  photoUrl?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AdminMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  adminId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AdminOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  adminId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => AdminCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof AdminCountOrderByAggregateInput>;
  @Field(() => AdminMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof AdminMaxOrderByAggregateInput>;
  @Field(() => AdminMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof AdminMinOrderByAggregateInput>;
}

@InputType()
export class AdminOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  adminId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  fullName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  phoneNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  username?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  password?: keyof typeof SortOrder;
  @HideField()
  refreshToken?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  photoUrl?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@InputType()
export class AdminScalarWhereWithAggregatesInput {
  @Field(() => [AdminScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<AdminScalarWhereWithAggregatesInput>;
  @Field(() => [AdminScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<AdminScalarWhereWithAggregatesInput>;
  @Field(() => [AdminScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<AdminScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  adminId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  fullName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  username?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  password?: InstanceType<typeof StringWithAggregatesFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  photoUrl?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
}

@InputType()
export class AdminUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  adminId?: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @Field(() => String, { nullable: false })
  password!: string;
  @HideField()
  refreshToken?: string;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class AdminUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adminId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AdminUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adminId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AdminUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adminId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AdminUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  adminId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  fullName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  username?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  password?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @HideField()
  refreshToken?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  photoUrl?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class AdminWhereUniqueInput {
  @Field(() => String, { nullable: true })
  adminId?: string;
}

@InputType()
export class AdminWhereInput {
  @Field(() => [AdminWhereInput], { nullable: true })
  AND?: Array<AdminWhereInput>;
  @Field(() => [AdminWhereInput], { nullable: true })
  OR?: Array<AdminWhereInput>;
  @Field(() => [AdminWhereInput], { nullable: true })
  NOT?: Array<AdminWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  adminId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  fullName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  phoneNumber?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  username?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  password?: InstanceType<typeof StringFilter>;
  @HideField()
  refreshToken?: InstanceType<typeof StringNullableFilter>;
  @Field(() => StringFilter, { nullable: true })
  photoUrl?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => EnumRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleFilter>;
}

@ObjectType()
export class Admin {
  @Field(() => ID, { nullable: false })
  adminId!: string;
  @Field(() => String, { nullable: false })
  fullName!: string;
  @Field(() => String, { nullable: false })
  phoneNumber!: string;
  @Field(() => String, { nullable: false })
  username!: string;
  @HideField()
  password!: string;
  @HideField()
  refreshToken!: string | null;
  @Field(() => String, { nullable: false })
  photoUrl!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Role, { nullable: false, defaultValue: 'Admin' })
  role!: keyof typeof Role;
}

@ObjectType()
export class AggregateAdmin {
  @Field(() => AdminCountAggregate, { nullable: true })
  _count?: InstanceType<typeof AdminCountAggregate>;
  @Field(() => AdminMinAggregate, { nullable: true })
  _min?: InstanceType<typeof AdminMinAggregate>;
  @Field(() => AdminMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof AdminMaxAggregate>;
}

@InputType()
export class CreateManyAdminArgs {
  @Field(() => [AdminCreateManyInput], { nullable: false })
  @Type(() => AdminCreateManyInput)
  data!: Array<AdminCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneAdminArgs {
  @Field(() => AdminCreateInput, { nullable: false })
  @Type(() => AdminCreateInput)
  data!: InstanceType<typeof AdminCreateInput>;
}

@InputType()
export class DeleteManyAdminArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: InstanceType<typeof AdminWhereInput>;
}

@InputType()
export class DeleteOneAdminArgs {
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  @Type(() => AdminWhereUniqueInput)
  where!: InstanceType<typeof AdminWhereUniqueInput>;
}

@InputType()
export class FindFirstAdminOrThrowArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: InstanceType<typeof AdminWhereInput>;
  @Field(() => [AdminOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdminOrderByWithRelationInput>;
  @Field(() => AdminWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdminWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AdminScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AdminScalarFieldEnum>;
}

@InputType()
export class FindFirstAdminArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: InstanceType<typeof AdminWhereInput>;
  @Field(() => [AdminOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdminOrderByWithRelationInput>;
  @Field(() => AdminWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdminWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AdminScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AdminScalarFieldEnum>;
}

@InputType()
export class FindManyAdminArgs {
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: InstanceType<typeof AdminWhereInput>;
  @Field(() => [AdminOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<AdminOrderByWithRelationInput>;
  @Field(() => AdminWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof AdminWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [AdminScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof AdminScalarFieldEnum>;
}

@InputType()
export class FindUniqueAdminOrThrowArgs {
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  @Type(() => AdminWhereUniqueInput)
  where!: InstanceType<typeof AdminWhereUniqueInput>;
}

@InputType()
export class FindUniqueAdminArgs {
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  @Type(() => AdminWhereUniqueInput)
  where!: InstanceType<typeof AdminWhereUniqueInput>;
}

@InputType()
export class UpdateManyAdminArgs {
  @Field(() => AdminUpdateManyMutationInput, { nullable: false })
  @Type(() => AdminUpdateManyMutationInput)
  data!: InstanceType<typeof AdminUpdateManyMutationInput>;
  @Field(() => AdminWhereInput, { nullable: true })
  @Type(() => AdminWhereInput)
  where?: InstanceType<typeof AdminWhereInput>;
}

@InputType()
export class UpdateOneAdminArgs {
  @Field(() => AdminUpdateInput, { nullable: false })
  @Type(() => AdminUpdateInput)
  data!: InstanceType<typeof AdminUpdateInput>;
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  @Type(() => AdminWhereUniqueInput)
  where!: InstanceType<typeof AdminWhereUniqueInput>;
}

@InputType()
export class UpsertOneAdminArgs {
  @Field(() => AdminWhereUniqueInput, { nullable: false })
  @Type(() => AdminWhereUniqueInput)
  where!: InstanceType<typeof AdminWhereUniqueInput>;
  @Field(() => AdminCreateInput, { nullable: false })
  @Type(() => AdminCreateInput)
  create!: InstanceType<typeof AdminCreateInput>;
  @Field(() => AdminUpdateInput, { nullable: false })
  @Type(() => AdminUpdateInput)
  update!: InstanceType<typeof AdminUpdateInput>;
}

@ObjectType()
export class AggregateBus {
  @Field(() => BusCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BusCountAggregate>;
  @Field(() => BusMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BusMinAggregate>;
  @Field(() => BusMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BusMaxAggregate>;
}

@InputType()
export class BusAggregateArgs {
  @Field(() => BusWhereInput, { nullable: true })
  @Type(() => BusWhereInput)
  where?: InstanceType<typeof BusWhereInput>;
  @Field(() => [BusOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusOrderByWithRelationInput>;
  @Field(() => BusWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BusCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BusCountAggregateInput>;
  @Field(() => BusMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BusMinAggregateInput>;
  @Field(() => BusMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BusMaxAggregateInput>;
}

@InputType()
export class BusCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  busId?: true;
  @Field(() => Boolean, { nullable: true })
  busName?: true;
  @Field(() => Boolean, { nullable: true })
  busTypeId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class BusCountAggregate {
  @Field(() => Int, { nullable: false })
  busId!: number;
  @Field(() => Int, { nullable: false })
  busName!: number;
  @Field(() => Int, { nullable: false })
  busTypeId!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class BusCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  busId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BusCreateManyBusTypeInputEnvelope {
  @Field(() => [BusCreateManyBusTypeInput], { nullable: false })
  @Type(() => BusCreateManyBusTypeInput)
  data!: Array<BusCreateManyBusTypeInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class BusCreateManyBusTypeInput {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusCreateManyInput {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusCreateNestedManyWithoutBusTypeInput {
  @Field(() => [BusCreateWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateWithoutBusTypeInput)
  create?: Array<BusCreateWithoutBusTypeInput>;
  @Field(() => [BusCreateOrConnectWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateOrConnectWithoutBusTypeInput)
  connectOrCreate?: Array<BusCreateOrConnectWithoutBusTypeInput>;
  @Field(() => BusCreateManyBusTypeInputEnvelope, { nullable: true })
  @Type(() => BusCreateManyBusTypeInputEnvelope)
  createMany?: InstanceType<typeof BusCreateManyBusTypeInputEnvelope>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  connect?: Array<BusWhereUniqueInput>;
}

@InputType()
export class BusCreateOrConnectWithoutBusTypeInput {
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => BusCreateWithoutBusTypeInput, { nullable: false })
  @Type(() => BusCreateWithoutBusTypeInput)
  create!: InstanceType<typeof BusCreateWithoutBusTypeInput>;
}

@InputType()
export class BusCreateWithoutBusTypeInput {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusCreateInput {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => BusTypeCreateNestedOneWithoutBusInput, { nullable: true })
  busType?: InstanceType<typeof BusTypeCreateNestedOneWithoutBusInput>;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusGroupByArgs {
  @Field(() => BusWhereInput, { nullable: true })
  @Type(() => BusWhereInput)
  where?: InstanceType<typeof BusWhereInput>;
  @Field(() => [BusOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BusOrderByWithAggregationInput>;
  @Field(() => [BusScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BusScalarFieldEnum>;
  @Field(() => BusScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof BusScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BusCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BusCountAggregateInput>;
  @Field(() => BusMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BusMinAggregateInput>;
  @Field(() => BusMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BusMaxAggregateInput>;
}

@ObjectType()
export class BusGroupBy {
  @Field(() => String, { nullable: false })
  busId!: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => BusCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BusCountAggregate>;
  @Field(() => BusMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BusMinAggregate>;
  @Field(() => BusMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BusMaxAggregate>;
}

@InputType()
export class BusListRelationFilter {
  @Field(() => BusWhereInput, { nullable: true })
  every?: InstanceType<typeof BusWhereInput>;
  @Field(() => BusWhereInput, { nullable: true })
  some?: InstanceType<typeof BusWhereInput>;
  @Field(() => BusWhereInput, { nullable: true })
  none?: InstanceType<typeof BusWhereInput>;
}

@InputType()
export class BusMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  busId?: true;
  @Field(() => Boolean, { nullable: true })
  busName?: true;
  @Field(() => Boolean, { nullable: true })
  busTypeId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class BusMaxAggregate {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: true })
  busName?: string;
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  busId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BusMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  busId?: true;
  @Field(() => Boolean, { nullable: true })
  busName?: true;
  @Field(() => Boolean, { nullable: true })
  busTypeId?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class BusMinAggregate {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: true })
  busName?: string;
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  busId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BusOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class BusOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  busId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => BusCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BusCountOrderByAggregateInput>;
  @Field(() => BusMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BusMaxOrderByAggregateInput>;
  @Field(() => BusMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BusMinOrderByAggregateInput>;
}

@InputType()
export class BusOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  busId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => BusTypeOrderByWithRelationInput, { nullable: true })
  busType?: InstanceType<typeof BusTypeOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BusScalarWhereWithAggregatesInput {
  @Field(() => [BusScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BusScalarWhereWithAggregatesInput>;
  @Field(() => [BusScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BusScalarWhereWithAggregatesInput>;
  @Field(() => [BusScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BusScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  busId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  busName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringNullableWithAggregatesFilter, { nullable: true })
  busTypeId?: InstanceType<typeof StringNullableWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BusScalarWhereInput {
  @Field(() => [BusScalarWhereInput], { nullable: true })
  AND?: Array<BusScalarWhereInput>;
  @Field(() => [BusScalarWhereInput], { nullable: true })
  OR?: Array<BusScalarWhereInput>;
  @Field(() => [BusScalarWhereInput], { nullable: true })
  NOT?: Array<BusScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  busId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  busName?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  busTypeId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class BusUncheckedCreateNestedManyWithoutBusTypeInput {
  @Field(() => [BusCreateWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateWithoutBusTypeInput)
  create?: Array<BusCreateWithoutBusTypeInput>;
  @Field(() => [BusCreateOrConnectWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateOrConnectWithoutBusTypeInput)
  connectOrCreate?: Array<BusCreateOrConnectWithoutBusTypeInput>;
  @Field(() => BusCreateManyBusTypeInputEnvelope, { nullable: true })
  @Type(() => BusCreateManyBusTypeInputEnvelope)
  createMany?: InstanceType<typeof BusCreateManyBusTypeInputEnvelope>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  connect?: Array<BusWhereUniqueInput>;
}

@InputType()
export class BusUncheckedCreateWithoutBusTypeInput {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusUncheckedUpdateManyWithoutBusTypeNestedInput {
  @Field(() => [BusCreateWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateWithoutBusTypeInput)
  create?: Array<BusCreateWithoutBusTypeInput>;
  @Field(() => [BusCreateOrConnectWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateOrConnectWithoutBusTypeInput)
  connectOrCreate?: Array<BusCreateOrConnectWithoutBusTypeInput>;
  @Field(() => [BusUpsertWithWhereUniqueWithoutBusTypeInput], {
    nullable: true,
  })
  @Type(() => BusUpsertWithWhereUniqueWithoutBusTypeInput)
  upsert?: Array<BusUpsertWithWhereUniqueWithoutBusTypeInput>;
  @Field(() => BusCreateManyBusTypeInputEnvelope, { nullable: true })
  @Type(() => BusCreateManyBusTypeInputEnvelope)
  createMany?: InstanceType<typeof BusCreateManyBusTypeInputEnvelope>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  set?: Array<BusWhereUniqueInput>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  disconnect?: Array<BusWhereUniqueInput>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  delete?: Array<BusWhereUniqueInput>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  connect?: Array<BusWhereUniqueInput>;
  @Field(() => [BusUpdateWithWhereUniqueWithoutBusTypeInput], {
    nullable: true,
  })
  @Type(() => BusUpdateWithWhereUniqueWithoutBusTypeInput)
  update?: Array<BusUpdateWithWhereUniqueWithoutBusTypeInput>;
  @Field(() => [BusUpdateManyWithWhereWithoutBusTypeInput], { nullable: true })
  @Type(() => BusUpdateManyWithWhereWithoutBusTypeInput)
  updateMany?: Array<BusUpdateManyWithWhereWithoutBusTypeInput>;
  @Field(() => [BusScalarWhereInput], { nullable: true })
  @Type(() => BusScalarWhereInput)
  deleteMany?: Array<BusScalarWhereInput>;
}

@InputType()
export class BusUncheckedUpdateManyWithoutBusInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusUncheckedUpdateWithoutBusTypeInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => NullableStringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof NullableStringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusUpdateManyWithWhereWithoutBusTypeInput {
  @Field(() => BusScalarWhereInput, { nullable: false })
  @Type(() => BusScalarWhereInput)
  where!: InstanceType<typeof BusScalarWhereInput>;
  @Field(() => BusUpdateManyMutationInput, { nullable: false })
  @Type(() => BusUpdateManyMutationInput)
  data!: InstanceType<typeof BusUpdateManyMutationInput>;
}

@InputType()
export class BusUpdateManyWithoutBusTypeNestedInput {
  @Field(() => [BusCreateWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateWithoutBusTypeInput)
  create?: Array<BusCreateWithoutBusTypeInput>;
  @Field(() => [BusCreateOrConnectWithoutBusTypeInput], { nullable: true })
  @Type(() => BusCreateOrConnectWithoutBusTypeInput)
  connectOrCreate?: Array<BusCreateOrConnectWithoutBusTypeInput>;
  @Field(() => [BusUpsertWithWhereUniqueWithoutBusTypeInput], {
    nullable: true,
  })
  @Type(() => BusUpsertWithWhereUniqueWithoutBusTypeInput)
  upsert?: Array<BusUpsertWithWhereUniqueWithoutBusTypeInput>;
  @Field(() => BusCreateManyBusTypeInputEnvelope, { nullable: true })
  @Type(() => BusCreateManyBusTypeInputEnvelope)
  createMany?: InstanceType<typeof BusCreateManyBusTypeInputEnvelope>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  set?: Array<BusWhereUniqueInput>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  disconnect?: Array<BusWhereUniqueInput>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  delete?: Array<BusWhereUniqueInput>;
  @Field(() => [BusWhereUniqueInput], { nullable: true })
  @Type(() => BusWhereUniqueInput)
  connect?: Array<BusWhereUniqueInput>;
  @Field(() => [BusUpdateWithWhereUniqueWithoutBusTypeInput], {
    nullable: true,
  })
  @Type(() => BusUpdateWithWhereUniqueWithoutBusTypeInput)
  update?: Array<BusUpdateWithWhereUniqueWithoutBusTypeInput>;
  @Field(() => [BusUpdateManyWithWhereWithoutBusTypeInput], { nullable: true })
  @Type(() => BusUpdateManyWithWhereWithoutBusTypeInput)
  updateMany?: Array<BusUpdateManyWithWhereWithoutBusTypeInput>;
  @Field(() => [BusScalarWhereInput], { nullable: true })
  @Type(() => BusScalarWhereInput)
  deleteMany?: Array<BusScalarWhereInput>;
}

@InputType()
export class BusUpdateWithWhereUniqueWithoutBusTypeInput {
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => BusUpdateWithoutBusTypeInput, { nullable: false })
  @Type(() => BusUpdateWithoutBusTypeInput)
  data!: InstanceType<typeof BusUpdateWithoutBusTypeInput>;
}

@InputType()
export class BusUpdateWithoutBusTypeInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => BusTypeUpdateOneWithoutBusNestedInput, { nullable: true })
  busType?: InstanceType<typeof BusTypeUpdateOneWithoutBusNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusUpsertWithWhereUniqueWithoutBusTypeInput {
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => BusUpdateWithoutBusTypeInput, { nullable: false })
  @Type(() => BusUpdateWithoutBusTypeInput)
  update!: InstanceType<typeof BusUpdateWithoutBusTypeInput>;
  @Field(() => BusCreateWithoutBusTypeInput, { nullable: false })
  @Type(() => BusCreateWithoutBusTypeInput)
  create!: InstanceType<typeof BusCreateWithoutBusTypeInput>;
}

@InputType()
export class BusWhereUniqueInput {
  @Field(() => String, { nullable: true })
  busId?: string;
  @Field(() => String, { nullable: true })
  busTypeId?: string;
}

@InputType()
export class BusWhereInput {
  @Field(() => [BusWhereInput], { nullable: true })
  AND?: Array<BusWhereInput>;
  @Field(() => [BusWhereInput], { nullable: true })
  OR?: Array<BusWhereInput>;
  @Field(() => [BusWhereInput], { nullable: true })
  NOT?: Array<BusWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  busId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  busName?: InstanceType<typeof StringFilter>;
  @Field(() => StringNullableFilter, { nullable: true })
  busTypeId?: InstanceType<typeof StringNullableFilter>;
  @Field(() => BusTypeRelationFilter, { nullable: true })
  busType?: InstanceType<typeof BusTypeRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Bus {
  @Field(() => ID, { nullable: false })
  busId!: string;
  @Field(() => String, { nullable: false })
  busName!: string;
  @Field(() => String, { nullable: true })
  busTypeId!: string | null;
  @Field(() => BusType, { nullable: true })
  busType?: InstanceType<typeof BusType> | null;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}

@InputType()
export class CreateManyBusArgs {
  @Field(() => [BusCreateManyInput], { nullable: false })
  @Type(() => BusCreateManyInput)
  data!: Array<BusCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneBusArgs {
  @Field(() => BusCreateInput, { nullable: false })
  @Type(() => BusCreateInput)
  data!: InstanceType<typeof BusCreateInput>;
}

@InputType()
export class DeleteManyBusArgs {
  @Field(() => BusWhereInput, { nullable: true })
  @Type(() => BusWhereInput)
  where?: InstanceType<typeof BusWhereInput>;
}

@InputType()
export class DeleteOneBusArgs {
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
}

@InputType()
export class FindFirstBusOrThrowArgs {
  @Field(() => BusWhereInput, { nullable: true })
  @Type(() => BusWhereInput)
  where?: InstanceType<typeof BusWhereInput>;
  @Field(() => [BusOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusOrderByWithRelationInput>;
  @Field(() => BusWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BusScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BusScalarFieldEnum>;
}

@InputType()
export class FindFirstBusArgs {
  @Field(() => BusWhereInput, { nullable: true })
  @Type(() => BusWhereInput)
  where?: InstanceType<typeof BusWhereInput>;
  @Field(() => [BusOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusOrderByWithRelationInput>;
  @Field(() => BusWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BusScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BusScalarFieldEnum>;
}

@InputType()
export class FindManyBusArgs {
  @Field(() => BusWhereInput, { nullable: true })
  @Type(() => BusWhereInput)
  where?: InstanceType<typeof BusWhereInput>;
  @Field(() => [BusOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusOrderByWithRelationInput>;
  @Field(() => BusWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BusScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BusScalarFieldEnum>;
}

@InputType()
export class FindUniqueBusOrThrowArgs {
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
}

@InputType()
export class FindUniqueBusArgs {
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
}

@InputType()
export class UpdateManyBusArgs {
  @Field(() => BusUpdateManyMutationInput, { nullable: false })
  @Type(() => BusUpdateManyMutationInput)
  data!: InstanceType<typeof BusUpdateManyMutationInput>;
  @Field(() => BusWhereInput, { nullable: true })
  @Type(() => BusWhereInput)
  where?: InstanceType<typeof BusWhereInput>;
}

@InputType()
export class UpdateOneBusArgs {
  @Field(() => BusUpdateInput, { nullable: false })
  @Type(() => BusUpdateInput)
  data!: InstanceType<typeof BusUpdateInput>;
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
}

@InputType()
export class UpsertOneBusArgs {
  @Field(() => BusWhereUniqueInput, { nullable: false })
  @Type(() => BusWhereUniqueInput)
  where!: InstanceType<typeof BusWhereUniqueInput>;
  @Field(() => BusCreateInput, { nullable: false })
  @Type(() => BusCreateInput)
  create!: InstanceType<typeof BusCreateInput>;
  @Field(() => BusUpdateInput, { nullable: false })
  @Type(() => BusUpdateInput)
  update!: InstanceType<typeof BusUpdateInput>;
}

@ObjectType()
export class AggregateBusType {
  @Field(() => BusTypeCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BusTypeCountAggregate>;
  @Field(() => BusTypeAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof BusTypeAvgAggregate>;
  @Field(() => BusTypeSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof BusTypeSumAggregate>;
  @Field(() => BusTypeMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BusTypeMinAggregate>;
  @Field(() => BusTypeMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BusTypeMaxAggregate>;
}

@InputType()
export class BusTypeAggregateArgs {
  @Field(() => BusTypeWhereInput, { nullable: true })
  @Type(() => BusTypeWhereInput)
  where?: InstanceType<typeof BusTypeWhereInput>;
  @Field(() => [BusTypeOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusTypeOrderByWithRelationInput>;
  @Field(() => BusTypeWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusTypeWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BusTypeCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BusTypeCountAggregateInput>;
  @Field(() => BusTypeAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BusTypeAvgAggregateInput>;
  @Field(() => BusTypeSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BusTypeSumAggregateInput>;
  @Field(() => BusTypeMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BusTypeMinAggregateInput>;
  @Field(() => BusTypeMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BusTypeMaxAggregateInput>;
}

@InputType()
export class BusTypeAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  capacity?: true;
  @Field(() => Boolean, { nullable: true })
  numberRow?: true;
  @Field(() => Boolean, { nullable: true })
  columnRow?: true;
  @Field(() => Boolean, { nullable: true })
  lastRowPlaces?: true;
}

@ObjectType()
export class BusTypeAvgAggregate {
  @Field(() => Float, { nullable: true })
  capacity?: number;
  @Field(() => Float, { nullable: true })
  numberRow?: number;
  @Field(() => Float, { nullable: true })
  columnRow?: number;
  @Field(() => Float, { nullable: true })
  lastRowPlaces?: number;
}

@InputType()
export class BusTypeAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastRowPlaces?: keyof typeof SortOrder;
}

@InputType()
export class BusTypeCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  busTypeId?: true;
  @Field(() => Boolean, { nullable: true })
  typeName?: true;
  @Field(() => Boolean, { nullable: true })
  capacity?: true;
  @Field(() => Boolean, { nullable: true })
  numberRow?: true;
  @Field(() => Boolean, { nullable: true })
  columnRow?: true;
  @Field(() => Boolean, { nullable: true })
  lastRowPlaces?: true;
  @Field(() => Boolean, { nullable: true })
  withToilet?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class BusTypeCountAggregate {
  @Field(() => Int, { nullable: false })
  busTypeId!: number;
  @Field(() => Int, { nullable: false })
  typeName!: number;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Int, { nullable: false })
  withToilet!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class BusTypeCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  typeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastRowPlaces?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  withToilet?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class BusTypeCount {
  @Field(() => Int, { nullable: false })
  Bus?: number;
}

@InputType()
export class BusTypeCreateManyInput {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => String, { nullable: false })
  typeName!: string;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Boolean, { nullable: true })
  withToilet?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusTypeCreateNestedOneWithoutBusInput {
  @Field(() => BusTypeCreateWithoutBusInput, { nullable: true })
  @Type(() => BusTypeCreateWithoutBusInput)
  create?: InstanceType<typeof BusTypeCreateWithoutBusInput>;
  @Field(() => BusTypeCreateOrConnectWithoutBusInput, { nullable: true })
  @Type(() => BusTypeCreateOrConnectWithoutBusInput)
  connectOrCreate?: InstanceType<typeof BusTypeCreateOrConnectWithoutBusInput>;
  @Field(() => BusTypeWhereUniqueInput, { nullable: true })
  @Type(() => BusTypeWhereUniqueInput)
  connect?: InstanceType<typeof BusTypeWhereUniqueInput>;
}

@InputType()
export class BusTypeCreateOrConnectWithoutBusInput {
  @Field(() => BusTypeWhereUniqueInput, { nullable: false })
  @Type(() => BusTypeWhereUniqueInput)
  where!: InstanceType<typeof BusTypeWhereUniqueInput>;
  @Field(() => BusTypeCreateWithoutBusInput, { nullable: false })
  @Type(() => BusTypeCreateWithoutBusInput)
  create!: InstanceType<typeof BusTypeCreateWithoutBusInput>;
}

@InputType()
export class BusTypeCreateWithoutBusInput {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => String, { nullable: false })
  typeName!: string;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Boolean, { nullable: true })
  withToilet?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusTypeCreateInput {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => String, { nullable: false })
  typeName!: string;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Boolean, { nullable: true })
  withToilet?: boolean;
  @Field(() => BusCreateNestedManyWithoutBusTypeInput, { nullable: true })
  Bus?: InstanceType<typeof BusCreateNestedManyWithoutBusTypeInput>;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusTypeGroupByArgs {
  @Field(() => BusTypeWhereInput, { nullable: true })
  @Type(() => BusTypeWhereInput)
  where?: InstanceType<typeof BusTypeWhereInput>;
  @Field(() => [BusTypeOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<BusTypeOrderByWithAggregationInput>;
  @Field(() => [BusTypeScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof BusTypeScalarFieldEnum>;
  @Field(() => BusTypeScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof BusTypeScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => BusTypeCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BusTypeCountAggregateInput>;
  @Field(() => BusTypeAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BusTypeAvgAggregateInput>;
  @Field(() => BusTypeSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BusTypeSumAggregateInput>;
  @Field(() => BusTypeMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BusTypeMinAggregateInput>;
  @Field(() => BusTypeMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BusTypeMaxAggregateInput>;
}

@ObjectType()
export class BusTypeGroupBy {
  @Field(() => String, { nullable: false })
  busTypeId!: string;
  @Field(() => String, { nullable: false })
  typeName!: string;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Boolean, { nullable: false })
  withToilet!: boolean;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => BusTypeCountAggregate, { nullable: true })
  _count?: InstanceType<typeof BusTypeCountAggregate>;
  @Field(() => BusTypeAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof BusTypeAvgAggregate>;
  @Field(() => BusTypeSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof BusTypeSumAggregate>;
  @Field(() => BusTypeMinAggregate, { nullable: true })
  _min?: InstanceType<typeof BusTypeMinAggregate>;
  @Field(() => BusTypeMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof BusTypeMaxAggregate>;
}

@InputType()
export class BusTypeMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  busTypeId?: true;
  @Field(() => Boolean, { nullable: true })
  typeName?: true;
  @Field(() => Boolean, { nullable: true })
  capacity?: true;
  @Field(() => Boolean, { nullable: true })
  numberRow?: true;
  @Field(() => Boolean, { nullable: true })
  columnRow?: true;
  @Field(() => Boolean, { nullable: true })
  lastRowPlaces?: true;
  @Field(() => Boolean, { nullable: true })
  withToilet?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class BusTypeMaxAggregate {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => String, { nullable: true })
  typeName?: string;
  @Field(() => Int, { nullable: true })
  capacity?: number;
  @Field(() => Int, { nullable: true })
  numberRow?: number;
  @Field(() => Int, { nullable: true })
  columnRow?: number;
  @Field(() => Int, { nullable: true })
  lastRowPlaces?: number;
  @Field(() => Boolean, { nullable: true })
  withToilet?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusTypeMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  typeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastRowPlaces?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  withToilet?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BusTypeMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  busTypeId?: true;
  @Field(() => Boolean, { nullable: true })
  typeName?: true;
  @Field(() => Boolean, { nullable: true })
  capacity?: true;
  @Field(() => Boolean, { nullable: true })
  numberRow?: true;
  @Field(() => Boolean, { nullable: true })
  columnRow?: true;
  @Field(() => Boolean, { nullable: true })
  lastRowPlaces?: true;
  @Field(() => Boolean, { nullable: true })
  withToilet?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class BusTypeMinAggregate {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => String, { nullable: true })
  typeName?: string;
  @Field(() => Int, { nullable: true })
  capacity?: number;
  @Field(() => Int, { nullable: true })
  numberRow?: number;
  @Field(() => Int, { nullable: true })
  columnRow?: number;
  @Field(() => Int, { nullable: true })
  lastRowPlaces?: number;
  @Field(() => Boolean, { nullable: true })
  withToilet?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusTypeMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  typeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastRowPlaces?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  withToilet?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BusTypeOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  typeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastRowPlaces?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  withToilet?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => BusTypeCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof BusTypeCountOrderByAggregateInput>;
  @Field(() => BusTypeAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof BusTypeAvgOrderByAggregateInput>;
  @Field(() => BusTypeMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof BusTypeMaxOrderByAggregateInput>;
  @Field(() => BusTypeMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof BusTypeMinOrderByAggregateInput>;
  @Field(() => BusTypeSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof BusTypeSumOrderByAggregateInput>;
}

@InputType()
export class BusTypeOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  busTypeId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  typeName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastRowPlaces?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  withToilet?: keyof typeof SortOrder;
  @Field(() => BusOrderByRelationAggregateInput, { nullable: true })
  Bus?: InstanceType<typeof BusOrderByRelationAggregateInput>;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class BusTypeRelationFilter {
  @Field(() => BusTypeWhereInput, { nullable: true })
  is?: InstanceType<typeof BusTypeWhereInput>;
  @Field(() => BusTypeWhereInput, { nullable: true })
  isNot?: InstanceType<typeof BusTypeWhereInput>;
}

@InputType()
export class BusTypeScalarWhereWithAggregatesInput {
  @Field(() => [BusTypeScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<BusTypeScalarWhereWithAggregatesInput>;
  @Field(() => [BusTypeScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<BusTypeScalarWhereWithAggregatesInput>;
  @Field(() => [BusTypeScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<BusTypeScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  busTypeId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  typeName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  capacity?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  numberRow?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  columnRow?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  withToilet?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class BusTypeSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  capacity?: true;
  @Field(() => Boolean, { nullable: true })
  numberRow?: true;
  @Field(() => Boolean, { nullable: true })
  columnRow?: true;
  @Field(() => Boolean, { nullable: true })
  lastRowPlaces?: true;
}

@ObjectType()
export class BusTypeSumAggregate {
  @Field(() => Int, { nullable: true })
  capacity?: number;
  @Field(() => Int, { nullable: true })
  numberRow?: number;
  @Field(() => Int, { nullable: true })
  columnRow?: number;
  @Field(() => Int, { nullable: true })
  lastRowPlaces?: number;
}

@InputType()
export class BusTypeSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  capacity?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  numberRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnRow?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  lastRowPlaces?: keyof typeof SortOrder;
}

@InputType()
export class BusTypeUncheckedCreateWithoutBusInput {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => String, { nullable: false })
  typeName!: string;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Boolean, { nullable: true })
  withToilet?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusTypeUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
  @Field(() => String, { nullable: false })
  typeName!: string;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Boolean, { nullable: true })
  withToilet?: boolean;
  @Field(() => BusUncheckedCreateNestedManyWithoutBusTypeInput, {
    nullable: true,
  })
  Bus?: InstanceType<typeof BusUncheckedCreateNestedManyWithoutBusTypeInput>;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class BusTypeUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  typeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  capacity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  withToilet?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusTypeUncheckedUpdateWithoutBusInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  typeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  capacity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  withToilet?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusTypeUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  typeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  capacity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  withToilet?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => BusUncheckedUpdateManyWithoutBusTypeNestedInput, {
    nullable: true,
  })
  Bus?: InstanceType<typeof BusUncheckedUpdateManyWithoutBusTypeNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusTypeUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  typeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  capacity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  withToilet?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusTypeUpdateOneWithoutBusNestedInput {
  @Field(() => BusTypeCreateWithoutBusInput, { nullable: true })
  @Type(() => BusTypeCreateWithoutBusInput)
  create?: InstanceType<typeof BusTypeCreateWithoutBusInput>;
  @Field(() => BusTypeCreateOrConnectWithoutBusInput, { nullable: true })
  @Type(() => BusTypeCreateOrConnectWithoutBusInput)
  connectOrCreate?: InstanceType<typeof BusTypeCreateOrConnectWithoutBusInput>;
  @Field(() => BusTypeUpsertWithoutBusInput, { nullable: true })
  @Type(() => BusTypeUpsertWithoutBusInput)
  upsert?: InstanceType<typeof BusTypeUpsertWithoutBusInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => BusTypeWhereUniqueInput, { nullable: true })
  @Type(() => BusTypeWhereUniqueInput)
  connect?: InstanceType<typeof BusTypeWhereUniqueInput>;
  @Field(() => BusTypeUpdateWithoutBusInput, { nullable: true })
  @Type(() => BusTypeUpdateWithoutBusInput)
  update?: InstanceType<typeof BusTypeUpdateWithoutBusInput>;
}

@InputType()
export class BusTypeUpdateWithoutBusInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  typeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  capacity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  withToilet?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusTypeUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  busTypeId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  typeName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  capacity?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  numberRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnRow?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  withToilet?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => BusUpdateManyWithoutBusTypeNestedInput, { nullable: true })
  Bus?: InstanceType<typeof BusUpdateManyWithoutBusTypeNestedInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class BusTypeUpsertWithoutBusInput {
  @Field(() => BusTypeUpdateWithoutBusInput, { nullable: false })
  @Type(() => BusTypeUpdateWithoutBusInput)
  update!: InstanceType<typeof BusTypeUpdateWithoutBusInput>;
  @Field(() => BusTypeCreateWithoutBusInput, { nullable: false })
  @Type(() => BusTypeCreateWithoutBusInput)
  create!: InstanceType<typeof BusTypeCreateWithoutBusInput>;
}

@InputType()
export class BusTypeWhereUniqueInput {
  @Field(() => String, { nullable: true })
  busTypeId?: string;
}

@InputType()
export class BusTypeWhereInput {
  @Field(() => [BusTypeWhereInput], { nullable: true })
  AND?: Array<BusTypeWhereInput>;
  @Field(() => [BusTypeWhereInput], { nullable: true })
  OR?: Array<BusTypeWhereInput>;
  @Field(() => [BusTypeWhereInput], { nullable: true })
  NOT?: Array<BusTypeWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  busTypeId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  typeName?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  capacity?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  numberRow?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  columnRow?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  lastRowPlaces?: InstanceType<typeof IntFilter>;
  @Field(() => BoolFilter, { nullable: true })
  withToilet?: InstanceType<typeof BoolFilter>;
  @Field(() => BusListRelationFilter, { nullable: true })
  Bus?: InstanceType<typeof BusListRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class BusType {
  @Field(() => ID, { nullable: false })
  busTypeId!: string;
  @Field(() => String, { nullable: false })
  typeName!: string;
  @Field(() => Int, { nullable: false })
  capacity!: number;
  @Field(() => Int, { nullable: false })
  numberRow!: number;
  @Field(() => Int, { nullable: false })
  columnRow!: number;
  @Field(() => Int, { nullable: false })
  lastRowPlaces!: number;
  @Field(() => Boolean, { nullable: false, defaultValue: false })
  withToilet!: boolean;
  @Field(() => [Bus], { nullable: true })
  Bus?: Array<Bus>;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => BusTypeCount, { nullable: false })
  _count?: InstanceType<typeof BusTypeCount>;
}

@InputType()
export class CreateManyBusTypeArgs {
  @Field(() => [BusTypeCreateManyInput], { nullable: false })
  @Type(() => BusTypeCreateManyInput)
  data!: Array<BusTypeCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneBusTypeArgs {
  @Field(() => BusTypeCreateInput, { nullable: false })
  @Type(() => BusTypeCreateInput)
  data!: InstanceType<typeof BusTypeCreateInput>;
}

@InputType()
export class DeleteManyBusTypeArgs {
  @Field(() => BusTypeWhereInput, { nullable: true })
  @Type(() => BusTypeWhereInput)
  where?: InstanceType<typeof BusTypeWhereInput>;
}

@InputType()
export class DeleteOneBusTypeArgs {
  @Field(() => BusTypeWhereUniqueInput, { nullable: false })
  @Type(() => BusTypeWhereUniqueInput)
  where!: InstanceType<typeof BusTypeWhereUniqueInput>;
}

@InputType()
export class FindFirstBusTypeOrThrowArgs {
  @Field(() => BusTypeWhereInput, { nullable: true })
  @Type(() => BusTypeWhereInput)
  where?: InstanceType<typeof BusTypeWhereInput>;
  @Field(() => [BusTypeOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusTypeOrderByWithRelationInput>;
  @Field(() => BusTypeWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusTypeWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BusTypeScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BusTypeScalarFieldEnum>;
}

@InputType()
export class FindFirstBusTypeArgs {
  @Field(() => BusTypeWhereInput, { nullable: true })
  @Type(() => BusTypeWhereInput)
  where?: InstanceType<typeof BusTypeWhereInput>;
  @Field(() => [BusTypeOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusTypeOrderByWithRelationInput>;
  @Field(() => BusTypeWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusTypeWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BusTypeScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BusTypeScalarFieldEnum>;
}

@InputType()
export class FindManyBusTypeArgs {
  @Field(() => BusTypeWhereInput, { nullable: true })
  @Type(() => BusTypeWhereInput)
  where?: InstanceType<typeof BusTypeWhereInput>;
  @Field(() => [BusTypeOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<BusTypeOrderByWithRelationInput>;
  @Field(() => BusTypeWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof BusTypeWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [BusTypeScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof BusTypeScalarFieldEnum>;
}

@InputType()
export class FindUniqueBusTypeOrThrowArgs {
  @Field(() => BusTypeWhereUniqueInput, { nullable: false })
  @Type(() => BusTypeWhereUniqueInput)
  where!: InstanceType<typeof BusTypeWhereUniqueInput>;
}

@InputType()
export class FindUniqueBusTypeArgs {
  @Field(() => BusTypeWhereUniqueInput, { nullable: false })
  @Type(() => BusTypeWhereUniqueInput)
  where!: InstanceType<typeof BusTypeWhereUniqueInput>;
}

@InputType()
export class UpdateManyBusTypeArgs {
  @Field(() => BusTypeUpdateManyMutationInput, { nullable: false })
  @Type(() => BusTypeUpdateManyMutationInput)
  data!: InstanceType<typeof BusTypeUpdateManyMutationInput>;
  @Field(() => BusTypeWhereInput, { nullable: true })
  @Type(() => BusTypeWhereInput)
  where?: InstanceType<typeof BusTypeWhereInput>;
}

@InputType()
export class UpdateOneBusTypeArgs {
  @Field(() => BusTypeUpdateInput, { nullable: false })
  @Type(() => BusTypeUpdateInput)
  data!: InstanceType<typeof BusTypeUpdateInput>;
  @Field(() => BusTypeWhereUniqueInput, { nullable: false })
  @Type(() => BusTypeWhereUniqueInput)
  where!: InstanceType<typeof BusTypeWhereUniqueInput>;
}

@InputType()
export class UpsertOneBusTypeArgs {
  @Field(() => BusTypeWhereUniqueInput, { nullable: false })
  @Type(() => BusTypeWhereUniqueInput)
  where!: InstanceType<typeof BusTypeWhereUniqueInput>;
  @Field(() => BusTypeCreateInput, { nullable: false })
  @Type(() => BusTypeCreateInput)
  create!: InstanceType<typeof BusTypeCreateInput>;
  @Field(() => BusTypeUpdateInput, { nullable: false })
  @Type(() => BusTypeUpdateInput)
  update!: InstanceType<typeof BusTypeUpdateInput>;
}

@ObjectType()
export class AggregatePayment {
  @Field(() => PaymentCountAggregate, { nullable: true })
  _count?: InstanceType<typeof PaymentCountAggregate>;
  @Field(() => PaymentMinAggregate, { nullable: true })
  _min?: InstanceType<typeof PaymentMinAggregate>;
  @Field(() => PaymentMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof PaymentMaxAggregate>;
}

@InputType()
export class CreateManyPaymentArgs {
  @Field(() => [PaymentCreateManyInput], { nullable: false })
  @Type(() => PaymentCreateManyInput)
  data!: Array<PaymentCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOnePaymentArgs {
  @Field(() => PaymentCreateInput, { nullable: false })
  @Type(() => PaymentCreateInput)
  data!: InstanceType<typeof PaymentCreateInput>;
}

@InputType()
export class DeleteManyPaymentArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
}

@InputType()
export class DeleteOnePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  @Type(() => PaymentWhereUniqueInput)
  where!: InstanceType<typeof PaymentWhereUniqueInput>;
}

@InputType()
export class FindFirstPaymentOrThrowArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
  @Field(() => [PaymentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PaymentOrderByWithRelationInput>;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PaymentScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}

@InputType()
export class FindFirstPaymentArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
  @Field(() => [PaymentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PaymentOrderByWithRelationInput>;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PaymentScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}

@InputType()
export class FindManyPaymentArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
  @Field(() => [PaymentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PaymentOrderByWithRelationInput>;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [PaymentScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof PaymentScalarFieldEnum>;
}

@InputType()
export class FindUniquePaymentOrThrowArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  @Type(() => PaymentWhereUniqueInput)
  where!: InstanceType<typeof PaymentWhereUniqueInput>;
}

@InputType()
export class FindUniquePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  @Type(() => PaymentWhereUniqueInput)
  where!: InstanceType<typeof PaymentWhereUniqueInput>;
}

@InputType()
export class PaymentAggregateArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
  @Field(() => [PaymentOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<PaymentOrderByWithRelationInput>;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => PaymentCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PaymentCountAggregateInput>;
  @Field(() => PaymentMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PaymentMinAggregateInput>;
  @Field(() => PaymentMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PaymentMaxAggregateInput>;
}

@InputType()
export class PaymentCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  paymentId?: true;
  @Field(() => Boolean, { nullable: true })
  reservationId?: true;
  @Field(() => Boolean, { nullable: true })
  datePayment?: true;
  @Field(() => Boolean, { nullable: true })
  amount?: true;
  @Field(() => Boolean, { nullable: true })
  isPaid?: true;
  @Field(() => Boolean, { nullable: true })
  paymentMode?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class PaymentCountAggregate {
  @Field(() => Int, { nullable: false })
  paymentId!: number;
  @Field(() => Int, { nullable: false })
  reservationId!: number;
  @Field(() => Int, { nullable: false })
  datePayment!: number;
  @Field(() => Int, { nullable: false })
  amount!: number;
  @Field(() => Int, { nullable: false })
  isPaid!: number;
  @Field(() => Int, { nullable: false })
  paymentMode!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class PaymentCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  paymentId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  datePayment?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  paymentMode?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PaymentCreateManyInput {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => String, { nullable: false })
  reservationId!: string;
  @Field(() => Date, { nullable: false })
  datePayment!: Date | string;
  @Field(() => Date, { nullable: false })
  amount!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => PaymentMode, { nullable: false })
  paymentMode!: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class PaymentCreateNestedOneWithoutReservationInput {
  @Field(() => PaymentCreateWithoutReservationInput, { nullable: true })
  @Type(() => PaymentCreateWithoutReservationInput)
  create?: InstanceType<typeof PaymentCreateWithoutReservationInput>;
  @Field(() => PaymentCreateOrConnectWithoutReservationInput, {
    nullable: true,
  })
  @Type(() => PaymentCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof PaymentCreateOrConnectWithoutReservationInput
  >;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  @Type(() => PaymentWhereUniqueInput)
  connect?: InstanceType<typeof PaymentWhereUniqueInput>;
}

@InputType()
export class PaymentCreateOrConnectWithoutReservationInput {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  @Type(() => PaymentWhereUniqueInput)
  where!: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => PaymentCreateWithoutReservationInput, { nullable: false })
  @Type(() => PaymentCreateWithoutReservationInput)
  create!: InstanceType<typeof PaymentCreateWithoutReservationInput>;
}

@InputType()
export class PaymentCreateWithoutReservationInput {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => Date, { nullable: false })
  datePayment!: Date | string;
  @Field(() => Date, { nullable: false })
  amount!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => PaymentMode, { nullable: false })
  paymentMode!: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class PaymentCreateInput {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => ReservationCreateNestedOneWithoutPaymentInput, {
    nullable: false,
  })
  reservation!: InstanceType<
    typeof ReservationCreateNestedOneWithoutPaymentInput
  >;
  @Field(() => Date, { nullable: false })
  datePayment!: Date | string;
  @Field(() => Date, { nullable: false })
  amount!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => PaymentMode, { nullable: false })
  paymentMode!: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class PaymentGroupByArgs {
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
  @Field(() => [PaymentOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<PaymentOrderByWithAggregationInput>;
  @Field(() => [PaymentScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof PaymentScalarFieldEnum>;
  @Field(() => PaymentScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof PaymentScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => PaymentCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PaymentCountAggregateInput>;
  @Field(() => PaymentMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PaymentMinAggregateInput>;
  @Field(() => PaymentMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PaymentMaxAggregateInput>;
}

@ObjectType()
export class PaymentGroupBy {
  @Field(() => String, { nullable: false })
  paymentId!: string;
  @Field(() => String, { nullable: false })
  reservationId!: string;
  @Field(() => Date, { nullable: false })
  datePayment!: Date | string;
  @Field(() => Date, { nullable: false })
  amount!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => PaymentMode, { nullable: false })
  paymentMode!: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => PaymentCountAggregate, { nullable: true })
  _count?: InstanceType<typeof PaymentCountAggregate>;
  @Field(() => PaymentMinAggregate, { nullable: true })
  _min?: InstanceType<typeof PaymentMinAggregate>;
  @Field(() => PaymentMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof PaymentMaxAggregate>;
}

@InputType()
export class PaymentMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  paymentId?: true;
  @Field(() => Boolean, { nullable: true })
  reservationId?: true;
  @Field(() => Boolean, { nullable: true })
  datePayment?: true;
  @Field(() => Boolean, { nullable: true })
  amount?: true;
  @Field(() => Boolean, { nullable: true })
  isPaid?: true;
  @Field(() => Boolean, { nullable: true })
  paymentMode?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class PaymentMaxAggregate {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => Date, { nullable: true })
  datePayment?: Date | string;
  @Field(() => Date, { nullable: true })
  amount?: Date | string;
  @Field(() => Boolean, { nullable: true })
  isPaid?: boolean;
  @Field(() => PaymentMode, { nullable: true })
  paymentMode?: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class PaymentMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  paymentId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  datePayment?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  paymentMode?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PaymentMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  paymentId?: true;
  @Field(() => Boolean, { nullable: true })
  reservationId?: true;
  @Field(() => Boolean, { nullable: true })
  datePayment?: true;
  @Field(() => Boolean, { nullable: true })
  amount?: true;
  @Field(() => Boolean, { nullable: true })
  isPaid?: true;
  @Field(() => Boolean, { nullable: true })
  paymentMode?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class PaymentMinAggregate {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => Date, { nullable: true })
  datePayment?: Date | string;
  @Field(() => Date, { nullable: true })
  amount?: Date | string;
  @Field(() => Boolean, { nullable: true })
  isPaid?: boolean;
  @Field(() => PaymentMode, { nullable: true })
  paymentMode?: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class PaymentMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  paymentId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  datePayment?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  paymentMode?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PaymentOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  paymentId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  datePayment?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  paymentMode?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => PaymentCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof PaymentCountOrderByAggregateInput>;
  @Field(() => PaymentMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof PaymentMaxOrderByAggregateInput>;
  @Field(() => PaymentMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof PaymentMinOrderByAggregateInput>;
}

@InputType()
export class PaymentOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  paymentId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => ReservationOrderByWithRelationInput, { nullable: true })
  reservation?: InstanceType<typeof ReservationOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  datePayment?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  amount?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  paymentMode?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class PaymentRelationFilter {
  @Field(() => PaymentWhereInput, { nullable: true })
  is?: InstanceType<typeof PaymentWhereInput>;
  @Field(() => PaymentWhereInput, { nullable: true })
  isNot?: InstanceType<typeof PaymentWhereInput>;
}

@InputType()
export class PaymentScalarWhereWithAggregatesInput {
  @Field(() => [PaymentScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<PaymentScalarWhereWithAggregatesInput>;
  @Field(() => [PaymentScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<PaymentScalarWhereWithAggregatesInput>;
  @Field(() => [PaymentScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<PaymentScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  paymentId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  reservationId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  amount?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPaid?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => EnumPaymentModeWithAggregatesFilter, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class PaymentUncheckedCreateNestedOneWithoutReservationInput {
  @Field(() => PaymentCreateWithoutReservationInput, { nullable: true })
  @Type(() => PaymentCreateWithoutReservationInput)
  create?: InstanceType<typeof PaymentCreateWithoutReservationInput>;
  @Field(() => PaymentCreateOrConnectWithoutReservationInput, {
    nullable: true,
  })
  @Type(() => PaymentCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof PaymentCreateOrConnectWithoutReservationInput
  >;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  @Type(() => PaymentWhereUniqueInput)
  connect?: InstanceType<typeof PaymentWhereUniqueInput>;
}

@InputType()
export class PaymentUncheckedCreateWithoutReservationInput {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => Date, { nullable: false })
  datePayment!: Date | string;
  @Field(() => Date, { nullable: false })
  amount!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => PaymentMode, { nullable: false })
  paymentMode!: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class PaymentUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => String, { nullable: false })
  reservationId!: string;
  @Field(() => Date, { nullable: false })
  datePayment!: Date | string;
  @Field(() => Date, { nullable: false })
  amount!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => PaymentMode, { nullable: false })
  paymentMode!: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class PaymentUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  paymentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumPaymentModeFieldUpdateOperationsInput, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PaymentUncheckedUpdateOneWithoutReservationNestedInput {
  @Field(() => PaymentCreateWithoutReservationInput, { nullable: true })
  @Type(() => PaymentCreateWithoutReservationInput)
  create?: InstanceType<typeof PaymentCreateWithoutReservationInput>;
  @Field(() => PaymentCreateOrConnectWithoutReservationInput, {
    nullable: true,
  })
  @Type(() => PaymentCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof PaymentCreateOrConnectWithoutReservationInput
  >;
  @Field(() => PaymentUpsertWithoutReservationInput, { nullable: true })
  @Type(() => PaymentUpsertWithoutReservationInput)
  upsert?: InstanceType<typeof PaymentUpsertWithoutReservationInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  @Type(() => PaymentWhereUniqueInput)
  connect?: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => PaymentUpdateWithoutReservationInput, { nullable: true })
  @Type(() => PaymentUpdateWithoutReservationInput)
  update?: InstanceType<typeof PaymentUpdateWithoutReservationInput>;
}

@InputType()
export class PaymentUncheckedUpdateWithoutReservationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  paymentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumPaymentModeFieldUpdateOperationsInput, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PaymentUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  paymentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumPaymentModeFieldUpdateOperationsInput, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PaymentUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  paymentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumPaymentModeFieldUpdateOperationsInput, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PaymentUpdateOneWithoutReservationNestedInput {
  @Field(() => PaymentCreateWithoutReservationInput, { nullable: true })
  @Type(() => PaymentCreateWithoutReservationInput)
  create?: InstanceType<typeof PaymentCreateWithoutReservationInput>;
  @Field(() => PaymentCreateOrConnectWithoutReservationInput, {
    nullable: true,
  })
  @Type(() => PaymentCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof PaymentCreateOrConnectWithoutReservationInput
  >;
  @Field(() => PaymentUpsertWithoutReservationInput, { nullable: true })
  @Type(() => PaymentUpsertWithoutReservationInput)
  upsert?: InstanceType<typeof PaymentUpsertWithoutReservationInput>;
  @Field(() => Boolean, { nullable: true })
  disconnect?: boolean;
  @Field(() => Boolean, { nullable: true })
  delete?: boolean;
  @Field(() => PaymentWhereUniqueInput, { nullable: true })
  @Type(() => PaymentWhereUniqueInput)
  connect?: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => PaymentUpdateWithoutReservationInput, { nullable: true })
  @Type(() => PaymentUpdateWithoutReservationInput)
  update?: InstanceType<typeof PaymentUpdateWithoutReservationInput>;
}

@InputType()
export class PaymentUpdateWithoutReservationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  paymentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumPaymentModeFieldUpdateOperationsInput, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PaymentUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  paymentId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => ReservationUpdateOneRequiredWithoutPaymentNestedInput, {
    nullable: true,
  })
  reservation?: InstanceType<
    typeof ReservationUpdateOneRequiredWithoutPaymentNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  amount?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => EnumPaymentModeFieldUpdateOperationsInput, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class PaymentUpsertWithoutReservationInput {
  @Field(() => PaymentUpdateWithoutReservationInput, { nullable: false })
  @Type(() => PaymentUpdateWithoutReservationInput)
  update!: InstanceType<typeof PaymentUpdateWithoutReservationInput>;
  @Field(() => PaymentCreateWithoutReservationInput, { nullable: false })
  @Type(() => PaymentCreateWithoutReservationInput)
  create!: InstanceType<typeof PaymentCreateWithoutReservationInput>;
}

@InputType()
export class PaymentWhereUniqueInput {
  @Field(() => String, { nullable: true })
  paymentId?: string;
  @Field(() => String, { nullable: true })
  reservationId?: string;
}

@InputType()
export class PaymentWhereInput {
  @Field(() => [PaymentWhereInput], { nullable: true })
  AND?: Array<PaymentWhereInput>;
  @Field(() => [PaymentWhereInput], { nullable: true })
  OR?: Array<PaymentWhereInput>;
  @Field(() => [PaymentWhereInput], { nullable: true })
  NOT?: Array<PaymentWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  paymentId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  reservationId?: InstanceType<typeof StringFilter>;
  @Field(() => ReservationRelationFilter, { nullable: true })
  reservation?: InstanceType<typeof ReservationRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  datePayment?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  amount?: InstanceType<typeof DateTimeFilter>;
  @Field(() => BoolFilter, { nullable: true })
  isPaid?: InstanceType<typeof BoolFilter>;
  @Field(() => EnumPaymentModeFilter, { nullable: true })
  paymentMode?: InstanceType<typeof EnumPaymentModeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@ObjectType()
export class Payment {
  @Field(() => ID, { nullable: false })
  paymentId!: string;
  @Field(() => String, { nullable: false })
  reservationId!: string;
  @Field(() => Reservation, { nullable: false })
  reservation?: InstanceType<typeof Reservation>;
  @Field(() => Date, { nullable: false })
  datePayment!: Date;
  @Field(() => Date, { nullable: false })
  amount!: Date;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => PaymentMode, { nullable: false })
  paymentMode!: keyof typeof PaymentMode;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
}

@InputType()
export class UpdateManyPaymentArgs {
  @Field(() => PaymentUpdateManyMutationInput, { nullable: false })
  @Type(() => PaymentUpdateManyMutationInput)
  data!: InstanceType<typeof PaymentUpdateManyMutationInput>;
  @Field(() => PaymentWhereInput, { nullable: true })
  @Type(() => PaymentWhereInput)
  where?: InstanceType<typeof PaymentWhereInput>;
}

@InputType()
export class UpdateOnePaymentArgs {
  @Field(() => PaymentUpdateInput, { nullable: false })
  @Type(() => PaymentUpdateInput)
  data!: InstanceType<typeof PaymentUpdateInput>;
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  @Type(() => PaymentWhereUniqueInput)
  where!: InstanceType<typeof PaymentWhereUniqueInput>;
}

@InputType()
export class UpsertOnePaymentArgs {
  @Field(() => PaymentWhereUniqueInput, { nullable: false })
  @Type(() => PaymentWhereUniqueInput)
  where!: InstanceType<typeof PaymentWhereUniqueInput>;
  @Field(() => PaymentCreateInput, { nullable: false })
  @Type(() => PaymentCreateInput)
  create!: InstanceType<typeof PaymentCreateInput>;
  @Field(() => PaymentUpdateInput, { nullable: false })
  @Type(() => PaymentUpdateInput)
  update!: InstanceType<typeof PaymentUpdateInput>;
}

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
export class EnumPaymentModeFieldUpdateOperationsInput {
  @Field(() => PaymentMode, { nullable: true })
  set?: keyof typeof PaymentMode;
}

@InputType()
export class EnumPaymentModeFilter {
  @Field(() => PaymentMode, { nullable: true })
  equals?: keyof typeof PaymentMode;
  @Field(() => [PaymentMode], { nullable: true })
  in?: Array<keyof typeof PaymentMode>;
  @Field(() => [PaymentMode], { nullable: true })
  notIn?: Array<keyof typeof PaymentMode>;
  @Field(() => NestedEnumPaymentModeFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumPaymentModeFilter>;
}

@InputType()
export class EnumPaymentModeWithAggregatesFilter {
  @Field(() => PaymentMode, { nullable: true })
  equals?: keyof typeof PaymentMode;
  @Field(() => [PaymentMode], { nullable: true })
  in?: Array<keyof typeof PaymentMode>;
  @Field(() => [PaymentMode], { nullable: true })
  notIn?: Array<keyof typeof PaymentMode>;
  @Field(() => NestedEnumPaymentModeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumPaymentModeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumPaymentModeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumPaymentModeFilter>;
  @Field(() => NestedEnumPaymentModeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumPaymentModeFilter>;
}

@InputType()
export class EnumRoleFieldUpdateOperationsInput {
  @Field(() => Role, { nullable: true })
  set?: keyof typeof Role;
}

@InputType()
export class EnumRoleFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class EnumRoleWithAggregatesFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRoleFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class IntFieldUpdateOperationsInput {
  @Field(() => Int, { nullable: true })
  set?: number;
  @Field(() => Int, { nullable: true })
  increment?: number;
  @Field(() => Int, { nullable: true })
  decrement?: number;
  @Field(() => Int, { nullable: true })
  multiply?: number;
  @Field(() => Int, { nullable: true })
  divide?: number;
}

@InputType()
export class IntFilter {
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
export class IntWithAggregatesFilter {
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
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
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
export class NestedEnumPaymentModeFilter {
  @Field(() => PaymentMode, { nullable: true })
  equals?: keyof typeof PaymentMode;
  @Field(() => [PaymentMode], { nullable: true })
  in?: Array<keyof typeof PaymentMode>;
  @Field(() => [PaymentMode], { nullable: true })
  notIn?: Array<keyof typeof PaymentMode>;
  @Field(() => NestedEnumPaymentModeFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumPaymentModeFilter>;
}

@InputType()
export class NestedEnumPaymentModeWithAggregatesFilter {
  @Field(() => PaymentMode, { nullable: true })
  equals?: keyof typeof PaymentMode;
  @Field(() => [PaymentMode], { nullable: true })
  in?: Array<keyof typeof PaymentMode>;
  @Field(() => [PaymentMode], { nullable: true })
  notIn?: Array<keyof typeof PaymentMode>;
  @Field(() => NestedEnumPaymentModeWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumPaymentModeWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumPaymentModeFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumPaymentModeFilter>;
  @Field(() => NestedEnumPaymentModeFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumPaymentModeFilter>;
}

@InputType()
export class NestedEnumRoleFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedEnumRoleWithAggregatesFilter {
  @Field(() => Role, { nullable: true })
  equals?: keyof typeof Role;
  @Field(() => [Role], { nullable: true })
  in?: Array<keyof typeof Role>;
  @Field(() => [Role], { nullable: true })
  notIn?: Array<keyof typeof Role>;
  @Field(() => NestedEnumRoleWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedEnumRoleWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _min?: InstanceType<typeof NestedEnumRoleFilter>;
  @Field(() => NestedEnumRoleFilter, { nullable: true })
  _max?: InstanceType<typeof NestedEnumRoleFilter>;
}

@InputType()
export class NestedFloatFilter {
  @Field(() => Float, { nullable: true })
  equals?: number;
  @Field(() => [Float], { nullable: true })
  in?: Array<number>;
  @Field(() => [Float], { nullable: true })
  notIn?: Array<number>;
  @Field(() => Float, { nullable: true })
  lt?: number;
  @Field(() => Float, { nullable: true })
  lte?: number;
  @Field(() => Float, { nullable: true })
  gt?: number;
  @Field(() => Float, { nullable: true })
  gte?: number;
  @Field(() => NestedFloatFilter, { nullable: true })
  not?: InstanceType<typeof NestedFloatFilter>;
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
export class NestedIntWithAggregatesFilter {
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
  @Field(() => NestedIntWithAggregatesFilter, { nullable: true })
  not?: InstanceType<typeof NestedIntWithAggregatesFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _count?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedFloatFilter, { nullable: true })
  _avg?: InstanceType<typeof NestedFloatFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _sum?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _min?: InstanceType<typeof NestedIntFilter>;
  @Field(() => NestedIntFilter, { nullable: true })
  _max?: InstanceType<typeof NestedIntFilter>;
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
export class AggregateReservation {
  @Field(() => ReservationCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ReservationCountAggregate>;
  @Field(() => ReservationAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof ReservationAvgAggregate>;
  @Field(() => ReservationSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof ReservationSumAggregate>;
  @Field(() => ReservationMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ReservationMinAggregate>;
  @Field(() => ReservationMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ReservationMaxAggregate>;
}

@InputType()
export class CreateManyReservationArgs {
  @Field(() => [ReservationCreateManyInput], { nullable: false })
  @Type(() => ReservationCreateManyInput)
  data!: Array<ReservationCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneReservationArgs {
  @Field(() => ReservationCreateInput, { nullable: false })
  @Type(() => ReservationCreateInput)
  data!: InstanceType<typeof ReservationCreateInput>;
}

@InputType()
export class DeleteManyReservationArgs {
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: InstanceType<typeof ReservationWhereInput>;
}

@InputType()
export class DeleteOneReservationArgs {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
}

@InputType()
export class FindFirstReservationOrThrowArgs {
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => [ReservationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReservationOrderByWithRelationInput>;
  @Field(() => ReservationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ReservationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ReservationScalarFieldEnum>;
}

@InputType()
export class FindFirstReservationArgs {
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => [ReservationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReservationOrderByWithRelationInput>;
  @Field(() => ReservationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ReservationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ReservationScalarFieldEnum>;
}

@InputType()
export class FindManyReservationArgs {
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => [ReservationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReservationOrderByWithRelationInput>;
  @Field(() => ReservationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ReservationScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ReservationScalarFieldEnum>;
}

@InputType()
export class FindUniqueReservationOrThrowArgs {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
}

@InputType()
export class FindUniqueReservationArgs {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
}

@InputType()
export class ReservationAggregateArgs {
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => [ReservationOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ReservationOrderByWithRelationInput>;
  @Field(() => ReservationWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ReservationCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ReservationCountAggregateInput>;
  @Field(() => ReservationAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof ReservationAvgAggregateInput>;
  @Field(() => ReservationSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof ReservationSumAggregateInput>;
  @Field(() => ReservationMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ReservationMinAggregateInput>;
  @Field(() => ReservationMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ReservationMaxAggregateInput>;
}

@InputType()
export class ReservationAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rowNumber?: true;
  @Field(() => Boolean, { nullable: true })
  columnNumber?: true;
  @Field(() => Boolean, { nullable: true })
  placeNumber?: true;
  @Field(() => Boolean, { nullable: true })
  totalPrice?: true;
}

@ObjectType()
export class ReservationAvgAggregate {
  @Field(() => Float, { nullable: true })
  rowNumber?: number;
  @Field(() => Float, { nullable: true })
  columnNumber?: number;
  @Field(() => Float, { nullable: true })
  placeNumber?: number;
  @Field(() => Float, { nullable: true })
  totalPrice?: number;
}

@InputType()
export class ReservationAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  rowNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  totalPrice?: keyof typeof SortOrder;
}

@InputType()
export class ReservationCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  reservationId?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  scheduleId?: true;
  @Field(() => Boolean, { nullable: true })
  dateOfReservation?: true;
  @Field(() => Boolean, { nullable: true })
  rowNumber?: true;
  @Field(() => Boolean, { nullable: true })
  columnNumber?: true;
  @Field(() => Boolean, { nullable: true })
  placeNumber?: true;
  @Field(() => Boolean, { nullable: true })
  totalPrice?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ReservationCountAggregate {
  @Field(() => Int, { nullable: false })
  reservationId!: number;
  @Field(() => Int, { nullable: false })
  userId!: number;
  @Field(() => Int, { nullable: false })
  scheduleId!: number;
  @Field(() => Int, { nullable: false })
  dateOfReservation!: number;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ReservationCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfReservation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rowNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  totalPrice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ReservationCreateManyScheduleInputEnvelope {
  @Field(() => [ReservationCreateManyScheduleInput], { nullable: false })
  @Type(() => ReservationCreateManyScheduleInput)
  data!: Array<ReservationCreateManyScheduleInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ReservationCreateManyScheduleInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ReservationCreateManyUserInputEnvelope {
  @Field(() => [ReservationCreateManyUserInput], { nullable: false })
  @Type(() => ReservationCreateManyUserInput)
  data!: Array<ReservationCreateManyUserInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ReservationCreateManyUserInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ReservationCreateManyInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ReservationCreateNestedManyWithoutScheduleInput {
  @Field(() => [ReservationCreateWithoutScheduleInput], { nullable: true })
  @Type(() => ReservationCreateWithoutScheduleInput)
  create?: Array<ReservationCreateWithoutScheduleInput>;
  @Field(() => [ReservationCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutScheduleInput>;
  @Field(() => ReservationCreateManyScheduleInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyScheduleInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyScheduleInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
}

@InputType()
export class ReservationCreateNestedManyWithoutUserInput {
  @Field(() => [ReservationCreateWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateWithoutUserInput)
  create?: Array<ReservationCreateWithoutUserInput>;
  @Field(() => [ReservationCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutUserInput>;
  @Field(() => ReservationCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyUserInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
}

@InputType()
export class ReservationCreateNestedOneWithoutPaymentInput {
  @Field(() => ReservationCreateWithoutPaymentInput, { nullable: true })
  @Type(() => ReservationCreateWithoutPaymentInput)
  create?: InstanceType<typeof ReservationCreateWithoutPaymentInput>;
  @Field(() => ReservationCreateOrConnectWithoutPaymentInput, {
    nullable: true,
  })
  @Type(() => ReservationCreateOrConnectWithoutPaymentInput)
  connectOrCreate?: InstanceType<
    typeof ReservationCreateOrConnectWithoutPaymentInput
  >;
  @Field(() => ReservationWhereUniqueInput, { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: InstanceType<typeof ReservationWhereUniqueInput>;
}

@InputType()
export class ReservationCreateOrConnectWithoutPaymentInput {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationCreateWithoutPaymentInput, { nullable: false })
  @Type(() => ReservationCreateWithoutPaymentInput)
  create!: InstanceType<typeof ReservationCreateWithoutPaymentInput>;
}

@InputType()
export class ReservationCreateOrConnectWithoutScheduleInput {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationCreateWithoutScheduleInput, { nullable: false })
  @Type(() => ReservationCreateWithoutScheduleInput)
  create!: InstanceType<typeof ReservationCreateWithoutScheduleInput>;
}

@InputType()
export class ReservationCreateOrConnectWithoutUserInput {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationCreateWithoutUserInput, { nullable: false })
  @Type(() => ReservationCreateWithoutUserInput)
  create!: InstanceType<typeof ReservationCreateWithoutUserInput>;
}

@InputType()
export class ReservationCreateWithoutPaymentInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => UsersCreateNestedOneWithoutReservationInput, { nullable: false })
  user!: InstanceType<typeof UsersCreateNestedOneWithoutReservationInput>;
  @Field(() => ScheduleCreateNestedOneWithoutReservationInput, {
    nullable: false,
  })
  schedule!: InstanceType<
    typeof ScheduleCreateNestedOneWithoutReservationInput
  >;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ReservationCreateWithoutScheduleInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => UsersCreateNestedOneWithoutReservationInput, { nullable: false })
  user!: InstanceType<typeof UsersCreateNestedOneWithoutReservationInput>;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => PaymentCreateNestedOneWithoutReservationInput, {
    nullable: true,
  })
  Payment?: InstanceType<typeof PaymentCreateNestedOneWithoutReservationInput>;
}

@InputType()
export class ReservationCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => ScheduleCreateNestedOneWithoutReservationInput, {
    nullable: false,
  })
  schedule!: InstanceType<
    typeof ScheduleCreateNestedOneWithoutReservationInput
  >;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => PaymentCreateNestedOneWithoutReservationInput, {
    nullable: true,
  })
  Payment?: InstanceType<typeof PaymentCreateNestedOneWithoutReservationInput>;
}

@InputType()
export class ReservationCreateInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => UsersCreateNestedOneWithoutReservationInput, { nullable: false })
  user!: InstanceType<typeof UsersCreateNestedOneWithoutReservationInput>;
  @Field(() => ScheduleCreateNestedOneWithoutReservationInput, {
    nullable: false,
  })
  schedule!: InstanceType<
    typeof ScheduleCreateNestedOneWithoutReservationInput
  >;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => PaymentCreateNestedOneWithoutReservationInput, {
    nullable: true,
  })
  Payment?: InstanceType<typeof PaymentCreateNestedOneWithoutReservationInput>;
}

@InputType()
export class ReservationGroupByArgs {
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => [ReservationOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ReservationOrderByWithAggregationInput>;
  @Field(() => [ReservationScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ReservationScalarFieldEnum>;
  @Field(() => ReservationScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ReservationScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ReservationCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ReservationCountAggregateInput>;
  @Field(() => ReservationAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof ReservationAvgAggregateInput>;
  @Field(() => ReservationSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof ReservationSumAggregateInput>;
  @Field(() => ReservationMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ReservationMinAggregateInput>;
  @Field(() => ReservationMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ReservationMaxAggregateInput>;
}

@ObjectType()
export class ReservationGroupBy {
  @Field(() => String, { nullable: false })
  reservationId!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => ReservationCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ReservationCountAggregate>;
  @Field(() => ReservationAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof ReservationAvgAggregate>;
  @Field(() => ReservationSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof ReservationSumAggregate>;
  @Field(() => ReservationMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ReservationMinAggregate>;
  @Field(() => ReservationMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ReservationMaxAggregate>;
}

@InputType()
export class ReservationListRelationFilter {
  @Field(() => ReservationWhereInput, { nullable: true })
  every?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => ReservationWhereInput, { nullable: true })
  some?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => ReservationWhereInput, { nullable: true })
  none?: InstanceType<typeof ReservationWhereInput>;
}

@InputType()
export class ReservationMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  reservationId?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  scheduleId?: true;
  @Field(() => Boolean, { nullable: true })
  dateOfReservation?: true;
  @Field(() => Boolean, { nullable: true })
  rowNumber?: true;
  @Field(() => Boolean, { nullable: true })
  columnNumber?: true;
  @Field(() => Boolean, { nullable: true })
  placeNumber?: true;
  @Field(() => Boolean, { nullable: true })
  totalPrice?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class ReservationMaxAggregate {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => Date, { nullable: true })
  dateOfReservation?: Date | string;
  @Field(() => Int, { nullable: true })
  rowNumber?: number;
  @Field(() => Int, { nullable: true })
  columnNumber?: number;
  @Field(() => Int, { nullable: true })
  placeNumber?: number;
  @Field(() => Int, { nullable: true })
  totalPrice?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ReservationMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfReservation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rowNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  totalPrice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ReservationMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  reservationId?: true;
  @Field(() => Boolean, { nullable: true })
  userId?: true;
  @Field(() => Boolean, { nullable: true })
  scheduleId?: true;
  @Field(() => Boolean, { nullable: true })
  dateOfReservation?: true;
  @Field(() => Boolean, { nullable: true })
  rowNumber?: true;
  @Field(() => Boolean, { nullable: true })
  columnNumber?: true;
  @Field(() => Boolean, { nullable: true })
  placeNumber?: true;
  @Field(() => Boolean, { nullable: true })
  totalPrice?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class ReservationMinAggregate {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => Date, { nullable: true })
  dateOfReservation?: Date | string;
  @Field(() => Int, { nullable: true })
  rowNumber?: number;
  @Field(() => Int, { nullable: true })
  columnNumber?: number;
  @Field(() => Int, { nullable: true })
  placeNumber?: number;
  @Field(() => Int, { nullable: true })
  totalPrice?: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ReservationMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfReservation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rowNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  totalPrice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ReservationOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class ReservationOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  dateOfReservation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rowNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  totalPrice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => ReservationCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ReservationCountOrderByAggregateInput>;
  @Field(() => ReservationAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof ReservationAvgOrderByAggregateInput>;
  @Field(() => ReservationMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ReservationMaxOrderByAggregateInput>;
  @Field(() => ReservationMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ReservationMinOrderByAggregateInput>;
  @Field(() => ReservationSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof ReservationSumOrderByAggregateInput>;
}

@InputType()
export class ReservationOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  reservationId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  userId?: keyof typeof SortOrder;
  @Field(() => UsersOrderByWithRelationInput, { nullable: true })
  user?: InstanceType<typeof UsersOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => ScheduleOrderByWithRelationInput, { nullable: true })
  schedule?: InstanceType<typeof ScheduleOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  dateOfReservation?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  rowNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  totalPrice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => PaymentOrderByWithRelationInput, { nullable: true })
  Payment?: InstanceType<typeof PaymentOrderByWithRelationInput>;
}

@InputType()
export class ReservationRelationFilter {
  @Field(() => ReservationWhereInput, { nullable: true })
  is?: InstanceType<typeof ReservationWhereInput>;
  @Field(() => ReservationWhereInput, { nullable: true })
  isNot?: InstanceType<typeof ReservationWhereInput>;
}

@InputType()
export class ReservationScalarWhereWithAggregatesInput {
  @Field(() => [ReservationScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ReservationScalarWhereWithAggregatesInput>;
  @Field(() => [ReservationScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ReservationScalarWhereWithAggregatesInput>;
  @Field(() => [ReservationScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ReservationScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  reservationId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  userId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  scheduleId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  rowNumber?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  columnNumber?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  placeNumber?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  totalPrice?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ReservationScalarWhereInput {
  @Field(() => [ReservationScalarWhereInput], { nullable: true })
  AND?: Array<ReservationScalarWhereInput>;
  @Field(() => [ReservationScalarWhereInput], { nullable: true })
  OR?: Array<ReservationScalarWhereInput>;
  @Field(() => [ReservationScalarWhereInput], { nullable: true })
  NOT?: Array<ReservationScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  reservationId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  scheduleId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  rowNumber?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  columnNumber?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  placeNumber?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  totalPrice?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ReservationSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  rowNumber?: true;
  @Field(() => Boolean, { nullable: true })
  columnNumber?: true;
  @Field(() => Boolean, { nullable: true })
  placeNumber?: true;
  @Field(() => Boolean, { nullable: true })
  totalPrice?: true;
}

@ObjectType()
export class ReservationSumAggregate {
  @Field(() => Int, { nullable: true })
  rowNumber?: number;
  @Field(() => Int, { nullable: true })
  columnNumber?: number;
  @Field(() => Int, { nullable: true })
  placeNumber?: number;
  @Field(() => Int, { nullable: true })
  totalPrice?: number;
}

@InputType()
export class ReservationSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  rowNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  columnNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  placeNumber?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  totalPrice?: keyof typeof SortOrder;
}

@InputType()
export class ReservationUncheckedCreateNestedManyWithoutScheduleInput {
  @Field(() => [ReservationCreateWithoutScheduleInput], { nullable: true })
  @Type(() => ReservationCreateWithoutScheduleInput)
  create?: Array<ReservationCreateWithoutScheduleInput>;
  @Field(() => [ReservationCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutScheduleInput>;
  @Field(() => ReservationCreateManyScheduleInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyScheduleInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyScheduleInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
}

@InputType()
export class ReservationUncheckedCreateNestedManyWithoutUserInput {
  @Field(() => [ReservationCreateWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateWithoutUserInput)
  create?: Array<ReservationCreateWithoutUserInput>;
  @Field(() => [ReservationCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutUserInput>;
  @Field(() => ReservationCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyUserInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
}

@InputType()
export class ReservationUncheckedCreateWithoutPaymentInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ReservationUncheckedCreateWithoutScheduleInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => PaymentUncheckedCreateNestedOneWithoutReservationInput, {
    nullable: true,
  })
  Payment?: InstanceType<
    typeof PaymentUncheckedCreateNestedOneWithoutReservationInput
  >;
}

@InputType()
export class ReservationUncheckedCreateWithoutUserInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => PaymentUncheckedCreateNestedOneWithoutReservationInput, {
    nullable: true,
  })
  Payment?: InstanceType<
    typeof PaymentUncheckedCreateNestedOneWithoutReservationInput
  >;
}

@InputType()
export class ReservationUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date | string;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => PaymentUncheckedCreateNestedOneWithoutReservationInput, {
    nullable: true,
  })
  Payment?: InstanceType<
    typeof PaymentUncheckedCreateNestedOneWithoutReservationInput
  >;
}

@InputType()
export class ReservationUncheckedUpdateManyWithoutReservationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReservationUncheckedUpdateManyWithoutScheduleNestedInput {
  @Field(() => [ReservationCreateWithoutScheduleInput], { nullable: true })
  @Type(() => ReservationCreateWithoutScheduleInput)
  create?: Array<ReservationCreateWithoutScheduleInput>;
  @Field(() => [ReservationCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutScheduleInput>;
  @Field(() => [ReservationUpsertWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationUpsertWithWhereUniqueWithoutScheduleInput)
  upsert?: Array<ReservationUpsertWithWhereUniqueWithoutScheduleInput>;
  @Field(() => ReservationCreateManyScheduleInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyScheduleInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyScheduleInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  set?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  disconnect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  delete?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationUpdateWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateWithWhereUniqueWithoutScheduleInput)
  update?: Array<ReservationUpdateWithWhereUniqueWithoutScheduleInput>;
  @Field(() => [ReservationUpdateManyWithWhereWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateManyWithWhereWithoutScheduleInput)
  updateMany?: Array<ReservationUpdateManyWithWhereWithoutScheduleInput>;
  @Field(() => [ReservationScalarWhereInput], { nullable: true })
  @Type(() => ReservationScalarWhereInput)
  deleteMany?: Array<ReservationScalarWhereInput>;
}

@InputType()
export class ReservationUncheckedUpdateManyWithoutUserNestedInput {
  @Field(() => [ReservationCreateWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateWithoutUserInput)
  create?: Array<ReservationCreateWithoutUserInput>;
  @Field(() => [ReservationCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutUserInput>;
  @Field(() => [ReservationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReservationUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<ReservationUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => ReservationCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyUserInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  set?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  disconnect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  delete?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<ReservationUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [ReservationUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<ReservationUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [ReservationScalarWhereInput], { nullable: true })
  @Type(() => ReservationScalarWhereInput)
  deleteMany?: Array<ReservationScalarWhereInput>;
}

@InputType()
export class ReservationUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReservationUncheckedUpdateWithoutPaymentInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReservationUncheckedUpdateWithoutScheduleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => PaymentUncheckedUpdateOneWithoutReservationNestedInput, {
    nullable: true,
  })
  Payment?: InstanceType<
    typeof PaymentUncheckedUpdateOneWithoutReservationNestedInput
  >;
}

@InputType()
export class ReservationUncheckedUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => PaymentUncheckedUpdateOneWithoutReservationNestedInput, {
    nullable: true,
  })
  Payment?: InstanceType<
    typeof PaymentUncheckedUpdateOneWithoutReservationNestedInput
  >;
}

@InputType()
export class ReservationUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  userId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => PaymentUncheckedUpdateOneWithoutReservationNestedInput, {
    nullable: true,
  })
  Payment?: InstanceType<
    typeof PaymentUncheckedUpdateOneWithoutReservationNestedInput
  >;
}

@InputType()
export class ReservationUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReservationUpdateManyWithWhereWithoutScheduleInput {
  @Field(() => ReservationScalarWhereInput, { nullable: false })
  @Type(() => ReservationScalarWhereInput)
  where!: InstanceType<typeof ReservationScalarWhereInput>;
  @Field(() => ReservationUpdateManyMutationInput, { nullable: false })
  @Type(() => ReservationUpdateManyMutationInput)
  data!: InstanceType<typeof ReservationUpdateManyMutationInput>;
}

@InputType()
export class ReservationUpdateManyWithWhereWithoutUserInput {
  @Field(() => ReservationScalarWhereInput, { nullable: false })
  @Type(() => ReservationScalarWhereInput)
  where!: InstanceType<typeof ReservationScalarWhereInput>;
  @Field(() => ReservationUpdateManyMutationInput, { nullable: false })
  @Type(() => ReservationUpdateManyMutationInput)
  data!: InstanceType<typeof ReservationUpdateManyMutationInput>;
}

@InputType()
export class ReservationUpdateManyWithoutScheduleNestedInput {
  @Field(() => [ReservationCreateWithoutScheduleInput], { nullable: true })
  @Type(() => ReservationCreateWithoutScheduleInput)
  create?: Array<ReservationCreateWithoutScheduleInput>;
  @Field(() => [ReservationCreateOrConnectWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutScheduleInput>;
  @Field(() => [ReservationUpsertWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationUpsertWithWhereUniqueWithoutScheduleInput)
  upsert?: Array<ReservationUpsertWithWhereUniqueWithoutScheduleInput>;
  @Field(() => ReservationCreateManyScheduleInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyScheduleInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyScheduleInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  set?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  disconnect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  delete?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationUpdateWithWhereUniqueWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateWithWhereUniqueWithoutScheduleInput)
  update?: Array<ReservationUpdateWithWhereUniqueWithoutScheduleInput>;
  @Field(() => [ReservationUpdateManyWithWhereWithoutScheduleInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateManyWithWhereWithoutScheduleInput)
  updateMany?: Array<ReservationUpdateManyWithWhereWithoutScheduleInput>;
  @Field(() => [ReservationScalarWhereInput], { nullable: true })
  @Type(() => ReservationScalarWhereInput)
  deleteMany?: Array<ReservationScalarWhereInput>;
}

@InputType()
export class ReservationUpdateManyWithoutUserNestedInput {
  @Field(() => [ReservationCreateWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateWithoutUserInput)
  create?: Array<ReservationCreateWithoutUserInput>;
  @Field(() => [ReservationCreateOrConnectWithoutUserInput], { nullable: true })
  @Type(() => ReservationCreateOrConnectWithoutUserInput)
  connectOrCreate?: Array<ReservationCreateOrConnectWithoutUserInput>;
  @Field(() => [ReservationUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReservationUpsertWithWhereUniqueWithoutUserInput)
  upsert?: Array<ReservationUpsertWithWhereUniqueWithoutUserInput>;
  @Field(() => ReservationCreateManyUserInputEnvelope, { nullable: true })
  @Type(() => ReservationCreateManyUserInputEnvelope)
  createMany?: InstanceType<typeof ReservationCreateManyUserInputEnvelope>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  set?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  disconnect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  delete?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationWhereUniqueInput], { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: Array<ReservationWhereUniqueInput>;
  @Field(() => [ReservationUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateWithWhereUniqueWithoutUserInput)
  update?: Array<ReservationUpdateWithWhereUniqueWithoutUserInput>;
  @Field(() => [ReservationUpdateManyWithWhereWithoutUserInput], {
    nullable: true,
  })
  @Type(() => ReservationUpdateManyWithWhereWithoutUserInput)
  updateMany?: Array<ReservationUpdateManyWithWhereWithoutUserInput>;
  @Field(() => [ReservationScalarWhereInput], { nullable: true })
  @Type(() => ReservationScalarWhereInput)
  deleteMany?: Array<ReservationScalarWhereInput>;
}

@InputType()
export class ReservationUpdateOneRequiredWithoutPaymentNestedInput {
  @Field(() => ReservationCreateWithoutPaymentInput, { nullable: true })
  @Type(() => ReservationCreateWithoutPaymentInput)
  create?: InstanceType<typeof ReservationCreateWithoutPaymentInput>;
  @Field(() => ReservationCreateOrConnectWithoutPaymentInput, {
    nullable: true,
  })
  @Type(() => ReservationCreateOrConnectWithoutPaymentInput)
  connectOrCreate?: InstanceType<
    typeof ReservationCreateOrConnectWithoutPaymentInput
  >;
  @Field(() => ReservationUpsertWithoutPaymentInput, { nullable: true })
  @Type(() => ReservationUpsertWithoutPaymentInput)
  upsert?: InstanceType<typeof ReservationUpsertWithoutPaymentInput>;
  @Field(() => ReservationWhereUniqueInput, { nullable: true })
  @Type(() => ReservationWhereUniqueInput)
  connect?: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationUpdateWithoutPaymentInput, { nullable: true })
  @Type(() => ReservationUpdateWithoutPaymentInput)
  update?: InstanceType<typeof ReservationUpdateWithoutPaymentInput>;
}

@InputType()
export class ReservationUpdateWithWhereUniqueWithoutScheduleInput {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationUpdateWithoutScheduleInput, { nullable: false })
  @Type(() => ReservationUpdateWithoutScheduleInput)
  data!: InstanceType<typeof ReservationUpdateWithoutScheduleInput>;
}

@InputType()
export class ReservationUpdateWithWhereUniqueWithoutUserInput {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationUpdateWithoutUserInput, { nullable: false })
  @Type(() => ReservationUpdateWithoutUserInput)
  data!: InstanceType<typeof ReservationUpdateWithoutUserInput>;
}

@InputType()
export class ReservationUpdateWithoutPaymentInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => UsersUpdateOneRequiredWithoutReservationNestedInput, {
    nullable: true,
  })
  user?: InstanceType<
    typeof UsersUpdateOneRequiredWithoutReservationNestedInput
  >;
  @Field(() => ScheduleUpdateOneRequiredWithoutReservationNestedInput, {
    nullable: true,
  })
  schedule?: InstanceType<
    typeof ScheduleUpdateOneRequiredWithoutReservationNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ReservationUpdateWithoutScheduleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => UsersUpdateOneRequiredWithoutReservationNestedInput, {
    nullable: true,
  })
  user?: InstanceType<
    typeof UsersUpdateOneRequiredWithoutReservationNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => PaymentUpdateOneWithoutReservationNestedInput, {
    nullable: true,
  })
  Payment?: InstanceType<typeof PaymentUpdateOneWithoutReservationNestedInput>;
}

@InputType()
export class ReservationUpdateWithoutUserInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => ScheduleUpdateOneRequiredWithoutReservationNestedInput, {
    nullable: true,
  })
  schedule?: InstanceType<
    typeof ScheduleUpdateOneRequiredWithoutReservationNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => PaymentUpdateOneWithoutReservationNestedInput, {
    nullable: true,
  })
  Payment?: InstanceType<typeof PaymentUpdateOneWithoutReservationNestedInput>;
}

@InputType()
export class ReservationUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  reservationId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => UsersUpdateOneRequiredWithoutReservationNestedInput, {
    nullable: true,
  })
  user?: InstanceType<
    typeof UsersUpdateOneRequiredWithoutReservationNestedInput
  >;
  @Field(() => ScheduleUpdateOneRequiredWithoutReservationNestedInput, {
    nullable: true,
  })
  schedule?: InstanceType<
    typeof ScheduleUpdateOneRequiredWithoutReservationNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  rowNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  columnNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  placeNumber?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  totalPrice?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => PaymentUpdateOneWithoutReservationNestedInput, {
    nullable: true,
  })
  Payment?: InstanceType<typeof PaymentUpdateOneWithoutReservationNestedInput>;
}

@InputType()
export class ReservationUpsertWithWhereUniqueWithoutScheduleInput {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationUpdateWithoutScheduleInput, { nullable: false })
  @Type(() => ReservationUpdateWithoutScheduleInput)
  update!: InstanceType<typeof ReservationUpdateWithoutScheduleInput>;
  @Field(() => ReservationCreateWithoutScheduleInput, { nullable: false })
  @Type(() => ReservationCreateWithoutScheduleInput)
  create!: InstanceType<typeof ReservationCreateWithoutScheduleInput>;
}

@InputType()
export class ReservationUpsertWithWhereUniqueWithoutUserInput {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationUpdateWithoutUserInput, { nullable: false })
  @Type(() => ReservationUpdateWithoutUserInput)
  update!: InstanceType<typeof ReservationUpdateWithoutUserInput>;
  @Field(() => ReservationCreateWithoutUserInput, { nullable: false })
  @Type(() => ReservationCreateWithoutUserInput)
  create!: InstanceType<typeof ReservationCreateWithoutUserInput>;
}

@InputType()
export class ReservationUpsertWithoutPaymentInput {
  @Field(() => ReservationUpdateWithoutPaymentInput, { nullable: false })
  @Type(() => ReservationUpdateWithoutPaymentInput)
  update!: InstanceType<typeof ReservationUpdateWithoutPaymentInput>;
  @Field(() => ReservationCreateWithoutPaymentInput, { nullable: false })
  @Type(() => ReservationCreateWithoutPaymentInput)
  create!: InstanceType<typeof ReservationCreateWithoutPaymentInput>;
}

@InputType()
export class ReservationWhereUniqueInput {
  @Field(() => String, { nullable: true })
  reservationId?: string;
  @Field(() => String, { nullable: true })
  userId?: string;
  @Field(() => String, { nullable: true })
  scheduleId?: string;
}

@InputType()
export class ReservationWhereInput {
  @Field(() => [ReservationWhereInput], { nullable: true })
  AND?: Array<ReservationWhereInput>;
  @Field(() => [ReservationWhereInput], { nullable: true })
  OR?: Array<ReservationWhereInput>;
  @Field(() => [ReservationWhereInput], { nullable: true })
  NOT?: Array<ReservationWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  reservationId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  userId?: InstanceType<typeof StringFilter>;
  @Field(() => UsersRelationFilter, { nullable: true })
  user?: InstanceType<typeof UsersRelationFilter>;
  @Field(() => StringFilter, { nullable: true })
  scheduleId?: InstanceType<typeof StringFilter>;
  @Field(() => ScheduleRelationFilter, { nullable: true })
  schedule?: InstanceType<typeof ScheduleRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  dateOfReservation?: InstanceType<typeof DateTimeFilter>;
  @Field(() => IntFilter, { nullable: true })
  rowNumber?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  columnNumber?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  placeNumber?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  totalPrice?: InstanceType<typeof IntFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => PaymentRelationFilter, { nullable: true })
  Payment?: InstanceType<typeof PaymentRelationFilter>;
}

@ObjectType()
export class Reservation {
  @Field(() => ID, { nullable: false })
  reservationId!: string;
  @Field(() => String, { nullable: false })
  userId!: string;
  @Field(() => Users, { nullable: false })
  user?: InstanceType<typeof Users>;
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => Schedule, { nullable: false })
  schedule?: InstanceType<typeof Schedule>;
  @Field(() => Date, { nullable: false })
  dateOfReservation!: Date;
  @Field(() => Int, { nullable: false })
  rowNumber!: number;
  @Field(() => Int, { nullable: false })
  columnNumber!: number;
  @Field(() => Int, { nullable: false })
  placeNumber!: number;
  @Field(() => Int, { nullable: false })
  totalPrice!: number;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => Payment, { nullable: true })
  Payment?: InstanceType<typeof Payment> | null;
}

@InputType()
export class UpdateManyReservationArgs {
  @Field(() => ReservationUpdateManyMutationInput, { nullable: false })
  @Type(() => ReservationUpdateManyMutationInput)
  data!: InstanceType<typeof ReservationUpdateManyMutationInput>;
  @Field(() => ReservationWhereInput, { nullable: true })
  @Type(() => ReservationWhereInput)
  where?: InstanceType<typeof ReservationWhereInput>;
}

@InputType()
export class UpdateOneReservationArgs {
  @Field(() => ReservationUpdateInput, { nullable: false })
  @Type(() => ReservationUpdateInput)
  data!: InstanceType<typeof ReservationUpdateInput>;
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
}

@InputType()
export class UpsertOneReservationArgs {
  @Field(() => ReservationWhereUniqueInput, { nullable: false })
  @Type(() => ReservationWhereUniqueInput)
  where!: InstanceType<typeof ReservationWhereUniqueInput>;
  @Field(() => ReservationCreateInput, { nullable: false })
  @Type(() => ReservationCreateInput)
  create!: InstanceType<typeof ReservationCreateInput>;
  @Field(() => ReservationUpdateInput, { nullable: false })
  @Type(() => ReservationUpdateInput)
  update!: InstanceType<typeof ReservationUpdateInput>;
}

@ObjectType()
export class AggregateSchedule {
  @Field(() => ScheduleCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ScheduleCountAggregate>;
  @Field(() => ScheduleMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ScheduleMinAggregate>;
  @Field(() => ScheduleMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ScheduleMaxAggregate>;
}

@InputType()
export class CreateManyScheduleArgs {
  @Field(() => [ScheduleCreateManyInput], { nullable: false })
  @Type(() => ScheduleCreateManyInput)
  data!: Array<ScheduleCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneScheduleArgs {
  @Field(() => ScheduleCreateInput, { nullable: false })
  @Type(() => ScheduleCreateInput)
  data!: InstanceType<typeof ScheduleCreateInput>;
}

@InputType()
export class DeleteManyScheduleArgs {
  @Field(() => ScheduleWhereInput, { nullable: true })
  @Type(() => ScheduleWhereInput)
  where?: InstanceType<typeof ScheduleWhereInput>;
}

@InputType()
export class DeleteOneScheduleArgs {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
}

@InputType()
export class FindFirstScheduleOrThrowArgs {
  @Field(() => ScheduleWhereInput, { nullable: true })
  @Type(() => ScheduleWhereInput)
  where?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => [ScheduleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ScheduleOrderByWithRelationInput>;
  @Field(() => ScheduleWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ScheduleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScheduleScalarFieldEnum>;
}

@InputType()
export class FindFirstScheduleArgs {
  @Field(() => ScheduleWhereInput, { nullable: true })
  @Type(() => ScheduleWhereInput)
  where?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => [ScheduleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ScheduleOrderByWithRelationInput>;
  @Field(() => ScheduleWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ScheduleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScheduleScalarFieldEnum>;
}

@InputType()
export class FindManyScheduleArgs {
  @Field(() => ScheduleWhereInput, { nullable: true })
  @Type(() => ScheduleWhereInput)
  where?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => [ScheduleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ScheduleOrderByWithRelationInput>;
  @Field(() => ScheduleWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [ScheduleScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof ScheduleScalarFieldEnum>;
}

@InputType()
export class FindUniqueScheduleOrThrowArgs {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
}

@InputType()
export class FindUniqueScheduleArgs {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
}

@InputType()
export class ScheduleAggregateArgs {
  @Field(() => ScheduleWhereInput, { nullable: true })
  @Type(() => ScheduleWhereInput)
  where?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => [ScheduleOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<ScheduleOrderByWithRelationInput>;
  @Field(() => ScheduleWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ScheduleCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ScheduleCountAggregateInput>;
  @Field(() => ScheduleMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ScheduleMinAggregateInput>;
  @Field(() => ScheduleMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ScheduleMaxAggregateInput>;
}

@InputType()
export class ScheduleCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  scheduleId?: true;
  @Field(() => Boolean, { nullable: true })
  transportLineId?: true;
  @Field(() => Boolean, { nullable: true })
  hourDepart?: true;
  @Field(() => Boolean, { nullable: true })
  hourArrival?: true;
  @Field(() => Boolean, { nullable: true })
  hourEmbarquing?: true;
  @Field(() => Boolean, { nullable: true })
  isPaid?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class ScheduleCountAggregate {
  @Field(() => Int, { nullable: false })
  scheduleId!: number;
  @Field(() => Int, { nullable: false })
  transportLineId!: number;
  @Field(() => Int, { nullable: false })
  hourDepart!: number;
  @Field(() => Int, { nullable: false })
  hourArrival!: number;
  @Field(() => Int, { nullable: false })
  hourEmbarquing!: number;
  @Field(() => Int, { nullable: false })
  isPaid!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class ScheduleCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourEmbarquing?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class ScheduleCount {
  @Field(() => Int, { nullable: false })
  Reservation?: number;
}

@InputType()
export class ScheduleCreateManyTransportLineInputEnvelope {
  @Field(() => [ScheduleCreateManyTransportLineInput], { nullable: false })
  @Type(() => ScheduleCreateManyTransportLineInput)
  data!: Array<ScheduleCreateManyTransportLineInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class ScheduleCreateManyTransportLineInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ScheduleCreateManyInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => String, { nullable: false })
  transportLineId!: string;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ScheduleCreateNestedManyWithoutTransportLineInput {
  @Field(() => [ScheduleCreateWithoutTransportLineInput], { nullable: true })
  @Type(() => ScheduleCreateWithoutTransportLineInput)
  create?: Array<ScheduleCreateWithoutTransportLineInput>;
  @Field(() => [ScheduleCreateOrConnectWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleCreateOrConnectWithoutTransportLineInput)
  connectOrCreate?: Array<ScheduleCreateOrConnectWithoutTransportLineInput>;
  @Field(() => ScheduleCreateManyTransportLineInputEnvelope, { nullable: true })
  @Type(() => ScheduleCreateManyTransportLineInputEnvelope)
  createMany?: InstanceType<
    typeof ScheduleCreateManyTransportLineInputEnvelope
  >;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  connect?: Array<ScheduleWhereUniqueInput>;
}

@InputType()
export class ScheduleCreateNestedOneWithoutReservationInput {
  @Field(() => ScheduleCreateWithoutReservationInput, { nullable: true })
  @Type(() => ScheduleCreateWithoutReservationInput)
  create?: InstanceType<typeof ScheduleCreateWithoutReservationInput>;
  @Field(() => ScheduleCreateOrConnectWithoutReservationInput, {
    nullable: true,
  })
  @Type(() => ScheduleCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof ScheduleCreateOrConnectWithoutReservationInput
  >;
  @Field(() => ScheduleWhereUniqueInput, { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  connect?: InstanceType<typeof ScheduleWhereUniqueInput>;
}

@InputType()
export class ScheduleCreateOrConnectWithoutReservationInput {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => ScheduleCreateWithoutReservationInput, { nullable: false })
  @Type(() => ScheduleCreateWithoutReservationInput)
  create!: InstanceType<typeof ScheduleCreateWithoutReservationInput>;
}

@InputType()
export class ScheduleCreateOrConnectWithoutTransportLineInput {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => ScheduleCreateWithoutTransportLineInput, { nullable: false })
  @Type(() => ScheduleCreateWithoutTransportLineInput)
  create!: InstanceType<typeof ScheduleCreateWithoutTransportLineInput>;
}

@InputType()
export class ScheduleCreateWithoutReservationInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => TransportLineCreateNestedOneWithoutScheduleInput, {
    nullable: false,
  })
  transportLine!: InstanceType<
    typeof TransportLineCreateNestedOneWithoutScheduleInput
  >;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ScheduleCreateWithoutTransportLineInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ReservationCreateNestedManyWithoutScheduleInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationCreateNestedManyWithoutScheduleInput
  >;
}

@InputType()
export class ScheduleCreateInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => TransportLineCreateNestedOneWithoutScheduleInput, {
    nullable: false,
  })
  transportLine!: InstanceType<
    typeof TransportLineCreateNestedOneWithoutScheduleInput
  >;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ReservationCreateNestedManyWithoutScheduleInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationCreateNestedManyWithoutScheduleInput
  >;
}

@InputType()
export class ScheduleGroupByArgs {
  @Field(() => ScheduleWhereInput, { nullable: true })
  @Type(() => ScheduleWhereInput)
  where?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => [ScheduleOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<ScheduleOrderByWithAggregationInput>;
  @Field(() => [ScheduleScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof ScheduleScalarFieldEnum>;
  @Field(() => ScheduleScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof ScheduleScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => ScheduleCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ScheduleCountAggregateInput>;
  @Field(() => ScheduleMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ScheduleMinAggregateInput>;
  @Field(() => ScheduleMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ScheduleMaxAggregateInput>;
}

@ObjectType()
export class ScheduleGroupBy {
  @Field(() => String, { nullable: false })
  scheduleId!: string;
  @Field(() => String, { nullable: false })
  transportLineId!: string;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => ScheduleCountAggregate, { nullable: true })
  _count?: InstanceType<typeof ScheduleCountAggregate>;
  @Field(() => ScheduleMinAggregate, { nullable: true })
  _min?: InstanceType<typeof ScheduleMinAggregate>;
  @Field(() => ScheduleMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof ScheduleMaxAggregate>;
}

@InputType()
export class ScheduleListRelationFilter {
  @Field(() => ScheduleWhereInput, { nullable: true })
  every?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => ScheduleWhereInput, { nullable: true })
  some?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => ScheduleWhereInput, { nullable: true })
  none?: InstanceType<typeof ScheduleWhereInput>;
}

@InputType()
export class ScheduleMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  scheduleId?: true;
  @Field(() => Boolean, { nullable: true })
  transportLineId?: true;
  @Field(() => Boolean, { nullable: true })
  hourDepart?: true;
  @Field(() => Boolean, { nullable: true })
  hourArrival?: true;
  @Field(() => Boolean, { nullable: true })
  hourEmbarquing?: true;
  @Field(() => Boolean, { nullable: true })
  isPaid?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class ScheduleMaxAggregate {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => Date, { nullable: true })
  hourDepart?: Date | string;
  @Field(() => Date, { nullable: true })
  hourArrival?: Date | string;
  @Field(() => Date, { nullable: true })
  hourEmbarquing?: Date | string;
  @Field(() => Boolean, { nullable: true })
  isPaid?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ScheduleMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourEmbarquing?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ScheduleMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  scheduleId?: true;
  @Field(() => Boolean, { nullable: true })
  transportLineId?: true;
  @Field(() => Boolean, { nullable: true })
  hourDepart?: true;
  @Field(() => Boolean, { nullable: true })
  hourArrival?: true;
  @Field(() => Boolean, { nullable: true })
  hourEmbarquing?: true;
  @Field(() => Boolean, { nullable: true })
  isPaid?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class ScheduleMinAggregate {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => Date, { nullable: true })
  hourDepart?: Date | string;
  @Field(() => Date, { nullable: true })
  hourArrival?: Date | string;
  @Field(() => Date, { nullable: true })
  hourEmbarquing?: Date | string;
  @Field(() => Boolean, { nullable: true })
  isPaid?: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ScheduleMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourEmbarquing?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class ScheduleOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class ScheduleOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourEmbarquing?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => ScheduleCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof ScheduleCountOrderByAggregateInput>;
  @Field(() => ScheduleMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof ScheduleMaxOrderByAggregateInput>;
  @Field(() => ScheduleMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof ScheduleMinOrderByAggregateInput>;
}

@InputType()
export class ScheduleOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  scheduleId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => TransportLineOrderByWithRelationInput, { nullable: true })
  transportLine?: InstanceType<typeof TransportLineOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  hourDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  hourEmbarquing?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  isPaid?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => ReservationOrderByRelationAggregateInput, { nullable: true })
  Reservation?: InstanceType<typeof ReservationOrderByRelationAggregateInput>;
}

@InputType()
export class ScheduleRelationFilter {
  @Field(() => ScheduleWhereInput, { nullable: true })
  is?: InstanceType<typeof ScheduleWhereInput>;
  @Field(() => ScheduleWhereInput, { nullable: true })
  isNot?: InstanceType<typeof ScheduleWhereInput>;
}

@InputType()
export class ScheduleScalarWhereWithAggregatesInput {
  @Field(() => [ScheduleScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<ScheduleScalarWhereWithAggregatesInput>;
  @Field(() => [ScheduleScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<ScheduleScalarWhereWithAggregatesInput>;
  @Field(() => [ScheduleScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<ScheduleScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  scheduleId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  transportLineId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => BoolWithAggregatesFilter, { nullable: true })
  isPaid?: InstanceType<typeof BoolWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class ScheduleScalarWhereInput {
  @Field(() => [ScheduleScalarWhereInput], { nullable: true })
  AND?: Array<ScheduleScalarWhereInput>;
  @Field(() => [ScheduleScalarWhereInput], { nullable: true })
  OR?: Array<ScheduleScalarWhereInput>;
  @Field(() => [ScheduleScalarWhereInput], { nullable: true })
  NOT?: Array<ScheduleScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  scheduleId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  transportLineId?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFilter>;
  @Field(() => BoolFilter, { nullable: true })
  isPaid?: InstanceType<typeof BoolFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
}

@InputType()
export class ScheduleUncheckedCreateNestedManyWithoutTransportLineInput {
  @Field(() => [ScheduleCreateWithoutTransportLineInput], { nullable: true })
  @Type(() => ScheduleCreateWithoutTransportLineInput)
  create?: Array<ScheduleCreateWithoutTransportLineInput>;
  @Field(() => [ScheduleCreateOrConnectWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleCreateOrConnectWithoutTransportLineInput)
  connectOrCreate?: Array<ScheduleCreateOrConnectWithoutTransportLineInput>;
  @Field(() => ScheduleCreateManyTransportLineInputEnvelope, { nullable: true })
  @Type(() => ScheduleCreateManyTransportLineInputEnvelope)
  createMany?: InstanceType<
    typeof ScheduleCreateManyTransportLineInputEnvelope
  >;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  connect?: Array<ScheduleWhereUniqueInput>;
}

@InputType()
export class ScheduleUncheckedCreateWithoutReservationInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => String, { nullable: false })
  transportLineId!: string;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class ScheduleUncheckedCreateWithoutTransportLineInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ReservationUncheckedCreateNestedManyWithoutScheduleInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUncheckedCreateNestedManyWithoutScheduleInput
  >;
}

@InputType()
export class ScheduleUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => String, { nullable: false })
  transportLineId!: string;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date | string;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date | string;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date | string;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => ReservationUncheckedCreateNestedManyWithoutScheduleInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUncheckedCreateNestedManyWithoutScheduleInput
  >;
}

@InputType()
export class ScheduleUncheckedUpdateManyWithoutScheduleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ScheduleUncheckedUpdateManyWithoutTransportLineNestedInput {
  @Field(() => [ScheduleCreateWithoutTransportLineInput], { nullable: true })
  @Type(() => ScheduleCreateWithoutTransportLineInput)
  create?: Array<ScheduleCreateWithoutTransportLineInput>;
  @Field(() => [ScheduleCreateOrConnectWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleCreateOrConnectWithoutTransportLineInput)
  connectOrCreate?: Array<ScheduleCreateOrConnectWithoutTransportLineInput>;
  @Field(() => [ScheduleUpsertWithWhereUniqueWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleUpsertWithWhereUniqueWithoutTransportLineInput)
  upsert?: Array<ScheduleUpsertWithWhereUniqueWithoutTransportLineInput>;
  @Field(() => ScheduleCreateManyTransportLineInputEnvelope, { nullable: true })
  @Type(() => ScheduleCreateManyTransportLineInputEnvelope)
  createMany?: InstanceType<
    typeof ScheduleCreateManyTransportLineInputEnvelope
  >;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  set?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  disconnect?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  delete?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  connect?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleUpdateWithWhereUniqueWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleUpdateWithWhereUniqueWithoutTransportLineInput)
  update?: Array<ScheduleUpdateWithWhereUniqueWithoutTransportLineInput>;
  @Field(() => [ScheduleUpdateManyWithWhereWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleUpdateManyWithWhereWithoutTransportLineInput)
  updateMany?: Array<ScheduleUpdateManyWithWhereWithoutTransportLineInput>;
  @Field(() => [ScheduleScalarWhereInput], { nullable: true })
  @Type(() => ScheduleScalarWhereInput)
  deleteMany?: Array<ScheduleScalarWhereInput>;
}

@InputType()
export class ScheduleUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ScheduleUncheckedUpdateWithoutReservationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ScheduleUncheckedUpdateWithoutTransportLineInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ReservationUncheckedUpdateManyWithoutScheduleNestedInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUncheckedUpdateManyWithoutScheduleNestedInput
  >;
}

@InputType()
export class ScheduleUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ReservationUncheckedUpdateManyWithoutScheduleNestedInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUncheckedUpdateManyWithoutScheduleNestedInput
  >;
}

@InputType()
export class ScheduleUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ScheduleUpdateManyWithWhereWithoutTransportLineInput {
  @Field(() => ScheduleScalarWhereInput, { nullable: false })
  @Type(() => ScheduleScalarWhereInput)
  where!: InstanceType<typeof ScheduleScalarWhereInput>;
  @Field(() => ScheduleUpdateManyMutationInput, { nullable: false })
  @Type(() => ScheduleUpdateManyMutationInput)
  data!: InstanceType<typeof ScheduleUpdateManyMutationInput>;
}

@InputType()
export class ScheduleUpdateManyWithoutTransportLineNestedInput {
  @Field(() => [ScheduleCreateWithoutTransportLineInput], { nullable: true })
  @Type(() => ScheduleCreateWithoutTransportLineInput)
  create?: Array<ScheduleCreateWithoutTransportLineInput>;
  @Field(() => [ScheduleCreateOrConnectWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleCreateOrConnectWithoutTransportLineInput)
  connectOrCreate?: Array<ScheduleCreateOrConnectWithoutTransportLineInput>;
  @Field(() => [ScheduleUpsertWithWhereUniqueWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleUpsertWithWhereUniqueWithoutTransportLineInput)
  upsert?: Array<ScheduleUpsertWithWhereUniqueWithoutTransportLineInput>;
  @Field(() => ScheduleCreateManyTransportLineInputEnvelope, { nullable: true })
  @Type(() => ScheduleCreateManyTransportLineInputEnvelope)
  createMany?: InstanceType<
    typeof ScheduleCreateManyTransportLineInputEnvelope
  >;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  set?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  disconnect?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  delete?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleWhereUniqueInput], { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  connect?: Array<ScheduleWhereUniqueInput>;
  @Field(() => [ScheduleUpdateWithWhereUniqueWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleUpdateWithWhereUniqueWithoutTransportLineInput)
  update?: Array<ScheduleUpdateWithWhereUniqueWithoutTransportLineInput>;
  @Field(() => [ScheduleUpdateManyWithWhereWithoutTransportLineInput], {
    nullable: true,
  })
  @Type(() => ScheduleUpdateManyWithWhereWithoutTransportLineInput)
  updateMany?: Array<ScheduleUpdateManyWithWhereWithoutTransportLineInput>;
  @Field(() => [ScheduleScalarWhereInput], { nullable: true })
  @Type(() => ScheduleScalarWhereInput)
  deleteMany?: Array<ScheduleScalarWhereInput>;
}

@InputType()
export class ScheduleUpdateOneRequiredWithoutReservationNestedInput {
  @Field(() => ScheduleCreateWithoutReservationInput, { nullable: true })
  @Type(() => ScheduleCreateWithoutReservationInput)
  create?: InstanceType<typeof ScheduleCreateWithoutReservationInput>;
  @Field(() => ScheduleCreateOrConnectWithoutReservationInput, {
    nullable: true,
  })
  @Type(() => ScheduleCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof ScheduleCreateOrConnectWithoutReservationInput
  >;
  @Field(() => ScheduleUpsertWithoutReservationInput, { nullable: true })
  @Type(() => ScheduleUpsertWithoutReservationInput)
  upsert?: InstanceType<typeof ScheduleUpsertWithoutReservationInput>;
  @Field(() => ScheduleWhereUniqueInput, { nullable: true })
  @Type(() => ScheduleWhereUniqueInput)
  connect?: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => ScheduleUpdateWithoutReservationInput, { nullable: true })
  @Type(() => ScheduleUpdateWithoutReservationInput)
  update?: InstanceType<typeof ScheduleUpdateWithoutReservationInput>;
}

@InputType()
export class ScheduleUpdateWithWhereUniqueWithoutTransportLineInput {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => ScheduleUpdateWithoutTransportLineInput, { nullable: false })
  @Type(() => ScheduleUpdateWithoutTransportLineInput)
  data!: InstanceType<typeof ScheduleUpdateWithoutTransportLineInput>;
}

@InputType()
export class ScheduleUpdateWithoutReservationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TransportLineUpdateOneRequiredWithoutScheduleNestedInput, {
    nullable: true,
  })
  transportLine?: InstanceType<
    typeof TransportLineUpdateOneRequiredWithoutScheduleNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class ScheduleUpdateWithoutTransportLineInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ReservationUpdateManyWithoutScheduleNestedInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUpdateManyWithoutScheduleNestedInput
  >;
}

@InputType()
export class ScheduleUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  scheduleId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TransportLineUpdateOneRequiredWithoutScheduleNestedInput, {
    nullable: true,
  })
  transportLine?: InstanceType<
    typeof TransportLineUpdateOneRequiredWithoutScheduleNestedInput
  >;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => BoolFieldUpdateOperationsInput, { nullable: true })
  isPaid?: InstanceType<typeof BoolFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => ReservationUpdateManyWithoutScheduleNestedInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUpdateManyWithoutScheduleNestedInput
  >;
}

@InputType()
export class ScheduleUpsertWithWhereUniqueWithoutTransportLineInput {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => ScheduleUpdateWithoutTransportLineInput, { nullable: false })
  @Type(() => ScheduleUpdateWithoutTransportLineInput)
  update!: InstanceType<typeof ScheduleUpdateWithoutTransportLineInput>;
  @Field(() => ScheduleCreateWithoutTransportLineInput, { nullable: false })
  @Type(() => ScheduleCreateWithoutTransportLineInput)
  create!: InstanceType<typeof ScheduleCreateWithoutTransportLineInput>;
}

@InputType()
export class ScheduleUpsertWithoutReservationInput {
  @Field(() => ScheduleUpdateWithoutReservationInput, { nullable: false })
  @Type(() => ScheduleUpdateWithoutReservationInput)
  update!: InstanceType<typeof ScheduleUpdateWithoutReservationInput>;
  @Field(() => ScheduleCreateWithoutReservationInput, { nullable: false })
  @Type(() => ScheduleCreateWithoutReservationInput)
  create!: InstanceType<typeof ScheduleCreateWithoutReservationInput>;
}

@InputType()
export class ScheduleWhereUniqueInput {
  @Field(() => String, { nullable: true })
  scheduleId?: string;
  @Field(() => String, { nullable: true })
  transportLineId?: string;
}

@InputType()
export class ScheduleWhereInput {
  @Field(() => [ScheduleWhereInput], { nullable: true })
  AND?: Array<ScheduleWhereInput>;
  @Field(() => [ScheduleWhereInput], { nullable: true })
  OR?: Array<ScheduleWhereInput>;
  @Field(() => [ScheduleWhereInput], { nullable: true })
  NOT?: Array<ScheduleWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  scheduleId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  transportLineId?: InstanceType<typeof StringFilter>;
  @Field(() => TransportLineRelationFilter, { nullable: true })
  transportLine?: InstanceType<typeof TransportLineRelationFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  hourDepart?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  hourArrival?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  hourEmbarquing?: InstanceType<typeof DateTimeFilter>;
  @Field(() => BoolFilter, { nullable: true })
  isPaid?: InstanceType<typeof BoolFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => ReservationListRelationFilter, { nullable: true })
  Reservation?: InstanceType<typeof ReservationListRelationFilter>;
}

@ObjectType()
export class Schedule {
  @Field(() => ID, { nullable: false })
  scheduleId!: string;
  @Field(() => String, { nullable: false })
  transportLineId!: string;
  @Field(() => TransportLine, { nullable: false })
  transportLine?: InstanceType<typeof TransportLine>;
  @Field(() => Date, { nullable: false })
  hourDepart!: Date;
  @Field(() => Date, { nullable: false })
  hourArrival!: Date;
  @Field(() => Date, { nullable: false })
  hourEmbarquing!: Date;
  @Field(() => Boolean, { nullable: false })
  isPaid!: boolean;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => [Reservation], { nullable: true })
  Reservation?: Array<Reservation>;
  @Field(() => ScheduleCount, { nullable: false })
  _count?: InstanceType<typeof ScheduleCount>;
}

@InputType()
export class UpdateManyScheduleArgs {
  @Field(() => ScheduleUpdateManyMutationInput, { nullable: false })
  @Type(() => ScheduleUpdateManyMutationInput)
  data!: InstanceType<typeof ScheduleUpdateManyMutationInput>;
  @Field(() => ScheduleWhereInput, { nullable: true })
  @Type(() => ScheduleWhereInput)
  where?: InstanceType<typeof ScheduleWhereInput>;
}

@InputType()
export class UpdateOneScheduleArgs {
  @Field(() => ScheduleUpdateInput, { nullable: false })
  @Type(() => ScheduleUpdateInput)
  data!: InstanceType<typeof ScheduleUpdateInput>;
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
}

@InputType()
export class UpsertOneScheduleArgs {
  @Field(() => ScheduleWhereUniqueInput, { nullable: false })
  @Type(() => ScheduleWhereUniqueInput)
  where!: InstanceType<typeof ScheduleWhereUniqueInput>;
  @Field(() => ScheduleCreateInput, { nullable: false })
  @Type(() => ScheduleCreateInput)
  create!: InstanceType<typeof ScheduleCreateInput>;
  @Field(() => ScheduleUpdateInput, { nullable: false })
  @Type(() => ScheduleUpdateInput)
  update!: InstanceType<typeof ScheduleUpdateInput>;
}

@ObjectType()
export class AggregateTown {
  @Field(() => TownCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TownCountAggregate>;
  @Field(() => TownMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TownMinAggregate>;
  @Field(() => TownMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TownMaxAggregate>;
}

@InputType()
export class CreateManyTownArgs {
  @Field(() => [TownCreateManyInput], { nullable: false })
  @Type(() => TownCreateManyInput)
  data!: Array<TownCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneTownArgs {
  @Field(() => TownCreateInput, { nullable: false })
  @Type(() => TownCreateInput)
  data!: InstanceType<typeof TownCreateInput>;
}

@InputType()
export class DeleteManyTownArgs {
  @Field(() => TownWhereInput, { nullable: true })
  @Type(() => TownWhereInput)
  where?: InstanceType<typeof TownWhereInput>;
}

@InputType()
export class DeleteOneTownArgs {
  @Field(() => TownWhereUniqueInput, { nullable: false })
  @Type(() => TownWhereUniqueInput)
  where!: InstanceType<typeof TownWhereUniqueInput>;
}

@InputType()
export class FindFirstTownOrThrowArgs {
  @Field(() => TownWhereInput, { nullable: true })
  @Type(() => TownWhereInput)
  where?: InstanceType<typeof TownWhereInput>;
  @Field(() => [TownOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TownOrderByWithRelationInput>;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TownScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TownScalarFieldEnum>;
}

@InputType()
export class FindFirstTownArgs {
  @Field(() => TownWhereInput, { nullable: true })
  @Type(() => TownWhereInput)
  where?: InstanceType<typeof TownWhereInput>;
  @Field(() => [TownOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TownOrderByWithRelationInput>;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TownScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TownScalarFieldEnum>;
}

@InputType()
export class FindManyTownArgs {
  @Field(() => TownWhereInput, { nullable: true })
  @Type(() => TownWhereInput)
  where?: InstanceType<typeof TownWhereInput>;
  @Field(() => [TownOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TownOrderByWithRelationInput>;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TownScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TownScalarFieldEnum>;
}

@InputType()
export class FindUniqueTownOrThrowArgs {
  @Field(() => TownWhereUniqueInput, { nullable: false })
  @Type(() => TownWhereUniqueInput)
  where!: InstanceType<typeof TownWhereUniqueInput>;
}

@InputType()
export class FindUniqueTownArgs {
  @Field(() => TownWhereUniqueInput, { nullable: false })
  @Type(() => TownWhereUniqueInput)
  where!: InstanceType<typeof TownWhereUniqueInput>;
}

@InputType()
export class TownAggregateArgs {
  @Field(() => TownWhereInput, { nullable: true })
  @Type(() => TownWhereInput)
  where?: InstanceType<typeof TownWhereInput>;
  @Field(() => [TownOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TownOrderByWithRelationInput>;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TownCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TownCountAggregateInput>;
  @Field(() => TownMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TownMinAggregateInput>;
  @Field(() => TownMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TownMaxAggregateInput>;
}

@InputType()
export class TownCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  townId?: true;
  @Field(() => Boolean, { nullable: true })
  townName?: true;
  @Field(() => Boolean, { nullable: true })
  provice?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class TownCountAggregate {
  @Field(() => Int, { nullable: false })
  townId!: number;
  @Field(() => Int, { nullable: false })
  townName!: number;
  @Field(() => Int, { nullable: false })
  provice!: number;
  @Field(() => Int, { nullable: false })
  createdAt!: number;
  @Field(() => Int, { nullable: false })
  updatedAt!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class TownCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  townId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@ObjectType()
export class TownCount {
  @Field(() => Int, { nullable: false })
  departs?: number;
  @Field(() => Int, { nullable: false })
  arrivals?: number;
}

@InputType()
export class TownCreateManyInput {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class TownCreateNestedOneWithoutArrivalsInput {
  @Field(() => TownCreateWithoutArrivalsInput, { nullable: true })
  @Type(() => TownCreateWithoutArrivalsInput)
  create?: InstanceType<typeof TownCreateWithoutArrivalsInput>;
  @Field(() => TownCreateOrConnectWithoutArrivalsInput, { nullable: true })
  @Type(() => TownCreateOrConnectWithoutArrivalsInput)
  connectOrCreate?: InstanceType<
    typeof TownCreateOrConnectWithoutArrivalsInput
  >;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  @Type(() => TownWhereUniqueInput)
  connect?: InstanceType<typeof TownWhereUniqueInput>;
}

@InputType()
export class TownCreateNestedOneWithoutDepartsInput {
  @Field(() => TownCreateWithoutDepartsInput, { nullable: true })
  @Type(() => TownCreateWithoutDepartsInput)
  create?: InstanceType<typeof TownCreateWithoutDepartsInput>;
  @Field(() => TownCreateOrConnectWithoutDepartsInput, { nullable: true })
  @Type(() => TownCreateOrConnectWithoutDepartsInput)
  connectOrCreate?: InstanceType<typeof TownCreateOrConnectWithoutDepartsInput>;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  @Type(() => TownWhereUniqueInput)
  connect?: InstanceType<typeof TownWhereUniqueInput>;
}

@InputType()
export class TownCreateOrConnectWithoutArrivalsInput {
  @Field(() => TownWhereUniqueInput, { nullable: false })
  @Type(() => TownWhereUniqueInput)
  where!: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => TownCreateWithoutArrivalsInput, { nullable: false })
  @Type(() => TownCreateWithoutArrivalsInput)
  create!: InstanceType<typeof TownCreateWithoutArrivalsInput>;
}

@InputType()
export class TownCreateOrConnectWithoutDepartsInput {
  @Field(() => TownWhereUniqueInput, { nullable: false })
  @Type(() => TownWhereUniqueInput)
  where!: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => TownCreateWithoutDepartsInput, { nullable: false })
  @Type(() => TownCreateWithoutDepartsInput)
  create!: InstanceType<typeof TownCreateWithoutDepartsInput>;
}

@InputType()
export class TownCreateWithoutArrivalsInput {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => TransportLineCreateNestedManyWithoutDepartTownInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineCreateNestedManyWithoutDepartTownInput
  >;
}

@InputType()
export class TownCreateWithoutDepartsInput {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => TransportLineCreateNestedManyWithoutArrivalTownInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineCreateNestedManyWithoutArrivalTownInput
  >;
}

@InputType()
export class TownCreateInput {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => TransportLineCreateNestedManyWithoutDepartTownInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineCreateNestedManyWithoutDepartTownInput
  >;
  @Field(() => TransportLineCreateNestedManyWithoutArrivalTownInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineCreateNestedManyWithoutArrivalTownInput
  >;
}

@InputType()
export class TownGroupByArgs {
  @Field(() => TownWhereInput, { nullable: true })
  @Type(() => TownWhereInput)
  where?: InstanceType<typeof TownWhereInput>;
  @Field(() => [TownOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<TownOrderByWithAggregationInput>;
  @Field(() => [TownScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TownScalarFieldEnum>;
  @Field(() => TownScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof TownScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TownCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TownCountAggregateInput>;
  @Field(() => TownMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TownMinAggregateInput>;
  @Field(() => TownMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TownMaxAggregateInput>;
}

@ObjectType()
export class TownGroupBy {
  @Field(() => String, { nullable: false })
  townId!: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date | string;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date | string;
  @Field(() => TownCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TownCountAggregate>;
  @Field(() => TownMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TownMinAggregate>;
  @Field(() => TownMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TownMaxAggregate>;
}

@InputType()
export class TownMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  townId?: true;
  @Field(() => Boolean, { nullable: true })
  townName?: true;
  @Field(() => Boolean, { nullable: true })
  provice?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class TownMaxAggregate {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: true })
  townName?: string;
  @Field(() => String, { nullable: true })
  provice?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class TownMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  townId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TownMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  townId?: true;
  @Field(() => Boolean, { nullable: true })
  townName?: true;
  @Field(() => Boolean, { nullable: true })
  provice?: true;
  @Field(() => Boolean, { nullable: true })
  createdAt?: true;
  @Field(() => Boolean, { nullable: true })
  updatedAt?: true;
}

@ObjectType()
export class TownMinAggregate {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: true })
  townName?: string;
  @Field(() => String, { nullable: true })
  provice?: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
}

@InputType()
export class TownMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  townId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
}

@InputType()
export class TownOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  townId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => TownCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TownCountOrderByAggregateInput>;
  @Field(() => TownMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TownMaxOrderByAggregateInput>;
  @Field(() => TownMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TownMinOrderByAggregateInput>;
}

@InputType()
export class TownOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  townId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townName?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  provice?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  createdAt?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  updatedAt?: keyof typeof SortOrder;
  @Field(() => TransportLineOrderByRelationAggregateInput, { nullable: true })
  departs?: InstanceType<typeof TransportLineOrderByRelationAggregateInput>;
  @Field(() => TransportLineOrderByRelationAggregateInput, { nullable: true })
  arrivals?: InstanceType<typeof TransportLineOrderByRelationAggregateInput>;
}

@InputType()
export class TownRelationFilter {
  @Field(() => TownWhereInput, { nullable: true })
  is?: InstanceType<typeof TownWhereInput>;
  @Field(() => TownWhereInput, { nullable: true })
  isNot?: InstanceType<typeof TownWhereInput>;
}

@InputType()
export class TownScalarWhereWithAggregatesInput {
  @Field(() => [TownScalarWhereWithAggregatesInput], { nullable: true })
  AND?: Array<TownScalarWhereWithAggregatesInput>;
  @Field(() => [TownScalarWhereWithAggregatesInput], { nullable: true })
  OR?: Array<TownScalarWhereWithAggregatesInput>;
  @Field(() => [TownScalarWhereWithAggregatesInput], { nullable: true })
  NOT?: Array<TownScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  townId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  townName?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  provice?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
  @Field(() => DateTimeWithAggregatesFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeWithAggregatesFilter>;
}

@InputType()
export class TownUncheckedCreateWithoutArrivalsInput {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => TransportLineUncheckedCreateNestedManyWithoutDepartTownInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineUncheckedCreateNestedManyWithoutDepartTownInput
  >;
}

@InputType()
export class TownUncheckedCreateWithoutDepartsInput {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => TransportLineUncheckedCreateNestedManyWithoutArrivalTownInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineUncheckedCreateNestedManyWithoutArrivalTownInput
  >;
}

@InputType()
export class TownUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  townId?: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: true })
  createdAt?: Date | string;
  @Field(() => Date, { nullable: true })
  updatedAt?: Date | string;
  @Field(() => TransportLineUncheckedCreateNestedManyWithoutDepartTownInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineUncheckedCreateNestedManyWithoutDepartTownInput
  >;
  @Field(() => TransportLineUncheckedCreateNestedManyWithoutArrivalTownInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineUncheckedCreateNestedManyWithoutArrivalTownInput
  >;
}

@InputType()
export class TownUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TownUncheckedUpdateWithoutArrivalsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => TransportLineUncheckedUpdateManyWithoutDepartTownNestedInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineUncheckedUpdateManyWithoutDepartTownNestedInput
  >;
}

@InputType()
export class TownUncheckedUpdateWithoutDepartsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => TransportLineUncheckedUpdateManyWithoutArrivalTownNestedInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineUncheckedUpdateManyWithoutArrivalTownNestedInput
  >;
}

@InputType()
export class TownUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => TransportLineUncheckedUpdateManyWithoutDepartTownNestedInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineUncheckedUpdateManyWithoutDepartTownNestedInput
  >;
  @Field(() => TransportLineUncheckedUpdateManyWithoutArrivalTownNestedInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineUncheckedUpdateManyWithoutArrivalTownNestedInput
  >;
}

@InputType()
export class TownUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
}

@InputType()
export class TownUpdateOneRequiredWithoutArrivalsNestedInput {
  @Field(() => TownCreateWithoutArrivalsInput, { nullable: true })
  @Type(() => TownCreateWithoutArrivalsInput)
  create?: InstanceType<typeof TownCreateWithoutArrivalsInput>;
  @Field(() => TownCreateOrConnectWithoutArrivalsInput, { nullable: true })
  @Type(() => TownCreateOrConnectWithoutArrivalsInput)
  connectOrCreate?: InstanceType<
    typeof TownCreateOrConnectWithoutArrivalsInput
  >;
  @Field(() => TownUpsertWithoutArrivalsInput, { nullable: true })
  @Type(() => TownUpsertWithoutArrivalsInput)
  upsert?: InstanceType<typeof TownUpsertWithoutArrivalsInput>;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  @Type(() => TownWhereUniqueInput)
  connect?: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => TownUpdateWithoutArrivalsInput, { nullable: true })
  @Type(() => TownUpdateWithoutArrivalsInput)
  update?: InstanceType<typeof TownUpdateWithoutArrivalsInput>;
}

@InputType()
export class TownUpdateOneRequiredWithoutDepartsNestedInput {
  @Field(() => TownCreateWithoutDepartsInput, { nullable: true })
  @Type(() => TownCreateWithoutDepartsInput)
  create?: InstanceType<typeof TownCreateWithoutDepartsInput>;
  @Field(() => TownCreateOrConnectWithoutDepartsInput, { nullable: true })
  @Type(() => TownCreateOrConnectWithoutDepartsInput)
  connectOrCreate?: InstanceType<typeof TownCreateOrConnectWithoutDepartsInput>;
  @Field(() => TownUpsertWithoutDepartsInput, { nullable: true })
  @Type(() => TownUpsertWithoutDepartsInput)
  upsert?: InstanceType<typeof TownUpsertWithoutDepartsInput>;
  @Field(() => TownWhereUniqueInput, { nullable: true })
  @Type(() => TownWhereUniqueInput)
  connect?: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => TownUpdateWithoutDepartsInput, { nullable: true })
  @Type(() => TownUpdateWithoutDepartsInput)
  update?: InstanceType<typeof TownUpdateWithoutDepartsInput>;
}

@InputType()
export class TownUpdateWithoutArrivalsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => TransportLineUpdateManyWithoutDepartTownNestedInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineUpdateManyWithoutDepartTownNestedInput
  >;
}

@InputType()
export class TownUpdateWithoutDepartsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => TransportLineUpdateManyWithoutArrivalTownNestedInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineUpdateManyWithoutArrivalTownNestedInput
  >;
}

@InputType()
export class TownUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townName?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  provice?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => DateTimeFieldUpdateOperationsInput, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFieldUpdateOperationsInput>;
  @Field(() => TransportLineUpdateManyWithoutDepartTownNestedInput, {
    nullable: true,
  })
  departs?: InstanceType<
    typeof TransportLineUpdateManyWithoutDepartTownNestedInput
  >;
  @Field(() => TransportLineUpdateManyWithoutArrivalTownNestedInput, {
    nullable: true,
  })
  arrivals?: InstanceType<
    typeof TransportLineUpdateManyWithoutArrivalTownNestedInput
  >;
}

@InputType()
export class TownUpsertWithoutArrivalsInput {
  @Field(() => TownUpdateWithoutArrivalsInput, { nullable: false })
  @Type(() => TownUpdateWithoutArrivalsInput)
  update!: InstanceType<typeof TownUpdateWithoutArrivalsInput>;
  @Field(() => TownCreateWithoutArrivalsInput, { nullable: false })
  @Type(() => TownCreateWithoutArrivalsInput)
  create!: InstanceType<typeof TownCreateWithoutArrivalsInput>;
}

@InputType()
export class TownUpsertWithoutDepartsInput {
  @Field(() => TownUpdateWithoutDepartsInput, { nullable: false })
  @Type(() => TownUpdateWithoutDepartsInput)
  update!: InstanceType<typeof TownUpdateWithoutDepartsInput>;
  @Field(() => TownCreateWithoutDepartsInput, { nullable: false })
  @Type(() => TownCreateWithoutDepartsInput)
  create!: InstanceType<typeof TownCreateWithoutDepartsInput>;
}

@InputType()
export class TownWhereUniqueInput {
  @Field(() => String, { nullable: true })
  townId?: string;
}

@InputType()
export class TownWhereInput {
  @Field(() => [TownWhereInput], { nullable: true })
  AND?: Array<TownWhereInput>;
  @Field(() => [TownWhereInput], { nullable: true })
  OR?: Array<TownWhereInput>;
  @Field(() => [TownWhereInput], { nullable: true })
  NOT?: Array<TownWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  townId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  townName?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  provice?: InstanceType<typeof StringFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  createdAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => DateTimeFilter, { nullable: true })
  updatedAt?: InstanceType<typeof DateTimeFilter>;
  @Field(() => TransportLineListRelationFilter, { nullable: true })
  departs?: InstanceType<typeof TransportLineListRelationFilter>;
  @Field(() => TransportLineListRelationFilter, { nullable: true })
  arrivals?: InstanceType<typeof TransportLineListRelationFilter>;
}

@ObjectType()
export class Town {
  @Field(() => ID, { nullable: false })
  townId!: string;
  @Field(() => String, { nullable: false })
  townName!: string;
  @Field(() => String, { nullable: false })
  provice!: string;
  @Field(() => Date, { nullable: false })
  createdAt!: Date;
  @Field(() => Date, { nullable: false })
  updatedAt!: Date;
  @Field(() => [TransportLine], { nullable: true })
  departs?: Array<TransportLine>;
  @Field(() => [TransportLine], { nullable: true })
  arrivals?: Array<TransportLine>;
  @Field(() => TownCount, { nullable: false })
  _count?: InstanceType<typeof TownCount>;
}

@InputType()
export class UpdateManyTownArgs {
  @Field(() => TownUpdateManyMutationInput, { nullable: false })
  @Type(() => TownUpdateManyMutationInput)
  data!: InstanceType<typeof TownUpdateManyMutationInput>;
  @Field(() => TownWhereInput, { nullable: true })
  @Type(() => TownWhereInput)
  where?: InstanceType<typeof TownWhereInput>;
}

@InputType()
export class UpdateOneTownArgs {
  @Field(() => TownUpdateInput, { nullable: false })
  @Type(() => TownUpdateInput)
  data!: InstanceType<typeof TownUpdateInput>;
  @Field(() => TownWhereUniqueInput, { nullable: false })
  @Type(() => TownWhereUniqueInput)
  where!: InstanceType<typeof TownWhereUniqueInput>;
}

@InputType()
export class UpsertOneTownArgs {
  @Field(() => TownWhereUniqueInput, { nullable: false })
  @Type(() => TownWhereUniqueInput)
  where!: InstanceType<typeof TownWhereUniqueInput>;
  @Field(() => TownCreateInput, { nullable: false })
  @Type(() => TownCreateInput)
  create!: InstanceType<typeof TownCreateInput>;
  @Field(() => TownUpdateInput, { nullable: false })
  @Type(() => TownUpdateInput)
  update!: InstanceType<typeof TownUpdateInput>;
}

@ObjectType()
export class AggregateTransportLine {
  @Field(() => TransportLineCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TransportLineCountAggregate>;
  @Field(() => TransportLineAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof TransportLineAvgAggregate>;
  @Field(() => TransportLineSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof TransportLineSumAggregate>;
  @Field(() => TransportLineMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TransportLineMinAggregate>;
  @Field(() => TransportLineMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TransportLineMaxAggregate>;
}

@InputType()
export class CreateManyTransportLineArgs {
  @Field(() => [TransportLineCreateManyInput], { nullable: false })
  @Type(() => TransportLineCreateManyInput)
  data!: Array<TransportLineCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneTransportLineArgs {
  @Field(() => TransportLineCreateInput, { nullable: false })
  @Type(() => TransportLineCreateInput)
  data!: InstanceType<typeof TransportLineCreateInput>;
}

@InputType()
export class DeleteManyTransportLineArgs {
  @Field(() => TransportLineWhereInput, { nullable: true })
  @Type(() => TransportLineWhereInput)
  where?: InstanceType<typeof TransportLineWhereInput>;
}

@InputType()
export class DeleteOneTransportLineArgs {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
}

@InputType()
export class FindFirstTransportLineOrThrowArgs {
  @Field(() => TransportLineWhereInput, { nullable: true })
  @Type(() => TransportLineWhereInput)
  where?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => [TransportLineOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TransportLineOrderByWithRelationInput>;
  @Field(() => TransportLineWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TransportLineScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TransportLineScalarFieldEnum>;
}

@InputType()
export class FindFirstTransportLineArgs {
  @Field(() => TransportLineWhereInput, { nullable: true })
  @Type(() => TransportLineWhereInput)
  where?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => [TransportLineOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TransportLineOrderByWithRelationInput>;
  @Field(() => TransportLineWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TransportLineScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TransportLineScalarFieldEnum>;
}

@InputType()
export class FindManyTransportLineArgs {
  @Field(() => TransportLineWhereInput, { nullable: true })
  @Type(() => TransportLineWhereInput)
  where?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => [TransportLineOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TransportLineOrderByWithRelationInput>;
  @Field(() => TransportLineWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => [TransportLineScalarFieldEnum], { nullable: true })
  distinct?: Array<keyof typeof TransportLineScalarFieldEnum>;
}

@InputType()
export class FindUniqueTransportLineOrThrowArgs {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
}

@InputType()
export class FindUniqueTransportLineArgs {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
}

@InputType()
export class TransportLineAggregateArgs {
  @Field(() => TransportLineWhereInput, { nullable: true })
  @Type(() => TransportLineWhereInput)
  where?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => [TransportLineOrderByWithRelationInput], { nullable: true })
  orderBy?: Array<TransportLineOrderByWithRelationInput>;
  @Field(() => TransportLineWhereUniqueInput, { nullable: true })
  cursor?: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TransportLineCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TransportLineCountAggregateInput>;
  @Field(() => TransportLineAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TransportLineAvgAggregateInput>;
  @Field(() => TransportLineSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TransportLineSumAggregateInput>;
  @Field(() => TransportLineMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TransportLineMinAggregateInput>;
  @Field(() => TransportLineMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TransportLineMaxAggregateInput>;
}

@InputType()
export class TransportLineAvgAggregateInput {
  @Field(() => Boolean, { nullable: true })
  distance?: true;
  @Field(() => Boolean, { nullable: true })
  price?: true;
}

@ObjectType()
export class TransportLineAvgAggregate {
  @Field(() => Float, { nullable: true })
  distance?: number;
  @Field(() => Float, { nullable: true })
  price?: number;
}

@InputType()
export class TransportLineAvgOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  distance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
}

@InputType()
export class TransportLineCountAggregateInput {
  @Field(() => Boolean, { nullable: true })
  transportLineId?: true;
  @Field(() => Boolean, { nullable: true })
  townDepart?: true;
  @Field(() => Boolean, { nullable: true })
  townArrival?: true;
  @Field(() => Boolean, { nullable: true })
  distance?: true;
  @Field(() => Boolean, { nullable: true })
  price?: true;
  @Field(() => Boolean, { nullable: true })
  _all?: true;
}

@ObjectType()
export class TransportLineCountAggregate {
  @Field(() => Int, { nullable: false })
  transportLineId!: number;
  @Field(() => Int, { nullable: false })
  townDepart!: number;
  @Field(() => Int, { nullable: false })
  townArrival!: number;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => Int, { nullable: false })
  _all!: number;
}

@InputType()
export class TransportLineCountOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  distance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
}

@ObjectType()
export class TransportLineCount {
  @Field(() => Int, { nullable: false })
  Schedule?: number;
}

@InputType()
export class TransportLineCreateManyArrivalTownInputEnvelope {
  @Field(() => [TransportLineCreateManyArrivalTownInput], { nullable: false })
  @Type(() => TransportLineCreateManyArrivalTownInput)
  data!: Array<TransportLineCreateManyArrivalTownInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class TransportLineCreateManyArrivalTownInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: false })
  townDepart!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
}

@InputType()
export class TransportLineCreateManyDepartTownInputEnvelope {
  @Field(() => [TransportLineCreateManyDepartTownInput], { nullable: false })
  @Type(() => TransportLineCreateManyDepartTownInput)
  data!: Array<TransportLineCreateManyDepartTownInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class TransportLineCreateManyDepartTownInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: false })
  townArrival!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
}

@InputType()
export class TransportLineCreateManyInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: false })
  townDepart!: string;
  @Field(() => String, { nullable: false })
  townArrival!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
}

@InputType()
export class TransportLineCreateNestedManyWithoutArrivalTownInput {
  @Field(() => [TransportLineCreateWithoutArrivalTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutArrivalTownInput)
  create?: Array<TransportLineCreateWithoutArrivalTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutArrivalTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutArrivalTownInput>;
  @Field(() => TransportLineCreateManyArrivalTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyArrivalTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyArrivalTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
}

@InputType()
export class TransportLineCreateNestedManyWithoutDepartTownInput {
  @Field(() => [TransportLineCreateWithoutDepartTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutDepartTownInput)
  create?: Array<TransportLineCreateWithoutDepartTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutDepartTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutDepartTownInput>;
  @Field(() => TransportLineCreateManyDepartTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyDepartTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyDepartTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
}

@InputType()
export class TransportLineCreateNestedOneWithoutScheduleInput {
  @Field(() => TransportLineCreateWithoutScheduleInput, { nullable: true })
  @Type(() => TransportLineCreateWithoutScheduleInput)
  create?: InstanceType<typeof TransportLineCreateWithoutScheduleInput>;
  @Field(() => TransportLineCreateOrConnectWithoutScheduleInput, {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: InstanceType<
    typeof TransportLineCreateOrConnectWithoutScheduleInput
  >;
  @Field(() => TransportLineWhereUniqueInput, { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: InstanceType<typeof TransportLineWhereUniqueInput>;
}

@InputType()
export class TransportLineCreateOrConnectWithoutArrivalTownInput {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineCreateWithoutArrivalTownInput, { nullable: false })
  @Type(() => TransportLineCreateWithoutArrivalTownInput)
  create!: InstanceType<typeof TransportLineCreateWithoutArrivalTownInput>;
}

@InputType()
export class TransportLineCreateOrConnectWithoutDepartTownInput {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineCreateWithoutDepartTownInput, { nullable: false })
  @Type(() => TransportLineCreateWithoutDepartTownInput)
  create!: InstanceType<typeof TransportLineCreateWithoutDepartTownInput>;
}

@InputType()
export class TransportLineCreateOrConnectWithoutScheduleInput {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineCreateWithoutScheduleInput, { nullable: false })
  @Type(() => TransportLineCreateWithoutScheduleInput)
  create!: InstanceType<typeof TransportLineCreateWithoutScheduleInput>;
}

@InputType()
export class TransportLineCreateWithoutArrivalTownInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => TownCreateNestedOneWithoutDepartsInput, { nullable: false })
  departTown!: InstanceType<typeof TownCreateNestedOneWithoutDepartsInput>;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => ScheduleCreateNestedManyWithoutTransportLineInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleCreateNestedManyWithoutTransportLineInput
  >;
}

@InputType()
export class TransportLineCreateWithoutDepartTownInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => TownCreateNestedOneWithoutArrivalsInput, { nullable: false })
  arrivalTown!: InstanceType<typeof TownCreateNestedOneWithoutArrivalsInput>;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => ScheduleCreateNestedManyWithoutTransportLineInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleCreateNestedManyWithoutTransportLineInput
  >;
}

@InputType()
export class TransportLineCreateWithoutScheduleInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => TownCreateNestedOneWithoutDepartsInput, { nullable: false })
  departTown!: InstanceType<typeof TownCreateNestedOneWithoutDepartsInput>;
  @Field(() => TownCreateNestedOneWithoutArrivalsInput, { nullable: false })
  arrivalTown!: InstanceType<typeof TownCreateNestedOneWithoutArrivalsInput>;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
}

@InputType()
export class TransportLineCreateInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => TownCreateNestedOneWithoutDepartsInput, { nullable: false })
  departTown!: InstanceType<typeof TownCreateNestedOneWithoutDepartsInput>;
  @Field(() => TownCreateNestedOneWithoutArrivalsInput, { nullable: false })
  arrivalTown!: InstanceType<typeof TownCreateNestedOneWithoutArrivalsInput>;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => ScheduleCreateNestedManyWithoutTransportLineInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleCreateNestedManyWithoutTransportLineInput
  >;
}

@InputType()
export class TransportLineGroupByArgs {
  @Field(() => TransportLineWhereInput, { nullable: true })
  @Type(() => TransportLineWhereInput)
  where?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => [TransportLineOrderByWithAggregationInput], { nullable: true })
  orderBy?: Array<TransportLineOrderByWithAggregationInput>;
  @Field(() => [TransportLineScalarFieldEnum], { nullable: false })
  by!: Array<keyof typeof TransportLineScalarFieldEnum>;
  @Field(() => TransportLineScalarWhereWithAggregatesInput, { nullable: true })
  having?: InstanceType<typeof TransportLineScalarWhereWithAggregatesInput>;
  @Field(() => Int, { nullable: true })
  take?: number;
  @Field(() => Int, { nullable: true })
  skip?: number;
  @Field(() => TransportLineCountAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TransportLineCountAggregateInput>;
  @Field(() => TransportLineAvgAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TransportLineAvgAggregateInput>;
  @Field(() => TransportLineSumAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TransportLineSumAggregateInput>;
  @Field(() => TransportLineMinAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TransportLineMinAggregateInput>;
  @Field(() => TransportLineMaxAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TransportLineMaxAggregateInput>;
}

@ObjectType()
export class TransportLineGroupBy {
  @Field(() => String, { nullable: false })
  transportLineId!: string;
  @Field(() => String, { nullable: false })
  townDepart!: string;
  @Field(() => String, { nullable: false })
  townArrival!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => TransportLineCountAggregate, { nullable: true })
  _count?: InstanceType<typeof TransportLineCountAggregate>;
  @Field(() => TransportLineAvgAggregate, { nullable: true })
  _avg?: InstanceType<typeof TransportLineAvgAggregate>;
  @Field(() => TransportLineSumAggregate, { nullable: true })
  _sum?: InstanceType<typeof TransportLineSumAggregate>;
  @Field(() => TransportLineMinAggregate, { nullable: true })
  _min?: InstanceType<typeof TransportLineMinAggregate>;
  @Field(() => TransportLineMaxAggregate, { nullable: true })
  _max?: InstanceType<typeof TransportLineMaxAggregate>;
}

@InputType()
export class TransportLineListRelationFilter {
  @Field(() => TransportLineWhereInput, { nullable: true })
  every?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => TransportLineWhereInput, { nullable: true })
  some?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => TransportLineWhereInput, { nullable: true })
  none?: InstanceType<typeof TransportLineWhereInput>;
}

@InputType()
export class TransportLineMaxAggregateInput {
  @Field(() => Boolean, { nullable: true })
  transportLineId?: true;
  @Field(() => Boolean, { nullable: true })
  townDepart?: true;
  @Field(() => Boolean, { nullable: true })
  townArrival?: true;
  @Field(() => Boolean, { nullable: true })
  distance?: true;
  @Field(() => Boolean, { nullable: true })
  price?: true;
}

@ObjectType()
export class TransportLineMaxAggregate {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: true })
  townDepart?: string;
  @Field(() => String, { nullable: true })
  townArrival?: string;
  @Field(() => Int, { nullable: true })
  distance?: number;
  @Field(() => Int, { nullable: true })
  price?: number;
}

@InputType()
export class TransportLineMaxOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  distance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
}

@InputType()
export class TransportLineMinAggregateInput {
  @Field(() => Boolean, { nullable: true })
  transportLineId?: true;
  @Field(() => Boolean, { nullable: true })
  townDepart?: true;
  @Field(() => Boolean, { nullable: true })
  townArrival?: true;
  @Field(() => Boolean, { nullable: true })
  distance?: true;
  @Field(() => Boolean, { nullable: true })
  price?: true;
}

@ObjectType()
export class TransportLineMinAggregate {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: true })
  townDepart?: string;
  @Field(() => String, { nullable: true })
  townArrival?: string;
  @Field(() => Int, { nullable: true })
  distance?: number;
  @Field(() => Int, { nullable: true })
  price?: number;
}

@InputType()
export class TransportLineMinOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  distance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
}

@InputType()
export class TransportLineOrderByRelationAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  _count?: keyof typeof SortOrder;
}

@InputType()
export class TransportLineOrderByWithAggregationInput {
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townArrival?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  distance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
  @Field(() => TransportLineCountOrderByAggregateInput, { nullable: true })
  _count?: InstanceType<typeof TransportLineCountOrderByAggregateInput>;
  @Field(() => TransportLineAvgOrderByAggregateInput, { nullable: true })
  _avg?: InstanceType<typeof TransportLineAvgOrderByAggregateInput>;
  @Field(() => TransportLineMaxOrderByAggregateInput, { nullable: true })
  _max?: InstanceType<typeof TransportLineMaxOrderByAggregateInput>;
  @Field(() => TransportLineMinOrderByAggregateInput, { nullable: true })
  _min?: InstanceType<typeof TransportLineMinOrderByAggregateInput>;
  @Field(() => TransportLineSumOrderByAggregateInput, { nullable: true })
  _sum?: InstanceType<typeof TransportLineSumOrderByAggregateInput>;
}

@InputType()
export class TransportLineOrderByWithRelationInput {
  @Field(() => SortOrder, { nullable: true })
  transportLineId?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townDepart?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  townArrival?: keyof typeof SortOrder;
  @Field(() => TownOrderByWithRelationInput, { nullable: true })
  departTown?: InstanceType<typeof TownOrderByWithRelationInput>;
  @Field(() => TownOrderByWithRelationInput, { nullable: true })
  arrivalTown?: InstanceType<typeof TownOrderByWithRelationInput>;
  @Field(() => SortOrder, { nullable: true })
  distance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
  @Field(() => ScheduleOrderByRelationAggregateInput, { nullable: true })
  Schedule?: InstanceType<typeof ScheduleOrderByRelationAggregateInput>;
}

@InputType()
export class TransportLineRelationFilter {
  @Field(() => TransportLineWhereInput, { nullable: true })
  is?: InstanceType<typeof TransportLineWhereInput>;
  @Field(() => TransportLineWhereInput, { nullable: true })
  isNot?: InstanceType<typeof TransportLineWhereInput>;
}

@InputType()
export class TransportLineScalarWhereWithAggregatesInput {
  @Field(() => [TransportLineScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  AND?: Array<TransportLineScalarWhereWithAggregatesInput>;
  @Field(() => [TransportLineScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  OR?: Array<TransportLineScalarWhereWithAggregatesInput>;
  @Field(() => [TransportLineScalarWhereWithAggregatesInput], {
    nullable: true,
  })
  NOT?: Array<TransportLineScalarWhereWithAggregatesInput>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  transportLineId?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  townDepart?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => StringWithAggregatesFilter, { nullable: true })
  townArrival?: InstanceType<typeof StringWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  distance?: InstanceType<typeof IntWithAggregatesFilter>;
  @Field(() => IntWithAggregatesFilter, { nullable: true })
  price?: InstanceType<typeof IntWithAggregatesFilter>;
}

@InputType()
export class TransportLineScalarWhereInput {
  @Field(() => [TransportLineScalarWhereInput], { nullable: true })
  AND?: Array<TransportLineScalarWhereInput>;
  @Field(() => [TransportLineScalarWhereInput], { nullable: true })
  OR?: Array<TransportLineScalarWhereInput>;
  @Field(() => [TransportLineScalarWhereInput], { nullable: true })
  NOT?: Array<TransportLineScalarWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  transportLineId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  townDepart?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  townArrival?: InstanceType<typeof StringFilter>;
  @Field(() => IntFilter, { nullable: true })
  distance?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  price?: InstanceType<typeof IntFilter>;
}

@InputType()
export class TransportLineSumAggregateInput {
  @Field(() => Boolean, { nullable: true })
  distance?: true;
  @Field(() => Boolean, { nullable: true })
  price?: true;
}

@ObjectType()
export class TransportLineSumAggregate {
  @Field(() => Int, { nullable: true })
  distance?: number;
  @Field(() => Int, { nullable: true })
  price?: number;
}

@InputType()
export class TransportLineSumOrderByAggregateInput {
  @Field(() => SortOrder, { nullable: true })
  distance?: keyof typeof SortOrder;
  @Field(() => SortOrder, { nullable: true })
  price?: keyof typeof SortOrder;
}

@InputType()
export class TransportLineUncheckedCreateNestedManyWithoutArrivalTownInput {
  @Field(() => [TransportLineCreateWithoutArrivalTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutArrivalTownInput)
  create?: Array<TransportLineCreateWithoutArrivalTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutArrivalTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutArrivalTownInput>;
  @Field(() => TransportLineCreateManyArrivalTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyArrivalTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyArrivalTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
}

@InputType()
export class TransportLineUncheckedCreateNestedManyWithoutDepartTownInput {
  @Field(() => [TransportLineCreateWithoutDepartTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutDepartTownInput)
  create?: Array<TransportLineCreateWithoutDepartTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutDepartTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutDepartTownInput>;
  @Field(() => TransportLineCreateManyDepartTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyDepartTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyDepartTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
}

@InputType()
export class TransportLineUncheckedCreateWithoutArrivalTownInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: false })
  townDepart!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => ScheduleUncheckedCreateNestedManyWithoutTransportLineInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUncheckedCreateNestedManyWithoutTransportLineInput
  >;
}

@InputType()
export class TransportLineUncheckedCreateWithoutDepartTownInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: false })
  townArrival!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => ScheduleUncheckedCreateNestedManyWithoutTransportLineInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUncheckedCreateNestedManyWithoutTransportLineInput
  >;
}

@InputType()
export class TransportLineUncheckedCreateWithoutScheduleInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: false })
  townDepart!: string;
  @Field(() => String, { nullable: false })
  townArrival!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
}

@InputType()
export class TransportLineUncheckedCreateInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: false })
  townDepart!: string;
  @Field(() => String, { nullable: false })
  townArrival!: string;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => ScheduleUncheckedCreateNestedManyWithoutTransportLineInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUncheckedCreateNestedManyWithoutTransportLineInput
  >;
}

@InputType()
export class TransportLineUncheckedUpdateManyWithoutArrivalTownNestedInput {
  @Field(() => [TransportLineCreateWithoutArrivalTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutArrivalTownInput)
  create?: Array<TransportLineCreateWithoutArrivalTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutArrivalTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutArrivalTownInput>;
  @Field(() => [TransportLineUpsertWithWhereUniqueWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpsertWithWhereUniqueWithoutArrivalTownInput)
  upsert?: Array<TransportLineUpsertWithWhereUniqueWithoutArrivalTownInput>;
  @Field(() => TransportLineCreateManyArrivalTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyArrivalTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyArrivalTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  set?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  disconnect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  delete?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineUpdateWithWhereUniqueWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateWithWhereUniqueWithoutArrivalTownInput)
  update?: Array<TransportLineUpdateWithWhereUniqueWithoutArrivalTownInput>;
  @Field(() => [TransportLineUpdateManyWithWhereWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateManyWithWhereWithoutArrivalTownInput)
  updateMany?: Array<TransportLineUpdateManyWithWhereWithoutArrivalTownInput>;
  @Field(() => [TransportLineScalarWhereInput], { nullable: true })
  @Type(() => TransportLineScalarWhereInput)
  deleteMany?: Array<TransportLineScalarWhereInput>;
}

@InputType()
export class TransportLineUncheckedUpdateManyWithoutArrivalsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townDepart?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class TransportLineUncheckedUpdateManyWithoutDepartTownNestedInput {
  @Field(() => [TransportLineCreateWithoutDepartTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutDepartTownInput)
  create?: Array<TransportLineCreateWithoutDepartTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutDepartTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutDepartTownInput>;
  @Field(() => [TransportLineUpsertWithWhereUniqueWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpsertWithWhereUniqueWithoutDepartTownInput)
  upsert?: Array<TransportLineUpsertWithWhereUniqueWithoutDepartTownInput>;
  @Field(() => TransportLineCreateManyDepartTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyDepartTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyDepartTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  set?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  disconnect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  delete?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineUpdateWithWhereUniqueWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateWithWhereUniqueWithoutDepartTownInput)
  update?: Array<TransportLineUpdateWithWhereUniqueWithoutDepartTownInput>;
  @Field(() => [TransportLineUpdateManyWithWhereWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateManyWithWhereWithoutDepartTownInput)
  updateMany?: Array<TransportLineUpdateManyWithWhereWithoutDepartTownInput>;
  @Field(() => [TransportLineScalarWhereInput], { nullable: true })
  @Type(() => TransportLineScalarWhereInput)
  deleteMany?: Array<TransportLineScalarWhereInput>;
}

@InputType()
export class TransportLineUncheckedUpdateManyWithoutDepartsInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townArrival?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class TransportLineUncheckedUpdateManyInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townDepart?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townArrival?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class TransportLineUncheckedUpdateWithoutArrivalTownInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townDepart?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => ScheduleUncheckedUpdateManyWithoutTransportLineNestedInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUncheckedUpdateManyWithoutTransportLineNestedInput
  >;
}

@InputType()
export class TransportLineUncheckedUpdateWithoutDepartTownInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townArrival?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => ScheduleUncheckedUpdateManyWithoutTransportLineNestedInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUncheckedUpdateManyWithoutTransportLineNestedInput
  >;
}

@InputType()
export class TransportLineUncheckedUpdateWithoutScheduleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townDepart?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townArrival?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class TransportLineUncheckedUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townDepart?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  townArrival?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => ScheduleUncheckedUpdateManyWithoutTransportLineNestedInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUncheckedUpdateManyWithoutTransportLineNestedInput
  >;
}

@InputType()
export class TransportLineUpdateManyMutationInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class TransportLineUpdateManyWithWhereWithoutArrivalTownInput {
  @Field(() => TransportLineScalarWhereInput, { nullable: false })
  @Type(() => TransportLineScalarWhereInput)
  where!: InstanceType<typeof TransportLineScalarWhereInput>;
  @Field(() => TransportLineUpdateManyMutationInput, { nullable: false })
  @Type(() => TransportLineUpdateManyMutationInput)
  data!: InstanceType<typeof TransportLineUpdateManyMutationInput>;
}

@InputType()
export class TransportLineUpdateManyWithWhereWithoutDepartTownInput {
  @Field(() => TransportLineScalarWhereInput, { nullable: false })
  @Type(() => TransportLineScalarWhereInput)
  where!: InstanceType<typeof TransportLineScalarWhereInput>;
  @Field(() => TransportLineUpdateManyMutationInput, { nullable: false })
  @Type(() => TransportLineUpdateManyMutationInput)
  data!: InstanceType<typeof TransportLineUpdateManyMutationInput>;
}

@InputType()
export class TransportLineUpdateManyWithoutArrivalTownNestedInput {
  @Field(() => [TransportLineCreateWithoutArrivalTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutArrivalTownInput)
  create?: Array<TransportLineCreateWithoutArrivalTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutArrivalTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutArrivalTownInput>;
  @Field(() => [TransportLineUpsertWithWhereUniqueWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpsertWithWhereUniqueWithoutArrivalTownInput)
  upsert?: Array<TransportLineUpsertWithWhereUniqueWithoutArrivalTownInput>;
  @Field(() => TransportLineCreateManyArrivalTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyArrivalTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyArrivalTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  set?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  disconnect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  delete?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineUpdateWithWhereUniqueWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateWithWhereUniqueWithoutArrivalTownInput)
  update?: Array<TransportLineUpdateWithWhereUniqueWithoutArrivalTownInput>;
  @Field(() => [TransportLineUpdateManyWithWhereWithoutArrivalTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateManyWithWhereWithoutArrivalTownInput)
  updateMany?: Array<TransportLineUpdateManyWithWhereWithoutArrivalTownInput>;
  @Field(() => [TransportLineScalarWhereInput], { nullable: true })
  @Type(() => TransportLineScalarWhereInput)
  deleteMany?: Array<TransportLineScalarWhereInput>;
}

@InputType()
export class TransportLineUpdateManyWithoutDepartTownNestedInput {
  @Field(() => [TransportLineCreateWithoutDepartTownInput], { nullable: true })
  @Type(() => TransportLineCreateWithoutDepartTownInput)
  create?: Array<TransportLineCreateWithoutDepartTownInput>;
  @Field(() => [TransportLineCreateOrConnectWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutDepartTownInput)
  connectOrCreate?: Array<TransportLineCreateOrConnectWithoutDepartTownInput>;
  @Field(() => [TransportLineUpsertWithWhereUniqueWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpsertWithWhereUniqueWithoutDepartTownInput)
  upsert?: Array<TransportLineUpsertWithWhereUniqueWithoutDepartTownInput>;
  @Field(() => TransportLineCreateManyDepartTownInputEnvelope, {
    nullable: true,
  })
  @Type(() => TransportLineCreateManyDepartTownInputEnvelope)
  createMany?: InstanceType<
    typeof TransportLineCreateManyDepartTownInputEnvelope
  >;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  set?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  disconnect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  delete?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineWhereUniqueInput], { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: Array<TransportLineWhereUniqueInput>;
  @Field(() => [TransportLineUpdateWithWhereUniqueWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateWithWhereUniqueWithoutDepartTownInput)
  update?: Array<TransportLineUpdateWithWhereUniqueWithoutDepartTownInput>;
  @Field(() => [TransportLineUpdateManyWithWhereWithoutDepartTownInput], {
    nullable: true,
  })
  @Type(() => TransportLineUpdateManyWithWhereWithoutDepartTownInput)
  updateMany?: Array<TransportLineUpdateManyWithWhereWithoutDepartTownInput>;
  @Field(() => [TransportLineScalarWhereInput], { nullable: true })
  @Type(() => TransportLineScalarWhereInput)
  deleteMany?: Array<TransportLineScalarWhereInput>;
}

@InputType()
export class TransportLineUpdateOneRequiredWithoutScheduleNestedInput {
  @Field(() => TransportLineCreateWithoutScheduleInput, { nullable: true })
  @Type(() => TransportLineCreateWithoutScheduleInput)
  create?: InstanceType<typeof TransportLineCreateWithoutScheduleInput>;
  @Field(() => TransportLineCreateOrConnectWithoutScheduleInput, {
    nullable: true,
  })
  @Type(() => TransportLineCreateOrConnectWithoutScheduleInput)
  connectOrCreate?: InstanceType<
    typeof TransportLineCreateOrConnectWithoutScheduleInput
  >;
  @Field(() => TransportLineUpsertWithoutScheduleInput, { nullable: true })
  @Type(() => TransportLineUpsertWithoutScheduleInput)
  upsert?: InstanceType<typeof TransportLineUpsertWithoutScheduleInput>;
  @Field(() => TransportLineWhereUniqueInput, { nullable: true })
  @Type(() => TransportLineWhereUniqueInput)
  connect?: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineUpdateWithoutScheduleInput, { nullable: true })
  @Type(() => TransportLineUpdateWithoutScheduleInput)
  update?: InstanceType<typeof TransportLineUpdateWithoutScheduleInput>;
}

@InputType()
export class TransportLineUpdateWithWhereUniqueWithoutArrivalTownInput {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineUpdateWithoutArrivalTownInput, { nullable: false })
  @Type(() => TransportLineUpdateWithoutArrivalTownInput)
  data!: InstanceType<typeof TransportLineUpdateWithoutArrivalTownInput>;
}

@InputType()
export class TransportLineUpdateWithWhereUniqueWithoutDepartTownInput {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineUpdateWithoutDepartTownInput, { nullable: false })
  @Type(() => TransportLineUpdateWithoutDepartTownInput)
  data!: InstanceType<typeof TransportLineUpdateWithoutDepartTownInput>;
}

@InputType()
export class TransportLineUpdateWithoutArrivalTownInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TownUpdateOneRequiredWithoutDepartsNestedInput, {
    nullable: true,
  })
  departTown?: InstanceType<
    typeof TownUpdateOneRequiredWithoutDepartsNestedInput
  >;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => ScheduleUpdateManyWithoutTransportLineNestedInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUpdateManyWithoutTransportLineNestedInput
  >;
}

@InputType()
export class TransportLineUpdateWithoutDepartTownInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TownUpdateOneRequiredWithoutArrivalsNestedInput, {
    nullable: true,
  })
  arrivalTown?: InstanceType<
    typeof TownUpdateOneRequiredWithoutArrivalsNestedInput
  >;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => ScheduleUpdateManyWithoutTransportLineNestedInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUpdateManyWithoutTransportLineNestedInput
  >;
}

@InputType()
export class TransportLineUpdateWithoutScheduleInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TownUpdateOneRequiredWithoutDepartsNestedInput, {
    nullable: true,
  })
  departTown?: InstanceType<
    typeof TownUpdateOneRequiredWithoutDepartsNestedInput
  >;
  @Field(() => TownUpdateOneRequiredWithoutArrivalsNestedInput, {
    nullable: true,
  })
  arrivalTown?: InstanceType<
    typeof TownUpdateOneRequiredWithoutArrivalsNestedInput
  >;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
}

@InputType()
export class TransportLineUpdateInput {
  @Field(() => StringFieldUpdateOperationsInput, { nullable: true })
  transportLineId?: InstanceType<typeof StringFieldUpdateOperationsInput>;
  @Field(() => TownUpdateOneRequiredWithoutDepartsNestedInput, {
    nullable: true,
  })
  departTown?: InstanceType<
    typeof TownUpdateOneRequiredWithoutDepartsNestedInput
  >;
  @Field(() => TownUpdateOneRequiredWithoutArrivalsNestedInput, {
    nullable: true,
  })
  arrivalTown?: InstanceType<
    typeof TownUpdateOneRequiredWithoutArrivalsNestedInput
  >;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  distance?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => IntFieldUpdateOperationsInput, { nullable: true })
  price?: InstanceType<typeof IntFieldUpdateOperationsInput>;
  @Field(() => ScheduleUpdateManyWithoutTransportLineNestedInput, {
    nullable: true,
  })
  Schedule?: InstanceType<
    typeof ScheduleUpdateManyWithoutTransportLineNestedInput
  >;
}

@InputType()
export class TransportLineUpsertWithWhereUniqueWithoutArrivalTownInput {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineUpdateWithoutArrivalTownInput, { nullable: false })
  @Type(() => TransportLineUpdateWithoutArrivalTownInput)
  update!: InstanceType<typeof TransportLineUpdateWithoutArrivalTownInput>;
  @Field(() => TransportLineCreateWithoutArrivalTownInput, { nullable: false })
  @Type(() => TransportLineCreateWithoutArrivalTownInput)
  create!: InstanceType<typeof TransportLineCreateWithoutArrivalTownInput>;
}

@InputType()
export class TransportLineUpsertWithWhereUniqueWithoutDepartTownInput {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineUpdateWithoutDepartTownInput, { nullable: false })
  @Type(() => TransportLineUpdateWithoutDepartTownInput)
  update!: InstanceType<typeof TransportLineUpdateWithoutDepartTownInput>;
  @Field(() => TransportLineCreateWithoutDepartTownInput, { nullable: false })
  @Type(() => TransportLineCreateWithoutDepartTownInput)
  create!: InstanceType<typeof TransportLineCreateWithoutDepartTownInput>;
}

@InputType()
export class TransportLineUpsertWithoutScheduleInput {
  @Field(() => TransportLineUpdateWithoutScheduleInput, { nullable: false })
  @Type(() => TransportLineUpdateWithoutScheduleInput)
  update!: InstanceType<typeof TransportLineUpdateWithoutScheduleInput>;
  @Field(() => TransportLineCreateWithoutScheduleInput, { nullable: false })
  @Type(() => TransportLineCreateWithoutScheduleInput)
  create!: InstanceType<typeof TransportLineCreateWithoutScheduleInput>;
}

@InputType()
export class TransportLineWhereUniqueInput {
  @Field(() => String, { nullable: true })
  transportLineId?: string;
  @Field(() => String, { nullable: true })
  townDepart?: string;
  @Field(() => String, { nullable: true })
  townArrival?: string;
}

@InputType()
export class TransportLineWhereInput {
  @Field(() => [TransportLineWhereInput], { nullable: true })
  AND?: Array<TransportLineWhereInput>;
  @Field(() => [TransportLineWhereInput], { nullable: true })
  OR?: Array<TransportLineWhereInput>;
  @Field(() => [TransportLineWhereInput], { nullable: true })
  NOT?: Array<TransportLineWhereInput>;
  @Field(() => StringFilter, { nullable: true })
  transportLineId?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  townDepart?: InstanceType<typeof StringFilter>;
  @Field(() => StringFilter, { nullable: true })
  townArrival?: InstanceType<typeof StringFilter>;
  @Field(() => TownRelationFilter, { nullable: true })
  departTown?: InstanceType<typeof TownRelationFilter>;
  @Field(() => TownRelationFilter, { nullable: true })
  arrivalTown?: InstanceType<typeof TownRelationFilter>;
  @Field(() => IntFilter, { nullable: true })
  distance?: InstanceType<typeof IntFilter>;
  @Field(() => IntFilter, { nullable: true })
  price?: InstanceType<typeof IntFilter>;
  @Field(() => ScheduleListRelationFilter, { nullable: true })
  Schedule?: InstanceType<typeof ScheduleListRelationFilter>;
}

@ObjectType()
export class TransportLine {
  @Field(() => ID, { nullable: false })
  transportLineId!: string;
  @Field(() => String, { nullable: false })
  townDepart!: string;
  @Field(() => String, { nullable: false })
  townArrival!: string;
  @Field(() => Town, { nullable: false })
  departTown?: InstanceType<typeof Town>;
  @Field(() => Town, { nullable: false })
  arrivalTown?: InstanceType<typeof Town>;
  @Field(() => Int, { nullable: false })
  distance!: number;
  @Field(() => Int, { nullable: false })
  price!: number;
  @Field(() => [Schedule], { nullable: true })
  Schedule?: Array<Schedule>;
  @Field(() => TransportLineCount, { nullable: false })
  _count?: InstanceType<typeof TransportLineCount>;
}

@InputType()
export class UpdateManyTransportLineArgs {
  @Field(() => TransportLineUpdateManyMutationInput, { nullable: false })
  @Type(() => TransportLineUpdateManyMutationInput)
  data!: InstanceType<typeof TransportLineUpdateManyMutationInput>;
  @Field(() => TransportLineWhereInput, { nullable: true })
  @Type(() => TransportLineWhereInput)
  where?: InstanceType<typeof TransportLineWhereInput>;
}

@InputType()
export class UpdateOneTransportLineArgs {
  @Field(() => TransportLineUpdateInput, { nullable: false })
  @Type(() => TransportLineUpdateInput)
  data!: InstanceType<typeof TransportLineUpdateInput>;
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
}

@InputType()
export class UpsertOneTransportLineArgs {
  @Field(() => TransportLineWhereUniqueInput, { nullable: false })
  @Type(() => TransportLineWhereUniqueInput)
  where!: InstanceType<typeof TransportLineWhereUniqueInput>;
  @Field(() => TransportLineCreateInput, { nullable: false })
  @Type(() => TransportLineCreateInput)
  create!: InstanceType<typeof TransportLineCreateInput>;
  @Field(() => TransportLineUpdateInput, { nullable: false })
  @Type(() => TransportLineUpdateInput)
  update!: InstanceType<typeof TransportLineUpdateInput>;
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

@InputType()
export class CreateManyUsersArgs {
  @Field(() => [UsersCreateManyInput], { nullable: false })
  @Type(() => UsersCreateManyInput)
  data!: Array<UsersCreateManyInput>;
  @Field(() => Boolean, { nullable: true })
  skipDuplicates?: boolean;
}

@InputType()
export class CreateOneUsersArgs {
  @Field(() => UsersCreateInput, { nullable: false })
  @Type(() => UsersCreateInput)
  data!: InstanceType<typeof UsersCreateInput>;
}

@InputType()
export class DeleteManyUsersArgs {
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
}

@InputType()
export class DeleteOneUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
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

@InputType()
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

@InputType()
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

@InputType()
export class FindUniqueUsersOrThrowArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class FindUniqueUsersArgs {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class UpdateManyUsersArgs {
  @Field(() => UsersUpdateManyMutationInput, { nullable: false })
  @Type(() => UsersUpdateManyMutationInput)
  data!: InstanceType<typeof UsersUpdateManyMutationInput>;
  @Field(() => UsersWhereInput, { nullable: true })
  @Type(() => UsersWhereInput)
  where?: InstanceType<typeof UsersWhereInput>;
}

@InputType()
export class UpdateOneUsersArgs {
  @Field(() => UsersUpdateInput, { nullable: false })
  @Type(() => UsersUpdateInput)
  data!: InstanceType<typeof UsersUpdateInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
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

@InputType()
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
  role?: true;
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
  role!: number;
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
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
}

@ObjectType()
export class UsersCount {
  @Field(() => Int, { nullable: false })
  Reservation?: number;
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
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
}

@InputType()
export class UsersCreateNestedOneWithoutReservationInput {
  @Field(() => UsersCreateWithoutReservationInput, { nullable: true })
  @Type(() => UsersCreateWithoutReservationInput)
  create?: InstanceType<typeof UsersCreateWithoutReservationInput>;
  @Field(() => UsersCreateOrConnectWithoutReservationInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutReservationInput
  >;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: InstanceType<typeof UsersWhereUniqueInput>;
}

@InputType()
export class UsersCreateOrConnectWithoutReservationInput {
  @Field(() => UsersWhereUniqueInput, { nullable: false })
  @Type(() => UsersWhereUniqueInput)
  where!: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersCreateWithoutReservationInput, { nullable: false })
  @Type(() => UsersCreateWithoutReservationInput)
  create!: InstanceType<typeof UsersCreateWithoutReservationInput>;
}

@InputType()
export class UsersCreateWithoutReservationInput {
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
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
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
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
  @Field(() => ReservationCreateNestedManyWithoutUserInput, { nullable: true })
  Reservation?: InstanceType<
    typeof ReservationCreateNestedManyWithoutUserInput
  >;
}

@InputType()
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
  @Field(() => Role, { nullable: false })
  role!: keyof typeof Role;
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
  @Field(() => Boolean, { nullable: true })
  role?: true;
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
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
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
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
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
  @Field(() => Boolean, { nullable: true })
  role?: true;
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
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
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
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
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
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
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
  @Field(() => SortOrder, { nullable: true })
  role?: keyof typeof SortOrder;
  @Field(() => ReservationOrderByRelationAggregateInput, { nullable: true })
  Reservation?: InstanceType<typeof ReservationOrderByRelationAggregateInput>;
}

@InputType()
export class UsersRelationFilter {
  @Field(() => UsersWhereInput, { nullable: true })
  is?: InstanceType<typeof UsersWhereInput>;
  @Field(() => UsersWhereInput, { nullable: true })
  isNot?: InstanceType<typeof UsersWhereInput>;
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
  @Field(() => EnumRoleWithAggregatesFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleWithAggregatesFilter>;
}

@InputType()
export class UsersUncheckedCreateWithoutReservationInput {
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
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
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
  @Field(() => Role, { nullable: true })
  role?: keyof typeof Role;
  @Field(() => ReservationUncheckedCreateNestedManyWithoutUserInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUncheckedCreateNestedManyWithoutUserInput
  >;
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
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUncheckedUpdateWithoutReservationInput {
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
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
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
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
  @Field(() => ReservationUncheckedUpdateManyWithoutUserNestedInput, {
    nullable: true,
  })
  Reservation?: InstanceType<
    typeof ReservationUncheckedUpdateManyWithoutUserNestedInput
  >;
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
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
}

@InputType()
export class UsersUpdateOneRequiredWithoutReservationNestedInput {
  @Field(() => UsersCreateWithoutReservationInput, { nullable: true })
  @Type(() => UsersCreateWithoutReservationInput)
  create?: InstanceType<typeof UsersCreateWithoutReservationInput>;
  @Field(() => UsersCreateOrConnectWithoutReservationInput, { nullable: true })
  @Type(() => UsersCreateOrConnectWithoutReservationInput)
  connectOrCreate?: InstanceType<
    typeof UsersCreateOrConnectWithoutReservationInput
  >;
  @Field(() => UsersUpsertWithoutReservationInput, { nullable: true })
  @Type(() => UsersUpsertWithoutReservationInput)
  upsert?: InstanceType<typeof UsersUpsertWithoutReservationInput>;
  @Field(() => UsersWhereUniqueInput, { nullable: true })
  @Type(() => UsersWhereUniqueInput)
  connect?: InstanceType<typeof UsersWhereUniqueInput>;
  @Field(() => UsersUpdateWithoutReservationInput, { nullable: true })
  @Type(() => UsersUpdateWithoutReservationInput)
  update?: InstanceType<typeof UsersUpdateWithoutReservationInput>;
}

@InputType()
export class UsersUpdateWithoutReservationInput {
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
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
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
  @Field(() => EnumRoleFieldUpdateOperationsInput, { nullable: true })
  role?: InstanceType<typeof EnumRoleFieldUpdateOperationsInput>;
  @Field(() => ReservationUpdateManyWithoutUserNestedInput, { nullable: true })
  Reservation?: InstanceType<
    typeof ReservationUpdateManyWithoutUserNestedInput
  >;
}

@InputType()
export class UsersUpsertWithoutReservationInput {
  @Field(() => UsersUpdateWithoutReservationInput, { nullable: false })
  @Type(() => UsersUpdateWithoutReservationInput)
  update!: InstanceType<typeof UsersUpdateWithoutReservationInput>;
  @Field(() => UsersCreateWithoutReservationInput, { nullable: false })
  @Type(() => UsersCreateWithoutReservationInput)
  create!: InstanceType<typeof UsersCreateWithoutReservationInput>;
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
  @Field(() => EnumRoleFilter, { nullable: true })
  role?: InstanceType<typeof EnumRoleFilter>;
  @Field(() => ReservationListRelationFilter, { nullable: true })
  Reservation?: InstanceType<typeof ReservationListRelationFilter>;
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
  @Field(() => Role, { nullable: false, defaultValue: 'User' })
  role!: keyof typeof Role;
  @Field(() => [Reservation], { nullable: true })
  Reservation?: Array<Reservation>;
  @Field(() => UsersCount, { nullable: false })
  _count?: InstanceType<typeof UsersCount>;
}
