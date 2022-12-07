import { Router } from '@angular/router';
import {
  Component,
  OnInit,
  HostBinding,
  Inject,
  PLATFORM_ID,
  ElementRef,
} from '@angular/core';
import { BehaviorSubject, combineLatest, Observable, of } from 'rxjs';
import { debounceTime, map, startWith, tap } from 'rxjs/operators';

import { ResponsiveLayoutService } from './core/layout/responsive-layout.service';
import { DOCUMENT, isPlatformBrowser, isPlatformServer } from '@angular/common';

@Component({
  selector: 'tt-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  initialNavOpened: boolean;
  navOpened: Observable<boolean>;
  navToggled = new BehaviorSubject(false);
  isSmallOrSmaller: Observable<boolean>;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    private host: ElementRef,
    private router: Router,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {}

  ngOnInit() {
    if (isPlatformServer(this.platformId)) {
      const isMobile = true;
      this.initialNavOpened = !isMobile;
      this.host.nativeElement.className = isMobile
        ? 'responsive cols-1'
        : 'cols-3';
      this.navOpened = of(this.initialNavOpened);
    }

    if (isPlatformBrowser(this.platformId)) {
      this.isSmallOrSmaller = combineLatest(
        this.responsiveLayoutService.isSmallOrSmaller,
        this.responsiveLayoutService.isLargeOrBigger,
        this.responsiveLayoutService.columnCount
      ).pipe(
        debounceTime(0),
        tap(([isSmall, isLarge, columnCount]) => {
          let resultClass = `cols-${columnCount}`;
          if (isSmall) {
            resultClass = `responsive cols-${columnCount}`;
          }
          if (isLarge) {
            resultClass = `responsive-large cols-${columnCount}`;
          }
          this.host.nativeElement.className = resultClass;
        }),
        map(([isSmall]) => isSmall)
      );

      this.initialNavOpened =
        !this.responsiveLayoutService.isSmallOrSmallerSync;
      this.navOpened = combineLatest([
        this.isSmallOrSmaller,
        this.navToggled,
      ]).pipe(
        map(([isSmallScreen, navToggled]) =>
          !isSmallScreen ? true : navToggled
        ),
        startWith(this.initialNavOpened)
      );
    }
  }

  onNavToggle() {
    this.navToggled.next(!this.navToggled.value);
  }

  onBackdropClick() {
    this.navToggled.next(false);
  }
}
