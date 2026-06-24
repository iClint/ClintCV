import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ContentType } from 'src/app/enums/light-box.enums';
import { SubHeading } from 'src/app/models/project-config.model';

@Component({
  selector: 'app-sub-heading',
  imports: [FormsModule, MatFormFieldModule, MatInputModule],
  templateUrl: './sub-heading.component.html',
  styleUrl: './sub-heading.component.css',
})
export class SubHeadingComponent {
  /** Emits the current sub-heading block whenever the input changes. */
  @Output() readonly blockChange = new EventEmitter<SubHeading>();

  content = '';

  onChange(): void {
    this.blockChange.emit({ type: ContentType.HEADING, content: this.content });
  }
}
