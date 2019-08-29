import { Title } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap, map, filter } from 'rxjs/operators';

const TITLE_SUFFIX =
  'by Tomas Trajan - Google Developer Expert for Angular and Web';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  constructor(private browserTitle: Title, private router: Router) {}

  start() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => {
          let current = this.router.routerState.snapshot.root;
          while (current.children && current.children.length) {
            current = current.children[0];
          }
          return current.data.title;
        }),
        tap(title => {
          if (!title) {
            console.warn(`No title for ${this.router.url}`);
          }
          this.browserTitle.setTitle(`${title} ${TITLE_SUFFIX}`);
        })
      )
      .subscribe();
  }
}
