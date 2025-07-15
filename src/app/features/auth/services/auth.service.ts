import {inject, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {RegisterFormModel} from '../models/register-form.model';
import {environment} from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private readonly _http: HttpClient = inject(HttpClient);

  register(form: RegisterFormModel) {
    return this._http.post<void>(environment.API_URL + '/register', form);
  }
}
