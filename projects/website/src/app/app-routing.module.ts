import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './features/home/home/home.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'consulting',
    loadChildren: () =>
      import('./features/consulting/consulting.module').then(
        m => m.ConsultingModule
      )
  },
  {
    path: 'workshops',
    loadChildren: () =>
      import('./features/workshops/workshops.module').then(
        m => m.WorkshopsModule
      )
  },
  {
    path: 'speaking',
    loadChildren: () =>
      import('./features/speaking/speaking.module').then(m => m.SpeakingModule)
  },
  {
    path: 'open-source',
    loadChildren: () =>
      import('./features/open-source/open-source.module').then(
        m => m.OpenSourceModule
      )
  },
  {
    path: 'community',
    loadChildren: () =>
      import('./features/community/community.module').then(
        m => m.CommunityModule
      )
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
