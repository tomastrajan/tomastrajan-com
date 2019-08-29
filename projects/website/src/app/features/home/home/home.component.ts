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
    subtitle: 'Angular Conference - NG-MY 2019 - Kuala Lumpur / Malaysia',
    description:
      'Modern tooling provided by Angular CLI enables us to provide amazing developer experience. Providing built-in library specific schematics enables us to cut on the learning curve that is needed to get developers productive straight from the start by generating code which follows intentioned patterns.',
    logo: 'assets/images/speaking/ngmy-logo.png',
    logoAlt: 'NG-MY 2019',
    photo: 'assets/images/speaking/ngmy2019.jpg',
    photoAlt: 'Tomas Trajan speaking about Angular Schematics at NG-MY 2019',
    linkLabel: 'Learn more',
    link: '../speaking/conferences'
  },
  {
    title: 'Release Butler',
    subtitle:
      'Twitter bot that tweets changelogs of popular frontend frameworks and libraries',
    description:
      'Release Butler is a Twitter bot that helps you to stay up to date with releases of popular frontend frameworks & libraries!',
    logo: 'assets/logo/releasebutler.png',
    logoAlt: 'Release Butler',
    photo: 'assets/images/community/release-butler/splash.jpg',
    photoAlt:
      'Release Butler a Twitter bot that tweets changelogs of popular frontend frameworks and libraries, follow @releasebutler',
    linkLabel: 'Learn more',
    link: '../community/release-butler'
  },
  {
    title: 'Medium Enhanced Stats',
    subtitle:
      'Chrome extension that gives you better Medium stats with a single click!',
    description:
      'Medium Enhanced Stats is a Chrome extension which gives your total reach and summary stats of your articles (and responses) with a single click plus lots of useful improvements and information to the original Medium stats page!',
    logo: 'assets/logo/mediumenhancedstats.png',
    logoAlt: 'Medium Enhanced Stats Chrome extension',
    photo: 'assets/images/community/medium-enhanced-stats/contribution.jpg',
    photoAlt:
      'Medium Enhanced Stats is a Chrome extension which gives your total reach and summary stats of your articles (and responses) with a single click without need to visit Medium itself!',
    linkLabel: 'Learn more',
    link: '../community/medium-enhanced-stats'
  },
  {
    title: 'Angular Zurich Meetup',
    subtitle: 'Co-organizer of the Angular Zurich Meetup',
    description:
      'Angular Zurich is a local Swiss Angular community based in the beautiful city of Zurich. Local and international speakers are sharing their Angular know-how and experience in form of full length (45 min) and lightning (15 min) talks. The meetup is usually taking place once a month.',
    logo: 'assets/logo/angularzurich.png',
    logoAlt: 'Angular Zurich Meetup',
    photo: 'assets/images/speaking/angularzurich201903.jpg',
    photoAlt: 'Lets learn Angular together! ',
    linkLabel: 'Learn more',
    link: '../community/angular-zurich'
  },
  {
    title: 'Angular State Management Workshop',
    subtitle: 'We will explore various ways of handling state in Angular apps and become a NgRx pro!',
    description:
      'This workshop will teach you all the necessary concepts to become confident and productive in relation to Angular state management. We will explore various ways of handling state, heuristics on which way to choose based on the particular use case and many hands on exercises!',
    logo: 'assets/logo/ngrx.svg',
    logoAlt: 'NgRx - Angular reactive state management library',
    photo: 'assets/images/workshops/angular-state-management.jpg',
    photoAlt: 'Angular State Management Workshop',
    linkLabel: 'Learn more',
    link: '../workshops/angular-state-management-workshop-with-ngrx'
  }
];
