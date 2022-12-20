import { InferSubjects, Permissions } from 'nest-casl';
import { SecurityActions } from '../actions/SecurityActions';
import { Admin, Role } from '@data-access';

export type Subject = InferSubjects<typeof Admin>;
export const adminPermissions: Permissions<Role, Subject, SecurityActions> = {
  SuperAdmin({ user, can }) {
    can(SecurityActions.manage, Admin);
  },
};
