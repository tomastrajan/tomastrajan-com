import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
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
    title: 'Angular Mastery Workshop',
    subtitle:
      'This workshop will teach you how to become proficient Angular developer!',
    description:
      'We will go step by step through all the interesting concepts and hands on exercises to build up your knowledge and skills from introduction to web development and Typescript to detailed topics like Angular routing or lazy loading...',
    logo: 'assets/logo/angular.svg',
    logoAlt: 'Angular the best web framework there is',
    photo: 'assets/images/workshops/angular-mastery.jpg',
    photoAlt: 'Angular Mastery Workshop',
    linkLabel: 'Learn more',
    link: '../workshops/angular-mastery',
  },
  {
    title: 'Angular NgRx Workshop',
    subtitle:
      'We will explore various ways of handling state in Angular apps and become a NgRx pro!',
    description:
      'This workshop will teach you all the necessary concepts to become confident and productive in relation to Angular state management. We will explore various ways of handling state, heuristics on which way to choose based on the particular use case and many hands on exercises!',
    logo: 'assets/logo/ngrx.svg',
    logoAlt: 'NgRx - Angular reactive state management library',
    photo: 'assets/images/workshops/angular-state-management.jpg',
    photoAlt: 'Angular State Management Workshop',
    linkLabel: 'Learn more',
    link: '../workshops/angular-state-management-workshop-with-ngrx',
  },
  {
    title: 'Getting Reactive with RxJs Workshop',
    subtitle:
      'Learn fundamental concepts and get hands on experience with RxJs!',
    description:
      'This workshop will teach you why and how to use RxJs including all basic concepts, best practices & real life Angular use cases and examples!',
    logo: 'assets/logo/rxjs.svg',
    logoAlt: 'RxJs - Reactive Extensions library',
    photo: 'assets/images/workshops/getting-reactive-with-rxjs.jpg',
    photoAlt: 'Getting Reactive With RxJs Workshop',
    linkLabel: 'Learn more',
    link: '../workshops/getting-reactive-with-rxjs-workshop',
  },
  {
    title: 'Consulting Offer',
    subtitle:
      'Supercharge your Angular application development with our expert support',
    description:
      'Welcome to the world of Angular excellence by Google Developer Experts! Proven architecture, best practices and quality control ensure your team delivers an exceptional experience every time...',
    logo: 'assets/logo/angular-experts.svg',
    logoAlt: 'Angular Logo',
    photo: 'assets/images/consulting/angular-experts.jpg',
    photoAlt: 'Angular experts services',
    linkLabel: 'Explore consulting offer',
    externalLink: 'https://angularexperts.io',
  },
  {
    title: 'Enterprise Polyrepo Tooling',
    subtitle: 'Understand and evolve your enterprise polyrepo environment',
    description:
      'Omniboard is the best tool for lead software engineers and architects that helps them to get an overview to drive change by querying and tracking all their code bases!',
    logo: 'assets/logo/omniboard.png',
    logoAlt: 'Omniboard Logo',
    photo: 'assets/images/omniboard/omniboard-dashboard.png',
    photoAlt: 'Omniboard dashboard example',
    linkLabel: 'Learn more',
    externalLink: 'https://omniboard.dev',
  },
  {
    title: 'Conferences & Meetups',
    subtitle:
      'Talks about Angular and frontend at various conferences and meetups',
    description:
      'Check out recordings and slides from various Angular and frontend related talks I shared with developers at conferences & meetups around the world and learn about current offer of talks that I can present at your upcoming event...',
    logo: 'assets/logo/angular.svg',
    logoAlt: 'Angular Logo',
    photo: 'assets/images/speaking/angularday2019.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular Schematics at Angular Day Verona 2019',
    linkLabel: 'Learn more',
    link: '../speaking/conferences',
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
    link: '../community/angular-zurich',
  },

  {
    title: 'Angular NgRx Starter',
    subtitle:
      'An community open-source project that helps you get started with Angular project',
    description:
      'The Angular NgRx Material Starter is a community built open source projects that helps you get started with Angular by exploring real world project! You will get theming, i18n, reactive forms and many other features and examples out of the box!',
    logo: 'assets/logo/anms.png',
    logoAlt: 'Angular NgRx Material Starter',
    photo: 'assets/images/open-source/angular-starter/splash.jpg',
    photoAlt:
      'Angular NgRx Material Starter is a community based open source project',
    linkLabel: 'Learn more',
    link: '../open-source/angular-ngrx-material-starter',
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
    link: '../community/release-butler',
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
    link: '../community/medium-enhanced-stats',
  },
];
