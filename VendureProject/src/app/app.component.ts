import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { VendureDesignSystemComponent } from 'vendure-design-system';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VendureDesignSystemComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'VendureProject';
}
