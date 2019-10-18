import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularStarterComponent } from './angular-starter.component';

const routes: Routes = [
  {
    path: '',
    component: AngularStarterComponent,
    data: {
      title: 'Angular NgRx Material Starter',
      description:
        'Tomas Trajan is creator, contributor and maintainer of various Angular related open source project including popular Angular NgRx Material Starter'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularStarterRoutingModule {}
