import { Title, Meta } from '@angular/platform-browser';
import { Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap, map, filter } from 'rxjs/operators';

const TITLE_SUFFIX =
  'by Tomas Trajan - Google Developer Expert for Angular and Web';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  constructor(private title: Title, private meta: Meta, private router: Router) {}

  start() {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        map(() => this.getCurrentRuteData()),
        tap(data => this.updateTitle(data)),
        tap(data => this.updateMetaTagsTwitter(data))
      )
      .subscribe();
  }

  private updateTitle(data: any) {
    const title = data.title;
    if (!title) {
      console.warn(`No title for ${this.router.url}`);
    }
    this.title.setTitle(`${title} ${TITLE_SUFFIX}`);
  }

  private updateMetaTagsTwitter(data) {
    this.meta.updateTag({ property: 'twitter:title', content: data.title });
    this.meta.updateTag({ property: 'twitter:description', content: data.description });
    this.meta.updateTag({ property: 'twitter:image', content: 'https://tomastrajan.com/assets/images/social/splash.jpg' });
    this.meta.updateTag({ property: 'twitter:site', content: '@tomastrajan' });
    this.meta.updateTag({ property: 'twitter:creator', content: '@tomastrajan' });
  }

  private getCurrentRuteData() {
    let current = this.router.routerState.snapshot.root;
    while (current.children && current.children.length) {
      current = current.children[0];
    }
    return current.data;
  }
}
