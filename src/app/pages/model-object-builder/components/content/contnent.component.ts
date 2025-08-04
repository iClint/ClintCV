import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TextContentComponent } from '../text-content/text-content.component';
import { SubHeadingComponent } from '../sub-heading/sub-heading.component';
import { ListComponentComponent as ListComponent } from '../list-component/list-component.component';
import { ImageGalleryComponent } from '../image-gallery/image-gallery.component';

@Component({
  selector: 'app-content',
  imports: [
    CommonModule,
    FormsModule,
    TextContentComponent,
    SubHeadingComponent,
    ListComponent,
    ImageGalleryComponent,
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent {
  @Input({ required: true }) lastElementNumber!: number;
  elementTypes = [
    '-- Select content type --',
    'Sub-heading',
    'Text',
    'List',
    'Image gallery',
  ];
  selectedContent: string = this.elementTypes[0];
}
