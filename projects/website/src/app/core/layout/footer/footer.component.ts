import { Component } from '@angular/core';

import { environment } from '../../../../environments/environment';

@Component({
  selector: 'tt-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  year = new Date().getFullYear();
  version = environment.version;
}
