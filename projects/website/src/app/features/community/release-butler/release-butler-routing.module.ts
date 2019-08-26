import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleaseButlerComponent } from './release-butler.component';

const routes: Routes = [
  {
    path: '',
    component: ReleaseButlerComponent,
    data: {
      title: 'Release Butler'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseButlerRoutingModule {}
