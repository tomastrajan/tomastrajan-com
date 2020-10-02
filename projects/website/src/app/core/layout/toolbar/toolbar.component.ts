import {
  Input,
  Inject,
  OnInit,
  Output,
  Renderer2,
  Component,
  EventEmitter,
  PLATFORM_ID,
} from '@angular/core';
import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

import { ResponsiveLayoutService } from '../responsive-layout.service';
import { LoadingService } from '../../services/loading.service';
import { SettingsService } from '../../services/settings.service';

@Component({
  selector: 'tt-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent implements OnInit {
  @Input() navOpened: boolean;
  @Output() toggle = new EventEmitter<void>();

  isLoading: Observable<boolean>;
  isResponsiveLayout: Observable<boolean>;
  columnCount: Observable<number>;
  isDarkMode = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: any,
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
    private renderer: Renderer2,
    private responsiveLayoutService: ResponsiveLayoutService,
    private loadingService: LoadingService,
    private settingsService: SettingsService
  ) {}

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          (this.document.defaultView as any).gtag('config', 'UA-53234284-4', {
            page_url: event.urlAfterRedirects,
          });
        }
      });
      const settings = this.settingsService.getSettings();
      const hours = new Date().getHours();
      if (settings.isDarkMode !== undefined) {
        if (settings.isDarkMode) {
          this.toggleDarkMode();
        }
      } else if (hours < 7 || hours > 20) {
        this.toggleDarkMode();
      }
    }
    this.isResponsiveLayout = this.responsiveLayoutService.isSmallOrSmaller.pipe(
      shareReplay({ bufferSize: 1, refCount: true })
    );
    this.columnCount = this.responsiveLayoutService.columnCount;
    this.isLoading = this.loadingService.isLoading;
  }

  toggleMenu() {
    this.toggle.emit();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    this.settingsService.updateSettings({ isDarkMode: this.isDarkMode });

    if (this.isDarkMode) {
      this.renderer.addClass(this.document.body, 'dark');
    } else {
      this.renderer.removeClass(this.document.body, 'dark');
    }
  }
}
