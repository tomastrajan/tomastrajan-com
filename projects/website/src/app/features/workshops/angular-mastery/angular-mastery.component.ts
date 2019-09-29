import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';
import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-angular-mastery',
  templateUrl: './angular-mastery.component.html',
  styleUrls: ['./angular-mastery.component.scss']
})
export class AngularMasteryComponent implements OnInit {
  isSmallOrSmaller: Observable<boolean>;
  images = IMAGES;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  }
}

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/angular-mastery.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Angular Mastery Workshop'
  },
  {
    src: '../../../../assets/images/workshops/amw-platform.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Angular is more than just a framework'
  },
  {
    src: '../../../../assets/images/workshops/amw-cli-generate.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Angular CLI with advanced code generation capabilities'
  },
  {
    src: '../../../../assets/images/workshops/amw-workspace.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Understand structure and relations of Angular workspace'
  },
  {
    src: '../../../../assets/images/workshops/amw-analyze.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description:
      'Learn how to analyze production bundles to improve performance'
  }
];
