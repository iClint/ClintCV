import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { ContactContentModel } from 'src/app/models/contact-config.model';
import { ContactContent } from './contact.config';

@Component({
  selector: 'app-contact',
  imports: [CommonModule, MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  content: ContactContentModel = ContactContent;

  dynamicDescription = '';

  onMouseEnterIcon(label: string): void {
    this.dynamicDescription = label;
  }
  onMouseLeaveIcon(): void {
    this.dynamicDescription = '';
  }
}
