import { Component } from '@angular/core';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';
import { Testimonial } from '../../../shared/testimonials/testimonials.component';
import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-getting-reactive-with-rxjs',
  templateUrl: './getting-reactive-with-rxjs.component.html',
  styleUrls: ['./getting-reactive-with-rxjs.component.scss'],
})
export class GettingReactiveWithRxjsComponent {
  isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  images = IMAGES;
  testimonials = TESTIMONIALS;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}
}

const TESTIMONIALS: Testimonial[] = [
  {
    message:
      'Very well organized content! It explained all the concepts and answered all my questions, would recommend even for total beginners!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_d.jpg',
  },
  {
    message:
      'Tomas did a great job presenting this rather complicated topic. The best part was the great usage of StackBlitz examples and live coding to further demonstrate discussed concepts, it helped a lot! Very cool workshop overall, thank you!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_b.jpg',
  },
  {
    message:
      'The "Best Practices" section was very useful for me. The teacher did a great job and the workshop was very interesting overall. Looking forward to the next one!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_a.jpg',
  },
];

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/getting-reactive-with-rxjs.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description: 'Getting Reactive With RxJs Workshop',
  },
  {
    src: '../../../../assets/images/workshops/grwrw-callbacks-promises.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description:
      'Frontend async logic handling approaches and their evolution (callbacks vs promises)',
  },
  {
    src: '../../../../assets/images/workshops/grwrw-chart.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description: 'The best way to understand RxJs in a single image',
  },
  {
    src: '../../../../assets/images/workshops/grwrw-observable-factory.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description: 'Custom RxJs Observable factory (async)',
  },
  {
    src: '../../../../assets/images/workshops/grwrw-observer.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description:
      'RxJs Observer allows us to consume events of a observable stream',
  },
  {
    src: '../../../../assets/images/workshops/grwrw-stream-vs-array.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description: 'How to filter array value inside of a RxJs Observable stream',
  },
  {
    src: '../../../../assets/images/workshops/grwrw-flattening.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description:
      'RxJs flatting operators helps us work with higher order Observable streams',
  },
  {
    src: '../../../../assets/images/workshops/grwrw-marble-syntax.jpg',
    alt: 'Getting Reactive With RxJs Workshop by Tomas Trajan - Example',
    description: 'RxJs marble diagram expressed using ASCII syntax',
  },
];
