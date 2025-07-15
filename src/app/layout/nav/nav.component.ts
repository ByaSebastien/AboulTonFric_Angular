import { Component } from '@angular/core';
import {LinkModel} from '../../shared/models/link.model';
import {RouterLink} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLink
  ],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {

  links!: LinkModel[];

  constructor() {
    this.links = [
      {title: 'Register', url: '/register'},
      {title: 'Lien 2'},
      {title: 'Lien 3'},
    ]
  }
}
