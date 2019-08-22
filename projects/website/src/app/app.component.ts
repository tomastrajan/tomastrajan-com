import { NavigationEnd, Router } from '@angular/router';
import { Component, OnInit, HostBinding, Inject } from '@angular/core';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';

import { WINDOW } from './core/tokens/window.token';
import { ResponsiveLayoutService } from './core/layout/responsive-layout.service';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  demoRootCssClass = '';

  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);
  isSmallOrSmaller: Observable<boolean>;
  sidenavMode: Observable<string>;

  constructor(
    @Inject(WINDOW) private window: any,
    private router: Router,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {}

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.window.gtag('config', 'UA-53234284-4', {
          page_url: event.urlAfterRedirects
        });
      }
    });

    this.isSmallOrSmaller = combineLatest(
      this.responsiveLayoutService.isSmallOrSmaller,
      this.responsiveLayoutService.isLargeOrBigger,
      this.responsiveLayoutService.columnCount
    ).pipe(
      delay(1),
      tap(([isSmall, isLarge, columnCount]) => {
        this.demoRootCssClass = `cols-${columnCount}`;
        if (isSmall) {
          this.demoRootCssClass = `responsive cols-${columnCount}`;
        }
        if (isLarge) {
          this.demoRootCssClass = `responsive-large cols-${columnCount}`;
        }
      }),
      map(([isSmall]) => isSmall)
    );

    this.navOpened = combineLatest([
      this.isSmallOrSmaller,
      this.navToggled
    ]).pipe(
      map(([isSmallScreen, navToggled]) => (!isSmallScreen ? true : navToggled))
    );

    this.sidenavMode = this.isSmallOrSmaller.pipe(
      map(isSmallOrSmaller => (isSmallOrSmaller ? 'push' : 'side'))
    );
  }

  onNavToggle() {
    this.navToggled.next(!this.navToggled.value);
  }

  onBackdropClick() {
    this.navToggled.next(false);
  }
}
