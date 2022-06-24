import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WorkshopsComponent } from './workshops/workshops.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'angular-mastery',
    pathMatch: 'full',
  },
  {
    path: '',
    component: WorkshopsComponent,
    children: [
      {
        path: 'angular-mastery',
        loadChildren: () =>
          import('./angular-mastery/angular-mastery.module').then(
            (m) => m.AngularMasteryModule
          ),
      },
      {
        path: 'angular-state-management-workshop-with-ngrx',
        loadChildren: () =>
          import(
            './angular-state-management/angular-state-management.module'
          ).then((m) => m.AngularStateManagementModule),
      },
      {
        path: 'angular-reactive-forms-workshop',
        loadChildren: () =>
          import('./angular-reactive-forms/angular-reactive-forms.module').then(
            (m) => m.AngularReactiveFormsModule
          ),
      },
      {
        path: 'getting-reactive-with-rxjs-workshop',
        loadChildren: () =>
          import(
            './getting-reactive-with-rxjs/getting-reactive-with-rxjs.module'
          ).then((m) => m.GettingReactiveWithRxjsModule),
      },
      {
        path: 'frontend-heroes-workshop',
        loadChildren: () =>
          import('./frontend-heroes/frontend-heroes.module').then(
            (m) => m.FrontendHeroesModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkshopsRoutingModule {}
