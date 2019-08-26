import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ResponsiveLayoutService } from '../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {
  @Input() images: GalleryImage[];

  columnCount: Observable<number>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}

export interface GalleryImage {
  src: string;
  alt: string;
  description?: string;
}
