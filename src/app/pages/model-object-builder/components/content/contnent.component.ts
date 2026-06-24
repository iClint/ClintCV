import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { TextContentComponent } from '../text-content/text-content.component';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { ListComponentComponent as ListComponent } from '../list-component/list-component.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';
import { ContentType } from 'src/app/enums/light-box.enums';
import { ProjectContent } from 'src/app/models/project-config.model';

interface ContentTypeOption {
  value: ContentType;
  label: string;
}

/**
 * Selectable block types. COMPONENT is intentionally excluded because it
 * carries a non-serialisable Angular `Type`, and VIDEO has no builder form.
 */
const CONTENT_TYPE_OPTIONS: ContentTypeOption[] = [
  { value: ContentType.HEADING, label: 'Sub-heading' },
  { value: ContentType.TEXT, label: 'Text' },
  { value: ContentType.LIST, label: 'List' },
  { value: ContentType.IMAGES, label: 'Image gallery' },
];

@Component({
  selector: 'app-content',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    TextContentComponent,
    SubHeadingComponent,
    ListComponent,
    ImageGalleryComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  /** 1-based position shown to the user. */
  @Input() elementNumber = 1;

  /** Emits the configured block (or null until a type is chosen). */
  @Output() readonly blockChange = new EventEmitter<ProjectContent | null>();

  /** Requests removal of this element from the parent builder. */
  @Output() readonly remove = new EventEmitter<void>();

  readonly contentType = ContentType;
  readonly typeOptions = CONTENT_TYPE_OPTIONS;

  selectedType: ContentType | null = null;

  onTypeChange(): void {
    // Reset the aggregated block until the chosen child emits its value.
    this.blockChange.emit(null);
  }

  onBlockChange(block: ProjectContent): void {
    this.blockChange.emit(block);
  }
}
