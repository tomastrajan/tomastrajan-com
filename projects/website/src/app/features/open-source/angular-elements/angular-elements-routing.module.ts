import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularElementsComponent } from './angular-elements.component';

const routes: Routes = [
  {
    path: '',
    component: AngularElementsComponent,
    data: {
      title: 'Angular Extensions Elements',
      description:
        'Tomas Trajan is creator, contributor and maintainer of various Angular related open source project including popular @angular-extensions/elements'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularElementsRoutingModule {}
