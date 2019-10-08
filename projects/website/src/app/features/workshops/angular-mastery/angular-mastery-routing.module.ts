import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularMasteryComponent } from './angular-mastery.component';

const routes: Routes = [
  {
    path: '',
    component: AngularMasteryComponent,
    data: {
      title: 'Angular Mastery Workshop',
      description:
        'This workshop will teach you all necessary concepts to become proficient Angular developer by building a real world single page application!',
      image: '/assets/images/workshops/angular-mastery.jpg'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMasteryRoutingModule {}
