import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConsultingComponent } from './consulting.component';

const routes: Routes = [
  {
    path: '',
    component: ConsultingComponent,
    data: {
      title: 'Angular Consulting for Swiss Enterprises',
      description:
        "Empowering developer teams, taking initiative and getting things done. Let's face it. It can be pretty hard to keep up with the recent frontend development technology churn. The development paradigms and frameworks come and go on a regular basis!",
      preload: true,
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConsultingRoutingModule {}
