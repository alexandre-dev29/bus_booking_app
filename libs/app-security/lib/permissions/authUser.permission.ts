import { InferSubjects, Permissions } from 'nest-casl';
import { AuthSecurityActions } from '../actions/SecurityActions';
import { Role, Users } from '@data-access';

type Subject = InferSubjects<typeof Users>;
export const authUserPermissions: Permissions<
  Role,
  Subject,
  AuthSecurityActions
> = {
  everyone({ can }) {
    can(AuthSecurityActions.register, Users);
    can(AuthSecurityActions.login, Users);
    can(AuthSecurityActions.refreshToken, Users);
    can(AuthSecurityActions.confirmPhoneNumber, Users);
    can(AuthSecurityActions.confirmOtp, Users);
    can(AuthSecurityActions.forgotPassword, Users);
    can(AuthSecurityActions.askingForOtp, Users);
  },
  SuperAdmin({ can }) {
    can(AuthSecurityActions.manage, Users);
  },
};
