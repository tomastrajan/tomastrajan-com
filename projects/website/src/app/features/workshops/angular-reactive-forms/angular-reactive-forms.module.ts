import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { AngularReactiveFormsRoutingModule } from './angular-reactive-forms-routing.module';
import { AngularReactiveFormsComponent } from './angular-reactive-forms.component';

@NgModule({
  declarations: [AngularReactiveFormsComponent],
  imports: [CommonModule, AngularReactiveFormsRoutingModule, SharedModule],
})
export class AngularReactiveFormsModule {}
