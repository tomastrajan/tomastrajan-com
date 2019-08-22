import { InjectionToken } from '@angular/core';

export const WINDOW = new InjectionToken<any>('window', {
  providedIn: 'root',
  factory: () => window
});
