import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { GettingReactiveWithRxjsRoutingModule } from './getting-reactive-with-rxjs-routing.module';
import { GettingReactiveWithRxjsComponent } from './getting-reactive-with-rxjs.component';

@NgModule({
  declarations: [GettingReactiveWithRxjsComponent],
  imports: [CommonModule, GettingReactiveWithRxjsRoutingModule, SharedModule],
})
export class GettingReactiveWithRxjsModule {}
