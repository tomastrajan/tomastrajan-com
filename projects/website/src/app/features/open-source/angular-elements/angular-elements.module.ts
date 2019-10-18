import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularElementsRoutingModule } from './angular-elements-routing.module';
import { AngularElementsComponent } from './angular-elements.component';

@NgModule({
  declarations: [AngularElementsComponent],
  imports: [CommonModule, AngularElementsRoutingModule]
})
export class AngularElementsModule {}
