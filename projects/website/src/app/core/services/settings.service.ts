import { Injectable } from '@angular/core';

export const LOCAL_STORAGE_KEY = 'tomastrajan-com';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor() { }

  getSettings(): Settings {
    return JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || {};
  }

  updateSettings(update: Partial<Settings>) {
    const settings = this.getSettings();
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify({...settings, ...update}));
  }
}

export interface Settings {
  isDarkMode: boolean;
}
