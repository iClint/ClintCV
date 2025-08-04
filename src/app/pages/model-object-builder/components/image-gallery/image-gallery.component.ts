import { Component } from '@angular/core';
import { Image } from 'src/app/models/project-config.model';

@Component({
  selector: 'app-image-gallery',
  imports: [],
  templateUrl: './image-gallery.component.html',
  styleUrl: './image-gallery.component.css',
})
export class ImageGalleryComponent {
  listItemValues: Image[] = [];

  onNewImage(event: MouseEvent) {
    event.preventDefault();
    // this.listItemValues.push('');
  }
}
