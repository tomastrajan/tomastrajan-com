import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OpenSourceComponent } from './open-source.component';

const routes: Routes = [
  {
    path: '',
    component: OpenSourceComponent,
    data: {
      title: 'Open source projects',
      description: 'Tomas Trajan is creator, contributor and maintainer of various Angular related open source project including popular Angular NgRx Material Starter and @angular-extensions/elements'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OpenSourceRoutingModule {}
