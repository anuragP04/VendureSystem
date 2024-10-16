import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VendureDesignSystemComponent, ButtonComponent } from 'vendure-design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VendureDesignSystemComponent, ButtonComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'VendureProject';
}
