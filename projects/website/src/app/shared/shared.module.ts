import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import { MatLegacyCardModule as MatCardModule } from '@angular/material/legacy-card';
import { MatLegacyChipsModule as MatChipsModule } from '@angular/material/legacy-chips';
import { MatLegacyDialogModule as MatDialogModule } from '@angular/material/legacy-dialog';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatLegacyFormFieldModule as MatFormFieldModule } from '@angular/material/legacy-form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule, MatIconRegistry } from '@angular/material/icon';
import { MatLegacyInputModule as MatInputModule } from '@angular/material/legacy-input';
import { MatLegacyListModule as MatListModule } from '@angular/material/legacy-list';
import { MatLegacyProgressBarModule as MatProgressBarModule } from '@angular/material/legacy-progress-bar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatLegacyTooltipModule as MatTooltipModule } from '@angular/material/legacy-tooltip';
import { MatTreeModule } from '@angular/material/tree';

import { environment } from '../../environments/environment';

import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';
import { GalleryComponent } from './gallery/gallery.component';
import { GalleryDialogComponent } from './gallery-dialog/gallery-dialog.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const { host } = environment;

const ANGULAR_MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatChipsModule,
  MatInputModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSidenavModule,
  MatGridListModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatProgressBarModule,
];

@NgModule({
  declarations: [
    GetInTouchComponent,
    GalleryComponent,
    GalleryDialogComponent,
    TestimonialsComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ...ANGULAR_MATERIAL_MODULES],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ...ANGULAR_MATERIAL_MODULES,
    GetInTouchComponent,
    GalleryComponent,
    GalleryDialogComponent,
    TestimonialsComponent,
  ],
})
export class SharedModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/github.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/twitter.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'medium',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/medium.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/instagram.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/youtube.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'lightbulb-off',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/lightbulb_off.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'lightbulb',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/lightbulb.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        host + '/assets/logo/logo.svg'
      )
    );
  }
}
