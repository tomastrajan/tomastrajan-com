import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { tap, map, filter } from 'rxjs/operators';
import { IdleMonitorService, ScullyRoutesService } from '@scullyio/ng-lib';

const BASE_URL = 'https://tomastrajan.com';
const CARD_IMAGE_URL = `${BASE_URL}/assets/images/social/splash.jpg`;
const TITLE_SUFFIX =
  'by Tomas Trajan - Google Developer Expert for Angular and Web';

@Injectable({
  providedIn: 'root',
})
export class SeoService {
  canonicalLink: HTMLLinkElement = this.document.createElement('link');
  constructor(
    @Inject(DOCUMENT) private document: Document,
    private title: Title,
    private meta: Meta,
    private router: Router,
    private scully: ScullyRoutesService,
    private ims: IdleMonitorService
  ) {
    this.canonicalLink.setAttribute('rel', 'canonical');
    this.document.head.appendChild(this.canonicalLink);
  }

  start() {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(() => this.getCurrentRuteData()),
        tap((data) => {
          this.updateTitleAndDescription(data);
          this.updateMetaTagsOpenGraph(data);
          this.updateMetaTagsTwitter(data);

          const { pathname } = this.document.location;
          this.canonicalLink.setAttribute(
            'href',
            `https://tomastrajan.com${pathname}`
          );
          this.ims.fireManualMyAppReadyEvent();
        })
      )
      .subscribe();
  }

  private updateTitleAndDescription(data: RouteSeoData) {
    const title = data.title;
    if (!title) {
      console.warn(`No title for ${this.router.url}`);
    }
    this.title.setTitle(`${title} ${TITLE_SUFFIX}`);
    this.meta.updateTag({ property: 'description', content: data.description });
  }

  private updateMetaTagsOpenGraph(data: RouteSeoData) {
    this.meta.updateTag({ property: 'og:title', content: data.title });
    this.meta.updateTag({
      property: 'og:description',
      content: data.description,
    });
    this.meta.updateTag({
      property: 'og:site_name',
      content:
        'Tomas Trajan - Google Developer Expert for Angular and Web technologies',
    });
    this.meta.updateTag({
      property: 'og:image ',
      content: `${BASE_URL}${data.image}` || CARD_IMAGE_URL,
    });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:url',
      content: `${BASE_URL}${this.router.url}`,
    });
  }

  private updateMetaTagsTwitter(data: RouteSeoData) {
    this.meta.updateTag({ property: 'twitter:title', content: data.title });
    this.meta.updateTag({
      property: 'twitter:description',
      content: data.description,
    });
    this.meta.updateTag({
      property: 'twitter:image',
      content: `${BASE_URL}${data.image}` || CARD_IMAGE_URL,
    });
    this.meta.updateTag({ property: 'twitter:site', content: '@tomastrajan' });
    this.meta.updateTag({
      property: 'twitter:creator',
      content: '@tomastrajan',
    });
  }

  private getCurrentRuteData(): RouteSeoData {
    let current = this.router.routerState.snapshot.root;
    while (current.children && current.children.length) {
      current = current.children[0];
    }
    return current.data as RouteSeoData;
  }
}

export interface RouteSeoData {
  title: string;
  description: string;
  image?: string;
}
