import {UserRoleEnum} from './user-role.enum';

export interface UserDtoModel {
  id: number;
  email: string;
  username: string;
  role: 'UserRoleEnum';
}
