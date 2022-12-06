import { isPlatformServer } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveLayoutService {
  // basic
  isXSmallScreen: Observable<boolean>;
  isSmallScreen: Observable<boolean>;
  isMediumScreen: Observable<boolean>;
  isLargeScreen: Observable<boolean>;
  isXLargeScreen: Observable<boolean>;

  // derived
  columnCount: Observable<number>;
  isSmallOrSmaller: Observable<boolean>;
  isLargeOrBigger: Observable<boolean>;
  isSmallOrSmallerSync: boolean;

  // server
  isServerMobile = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.isSmallOrSmallerSync =
      this.breakpointObserver.isMatched(Breakpoints.XSmall) ||
      this.breakpointObserver.isMatched(Breakpoints.Small);
    this.isXSmallScreen = this.breakpointObserver
      .observe([Breakpoints.XSmall])
      .pipe(map((result) => result.matches));
    this.isSmallScreen = this.breakpointObserver
      .observe([Breakpoints.Small])
      .pipe(map((result) => result.matches));
    this.isMediumScreen = this.breakpointObserver
      .observe([Breakpoints.Medium])
      .pipe(map((result) => result.matches));
    this.isLargeScreen = this.breakpointObserver
      .observe([Breakpoints.Large])
      .pipe(map((result) => result.matches));
    this.isXLargeScreen = this.breakpointObserver
      .observe([Breakpoints.XLarge])
      .pipe(map((result) => result.matches));

    this.columnCount = combineLatest([
      this.isXSmallScreen,
      this.isSmallScreen,
      this.isMediumScreen,
      this.isLargeScreen,
    ]).pipe(
      map(([isXSmall, isSmall, isMedium, isLarge]) => {
        return isXSmall ? 1 : isSmall ? 2 : isMedium ? 2 : isLarge ? 3 : 4;
      })
    );

    this.isSmallOrSmaller = this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .pipe(
        map((result) => {
          return result.matches;
        })
      );

    this.isLargeOrBigger = this.breakpointObserver
      .observe([Breakpoints.Large, Breakpoints.XLarge])
      .pipe(map((result) => result.matches));
  }
}
