import { Component, EventEmitter, OnInit, Output } from '@angular/core';

const NAVIGATION = [
  {
    label: 'HOME',
    url: 'home',
  },
  {
    label: 'WORKSHOPS',
    url: 'workshops',
    children: [
      {
        label: 'Angular Mastery',
        url: 'workshops/angular-mastery',
      },
      {
        label: 'Getting reactive with RxJs',
        url: 'workshops/getting-reactive-with-rxjs-workshop',
      },
      {
        label: 'Angular State Management',
        url: 'workshops/angular-state-management-workshop-with-ngrx',
      },
      {
        label: 'Angular Reactive Forms',
        url: 'workshops/angular-reactive-forms-workshop',
      },
      {
        label: 'Frontend Heroes',
        url: 'workshops/frontend-heroes-workshop',
      },
    ],
  },
  {
    label: 'CONSULTING',
    url: 'consulting',
  },
  {
    label: 'SPEAKING',
    url: 'speaking',
    children: [
      {
        label: 'Conferences & Meetups',
        url: 'speaking/conferences',
      },
      {
        label: 'Conference Kit',
        url: 'speaking/conference-kit',
      },
    ],
  },
  {
    label: 'OPEN SOURCE',
    url: 'open-source',
    children: [
      {
        label: 'Projects Overview',
        url: 'open-source/projects',
      },
      {
        label: 'Angular Elements',
        url: 'open-source/angular-elements',
      },
      {
        label: 'Angular Material Starter',
        url: 'open-source/angular-ngrx-material-starter',
      },
    ],
  },
  {
    label: 'COMMUNITY',
    url: 'community',
    children: [
      {
        label: 'Angular Zurich Meetup',
        url: 'community/angular-zurich',
      },
      {
        label: 'Release Butler',
        url: 'community/release-butler',
      },
      {
        label: 'Medium Enhanced Stats',
        url: 'community/medium-enhanced-stats',
      },
    ],
  },
  {
    label: 'BLOG',
    externalUrl: 'https://medium.com/@tomastrajan',
  },
  {
    label: 'CONTACT',
    url: 'contact',
  },
];

@Component({
  selector: 'tt-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent implements OnInit {
  @Output() closeSideNav = new EventEmitter<void>();

  navigation = NAVIGATION;

  constructor() {}

  ngOnInit() {}

  close(close: boolean) {
    if (close) {
      this.closeSideNav.emit();
    }
  }
}
