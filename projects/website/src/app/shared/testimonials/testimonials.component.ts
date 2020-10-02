import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../core/layout/responsive-layout.service';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'tt-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss'],
})
export class TestimonialsComponent implements OnInit {
  @Input() rowHeight: string;
  @Input() columns: number;
  @Input() testimonials: Testimonial[];

  columnCount: Observable<number>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
  }
}

export interface Testimonial {
  name: string;
  role: string;
  message: string;
  src: string;
}
