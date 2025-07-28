import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContactConfig } from './contact.config';
import { ContactConfigModel } from 'src/app/models/contact-config.model';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  config: ContactConfigModel = ContactConfig;
  dynamicDescription = '';

  onMouseEnterIcon(label: string): void {
    this.dynamicDescription = label;
  }
  onMouseLeaveIcon(): void {
    this.dynamicDescription = '';
  }
}
