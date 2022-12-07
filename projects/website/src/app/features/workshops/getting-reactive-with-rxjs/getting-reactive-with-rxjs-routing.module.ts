import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GettingReactiveWithRxjsComponent } from './getting-reactive-with-rxjs.component';
import { AngularStateManagementComponent } from '../angular-state-management/angular-state-management.component';

const routes: Routes = [
  {
    path: '',
    component: GettingReactiveWithRxjsComponent,
    data: {
      title: 'Getting Reactive with RxJs Workshop',
      description:
        'This workshop will teach you why and how to use RxJs including all basic concepts, best practices & real life Angular use cases and examples',
      image: '/assets/images/workshops/getting-reactive-with-rxjs.webp',
      background: 'getting-reactive-with-rxjs',
    },
  },
  { path: '', component: GettingReactiveWithRxjsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GettingReactiveWithRxjsRoutingModule {}
