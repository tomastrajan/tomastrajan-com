import { Component } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter, map, startWith } from 'rxjs/operators';

@Component({
  selector: 'tt-workshops',
  templateUrl: './workshops.component.html',
  styleUrls: ['./workshops.component.scss'],
})
export class WorkshopsComponent {
  backgroundClass$ = this.router.events.pipe(
    filter((event) => event instanceof NavigationEnd),
    startWith('init'),
    map(
      () =>
        'background ' +
        this.activatedRoute.snapshot.firstChild.firstChild.data.background
    )
  );

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}
}
