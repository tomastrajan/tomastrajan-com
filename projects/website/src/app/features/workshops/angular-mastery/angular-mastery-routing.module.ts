import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularMasteryComponent } from './angular-mastery.component';

const routes: Routes = [{ path: '', component: AngularMasteryComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularMasteryRoutingModule {}
