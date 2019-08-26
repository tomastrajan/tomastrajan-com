import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MediumEnhancedStatsRoutingModule } from './medium-enhanced-stats-routing.module';
import { MediumEnhancedStatsComponent } from './medium-enhanced-stats.component';

@NgModule({
  declarations: [MediumEnhancedStatsComponent],
  imports: [CommonModule, MediumEnhancedStatsRoutingModule]
})
export class MediumEnhancedStatsModule {}
