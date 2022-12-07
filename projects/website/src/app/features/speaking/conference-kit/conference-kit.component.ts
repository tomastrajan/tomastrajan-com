import { Component, OnInit } from '@angular/core';

import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-conference-kit',
  templateUrl: './conference-kit.component.html',
  styleUrls: ['./conference-kit.component.scss'],
})
export class ConferenceKitComponent implements OnInit {
  images = IMAGES;

  constructor() {}

  ngOnInit() {}
}

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/speaking/kit/gde2021_round.webp',
    alt: 'Tomas Trajan profile pic',
    description: 'Tomas Trajan - GDE 2021',
  },
  {
    src: '../../../../assets/images/speaking/kit/gde2021.webp',
    alt: 'Tomas Trajan profile pic',
    description: 'Tomas Trajan - GDE 2021',
  },
  {
    src: '../../../../assets/images/speaking/kit/tomastrajan-profile-1.webp',
    alt: 'Tomas Trajan profile pic',
    description: 'Tomas Trajan - GDE 2019',
  },
  {
    src: '../../../../assets/images/speaking/kit/tomastrajan-profile-2.webp',
    alt: 'Tomas Trajan profile pic',
    description: 'Tomas Trajan - GDE 2018',
  },
];
