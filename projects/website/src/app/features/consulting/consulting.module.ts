import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { ConsultingRoutingModule } from './consulting-routing.module';
import { ConsultingComponent } from './consulting.component';

@NgModule({
  declarations: [ConsultingComponent],
  imports: [CommonModule, SharedModule, ConsultingRoutingModule]
})
export class ConsultingModule {}
