import { NgModule } from '@angular/core';

import { SharedModule } from '../../../shared/shared.module';

import { AngularElementsRoutingModule } from './angular-elements-routing.module';
import { AngularElementsComponent } from './angular-elements.component';

@NgModule({
  declarations: [AngularElementsComponent],
  imports: [SharedModule, AngularElementsRoutingModule],
})
export class AngularElementsModule {}
