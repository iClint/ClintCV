import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { LightBoxState } from 'src/app/models/light-box.model';

@Injectable({
  providedIn: 'root',
})
export class LightBoxService {
  private state$ = new BehaviorSubject<LightBoxState>({
    isOpen: false,
    imageSrc: '',
    imageAlt: '',
    imageLabel: '',
  });

  get state() {
    return this.state$.asObservable();
  }

  open(imageSrc: string, imageAlt: string, imageLabel: string) {
    this.state$.next({
      isOpen: true,
      imageSrc,
      imageAlt,
      imageLabel,
    });
  }

  close() {
    const currentState = this.state$.getValue();
    if (!currentState.isOpen) return;
    this.state$.next({ ...currentState, isOpen: false });
  }
}
