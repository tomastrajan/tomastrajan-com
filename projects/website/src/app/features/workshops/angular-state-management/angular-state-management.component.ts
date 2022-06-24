import { Component } from '@angular/core';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';
import { GalleryImage } from '../../../shared/gallery/gallery.component';
import { Testimonial } from '../../../shared/testimonials/testimonials.component';

@Component({
  selector: 'tt-angular-state-management',
  templateUrl: './angular-state-management.component.html',
  styleUrls: ['./angular-state-management.component.scss'],
})
export class AngularStateManagementComponent {
  isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  images = IMAGES;
  testimonials = TESTIMONIALS;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}
}

const TESTIMONIALS: Testimonial[] = [
  {
    message:
      'Both beginners and experienced developers were able to take away a lot from this workshop. The 2-day format is great and provides enough time to cover all the bases. Tomas is a great teacher and is enthusiastic to share his experience and expertise',
    name: 'Christof Leuenberger',
    role: 'Software Architect, Die Mobiliar',
    src: '../../../assets/images/testimonials/christofleuenberger.jpg',
  },
  {
    message:
      'The course is a highlight. Tomas explains in great detail, shows pros and cons of alternatives, has tons of examples at hand and shares all the background of the features of NGRX.',
    name: 'Emanuel Indermühle',
    role: 'Software Architect, Die Mobiliar',
    src: '../../../assets/images/testimonials/emanuelindermuhle.jpg',
  },
  {
    message:
      'Thanks a lot for the introduction to NgRx. The course was very clean structured and everything nicely explained.',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_d.jpg',
  },
  {
    message:
      'Great workshop with space for Q&A. Solid background information. Good balance between theory and hands-on.',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_a.jpg',
  },
  {
    message:
      'The course was really good. Very nice and helpful instructor! Thank you a lot!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_b.jpg',
  },
  {
    message:
      'It was really well structured and really interesting! I learned a lot! Thank you!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_c.jpg',
  },
  {
    message: "Well-given / crafted course, good pedagogy. Let's keep in touch!",
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_e.jpg',
  },
  {
    message:
      'Excellent Workshop! I particularly liked the explanation of code in small steps (also in the slides)',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_d.jpg',
  },
];

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/angular-state-management.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Angular State Management Workshop',
  },
  {
    src: '../../../../assets/images/workshops/asmw-modules.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'NgRx state modularization',
  },
  {
    src: '../../../../assets/images/workshops/asmw-selectors.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'NgRx state selectors',
  },
  {
    src: '../../../../assets/images/workshops/asmw-tips.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Many practical tips & best practices',
  },
  {
    src: '../../../../assets/images/workshops/asmw-heuristics.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Actionable heuristics and decision making',
  },
  {
    src: '../../../../assets/images/workshops/asmw-entity.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Further massive reduction of boilerplate with @ngrx/entity',
  },
  {
    src: '../../../../assets/images/workshops/asmw-handson.jpg',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Hands on exercises',
  },
  {
    src: '../../../../assets/images/workshops/asmw-animations.gif',
    alt: 'Angular State Management Workshop by Tomas Trajan - Example',
    description: 'Flows visualized with animations',
  },
];
