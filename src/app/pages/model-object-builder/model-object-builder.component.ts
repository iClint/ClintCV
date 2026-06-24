import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { ContentComponent } from './components/content/contnent.component';
import {
  ProjectContent,
  ProjectContentModel,
} from 'src/app/models/project-config.model';

/** Each builder element is tracked by a stable id so blocks stay ordered. */
interface BuilderElement {
  id: number;
}

@Component({
  selector: 'app-model-object-builder',
  imports: [
    FormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    ContentComponent,
  ],
  templateUrl: './model-object-builder.component.html',
  styleUrl: './model-object-builder.component.css',
})
export class ModelObjectBuilderComponent {
  title = '';
  elements: BuilderElement[] = [];

  private nextElementId = 1;
  private readonly blocksById = new Map<number, ProjectContent>();

  constructor(private readonly snackBar: MatSnackBar) {
    this.onAddElement();
  }

  /** The aggregated, ordered project-content object the builder produces. */
  get model(): ProjectContentModel {
    const content = this.elements
      .map((element) => this.blocksById.get(element.id))
      .filter((block): block is ProjectContent => block !== undefined);
    return { title: this.title, content };
  }

  /** Pretty-printed JSON of the current model, shown in the preview pane. */
  get json(): string {
    return JSON.stringify(this.model, null, 2);
  }

  onAddElement(): void {
    this.elements.push({ id: this.nextElementId++ });
  }

  onRemoveElement(id: number): void {
    this.elements = this.elements.filter((element) => element.id !== id);
    this.blocksById.delete(id);
  }

  onBlockChange(id: number, block: ProjectContent | null): void {
    if (block) {
      this.blocksById.set(id, block);
    } else {
      this.blocksById.delete(id);
    }
  }

  async onCopyJson(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.json);
      this.snackBar.open('JSON copied to clipboard', 'Dismiss', {
        duration: 2500,
      });
    } catch {
      this.snackBar.open(
        'Could not copy — select and copy manually',
        'Dismiss',
      );
    }
  }
}
