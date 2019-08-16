import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopsComponent } from './workshops/workshops.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular-mastery',
    pathMatch: 'full'
  },
  {
    path: '',
    component: WorkshopsComponent,
    children: [
      {
        path: 'angular-mastery',
        loadChildren: () =>
          import('./angular-mastery/angular-mastery.module').then(
            m => m.AngularMasteryModule
          )
      },
      {
        path: 'angular-state-management-workshop-with-ngrx',
        loadChildren: () =>
          import(
            './angular-state-management/angular-state-management.module'
          ).then(m => m.AngularStateManagementModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkshopsRoutingModule {}
