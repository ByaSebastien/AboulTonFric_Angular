import {HttpInterceptorFn} from '@angular/common/http';
import {AuthService} from '../../features/auth/services/auth.service';
import { inject } from '@angular/core';
import {UserTokenDtoModel} from '../../features/auth/models/user-token-dto.model';

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {

  const authService: AuthService = inject(AuthService);
  let currentUser: UserTokenDtoModel | undefined = authService.currentUser();
  if(currentUser) {
    let token = currentUser.token;
    if(token) {
      let clone = req.clone({
        headers: req.headers.append('Authorization', `Bearer ${token}`),
      });
      return next(clone);
    }
  }
  return next(req);
};
