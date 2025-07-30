import { Component, Input, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import {
  ImageGallery,
  LightBoxGalleryState,
} from 'src/app/models/light-box.model';
import { Subscription } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-light-box',
  imports: [CommonModule, MatIconModule],
  templateUrl: './light-box.component.html',
  styleUrl: './light-box.component.css',
})
export class LightBoxComponent implements OnDestroy {
  galleryState: LightBoxGalleryState = {
    isGalleryOpen: false,
    index: 0,
    imageGallery: [],
  };

  private gallerySubscription: Subscription;

  constructor(private lightBoxService: LightBoxService) {
    this.gallerySubscription = this.lightBoxService.imageGalleryState.subscribe(
      (gallerySubscriptionState) => {
        this.galleryState = gallerySubscriptionState;
      }
    );
  }

  galleryIndex(index: number, imageGallery: ImageGallery[]) {
    return `${index + 1}/${imageGallery.length}`; // +1 to normlise index
  }

  closeGallery(): void {
    this.lightBoxService.closeGallery();
  }

  nextImage(e?: MouseEvent): void {
    e?.stopPropagation();
    this.lightBoxService.nextImage();
  }

  previousImage(e?: MouseEvent): void {
    e?.stopPropagation();
    this.lightBoxService.previousImage();
  }

  showControls(galleySize: number): boolean {
    return galleySize > 1;
  }

  ngOnDestroy(): void {
    this.gallerySubscription.unsubscribe();
    this.lightBoxService.closeGallery();
  }
}
