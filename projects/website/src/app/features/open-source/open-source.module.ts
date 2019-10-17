import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { OpenSourceComponent } from './open-source/open-source.component';
import { OpenSourceRoutingModule } from './open-source-routing.module';

@NgModule({
  declarations: [OpenSourceComponent],
  imports: [CommonModule, SharedModule, OpenSourceRoutingModule]
})
export class OpenSourceModule {}
