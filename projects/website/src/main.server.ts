import { enableProdMode } from '@angular/core';
export { ngExpressEngine } from '@nguniversal/express-engine';
export { provideModuleMap } from '@nguniversal/module-map-ngfactory-loader';

import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

export { AppServerModule } from './app/app.server.module';
