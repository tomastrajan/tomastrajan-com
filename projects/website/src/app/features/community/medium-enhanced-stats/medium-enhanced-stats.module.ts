import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { MediumEnhancedStatsRoutingModule } from './medium-enhanced-stats-routing.module';
import { MediumEnhancedStatsComponent } from './medium-enhanced-stats.component';

@NgModule({
  declarations: [MediumEnhancedStatsComponent],
  imports: [CommonModule, SharedModule, MediumEnhancedStatsRoutingModule],
})
export class MediumEnhancedStatsModule {}
