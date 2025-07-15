import {Component, inject} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {RegisterForm} from '../../forms/register.form';

@Component({
  selector: 'app-register',
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  private readonly _fb: FormBuilder = inject(FormBuilder);
  private readonly _authService: AuthService = inject(AuthService);
  private readonly _router: Router = inject(Router);

  form!: FormGroup;

  constructor() {
    this.form = this._fb.group({...RegisterForm});
  }

  submit() {
    this.form.markAsTouched();
    if(this.form.invalid) {
      return;
    }
    this._authService.register(this.form.value).subscribe({
      next: () => {
        this._router.navigate(['login']);
      },
      error: err => {
        console.log(err);
      },
    });
  }
}
