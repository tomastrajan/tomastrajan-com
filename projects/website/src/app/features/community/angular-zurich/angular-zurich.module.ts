import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { AngularZurichRoutingModule } from './angular-zurich-routing.module';
import { AngularZurichComponent } from './angular-zurich.component';

@NgModule({
  declarations: [AngularZurichComponent],
  imports: [CommonModule, SharedModule, AngularZurichRoutingModule],
})
export class AngularZurichModule {}
