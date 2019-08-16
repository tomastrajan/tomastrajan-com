import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularZurichRoutingModule } from './angular-zurich-routing.module';
import { AngularZurichComponent } from './angular-zurich.component';

@NgModule({
  declarations: [AngularZurichComponent],
  imports: [CommonModule, AngularZurichRoutingModule]
})
export class AngularZurichModule {}
