import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentType } from 'src/app/enums/light-box.enums';
import { TextContent } from 'src/app/models/project-config.model';

/** Paragraphs are joined with a blank line into the model's `content` string. */
const PARAGRAPH_SEPARATOR = '\n\n';

@Component({
  selector: 'app-text-content',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './text-content.component.html',
  styleUrl: './text-content.component.css',
})
export class TextContentComponent {
  /** Emits the current text block whenever a field changes. */
  @Output() readonly blockChange = new EventEmitter<TextContent>();

  label = '';
  textParagraphValues: string[] = [''];

  onNewParagraph(event: Event): void {
    event.preventDefault();
    this.textParagraphValues.push('');
  }

  removeParagraph(index: number): void {
    this.textParagraphValues.splice(index, 1);
    if (this.textParagraphValues.length === 0) {
      this.textParagraphValues.push('');
    }
    this.onChange();
  }

  onChange(): void {
    this.blockChange.emit({
      type: ContentType.TEXT,
      label: this.label,
      content: this.textParagraphValues
        .map((paragraph) => paragraph.trim())
        .filter((paragraph) => paragraph.length > 0)
        .join(PARAGRAPH_SEPARATOR),
    });
  }
}
