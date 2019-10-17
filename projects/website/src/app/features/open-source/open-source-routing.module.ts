import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenSourceComponent } from './open-source/open-source.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'projects',
    pathMatch: 'full'
  },
  {
    path: '',
    component: OpenSourceComponent,
    children: [
      {
        path: 'projects',
        loadChildren: () =>
          import('./projects/projects.module').then(m => m.ProjectsModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenSourceRoutingModule {}
