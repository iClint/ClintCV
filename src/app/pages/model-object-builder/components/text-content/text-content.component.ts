import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-content',
  imports: [CommonModule, FormsModule],
  templateUrl: './text-content.component.html',
  styleUrl: './text-content.component.css',
})
export class TextContentComponent {
  textParagraphValues: string[] = [''];

  onNewParagraph(event: Event) {
    event.preventDefault();
    this.textParagraphValues.push('');
  }
}
