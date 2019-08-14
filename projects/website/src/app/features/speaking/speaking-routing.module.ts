import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SpeakingComponent } from './speaking.component';

const routes: Routes = [{ path: '', component: SpeakingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpeakingRoutingModule {}
