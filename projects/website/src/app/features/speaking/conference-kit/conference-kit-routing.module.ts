import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferenceKitComponent } from './conference-kit.component';

const routes: Routes = [
  {
    path: '',
    component: ConferenceKitComponent,
    data: {
      title: 'Conference Kit',
      description:
        'Would you like to provide interesting and valuable Angular content for the attendees of your conference or meetup? Check out current available topics and get in touch!',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConferenceKitRoutingModule {}
