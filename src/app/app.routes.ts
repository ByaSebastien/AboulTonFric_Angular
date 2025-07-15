import { Routes } from '@angular/router';
import {notConnectedGuard} from './shared/guards/not-connected.guard';

export const routes: Routes = [
  {
    path : 'register',
    loadComponent: () => import('./features/auth/pages/register/register.component').then(m => m.RegisterComponent),
    canActivate: [notConnectedGuard]
  },
  {
    path : 'login',
    loadComponent: () => import('./features/auth/pages/login/login.component').then(m => m.LoginComponent),
    canActivate: [notConnectedGuard]
  },
];
