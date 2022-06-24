import { Component } from '@angular/core';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';
import { GalleryImage } from '../../../shared/gallery/gallery.component';
import { Testimonial } from '../../../shared/testimonials/testimonials.component';

@Component({
  selector: 'tt-angular-mastery',
  templateUrl: './angular-mastery.component.html',
  styleUrls: ['./angular-mastery.component.scss'],
})
export class AngularMasteryComponent {
  isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  images = IMAGES;
  testimonials = TESTIMONIALS;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}
}

const TESTIMONIALS: Testimonial[] = [
  {
    message:
      'The software engineers were very satisfied with the quality of the training. Sharing best practices and real life experiences during the training added extra value for us. We believe we found a professional Angular contact person.',
    name: 'Janos Zatonai',
    role: 'Manager, Varian Medical Systems',
    src: '../../../assets/images/testimonials/janoszatonyi.jpg',
  },
  {
    message:
      'This course has already been given to two teams of developers. The feedback has been very positive both times! The content is very complete and evolves along with the framework. I strongly recommend this course to all those who wish to improve their skills!',
    name: 'Dany Marques',
    role: 'Software Architect, La Mobilière',
    src: '../../../assets/images/testimonials/danymarques.jpg',
  },
  {
    message:
      'The instructors really knew topics they presented and what a training means - that’s more than sharing information. One person already said that he is so excited to do some improvement into his code because now he really sees how it should be done.',
    name: 'Päivi Tuhkanen',
    role: 'Manager, VMS Helsinki',
    src: '../../../assets/images/testimonials/paivituhkanen_final.jpg',
  },
  {
    message:
      'For me as a "newbie" it was very valuable. The tutorials are very very good, also for a later study or as a reference. Well done!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_a.jpg',
  },
  {
    message:
      'It was a very good course. Your know how it is on a high level and you know what you talking about. I learned a lot!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_b.jpg',
  },
  {
    message:
      "Great job! Lots and lots of topics that we went through. Great that you adjusted speed to group's level of knowledge.",
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_c.jpg',
  },
  {
    message:
      'Thank you! I really enjoyed the approach with alternating between theory and exercises.',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_d.jpg',
  },
  {
    message: 'It was clearly a very insightful and fruitful course!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_e.jpg',
  },
];

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/angular-mastery.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Angular Mastery Workshop',
  },
  {
    src: '../../../../assets/images/workshops/amw-platform.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Angular is more than just a framework',
  },
  {
    src: '../../../../assets/images/workshops/amw-cli-generate.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Angular CLI with advanced code generation capabilities',
  },
  {
    src: '../../../../assets/images/workshops/amw-workspace.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description: 'Understand structure and relations of Angular workspace',
  },
  {
    src: '../../../../assets/images/workshops/amw-analyze.jpg',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description:
      'Learn how to analyze production bundles to improve performance',
  },
  {
    src: '../../../../assets/images/workshops/amw-components.gif',
    alt: 'Angular Mastery Workshop by Tomas Trajan - Example',
    description:
      'Understand application structure with the help of animated content',
  },
];
