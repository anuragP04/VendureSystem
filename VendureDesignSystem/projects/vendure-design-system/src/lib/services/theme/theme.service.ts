import { Injectable, signal, computed } from '@angular/core';
import { Theme } from './theme.modal';
import { THEME_PRESETS } from './theme.preset';
@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private readonly THEME_STORAGE_KEY = 'app-theme';
  private readonly defaultTheme = THEME_PRESETS['light'];

  private themeSignal = signal<Theme>(this.loadTheme());
  public theme = computed(() => this.themeSignal());

  constructor() {
    this.applyTheme(this.themeSignal());
  }

  /**
   * Sets a complete theme and applies it
   */
  setTheme(theme: Theme): void {
    this.themeSignal.set(theme);
    this.applyTheme(theme);
    this.saveTheme(theme);
  }

  /**
   * Applies a preset theme by name
   */
  applyPresetTheme(presetName: keyof typeof THEME_PRESETS): void {
    const preset = THEME_PRESETS[presetName];
    if (preset) {
      this.setTheme(preset);
    } else {
      console.warn(`Theme preset "${presetName}" not found`);
    }
  }

  /**
   * Gets all available theme presets
   */
  getPresets(): typeof THEME_PRESETS {
    return THEME_PRESETS;
  }

  /**
   * Gets the current active theme
   */
  getCurrentTheme(): Theme {
    return this.themeSignal();
  }

  /**
   * Resets to the default theme
   */
  resetTheme(): void {
    this.setTheme(this.defaultTheme);
  }

  /**
   * Applies the theme by setting CSS custom properties
   */
  private applyTheme(theme: Theme): void {
    const root = document.documentElement;

    // Map theme colors to CSS variable names
    const cssVariableMap: Record<keyof Theme, string> = {
      primary: '--primary-color',
    };

    // Apply CSS variables with simpler names
    Object.entries(theme).forEach(([key, value]) => {
      const cssVar = cssVariableMap[key as keyof Theme];
      if (cssVar) {
        root.style.setProperty(cssVar, value);
      }
    });
  }

  /**
   * Loads theme from localStorage
   */
  private loadTheme(): Theme {
    try {
      const savedTheme = localStorage.getItem(this.THEME_STORAGE_KEY);
      return savedTheme ? JSON.parse(savedTheme) : this.defaultTheme;
    } catch {
      return this.defaultTheme;
    }
  }

  /**
   * Saves theme to localStorage
   */
  private saveTheme(theme: Theme): void {
    try {
      localStorage.setItem(this.THEME_STORAGE_KEY, JSON.stringify(theme));
    } catch (error) {
      console.error('Failed to save theme:', error);
    }
  }
}