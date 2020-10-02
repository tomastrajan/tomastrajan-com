import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';
import { GalleryImage } from '../../../shared/gallery/gallery.component';
import { Testimonial } from '../../../shared/testimonials/testimonials.component';

@Component({
  selector: 'tt-angular-mastery',
  templateUrl: './angular-mastery.component.html',
  styleUrls: ['./angular-mastery.component.scss']
})
export class AngularMasteryComponent implements OnInit {
  isSmallOrSmaller: Observable<boolean>;
  images = IMAGES;
  testimonials = TESTIMONIALS;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  }
}

const TESTIMONIALS: Testimonial[] = [
  {
    message:
      'The software engineers were very satisfied with the quality of the training. Sharing best practices and real life experiences during the training added extra value for us. We believe we found a professional Angular contact person.',
    name: 'Janos Zatonai',
    role: 'Manager, Varian Medical Systems',
    src: '../../../assets/images/testimonials/janoszatonyi.jpg'
  },
  {
    message:
      'This course has already been given to two teams of developers. The feedback has been very positive both times! The content is very complete and evolves along with the framework. I strongly recommend this course to all those who wish to improve their skills!',
    name: 'Dany Marques',
    role: 'Software Architect, La Mobilière',
    src: '../../../assets/images/testimonials/danymarques.jpg'
  }
];

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
  },
  {
    src: '../../../../assets/images/workshops/amw-components.gif',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description:
      'Understand application structure with the help of animated content'
  }
];
