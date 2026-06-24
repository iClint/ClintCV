import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { ContentType, PreviewSize } from 'src/app/enums/light-box.enums';
import { ImagesContent, Image } from 'src/app/models/project-config.model';

@Component({
  selector: 'app-image-gallery',
  imports: [
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
  ],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent {
  /** Emits the current images block whenever a field changes. */
  @Output() readonly blockChange = new EventEmitter<ImagesContent>();

  readonly previewSizes = Object.values(PreviewSize);

  label = '';
  previewSize: PreviewSize = PreviewSize.MEDIUM;
  images: Image[] = [this.createEmptyImage()];

  onNewImage(event: MouseEvent): void {
    event.preventDefault();
    this.images.push(this.createEmptyImage());
  }

  removeImage(index: number): void {
    this.images.splice(index, 1);
    if (this.images.length === 0) {
      this.images.push(this.createEmptyImage());
    }
    this.onChange();
  }

  onChange(): void {
    this.blockChange.emit({
      type: ContentType.IMAGES,
      previewSize: this.previewSize,
      label: this.label,
      images: this.images.filter((image) => image.imageSrc.trim().length > 0),
    });
  }

  private createEmptyImage(): Image {
    return { imageSrc: '', imageAlt: '', imageLabel: '' };
  }
}
