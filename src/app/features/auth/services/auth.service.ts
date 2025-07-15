import {effect, inject, Injectable, signal, WritableSignal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterFormModel} from '../models/register-form.model';
import {environment} from '../../../../environments/environment';
import {LoginFormModel} from '../models/login-form.model';
import {UserTokenDtoModel} from '../models/user-token-dto.model';
import {tap} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _http: HttpClient = inject(HttpClient);

  currentUser: WritableSignal<UserTokenDtoModel|undefined>;

  constructor(private http: HttpClient) {
    this.currentUser = signal(undefined);
  }

  register(form: RegisterFormModel) {
    return this._http.post<void>(environment.API_URL + '/register', form);
  }

  login(form: LoginFormModel) {
    return this._http.post<UserTokenDtoModel>(environment.API_URL + '/login', form).pipe(
      tap((user) => {
        this.currentUser.set(user)
      }),
    );
  }

  logout() {
    this.currentUser.set(undefined);
  }
}
