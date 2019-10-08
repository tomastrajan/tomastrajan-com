import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';
import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-angular-state-management',
  templateUrl: './angular-state-management.component.html',
  styleUrls: ['./angular-state-management.component.scss']
})
export class AngularStateManagementComponent implements OnInit {
  isSmallOrSmaller: Observable<boolean>;
  images = IMAGES;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  }
}

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/angular-state-management.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Angular State Management Workshop'
  },
  {
    src: '../../../../assets/images/workshops/asmw-modules.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'NgRx state modularization'
  },
  {
    src: '../../../../assets/images/workshops/asmw-selectors.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'NgRx state selectors'
  },
  {
    src: '../../../../assets/images/workshops/asmw-tips.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Many practical tips & best practices'
  },
  {
    src: '../../../../assets/images/workshops/asmw-heuristics.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Actionable heuristics and decision making'
  },
  {
    src: '../../../../assets/images/workshops/asmw-entity.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Further massive reduction of boilerplate with @ngrx/entity'
  },
  {
    src: '../../../../assets/images/workshops/asmw-handson.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Hands on exercises'
  },
  {
    src: '../../../../assets/images/workshops/asmw-animations.gif',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Flows visualized with animations'
  }
];
