import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { ConferencesRoutingModule } from './conferences-routing.module';
import { ConferencesComponent } from './conferences.component';


@NgModule({
  declarations: [ConferencesComponent],
  imports: [
    CommonModule,
    SharedModule,
    ConferencesRoutingModule
  ]
})
export class ConferencesModule { }
