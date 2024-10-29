import { Injectable, signal, computed, effect } from '@angular/core';
import { Theme } from './theme.modal';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private defaultTheme: Theme = {
    primary: 'blue',
  };

  private themeSignal = signal<Theme>(this.defaultTheme);
  public theme = computed(() => this.themeSignal());

  constructor() {
    // Optional: Set up effects for theme changes
    effect(() => {
      const currentTheme = this.themeSignal();
      document.documentElement.style.setProperty('--primary-color', currentTheme.primary);
    });
  }

  setTheme(theme: Partial<Theme>) {
    this.themeSignal.update(currentTheme => ({
      ...currentTheme,
      ...theme
    }));
  }

  getCurrentTheme(): Theme {
    return this.themeSignal();
  }
}