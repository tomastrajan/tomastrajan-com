import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../../../core/layout/responsive-layout.service';

@Component({
  selector: 'tt-angular-state-management',
  templateUrl: './angular-state-management.component.html',
  styleUrls: ['./angular-state-management.component.scss']
})
export class AngularStateManagementComponent implements OnInit {

  isSmallOrSmaller: Observable<boolean>;

  constructor(private responsiveLayoutService: ResponsiveLayoutService) {}

  ngOnInit() {
    this.isSmallOrSmaller = this.responsiveLayoutService.isSmallOrSmaller;
  }
}
