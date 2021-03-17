import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularStateManagementComponent } from './angular-state-management.component';

const routes: Routes = [
  {
    path: '',
    component: AngularStateManagementComponent,
    data: {
      title: 'Angular NgRx State Management Workshop',
      description:
        'This workshop will teach you all the necessary concepts to become confident and productive in relation to Angular state management.',
      image: '/assets/images/workshops/angular-state-management.jpg',
      background: 'angular-state-management',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularStateManagementRoutingModule {}
