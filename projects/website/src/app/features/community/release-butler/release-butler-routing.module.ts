import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReleaseButlerComponent } from './release-butler.component';

const routes: Routes = [
  {
    path: '',
    component: ReleaseButlerComponent,
    data: {
      title: 'Release Butler',
      description: 'Release Butler is a Twitter bot that helps you to stay up to date with releases of popular frontend frameworks & libraries like Angular, React or Vue!'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReleaseButlerRoutingModule {}
