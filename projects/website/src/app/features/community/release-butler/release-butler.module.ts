import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { ReleaseButlerRoutingModule } from './release-butler-routing.module';
import { ReleaseButlerComponent } from './release-butler.component';

@NgModule({
  declarations: [ReleaseButlerComponent],
  imports: [CommonModule, SharedModule, ReleaseButlerRoutingModule]
})
export class ReleaseButlerModule {}
