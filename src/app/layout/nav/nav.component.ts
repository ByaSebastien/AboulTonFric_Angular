import {Component, effect, inject, signal, Signal} from '@angular/core';
import {LinkModel} from '../../shared/models/link.model';
import {RouterLink} from '@angular/router';
import {AuthService} from '../../features/auth/services/auth.service';
import {UserTokenDtoModel} from '../../features/auth/models/user-token-dto.model';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  private readonly _authService: AuthService = inject(AuthService);

  links!: LinkModel[];

  constructor() {

    effect(() => {
      this.links = [
        {title: 'Register', url: '/register', isHidden: !!this._authService.currentUser()},
        {title: 'Login', url: '/login', isHidden: !!this._authService.currentUser()},
        {title: 'Lien 3'},
        {title: 'Logout', action: () => this._authService.logout(), isHidden: !this._authService.currentUser()},
      ];
    });
  }
}
