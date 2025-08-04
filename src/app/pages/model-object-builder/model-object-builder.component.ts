import { Component } from '@angular/core';
import { ContentComponent } from './components/content/contnent.component';

@Component({
  selector: 'app-model-object-builder',
  imports: [ContentComponent],
  templateUrl: './model-object-builder.component.html',
  styleUrl: './model-object-builder.component.css',
})
export class ModelObjectBuilderComponent {
  currentElementNumber: number = 1;
  elements: number[] = [1];

  get lastElementNumber(): number {
    return this.elements[this.elements.length - 1]!;
  }

  onAddElement(): void {
    this.currentElementNumber++;
    this.elements.push(this.currentElementNumber);
  }
}
