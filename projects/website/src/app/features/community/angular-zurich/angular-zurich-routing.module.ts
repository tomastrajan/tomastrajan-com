import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AngularZurichComponent } from './angular-zurich.component';

const routes: Routes = [{ path: '', component: AngularZurichComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AngularZurichRoutingModule { }
