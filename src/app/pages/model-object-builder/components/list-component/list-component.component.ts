import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentType } from 'src/app/enums/light-box.enums';
import { ListContent } from 'src/app/models/project-config.model';

@Component({
  selector: 'app-list-component',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css',
})
export class ListComponentComponent {
  /** Emits the current list block whenever a field changes. */
  @Output() readonly blockChange = new EventEmitter<ListContent>();

  label = '';
  listItemValues: string[] = [''];

  onNewListItem(event: MouseEvent): void {
    event.preventDefault();
    this.listItemValues.push('');
  }

  removeListItem(index: number): void {
    this.listItemValues.splice(index, 1);
    if (this.listItemValues.length === 0) {
      this.listItemValues.push('');
    }
    this.onChange();
  }

  onChange(): void {
    this.blockChange.emit({
      type: ContentType.LIST,
      label: this.label,
      items: this.listItemValues
        .map((item) => item.trim())
        .filter((item) => item.length > 0),
    });
  }
}
