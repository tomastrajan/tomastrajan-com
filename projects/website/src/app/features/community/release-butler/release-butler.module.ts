import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReleaseButlerRoutingModule } from './release-butler-routing.module';
import { ReleaseButlerComponent } from './release-butler.component';

@NgModule({
  declarations: [ReleaseButlerComponent],
  imports: [CommonModule, ReleaseButlerRoutingModule]
})
export class ReleaseButlerModule {}
