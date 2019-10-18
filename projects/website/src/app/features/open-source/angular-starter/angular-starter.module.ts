import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularStarterRoutingModule } from './angular-starter-routing.module';
import { AngularStarterComponent } from './angular-starter.component';

@NgModule({
  declarations: [AngularStarterComponent],
  imports: [CommonModule, AngularStarterRoutingModule]
})
export class AngularStarterModule {}
