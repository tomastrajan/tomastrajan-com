import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediumEnhancedStatsComponent } from './medium-enhanced-stats.component';

const routes: Routes = [{ path: '', component: MediumEnhancedStatsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediumEnhancedStatsRoutingModule {}
