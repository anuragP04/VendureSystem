import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { composeClasses } from '../utils/classes-util';
import { capitalize } from '../utils/capitalize';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [NgClass, MatButtonModule, MatIconModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  encapsulation: ViewEncapsulation.None
})
export class ButtonComponent {
  // Inputs for button configuration
  @Input() label: string = 'Button';
  @Input() type?: 'button' | 'submit' | 'reset' = 'button';
  @Input() variant?: 'filled' | 'outlined' | 'text' = 'filled';
  @Input() size?: 'small' | 'default' = 'default';
  @Input() disabled?: boolean = false;
  @Input() className?: string = '';
  @Input() startIcon?: string = '';
  @Input() endIcon?: string = '';
  @Input() icon?: string = '';
  @Input() iconButton?: boolean = false;

  // Output event when the button is clicked
  @Output() onClick = new EventEmitter<void>();

  // constructor(private themeService: ThemeService) { }

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }

  // Function to build all the classes based on prop for component
  getUtilityClasses() {
    const states = [
      capitalize(this.variant),
      `Size${capitalize(this.size)}`,
      `Type${capitalize(this.type)}`,
      this.disabled && 'disabled',
      this.startIcon && 'startIcon',
      this.endIcon && 'endIcon',
      this.iconButton && 'iconButton'];

    const classes = composeClasses(states, "btn", this.className);
    return classes;
  }
}
