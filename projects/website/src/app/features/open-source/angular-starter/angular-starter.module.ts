import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { AngularStarterRoutingModule } from './angular-starter-routing.module';
import { AngularStarterComponent } from './angular-starter.component';

@NgModule({
  declarations: [AngularStarterComponent],
  imports: [SharedModule, AngularStarterRoutingModule]
})
export class AngularStarterModule {}
