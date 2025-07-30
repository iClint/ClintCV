import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import {
  ImageGallery,
  LightBoxGalleryState,
} from 'src/app/models/light-box.model';

@Injectable({
  providedIn: 'root',
})
export class LightBoxService {
  private imageGalleryState$ = new BehaviorSubject<LightBoxGalleryState>({
    isGalleryOpen: false,
    index: 0,
    imageGallery: [],
  });

  get imageGalleryState(): Observable<LightBoxGalleryState> {
    return this.imageGalleryState$.asObservable();
  }

  openGallery(imageGallery: ImageGallery[], index: number): void {
    this.imageGalleryState$.next({
      isGalleryOpen: true,
      index,
      imageGallery,
    });
  }

  closeGallery(): void {
    const currentState = this.imageGalleryState$.getValue();
    if (!currentState.isGalleryOpen) return;
    this.imageGalleryState$.next({ ...currentState, isGalleryOpen: false });
  }

  nextImage(): void {
    const currentState = this.imageGalleryState$.getValue();
    if (!currentState.isGalleryOpen) return;
    const nextIndex = this.nextIndex(
      currentState.index,
      currentState.imageGallery.length
    );
    this.imageGalleryState$.next({
      ...currentState,
      isGalleryOpen: true,
      index: nextIndex,
    });
  }

  previousImage(): void {
    const currentState = this.imageGalleryState$.getValue();
    if (!currentState.isGalleryOpen) return;
    const nextIndex = this.previousIndex(
      currentState.index,
      currentState.imageGallery.length
    );
    this.imageGalleryState$.next({
      ...currentState,
      isGalleryOpen: true,
      index: nextIndex,
    });
  }

  private nextIndex(currentIndex: number, galleryLength: number): number {
    if (currentIndex + 1 < galleryLength) {
      return currentIndex + 1;
    }
    return 0;
  }

  private previousIndex(currentIndex: number, galleryLength: number): number {
    if (currentIndex - 1 < 0) {
      return galleryLength - 1;
    }
    return currentIndex - 1;
  }
}
