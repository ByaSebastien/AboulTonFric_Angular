import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {RegisterForm} from '../../forms/register.form';
import {LoginForm} from '../../forms/login.form';

@Component({
  selector: 'app-login',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  form!: FormGroup;

  constructor() {
    this.form = this._fb.group({...LoginForm});
  }

  submit() {
    this.form.markAsTouched();
    if(this.form.invalid) {
      return;
    }
    this._authService.login(this.form.value).subscribe({
      next: user => {
        this._router.navigate(['/']);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
