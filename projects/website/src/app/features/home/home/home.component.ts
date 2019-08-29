import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  columnCount: Observable<number>;

  highlights = HIGHLIGHTS;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount;
  }
}

const HIGHLIGHTS = [
  {
    title: 'Angular Schematics',
    subtitle: 'NG-MY 2019 - Kuala Lumpur / Malaysia',
    description:
      'Modern tooling provided by Angular CLI enables us to provide amazing developer experience. Providing built-in library specific schematics enables us to cut on the learning curve that is needed to get developers productive straight from the start by generating code which follows intentioned patterns.',
    logo: 'assets/images/speaking/ngmy-logo.png',
    logoAlt: 'NG-MY 2019',
    photo: 'assets/images/speaking/ngmy2019.jpg',
    photoAlt: 'Tomas Trajan speaking about Angular Schematics at NG-MY 2019',
    linkLabel: 'Learn more',
    link: '../speaking/conferences',
  },
  {
    title: 'Release Butler',
    subtitle: 'Twitter bot that tweets changelogs',
    description: 'Release Butler is a Twitter bot that helps you to stay up to date with releases of popular frontend frameworks & libraries!',
    logo: 'assets/logo/releasebutler.png',
    logoAlt: 'Release Butler',
    photo: 'assets/images/community/release-butler/splash.jpg',
    photoAlt: 'Release Butler a Twitter bot that tweets changelogs of popular frontend frameworks and libraries, follow @releasebutler',
    linkLabel: 'Learn more',
    link: '../community/release-butler',
  },
  {
    title: 'Medium Enhanced Stats',
    subtitle: 'Get better Medium stats!',
    description: 'Medium Enhanced Stats is a Chrome extension which gives your total reach and summary stats of your articles (and responses) with a single click plus lots of useful improvements and information to the original Medium stats page!',
    logo: 'assets/logo/mediumenhancedstats.png',
    logoAlt: 'Medium Enhanced Stats Chrome extension',
    photo: 'assets/images/community/medium-enhanced-stats/contribution.jpg',
    photoAlt: '',
    linkLabel: 'Learn more',
    link: '../community/medium-enhanced-stats',
  }
];
