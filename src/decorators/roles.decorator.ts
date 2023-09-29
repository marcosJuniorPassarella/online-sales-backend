import { SetMetadata } from '@nestjs/common';
import { UserType } from '../user/enum/user-type.enum';

export const ROLES_KEY = 'roles';
export const Roles = (...roles: Array<UserType>) =>
  SetMetadata(ROLES_KEY, roles);
