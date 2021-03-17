import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../../shared/shared.module';

import { FrontendHeroesRoutingModule } from './frontend-heroes-routing.module';
import { FrontendHeroesComponent } from './frontend-heroes.component';

@NgModule({
  declarations: [FrontendHeroesComponent],
  imports: [CommonModule, FrontendHeroesRoutingModule, SharedModule],
})
export class FrontendHeroesModule {}
