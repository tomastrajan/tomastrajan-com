import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';
import { MatLegacyDialog as MatDialog } from '@angular/material/legacy-dialog';

import { ResponsiveLayoutService } from '../../core/layout/responsive-layout.service';

import { GalleryDialogComponent } from '../gallery-dialog/gallery-dialog.component';

@Component({
  selector: 'tt-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  @Input() images: GalleryImage[];
  @Input() rowHeight: string;
  @Input() columns: number;

  columnCount: Observable<number>;

  constructor(
    private dialog: MatDialog,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }

  openInDialog(index: number) {
    this.dialog.open(GalleryDialogComponent, {
      data: { images: this.images, index },
      autoFocus: true,
    });
  }
}

export interface GalleryImage {
  src: string;
  alt: string;
  description?: string;
}
