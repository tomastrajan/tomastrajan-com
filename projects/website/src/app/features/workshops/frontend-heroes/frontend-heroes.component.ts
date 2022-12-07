import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../../../shared/gallery/gallery.component';
import { Testimonial } from '../../../shared/testimonials/testimonials.component';

@Component({
  selector: 'tt-frontend-heroes',
  templateUrl: './frontend-heroes.component.html',
  styleUrls: ['./frontend-heroes.component.scss'],
})
export class FrontendHeroesComponent implements OnInit {
  images = IMAGES;
  testimonials = TESTIMONIALS;

  constructor() {}

  ngOnInit(): void {}
}

const TESTIMONIALS: Testimonial[] = [
  {
    message:
      'I enjoyed the course, and liked the presentation and exercises. I learned some angular good practices, which I could apply in my project!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_c.webp',
  },
  {
    message:
      'After having used Angular without having had much web dev experience, I was struggling on understanding the black magic behind it all. Having all those bits and pieces together have helped me to grasp the philosophy of it. Thank you!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_d.webp',
  },
  {
    message: 'Both training agenda and hands-on work are well prepared!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_a.webp',
  },
  {
    message:
      'Good workshop, basics are refreshed and concepts were presented in very clear manner!',
    name: 'Workshop Participant',
    role: 'Software Engineer (anonymous feedback)',
    src: '../../../assets/images/testimonials/anonymous_grey_b.webp',
  },
];

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/frontend-heroes.webp',
    alt: 'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'Frontend Heroes Workshop',
  },
  {
    src: '../../../../assets/images/workshops/fhw-html.webp',
    alt: 'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'HTML tags',
  },
  {
    src: '../../../../assets/images/workshops/fhw-document.webp',
    alt: 'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'Basic document structure',
  },
  {
    src: '../../../../assets/images/workshops/fhw-flexbox.webp',
    alt: 'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'CSS flexbox',
  },
  {
    src: '../../../../assets/images/workshops/fhw-js.webp',
    alt: 'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'JavaScript function vs block scope',
  },
  {
    src: '../../../../assets/images/workshops/fhw-ts.webp',
    alt: 'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'Typescript shorthand syntax example',
  },
];
