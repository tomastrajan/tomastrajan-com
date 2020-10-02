import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { SeoService } from './services/seo.service';
import { FooterComponent } from './layout/footer/footer.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';

@NgModule({
  declarations: [ToolbarComponent, NavigationComponent, FooterComponent],
  imports: [
    // vendor
    RouterModule,

    // local
    SharedModule,
  ],
  exports: [ToolbarComponent, NavigationComponent, FooterComponent],
})
export class CoreModule {
  constructor(private seoService: SeoService) {
    this.seoService.start();
  }
}
