import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterConfig } from './footer.config';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  config = FooterConfig;
  get currentYear(): number {
    return new Date().getFullYear();
  }

  get disclaimer(): string {
    return this.config.disclaimer;
  }

  get buildFooterText(): string {
    return `${this.config.copyright} ${this.currentYear} ${this.config.name} - ${this.config.reserved}`;
  }
}
