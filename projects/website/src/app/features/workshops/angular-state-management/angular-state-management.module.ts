import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularStateManagementRoutingModule } from './angular-state-management-routing.module';
import { AngularStateManagementComponent } from './angular-state-management.component';

@NgModule({
  declarations: [AngularStateManagementComponent],
  imports: [CommonModule, AngularStateManagementRoutingModule]
})
export class AngularStateManagementModule {}
