import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultingComponent } from './consulting.component';

const routes: Routes = [{ path: '', component: ConsultingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultingRoutingModule {}
