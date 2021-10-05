import { Component, OnInit } from '@angular/core';

import { GalleryImage } from '../../../shared/gallery/gallery.component';
import { Testimonial } from '../../../shared/testimonials/testimonials.component';

@Component({
  selector: 'tt-angular-reactive-forms',
  templateUrl: './angular-reactive-forms.component.html',
  styleUrls: ['./angular-reactive-forms.component.scss'],
})
export class AngularReactiveFormsComponent implements OnInit {
  images = IMAGES;
  testimonials = TESTIMONIALS;

  constructor() {}

  ngOnInit(): void {}
}

const TESTIMONIALS: Testimonial[] = [
  {
    message: 'Live coding and demo stuff was awesome :)',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_c.jpg',
  },
  {
    message: 'Thanks for a great content and experience!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_d.jpg',
  },
];

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/angular-reactive-forms.jpg',
    alt: 'Angular Reactive Forms Workshop by Tomas Trajan - Example',
    description: 'Angular Reactive Forms',
  },
  {
    src: '../../../../assets/images/workshops/arfw-overview.jpg',
    alt: 'Angular Reactive Forms Workshop by Tomas Trajan - Example',
    description: 'What is a form?',
  },
  {
    src: '../../../../assets/images/workshops/arfw-comparison.jpg',
    alt: 'Angular Reactive Forms Workshop by Tomas Trajan - Example',
    description: 'Angular Template Drive vs Reactive Forms',
  },
  {
    src: '../../../../assets/images/workshops/arfw-form-array.jpg',
    alt: 'Angular Reactive Forms Workshop by Tomas Trajan - Example',
    description: 'Form Arrays',
  },
  {
    src: '../../../../assets/images/workshops/arfw-cva.jpg',
    alt: 'Angular Reactive Forms Workshop by Tomas Trajan - Example',
    description: 'Custom Control Value Accessorts (CVA)',
  },
  {
    src: '../../../../assets/images/workshops/arfw-dependent-form-fields.jpg',
    alt: 'Angular Reactive Forms Workshop by Tomas Trajan - Example',
    description: 'Dependent form fields',
  },
];
