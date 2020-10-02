import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { ConferenceKitRoutingModule } from './conference-kit-routing.module';
import { ConferenceKitComponent } from './conference-kit.component';

@NgModule({
  declarations: [ConferenceKitComponent],
  imports: [CommonModule, SharedModule, ConferenceKitRoutingModule],
})
export class ConferenceKitModule {}
