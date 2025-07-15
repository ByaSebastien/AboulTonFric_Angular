import {Validators} from '@angular/forms';

export const RegisterForm = {
  username: [null,[Validators.required]],
  email: [null,[Validators.required, Validators.email]],
  password: [null,[Validators.required]],
}
