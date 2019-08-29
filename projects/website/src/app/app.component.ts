import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  HostBinding,
  Inject,
  Optional, PLATFORM_ID
} from '@angular/core';
import { REQUEST } from '@nguniversal/express-engine/tokens';
import { BehaviorSubject, combineLatest, Observable } from 'rxjs';
import { delay, map, startWith, tap } from 'rxjs/operators';

import { ResponsiveLayoutService } from './core/layout/responsive-layout.service';
import { isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class')
  demoRootCssClass = '';

  initialNavOpened = true;
  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);
  isSmallOrSmaller: Observable<boolean>;
  sidenavMode: Observable<string>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(REQUEST) @Optional() private req: any,
    private router: Router,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {
    if (isPlatformServer(this.platformId)) {
      console.log('DEBUG server', this.req.useragent);
      if (this.req && this.req.useragent) {
        this.initialNavOpened = this.req.useragent.isDesktop;
      }
    }
    if (isPlatformBrowser(this.platformId)) {
      this.initialNavOpened = !this.responsiveLayoutService.isSmallOrSmallerSync;
    }
  }

  ngOnInit() {
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
      map(([isSmallScreen, navToggled]) =>
        !isSmallScreen ? true : navToggled
      ),
      startWith(this.initialNavOpened)
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
