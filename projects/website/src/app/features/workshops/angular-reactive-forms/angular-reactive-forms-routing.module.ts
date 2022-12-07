import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularReactiveFormsComponent } from './angular-reactive-forms.component';

const routes: Routes = [
  {
    path: '',
    component: AngularReactiveFormsComponent,
    data: {
      title: 'Angular Reactive Forms Workshop',
      description:
        'This workshop will teach you all necessary concepts to become proficient Angular developer by building a real world single page application!',
      image: '/assets/images/workshops/angular-reactive-forms.webp',
      background: 'angular-reactive-forms',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AngularReactiveFormsRoutingModule {}
