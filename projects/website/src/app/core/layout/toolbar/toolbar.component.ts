import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  Renderer2
} from '@angular/core';
import { Observable } from 'rxjs';

import { ResponsiveLayoutService } from '../responsive-layout.service';

@Component({
  selector: 'tt-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() navOpened: boolean;
  @Output() toggle = new EventEmitter<void>();

  isResponsiveLayout: Observable<boolean>;
  isDarkMode = false;

  constructor(
    private renderer: Renderer2,
    private responsiveLayoutService: ResponsiveLayoutService
  ) {}

  ngOnInit() {
    const hours = new Date().getHours();
    if (hours < 7 || hours > 20) {
      this.toggleDarkMode();
    }
    this.isResponsiveLayout = this.responsiveLayoutService.isSmallOrSmaller;
  }

  toggleMenu() {
    this.toggle.emit();
  }

  toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      this.renderer.addClass(document.body, 'dark');
    } else {
      this.renderer.removeClass(document.body, 'dark');
    }
  }
}
