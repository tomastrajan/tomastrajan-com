import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularStateManagementComponent } from './angular-state-management.component';

const routes: Routes = [
  {
    path: '',
    component: AngularStateManagementComponent,
    data: {
      title: 'Angular NgRx State Management Workshop'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularStateManagementRoutingModule {}
