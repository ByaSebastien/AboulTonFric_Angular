import {UserDtoModel} from './user-dto.model';

export interface UserTokenDtoModel {
  user: UserDtoModel;
  token: string;
}
