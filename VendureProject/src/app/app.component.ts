import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VendureDesignSystemComponent, ButtonComponent, ThemeService } from 'vendure-design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VendureDesignSystemComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'VendureProject';
  isDarkTheme = signal(false);

  constructor(private themeService: ThemeService) {

    const darkTheme = {
      primary: 'red',
    };

    const lightTheme = {
      primary: 'black',
    };
    this.themeService.setTheme(this.isDarkTheme() ? darkTheme : lightTheme);
  }

  toggleTheme() {
    this.isDarkTheme.update(isDark => !isDark);

    const darkTheme = {
      primary: 'red',
    };

    const lightTheme = {
      primary: 'beige',
    };

    this.themeService.setTheme(this.isDarkTheme() ? darkTheme : lightTheme);
  }
}
