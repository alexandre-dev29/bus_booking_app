import { Users } from '@data-access';

export const usersStub = (): Users => {
  return {
    userId: '1',
    fullName: 'alexandre',
    isPhoneConfirmed: false,
    password: '',
    phoneNumber: '',
    photoUrl: '',
    refreshToken: '',
    createdAt: new Date(2022, 9, 30),
    updatedAt: new Date(2022, 9, 30),
  };
};
