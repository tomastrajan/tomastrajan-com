import { Component, OnInit } from '@angular/core';

const NAVIGATION = [
  {
    label: 'HOME',
    url: 'home'
  },
  {
    label: 'WORKSHOPS',
    url: 'workshops',
    children: [
      {
        label: 'Angular Mastery',
        url: 'workshops/angular-mastery'
      },
      {
        label: 'Angular State Management',
        url: 'workshops/angular-state-management-workshop-with-ngrx'
      }
    ]
  },
  {
    label: 'CONSULTING',
    url: 'consulting'
  },
  {
    label: 'SPEAKING',
    url: 'speaking'
  },
  {
    label: 'OPEN SOURCE',
    url: 'open-source'
  },
  {
    label: 'COMMUNITY',
    url: 'community',
    children: [
      {
        label: 'Angular Zurich Meetup',
        url: 'community/angular-zurich'
      }
    ]
  },
  {
    label: 'BLOG',
    externalUrl: 'https://medium.com/@tomastrajan'
  }
];

@Component({
  selector: 'tt-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  navigation = NAVIGATION;

  constructor() {}

  ngOnInit() {}
}
