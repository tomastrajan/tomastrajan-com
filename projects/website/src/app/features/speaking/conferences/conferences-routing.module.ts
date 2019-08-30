import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferencesComponent } from './conferences.component';

const routes: Routes = [
  {
    path: '',
    component: ConferencesComponent,
    data: {
      title: 'Public Speaking at Conferences & Meetups',
      description: 'Tomas Trajan is an international conference and meetup speaker sharing his Angular passion and know how with the people around the world'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferencesRoutingModule {}
