import { AuthorizableUser } from 'nest-casl';
import { Role } from '@data-access';

export class UserSecurity implements AuthorizableUser<Role, string> {
  id: string;
  userName?: string;
  roles: Array<Role>;
  isSuperAdmin: boolean;
  phoneNumber?: string;
}
