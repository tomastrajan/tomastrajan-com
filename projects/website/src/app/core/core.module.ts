import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

import { SharedModule } from '../shared/shared.module';

import { SeoService } from './services/seo.service';
import { FooterComponent } from './layout/footer/footer.component';
import { ToolbarComponent } from './layout/toolbar/toolbar.component';
import { NavigationComponent } from './layout/navigation/navigation.component';
import { CustomGestureConfig } from './gestures/custom-gestures.config';

@NgModule({
  declarations: [ToolbarComponent, NavigationComponent, FooterComponent],
  imports: [
    // vendor
    RouterModule,

    // local
    SharedModule
  ],
  providers: [
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: CustomGestureConfig
    }
  ],
  exports: [ToolbarComponent, NavigationComponent, FooterComponent]
})
export class CoreModule {
  constructor(private seoService: SeoService) {
    this.seoService.start();
  }
}
