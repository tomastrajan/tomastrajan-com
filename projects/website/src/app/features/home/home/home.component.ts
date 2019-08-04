import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  columnCount: Observable<number>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.columnCount = this.responsiveLayoutService.columnCount;
  }
}
