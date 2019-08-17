import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const URL_ANGULAR_ZURICH = `https://api.rss2json.com/v1/api.json?rss_url=${encodeURIComponent(
  `https://www.youtube.com/feeds/videos.xml?channel_id=UC3dvhlLD9QsFwe3H0HrFJLg`
)}`;

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {
  constructor(
    private httpClient: HttpClient,
    private domSanitizer: DomSanitizer
  ) {}

  getAngularZurichVideoUrls(): Observable<SafeResourceUrl[]> {
    return this.httpClient
      .get(URL_ANGULAR_ZURICH)
      .pipe(
        map((data: any) =>
          data.items.map(item =>
            this.domSanitizer.bypassSecurityTrustResourceUrl(
              `https://youtube.com/embed/${item.link.split('=')[1]}`
            )
          )
        )
      );
  }
}
