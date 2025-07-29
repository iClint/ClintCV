import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-ticker',
  standalone: true,
  imports: [CommonModule, MatProgressBarModule, MatIconModule],
  templateUrl: './ticker.component.html',
  styleUrl: './ticker.component.css',
  animations: [
    trigger('fade', [
      state('visible', style({ opacity: 1 })),
      state('hidden', style({ opacity: 0 })),
      transition('visible <=> hidden', [animate('300ms ease')]),
    ]),
  ],
})
export class TickerComponent implements OnInit, OnDestroy {
  @Input() title: string | null = null;
  @Input() items: string[] = [];
  @Input() duration = 6000;

  fadeState: 'visible' | 'hidden' = 'visible';
  contentIndex = 0;

  get currentItem(): string {
    return this.items[this.contentIndex];
  }

  // Show progress bar only when progress is greater than 0
  // prevents seeing the bar shrink back to 0
  get showProgressBar(): boolean {
    return this.progress > 0;
  }

  progress = 0;
  timer?: ReturnType<typeof setInterval>;
  isTransitioning = false;

  ngOnInit(): void {
    if (!this.items?.length) return;
    this.contentIndex = Math.floor(Math.random() * this.items.length);
    this.progress = 0;
    this.fadeState = 'visible';
    this.startTicker();
  }

  startTicker() {
    const tickRate = 100;
    const increment = (tickRate / this.duration) * 100;
    this.timer = setInterval(() => {
      if (this.isTransitioning) return;

      this.progress += increment;
      if (this.progress >= 100) {
        this.isTransitioning = true;

        setTimeout(() => {
          this.nextItem();
          this.progress = 0;
          this.isTransitioning = false;
        }, 400);
      }
    }, tickRate);
  }

  nextItem(index: number = 1): void {
    this.fadeState = 'hidden';
    this.contentIndex = (this.contentIndex + index) % this.items.length;
    this.fadeState = 'visible';
  }

  ngOnDestroy(): void {
    if (this.timer) clearInterval(this.timer);
  }

  onClickNavigation(index: number): void {
    this.isTransitioning = true;

    // Start fade out
    this.fadeState = 'hidden';

    setTimeout(() => {
      this.contentIndex =
        (this.contentIndex + index + this.items.length) % this.items.length;
      this.fadeState = 'visible';
      this.progress = 0;
      this.isTransitioning = false;

      this.resetTicker();
    }, 400); // match fade-out duration
  }

  resetTicker(): void {
    if (this.timer) clearInterval(this.timer);
    this.progress = 0;
    this.isTransitioning = false;
    this.startTicker();
  }
}
