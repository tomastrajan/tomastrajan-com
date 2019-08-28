import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferenceKitComponent } from './conference-kit.component';

const routes: Routes = [{ path: '', component: ConferenceKitComponent, data: { title: 'Conference Kit' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferenceKitRoutingModule { }
