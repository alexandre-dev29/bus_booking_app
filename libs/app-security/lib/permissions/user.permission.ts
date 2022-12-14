import { InferSubjects, Permissions } from 'nest-casl';
import { SecurityActions } from '../actions/SecurityActions';
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
};
