import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakingComponent } from './speaking/speaking.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'conferences',
    pathMatch: 'full',
  },
  {
    path: '',
    component: SpeakingComponent,
    children: [
      {
        path: 'conferences',
        loadChildren: () =>
          import('./conferences/conferences.module').then(
            (m) => m.ConferencesModule
          ),
      },
      {
        path: 'conference-kit',
        loadChildren: () =>
          import('./conference-kit/conference-kit.module').then(
            (m) => m.ConferenceKitModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SpeakingRoutingModule {}
