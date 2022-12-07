import { Component, OnInit } from '@angular/core';

import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-angular-starter',
  templateUrl: './angular-starter.component.html',
  styleUrls: ['./angular-starter.component.scss'],
})
export class AngularStarterComponent implements OnInit {
  images = IMAGES;

  constructor() {}

  ngOnInit() {}
}

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/open-source/angular-starter/splash.webp',
    alt: 'Angular NgRx Material Starter',
    description:
      'Angular NgRx Material Starter is a great community built Angular starter',
  },
  {
    src: '../../../../assets/images/open-source/angular-starter/contributors.webp',
    alt: 'Angular NgRx Material Starter - Contributors',
    description:
      'Angular NgRx Material Starter was built by more than 30 contributors',
  },
  {
    src: '../../../../assets/images/open-source/angular-starter/todos.webp',
    alt: 'Angular NgRx Material Starter - Todos example',
    description:
      'Angular NgRx Material Starter has many built in examples including simple TODO app',
  },
  {
    src: '../../../../assets/images/open-source/angular-starter/i18n.webp',
    alt: 'Angular NgRx Material Starter - I18n support with runtime language switching',
    description:
      'Angular NgRx Material Starter has I18n support with runtime language switching',
  },
  {
    src: '../../../../assets/images/open-source/angular-starter/ngrx.webp',
    alt: 'Angular NgRx Material Starter - NgRx example',
    description:
      'Angular NgRx Material Starter comes with proper NgRx 8 example CRUD implementation (together with reactive forms)',
  },
];
