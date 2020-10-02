import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularZurichComponent } from './angular-zurich.component';

const routes: Routes = [
  {
    path: '',
    component: AngularZurichComponent,
    data: {
      title: 'Angular Zurich Meetup',
      description:
        'Angular Zurich is a local Swiss Angular community based in the beautiful city of Zurich. Local and international speakers are sharing their Angular know-how and experience in form of full length (45 min) and lightning (15 min) talks. The meetup is usually taking place once a month.',
      image: '/assets/images/speaking/angularzurich201903.jpg',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularZurichRoutingModule {}
