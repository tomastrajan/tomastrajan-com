import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OpenSourceRoutingModule } from './open-source-routing.module';
import { OpenSourceComponent } from './open-source.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [OpenSourceComponent],
  imports: [CommonModule, SharedModule, OpenSourceRoutingModule]
})
export class OpenSourceModule {}
