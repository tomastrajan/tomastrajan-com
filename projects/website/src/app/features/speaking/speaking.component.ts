import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tt-speaking',
  templateUrl: './speaking.component.html',
  styleUrls: ['./speaking.component.scss']
})
export class SpeakingComponent implements OnInit {
  talks = TALKS;

  constructor() {}

  ngOnInit() {}
}

const TALKS = [
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
    recording: ''
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
    recording: ''
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
    recording: 'https://www.youtube.com/watch?v=eFzjY4uWgCA'
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
    recording: 'https://www.youtube.com/watch?v=M5YSPas3qFo'
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
    recording: ''
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
    recording: ''
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
    recording: 'https://www.youtube.com/watch?v=lOMpq1rfrSM'
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
    event: 'https://www.meetup.com/Barner-JS-Talks/events/242348660/'
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
    recording: 'https://www.youtube.com/watch?v=sz37GQ45rVI'
  }
];
