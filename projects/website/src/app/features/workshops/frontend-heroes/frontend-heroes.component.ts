import { Component, OnInit } from '@angular/core';
import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-frontend-heroes',
  templateUrl: './frontend-heroes.component.html',
  styleUrls: ['./frontend-heroes.component.scss'],
})
export class FrontendHeroesComponent implements OnInit {
  images = IMAGES;

  constructor() {}

  ngOnInit(): void {}
}

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/workshops/frontend-heroes.jpg',
    alt:
      'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'Frontend Heroes Workshop',
  },
  {
    src: '../../../../assets/images/workshops/fhw-html.jpg',
    alt:
      'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'HTML tags',
  },
  {
    src: '../../../../assets/images/workshops/fhw-document.jpg',
    alt:
      'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'Basic document structure',
  },
  {
    src: '../../../../assets/images/workshops/fhw-flexbox.jpg',
    alt:
      'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'CSS flexbox',
  },
  {
    src: '../../../../assets/images/workshops/fhw-js.jpg',
    alt:
      'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'JavaScript function vs block scope',
  },
  {
    src: '../../../../assets/images/workshops/fhw-ts.jpg',
    alt:
      'Frontend Heroes Workshop by Tomas Trajan  and Kevin Kreuzer - Example',
    description: 'Typescript shorthand syntax example',
  },
];
