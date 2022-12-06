import { Component, OnInit } from '@angular/core';

import { GalleryImage } from '../../../shared/gallery/gallery.component';

@Component({
  selector: 'tt-medium-enhanced-stats',
  templateUrl: './medium-enhanced-stats.component.html',
  styleUrls: ['./medium-enhanced-stats.component.scss'],
})
export class MediumEnhancedStatsComponent implements OnInit {
  images = IMAGES;

  constructor() {}

  ngOnInit() {}
}

const IMAGES: GalleryImage[] = [
  {
    src: '../../../../assets/images/community/medium-enhanced-stats/popup.jpg',
    alt: 'Medium Enhanced Stats total reach popup',
    description:
      'Medium Enhanced Stats total reach popup gives you your total stats overview from anywhere',
  },
  {
    src: '../../../../assets/images/community/medium-enhanced-stats/export.jpg',
    alt: 'Medium Enhanced Stats total reach popup actions',
    description:
      'Medium Enhanced Stats allows you to export your stats as csv and download your total reach to share with your fans',
  },
  {
    src: '../../../../assets/images/community/medium-enhanced-stats/summary.jpg',
    alt: 'Medium Enhanced Stats summary row',
    description:
      'Medium Enhanced Stats gives you a summary row with the total values',
  },
  {
    src: '../../../../assets/images/community/medium-enhanced-stats/extras.jpg',
    alt: 'Medium Enhanced Stats extra info',
    description:
      'Medium Enhanced Stats gives you a summary row with the total values',
  },
  {
    src: '../../../../assets/images/community/medium-enhanced-stats/contribution.jpg',
    alt: 'Medium Enhanced Stats article contribution chart',
    description:
      'Medium Enhanced Stats gives you ability to visualize article contribution to the total daily views',
  },
  {
    src: '../../../../assets/images/community/medium-enhanced-stats/article-indicator.jpg',
    alt: 'Medium Enhanced Stats article published indicator',
    description:
      'Medium Enhanced Stats marks day when you published articles directly in the main chart',
  },
  {
    src: '../../../../assets/images/community/medium-enhanced-stats/milestone.gif',
    alt: 'Medium Enhanced Stats milestone reached animation',
    description:
      'Medium Enhanced Stats motivates you to write more by setting goals and milestones. Once reached, there must be a celebration right?',
  },
];
