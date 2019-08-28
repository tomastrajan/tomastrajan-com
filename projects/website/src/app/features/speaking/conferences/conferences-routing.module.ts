import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConferencesComponent } from './conferences.component';

const routes: Routes = [{ path: '', component: ConferencesComponent, data: { title: 'Public Speaking at Conferences & Meetups' } }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConferencesRoutingModule { }
