import { SafeResourceUrl } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { YoutubeService } from '../../../core/api/youtube.service';
import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-angular-zurich',
  templateUrl: './angular-zurich.component.html',
  styleUrls: ['./angular-zurich.component.scss']
})
export class AngularZurichComponent implements OnInit {
  videoUrls: Observable<SafeResourceUrl[]>;
  columnCount: Observable<number>;
  cta = `Drop us a line or fill out the <a href="https://docs.google.com/forms/d/12VJwBa7DZHRsKkoaZyqIzgEgDDyjeDe4jMoIWijY8FQ" target="_blank">CFP form</a> at angularzurich.dev website`;

  constructor(
    private youtubeService: YoutubeService,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {}

  ngOnInit() {
    this.videoUrls = this.youtubeService
      .getAngularZurichVideoUrls()
      .pipe(shareReplay({ bufferSize: 1, refCount: true }));

    this.columnCount = this.responsiveLayoutService.columnCount.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}
