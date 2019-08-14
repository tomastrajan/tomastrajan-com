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
      'Modern tooling provided by Angular CLI enables us to provide amazing developer experience. Providing built-in library specific schematics enables us to cut on the learning curve that is needed to get developers productive straight from the start by generating code which follows intentioned patterns and best practices.',
    logo: 'ngmy-logo.png',
    logoAlt: 'NG-MY 2019',
    photo: 'ngmy2019.png',
    photoAlt: 'Tomas Trajan speaking about Angular Schematics at NG-MY 2019',
    slides: 'https://slides.com/tomastrajan/angular-schematics-ng-my',
    event: 'https://2019.ng-my.org/speakers/tomas-trajan',
    recording: ''
  },
  {
    title: 'How to build custom Angular Schematics',
    subtitle: 'Angular Day 2019 - Verona / Italy',
    description:
      'Modern tooling provided by Angular CLI enables us to provide amazing developer experience. Providing built-in library specific schematics enables us to cut on the learning curve that is needed to get developers productive straight from the start by generating code which follows intentioned patterns and best practices.',
    logo: 'angularday-logo.png',
    logoAlt: 'Angular Day Verona',
    photo: 'angularday2019.png',
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
    photo: 'voxxeddays2019.png',
    photoAlt:
      'Tomas Trajan speaking about Angular Schematics at Voxxed Days Zurich 2019',
    slides: 'https://slides.com/tomastrajan/angular-schematics',
    event: 'https://cfpvdz19.confinabox.com/talk/DMF-3644',
    recording: 'https://www.youtube.com/watch?v=eFzjY4uWgCA'
  }
];
