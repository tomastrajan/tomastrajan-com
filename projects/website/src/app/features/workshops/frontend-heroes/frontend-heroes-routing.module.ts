import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrontendHeroesComponent } from './frontend-heroes.component';

const routes: Routes = [
  {
    path: '',
    component: FrontendHeroesComponent,
    data: {
      title: 'Frontend Heroes Workshop',
      description: 'Kickstart Your Enterprise Frontend Development Expertise',
      image: '/assets/images/workshops/frontend-heroes.jpg',
      background: 'frontend-heroes',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontendHeroesRoutingModule {}
