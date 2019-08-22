import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import {
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatInputModule,
  MatIconRegistry,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTooltipModule,
  MatGridListModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatProgressBarModule
} from '@angular/material';
import { GetInTouchComponent } from './get-in-touch/get-in-touch.component';

const ANGULAR_MATERIAL_MODULES = [
  MatCardModule,
  MatIconModule,
  MatListModule,
  MatTreeModule,
  MatInputModule,
  MatButtonModule,
  MatToolbarModule,
  MatTooltipModule,
  MatSidenavModule,
  MatGridListModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatFormFieldModule,
  MatProgressBarModule
];

@NgModule({
  declarations: [GetInTouchComponent],
  imports: [CommonModule, ReactiveFormsModule, ...ANGULAR_MATERIAL_MODULES],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    ...ANGULAR_MATERIAL_MODULES,
    GetInTouchComponent
  ]
})
export class SharedModule {
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/github.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'twitter',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/logo/twitter.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'medium',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/medium.svg')
    );
    this.matIconRegistry.addSvgIcon(
      'instagram',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/logo/instagram.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'youtube',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/logo/youtube.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'lightbulb-off',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/logo/lightbulb_off.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'lightbulb',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'assets/logo/lightbulb.svg'
      )
    );
    this.matIconRegistry.addSvgIcon(
      'logo',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/logo/logo.svg')
    );
  }
}
