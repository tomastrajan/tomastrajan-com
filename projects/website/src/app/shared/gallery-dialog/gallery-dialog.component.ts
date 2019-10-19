import { Component, HostListener, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material';
import { GalleryImage } from '../gallery/gallery.component';

@Component({
  selector: 'tt-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss']
})
export class GalleryDialogComponent implements OnInit {
  image: GalleryImage;
  images: GalleryImage[];

  @HostListener('document:keydown.arrowRight', [])
  handleKeyNext() {
    this.next();
  }

  @HostListener('document:keydown.arrowLeft', [])
  handleKeyPrevious() {
    this.previous();
  }

  constructor(@Inject(MAT_DIALOG_DATA) private data: GalleryDialogData) {}

  ngOnInit() {
    this.image = this.data.images[this.data.index];
    this.images = this.data.images;
  }

  next() {
    const currentIndex = this.images.findIndex(i => i === this.image);
    const nextIndex =
      currentIndex + 1 > this.images.length - 1 ? 0 : currentIndex + 1;
    this.image = this.images[nextIndex];
  }

  previous() {
    const currentIndex = this.images.findIndex(i => i === this.image);
    const nextIndex =
      currentIndex - 1 < 0 ? this.images.length - 1 : currentIndex - 1;
    this.image = this.images[nextIndex];
  }
}

export interface GalleryDialogData {
  index: number;
  images: GalleryImage[];
}
