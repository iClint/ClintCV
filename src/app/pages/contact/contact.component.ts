import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContactConfig } from './contact.config';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  config = ContactConfig;
  dynamicDescription = '';

  onMouseEnterIcon(label: string): void {
    this.dynamicDescription = label;
  }
  onMouseLeaveIcon(): void {
    this.dynamicDescription = '';
  }
}
