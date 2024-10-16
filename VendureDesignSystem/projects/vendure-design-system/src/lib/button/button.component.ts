import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'lib-button',
  standalone: true,
  imports: [NgClass],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
  encapsulation: ViewEncapsulation.None // Disable view encapsulation
})
export class ButtonComponent {
  // Inputs for button configuration
  @Input() label: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: string = 'primary'; // Can be 'primary', 'accent', 'warn', or custom
  @Input() disabled: boolean = false;
  @Input() className: string = ''; // Custom class input

  // Output event when the button is clicked
  @Output() onClick = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.onClick.emit();
    }
  }
}
