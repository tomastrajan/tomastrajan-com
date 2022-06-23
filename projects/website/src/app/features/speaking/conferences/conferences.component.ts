import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-conferences',
  templateUrl: './conferences.component.html',
  styleUrls: ['./conferences.component.scss'],
})
export class ConferencesComponent implements OnInit {
  talks = TALKS;
  columnCount: Observable<number>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}

const TALKS = [
  {
    title: 'The Top 10 Best Practices for NgRx',
    subtitle: 'Angular Air 2020 - Podcast',
    description:
      'In this podcast we are discussing top 10 proven NgRx best practices including NgRx 80/20 rule and general advice on architecture and clean dependency graph',
    logo: 'angularair-logo.png',
    logoAlt: 'Angular Air Podcast',
    photo: 'angularair202206.jpg',
    photoAlt:
      'Tomas Trajan speaking about The Top 10 Best Practices for NgRx at Angular Air Podcast',
    recording: 'https://www.youtube.com/watch?v=2QnCNR5nzhg',
    article:
      'https://tomastrajan.medium.com/level-up-your-ngrx-skills-with-10-time-tested-best-practices-6c837fb14877?sk=bcadc2453e32ff825e5eb8681ea01bb4',
  },
  {
    title: 'The Best Way To Architect Your Angular Libraries',
    subtitle: 'BernerJS Meetup 2021',
    description:
      "In this talk we're going to explore how to architect Angular libraries with the help of sub-entries so that our consumers can benefit from the smallest possible bundle size and our teammates from great developer experience when adding additional components and services to the library itself!",
    logo: 'bernerjs-logo.png',
    logoAlt: 'BernerJS Meetup 08 2021',
    photo: 'bernerjs2021.jpg',
    photoAlt:
      'Tomas Trajan speaking about The Best Way To Architect Your Angular Libraries at BernerJS meetup',
    recording: 'https://www.youtube.com/watch?v=2vHJ3_Om_gU',
    article:
      'https://tomastrajan.medium.com/the-best-way-to-architect-your-angular-libraries-87959301d3d3',
  },
  {
    title: 'Designing Reusable Components With Angular',
    subtitle: 'Angular Rocks Podcast 2021',
    description: `Component is the central piece in Angular. Sometimes you want to generalize a particular component, to make it shareable across your application or to move into a custom component library to share it around multiple applications. It is important to understand how to approach shareable components in your particular use-case.`,
    logo: 'angularrocks-logo.png',
    logoAlt: 'Angular Rocks Podcast 08 2021',
    photo: 'angularrocks2021.jpg',
    photoAlt:
      'Tomas Trajan speaking about Designing Reusable Components With Angular at Angular Rocks Podcast',
    recording:
      'https://angularrocks.com/episodes/designing-reusable-components-with-tomas-trajan',
    article:
      'https://tomastrajan.medium.com/the-6-best-practices-for-building-custom-angular-components-library-1d6a4cc8215e',
  },
  {
    title: 'Master of Ceremony for JS day IT 2021',
    subtitle: 'JSdayIT 2021 - Conference',
    description:
      'Managing Q/A sessions for all 7 talks of jsday.IT 2021 Virtual edition,\n' +
      'facilitating viewers questions and coming up with relevant content based questions to further enhance viewer experience and communicate concepts presented by the speakers...',
    logo: 'angularday-logo.png',
    logoAlt: 'JSdayIT Conference',
    photo: 'jsdayit2021mc.jpg',
    photoAlt: 'Tomas Trajan in the role of MC for JSdayIT 2021 Conference',
  },
  {
    title: 'Microfrontends with Angular Elements',
    subtitle: 'Angular Minsk Meetup 2020 - Remote',
    description:
      'Sub-applications (and full microfrontends) can help us solve many real world use cases in large enterprise organizations with many applications, teams and developers. ',
    logo: 'angularminsk-logo.jpg',
    logoAlt: 'Angular Minsk Meetup',
    photo: 'angularminsk2020.jpg',
    photoAlt:
      'Tomas Trajan speaking about Microfrontends with Angular Elements at Angular Minsk Meetup Remote',
    recording: 'https://www.youtube.com/watch?v=ivPyIsUc1tE',
  },
  {
    title: 'How to architect epic Angular applications!',
    subtitle: 'Angular Air 2020 - Podcast',
    description:
      'In this podcast we are discussing how to scaffold new Angular application with clean, maintainable and extendable architecture and what are the benefits of doing so.',
    logo: 'angularair-logo.png',
    logoAlt: 'Angular Air Podcast',
    photo: 'angularair202003.jpg',
    photoAlt:
      'Tomas Trajan speaking about epic Angular application architecture at Angular Air Podcast',
    recording: 'https://www.youtube.com/watch?v=fM_jWSfOUOo',
    article:
      'https://medium.com/@tomastrajan/how-to-build-epic-angular-app-with-clean-architecture-91640ed1656',
  },

  {
    title: 'Angular Elements - Microfrontends',
    subtitle: 'GDG DevFest 2019 - Moscow / Russia',
    description:
      "Let's explore powerful Angular features are here for the rescue enabling us to implement configurable dynamic Microfrontends with ease!",
    logo: 'gdg-logo.png',
    logoAlt: 'GDG DevFest',
    photo: 'gdgmoscow2019.jpg',
    photoAlt:
      'Tomas Trajan speaking about building Angular Microfrontends with Angular Elements at GDG DevFest Moscow 2019',
    slides: 'https://slides.com/tomastrajan/angular-elements-microfrontends',
    event: 'https://devfest-msk-2019.web.app/schedule/2019-11-09?sessionId=107',
  },
  {
    title: 'How to build custom Angular Schematics',
    subtitle: 'Angular Day 2019 - Verona / Italy',
    description:
      'Modern tooling provided by Angular CLI enables us to provide amazing developer experience. Providing built-in library specific schematics enables us to cut on the learning curve that is needed to get developers productive straight from the start by generating code which follows intentioned best practices.',
    logo: 'angularday-logo.png',
    logoAlt: 'Angular Day Verona',
    photo: 'angularday2019.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular Schematics at Angular Day Verona 2019',
    slides: 'https://slides.com/tomastrajan/angular-schematics',
    event: 'https://2019.angularday.it/talks.html',
    recording: 'https://vimeo.com/356392795',
  },
  {
    title: 'Angular Schematics',
    subtitle: 'NG-MY 2019 - Kuala Lumpur / Malaysia',
    description:
      'Modern tooling provided by Angular CLI enables us to provide amazing developer experience. Providing built-in library specific schematics enables us to cut on the learning curve that is needed to get developers productive straight from the start by generating code which follows intentioned patterns.',
    logo: 'ngmy-logo.png',
    logoAlt: 'NG-MY 2019',
    photo: 'ngmy2019.jpg',
    photoAlt: 'Tomas Trajan speaking about Angular Schematics at NG-MY 2019',
    slides: 'https://slides.com/tomastrajan/angular-schematics-ng-my',
    event: 'https://2019.ng-my.org/speakers/tomas-trajan',
    recording: 'https://www.youtube.com/watch?v=Y7irT8OS2zg',
  },
  {
    title: 'Guide to custom Angular Schematics',
    subtitle: 'Angular Zurich Meetup 03 2019 - Switzerland',
    description:
      'This presentation will be in form of live coding in which we explore how we can use Angular Schematics provided out of the box, how to create our own custom schematics and how to integrate them into Angular CLI workspaces.',
    logo: 'angularzurich-logo.png',
    logoAlt: 'Angular Zurich Meetup 03 2019',
    photo: 'angularzurich201903.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular Schematics at Angular Zurich Meetup 03 2019',
    slides: 'https://slides.com/tomastrajan/angular-schematics',
    event: 'https://www.meetup.com/AngularZRH/events/258725129/',
    recording: 'https://www.youtube.com/watch?v=M5YSPas3qFo',
  },
  {
    title: 'How to leverage Angular Schematics',
    subtitle: 'Voxed Days Zurich 2019 - Switzerland',
    description:
      'This presentation will be in form of live coding in which we explore how we can use Angular Schematics provided out of the box, how to create our own custom schematics and how to integrate them into Angular CLI workspaces.',
    logo: 'voxxeddays-logo.png',
    logoAlt: 'Voxxed Days Zurich 2019',
    photo: 'voxxeddays2019.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular Schematics at Voxxed Days Zurich 2019',
    slides: 'https://slides.com/tomastrajan/angular-schematics',
    event: 'https://cfpvdz19.confinabox.com/talk/DMF-3644',
    recording: 'https://www.youtube.com/watch?v=eFzjY4uWgCA',
  },
  {
    title: 'Release Butler (Twitter Bot Sideproject)',
    subtitle: 'Kuala Lumpur JS Meetup 2019 - Malaysia',
    description:
      'Release Butler - A twitter bot that helps you to stay up to date by with releases with popular frontend framework and libraries like Angular, React, Vue... by tweeting their changelogs!',
    logo: 'kljs-logo.png',
    logoAlt: 'Kuala Lumpur JS Meetup 2019',
    photo: 'kljs2019.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular Schematics at Angular Zurich Meetup 03 2019',
    slides: 'https://slides.com/tomastrajan/release-butler/',
    event:
      'https://www.meetup.com/Junior-Developers-Malaysia/events/262661606/',
    recording: '',
  },
  {
    title: 'How to lazy load ANgular Elements',
    subtitle: 'Angular Zurich Meetup 08 2019 - Switzerland',
    description:
      'Web components and Angular elements are exciting new web technologies! They enable us to build and compose our frontend application in unprecedented ways. Learn about the new seamless way of using them in your Angular applications & various use cases.',
    logo: 'angularzurich-logo.png',
    logoAlt: 'Angular Zurich Meetup 08 2019',
    photo: 'angularzurich201908.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular Elements at Angular Zurich Meetup 08 2019',
    slides: 'https://slides.com/tomastrajan/angular-elements/',
    event: 'https://www.meetup.com/AngularZRH/events/263770872/',
    recording: 'https://www.youtube.com/watch?v=X__jkPGYRUs',
  },
  {
    title: 'How to build Angular Schematics',
    subtitle: 'BernerJS Meetup 04 2019 - Switzerland',
    description:
      'This presentation will be in form of live coding in which we explore how we can use Angular Schematics provided out of the box, how to create our own custom schematics and how to integrate them into Angular CLI workspaces.',
    logo: 'bernerjs-logo.png',
    logoAlt: 'BernerJS Meetup 04 2019',
    photo: 'bernerjs201904.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular Schematics at Angular Zurich Meetup 03 2019',
    slides: 'https://slides.com/tomastrajan/angular-schematics',
    event: 'https://www.meetup.com/Barner-JS-Talks/events/261475983/',
    recording: '',
  },
  {
    title: 'Common Angular anti-patterns in Enterprise Applications',
    subtitle: 'Die Mobiliar 2019 - Switzerland',
    description:
      'This presentation explored most common anti-patterns in the enteprise codebases related to performance, and implementation of the RxJs streams and proposed solutions and improvements to remedy the situation.',
    logo: 'diemobiliar-logo.png',
    logoAlt: 'Die Mobiliar 2019',
    photo: 'diemobiliar2019.jpg',
    photoAlt:
      'Tomas Trajan speaking about Angular enterprise anti-patterns in Die Mobiliar',
    recording: 'https://www.youtube.com/watch?v=lOMpq1rfrSM',
  },
  {
    title: 'Theming of Angular Material Apps',
    subtitle: 'BernerJS Meetup 2017 - Switzerland',
    description:
      'Angular Material is a great component framework for Angular! It also comes with amazing theming support which enables us to customize primary, accent and wanr colors, define custom colors and even get and dark theme out of the box.',
    logo: 'bernerjs-logo.png',
    logoAlt: 'Berner JS 2017',
    photo: 'bernerjs2017.jpg',
    photoAlt: 'Tomas Trajan speaking about custom theming of Angular Material',
    slides: 'https://slides.com/tomastrajan/angular-material-themes-guide',
    recording: 'https://www.youtube.com/watch?v=5I3BAL63QRM',
    event: 'https://www.meetup.com/Barner-JS-Talks/events/242348660/',
  },
  {
    title: 'Proper unit testing of Angular JS apps',
    subtitle: 'BernerJS Meetup 2015 - Switzerland',
    description:
      'Standard way of testing of Angular JS 1.X app is using “official” Karma / Jasmine solution, which uses a lot of Angular specific APIs. Let’s explore how can we implement our unit-tests independently from Angular with help of (ES6) modules and Mocha.',
    logo: 'bernerjs-logo.png',
    logoAlt: 'Berner JS 2015',
    photo: 'bernerjs2015.jpg',
    photoAlt:
      'Tomas Trajan speaking about proper unit testing of Angular JS apps',
    slides:
      'https://slides.com/tomastrajan/angularjs-unit-testing-with-es6-modules',
    recording: 'https://www.youtube.com/watch?v=sz37GQ45rVI',
  },
  {
    title: 'The Easiest Way to use Angular Elements',
    subtitle: 'Adventures in Angular Podcast #257',
    description:
      'In this episode of Adventures in Angular Tomas Trajan, an Angular elements expert, breaks down how to use Angular elements for the panel including how are great they are for some use cases in large enterprise organizations.',
    logo: 'devchat-logo.png',
    logoAlt: 'Devchat',
    photo: 'aid201904.jpg',
    photoAlt:
      'Tomas Trajan speaking about The Easiest Way to use Angular Elements',
    recording:
      'https://devchat.tv/adv-in-angular/aia-257-the-easiest-way-to-use-angular-elements-with-tomas-trajan/',
    event:
      'https://devchat.tv/adv-in-angular/aia-257-the-easiest-way-to-use-angular-elements-with-tomas-trajan/',
  },
  {
    title: 'Getting Serious with Angular Schematics',
    subtitle: 'Adventures in Angular Podcast #233',
    description:
      'In this episode of Adventures in Angular, the panel speaks with Tomas Trajan a Google Developer Expert for Angular from Switzerland. Tomas explains what Angular Schematics is and how it simplifies a developer’s life. He goes through cases where Angular Schematics would be great to use.',
    logo: 'devchat-logo.png',
    logoAlt: 'Devchat',
    photo: 'aid201904.jpg',
    photoAlt:
      'Tomas Trajan speaking about getting serious with Angular Schematics',
    recording:
      'https://devchat.tv/adv-in-angular/aia-233-getting-serious-with-schematics-with-tomas-trajan/',
    event:
      'https://devchat.tv/adv-in-angular/aia-233-getting-serious-with-schematics-with-tomas-trajan/',
  },
  {
    title: 'Crazy personal stories about Angular and life in general',
    subtitle: 'My Angular Story Podcast #92',
    description:
      'Tomas Trajan joins Aaron Frost to talk about his journey as a Angular consultant and Google Developer Expert. Tomas and Aaron mention that they are both drop-outs from college and share different sources of self-learning. They both agree they did not learn programming in school.',
    logo: 'devchat-logo.png',
    logoAlt: 'Devchat',
    photo: 'mas201909.jpg',
    photoAlt: 'Tomas Trajan speaking about his Angular story',
    recording: 'https://devchat.tv/my-angular-story/mas-092-tomas-trajan/',
    event: 'https://devchat.tv/my-angular-story/mas-092-tomas-trajan/',
  },
];
