import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  Renderer2,
} from '@angular/core';

/**
 * Fades/slides an element into view the first time it enters the viewport.
 * Pairs with the `.reveal` / `.reveal.is-visible` styles in styles.scss.
 *
 * Usage: `<section appReveal [revealDelay]="120">`
 * Honours `prefers-reduced-motion` (the CSS disables the transition there).
 */
@Directive({
  selector: '[appReveal]',
  standalone: true,
})
export class RevealDirective implements AfterViewInit, OnDestroy {
  /** Stagger delay in milliseconds before this element animates in. */
  @Input() revealDelay = 0;

  private observer?: IntersectionObserver;

  constructor(
    private readonly host: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const element = this.host.nativeElement;
    this.renderer.addClass(element, 'reveal');
    if (this.revealDelay) {
      this.renderer.setStyle(
        element,
        'transition-delay',
        `${this.revealDelay}ms`,
      );
    }

    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(element, 'is-visible');
          this.observer?.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
    );
    this.observer.observe(element);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}
