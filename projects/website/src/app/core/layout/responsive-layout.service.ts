import { isPlatformServer } from '@angular/common';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Inject, Injectable, Optional, PLATFORM_ID } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ResponsiveLayoutService {
  // basic
  isXSmallScreen = this.register([Breakpoints.XSmall]);
  isSmallScreen = this.register([Breakpoints.Small]);
  isMediumScreen = this.register([Breakpoints.Medium]);
  isLargeScreen = this.register([Breakpoints.Large]);
  isXLargeScreen = this.register([Breakpoints.XLarge]);

  // derived
  isSmallOrSmallerSync =
    this.breakpointObserver.isMatched(Breakpoints.XSmall) ||
    this.breakpointObserver.isMatched(Breakpoints.Small);

  isSmallOrSmaller = this.register([Breakpoints.XSmall, Breakpoints.Small]);

  isLargeOrBigger = this.register([Breakpoints.Large, Breakpoints.XLarge]);

  columnCount = combineLatest([
    this.isXSmallScreen,
    this.isSmallScreen,
    this.isMediumScreen,
    this.isLargeScreen,
  ]).pipe(
    map(([isXSmall, isSmall, isMedium, isLarge]) => {
      return isXSmall ? 1 : isSmall ? 2 : isMedium ? 2 : isLarge ? 3 : 4;
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}

  private register(breakpoints: string[]) {
    return this.breakpointObserver.observe(breakpoints).pipe(
      map((result) => result.matches),
      startWith(this.breakpointObserver.isMatched(breakpoints))
    );
  }
}
