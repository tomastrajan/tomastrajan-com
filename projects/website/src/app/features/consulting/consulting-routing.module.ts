import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultingComponent } from './consulting.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultingComponent,
    data: {
      title: 'Angular Consulting for Swiss Enterprises'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsultingRoutingModule {}
