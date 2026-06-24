import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ContactContentModel } from 'src/app/models/contact-config.model';
import { ContactContent } from './contact.config';
import { RevealDirective } from 'src/app/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  imports: [MatCardModule, MatButtonModule, MatTooltipModule, RevealDirective],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  content: ContactContentModel = ContactContent;

  dynamicDescription = '';
  visible = false;

  onMouseEnterIcon(label: string): void {
    this.dynamicDescription = label;
    this.visible = true;
  }
  onMouseLeaveIcon(): void {
    this.visible = false;
  }
}
