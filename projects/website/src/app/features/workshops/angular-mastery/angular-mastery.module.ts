import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AngularMasteryRoutingModule } from './angular-mastery-routing.module';
import { AngularMasteryComponent } from './angular-mastery.component';

@NgModule({
  declarations: [AngularMasteryComponent],
  imports: [CommonModule, AngularMasteryRoutingModule]
})
export class AngularMasteryModule {}
