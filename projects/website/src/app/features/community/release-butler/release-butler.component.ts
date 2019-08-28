import { Component, OnInit } from '@angular/core';

import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-release-butler',
  templateUrl: './release-butler.component.html',
  styleUrls: ['./release-butler.component.scss']
})
export class ReleaseButlerComponent implements OnInit {
  images = IMAGES;

  constructor() {}

  ngOnInit() {}
}

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/community/release-butler/splash.jpg',
    alt: 'Follow Release Butler at @releasebutler',
    description: 'Follow Release Butler at @releasebutler'
  },
  {
    src: '../../../../assets/images/community/release-butler/tweet.jpg',
    alt: 'Release Butler tweet example',
    description: 'A tweet made by Release Butler'
  },
  {
    src: '../../../../assets/images/community/release-butler/changelog.jpg',
    alt: 'Release Butler changelog example',
    description:
      'Changelog generated on the Release Butler website - releasebutler.now.sh'
  },
  {
    src: '../../../../assets/images/community/release-butler/chatbot.jpg',
    alt: 'Release Butler chatbot example',
    description:
      'Release Butler comes with Twitter chatbot, try to shoot him a message!'
  },
  {
    src: '../../../../assets/images/community/release-butler/info.jpg',
    alt: 'Release Butler info example',
    description:
      'Release Butler currently tracks release of more than 30 popular frontend framework and libraries'
  },
  {
    src: '../../../../assets/images/community/release-butler/website.jpg',
    alt: 'Release Butler website example',
    description:
      'Release Butler comes with a website releasebutler.now.sh where you can generate beautiful changelog for your own library'
  },
  {
    src: '../../../../assets/images/community/release-butler/stats.jpg',
    alt: 'Release Butler stats',
    description:
      'Release Butler has more than 2200 followers as of 2019, follow him on Twitter and get up to date!'
  }
];
