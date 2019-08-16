import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultingRoutingModule } from './consulting-routing.module';
import { ConsultingComponent } from './consulting.component';

@NgModule({
  declarations: [ConsultingComponent],
  imports: [CommonModule, ConsultingRoutingModule]
})
export class ConsultingModule {}
