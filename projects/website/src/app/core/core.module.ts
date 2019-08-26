import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { FooterComponent } from './layout/footer/footer.component';
import { TitleService } from './services/title.service';

@NgModule({
  declarations: [ToolbarComponent, NavigationComponent, FooterComponent],
  imports: [
    // vendor
    RouterModule,

    // local
    SharedModule
  ],
  exports: [ToolbarComponent, NavigationComponent, FooterComponent]
})
export class CoreModule {
  constructor(private titleService: TitleService) {
    this.titleService.start();
  }
}
