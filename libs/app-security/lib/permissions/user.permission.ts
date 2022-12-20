import { InferSubjects, Permissions } from 'nest-casl';
import {
  AuthSecurityActions,
  SecurityActions,
} from '../actions/SecurityActions';
import { Role, Users } from '@data-access';

export type Subject = InferSubjects<typeof Users>;
export const userPermissions: Permissions<Role, Subject, SecurityActions> = {
  SuperAdmin({ user, can }) {
    can(SecurityActions.manage, Users);
  },
  User({ user, can }) {
    can(SecurityActions.update, Users, { userdId: user.id });
    can(SecurityActions.readOne, Users, { userdId: user.id });
  },
  everyone({ can }) {
    can(AuthSecurityActions.register, Users);
    can(AuthSecurityActions.login, Users);
    can(AuthSecurityActions.refreshToken, Users);
    can(AuthSecurityActions.confirmPhoneNumber, Users);
    can(AuthSecurityActions.confirmOtp, Users);
    can(AuthSecurityActions.forgotPassword, Users);
    can(AuthSecurityActions.askingForOtp, Users);
  },
};
