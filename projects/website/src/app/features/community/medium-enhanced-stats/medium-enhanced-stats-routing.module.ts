import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MediumEnhancedStatsComponent } from './medium-enhanced-stats.component';

const routes: Routes = [
  {
    path: '',
    component: MediumEnhancedStatsComponent,
    data: {
      title: 'Medium Enhanced Stats',
      description:
        'Medium Enhanced Stats is a Chrome extension which gives your total reach and summary stats of your articles (and responses) with a single click without need to visit Medium itself!',
      image: '/assets/images/community/medium-enhanced-stats/contribution.jpg'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediumEnhancedStatsRoutingModule {}
