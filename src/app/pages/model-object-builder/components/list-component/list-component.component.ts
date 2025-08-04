import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list-component',
  imports: [CommonModule, FormsModule],
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css',
})
export class ListComponentComponent {
  listItemValues: string[] = [''];

  onNewListItem(event: MouseEvent) {
    event.preventDefault();
    this.listItemValues.push('');
  }
}
