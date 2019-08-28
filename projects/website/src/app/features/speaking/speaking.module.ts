import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';

import { SpeakingRoutingModule } from './speaking-routing.module';
import { SpeakingComponent } from './speaking/speaking.component';

@NgModule({
  declarations: [SpeakingComponent],
  imports: [CommonModule, SharedModule, SpeakingRoutingModule]
})
export class SpeakingModule {}
