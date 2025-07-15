import {CanActivateFn} from '@angular/router';
import {AuthService} from '../../features/auth/services/auth.service';
import {inject} from '@angular/core';
import {UserRoleEnum} from '../../features/auth/models/user-role.enum';

export const isAdminGuard: CanActivateFn = (route, state) => {
  const authService: AuthService = inject(AuthService);
  return authService.currentUser()?.user.role === UserRoleEnum.ADMIN;
};
