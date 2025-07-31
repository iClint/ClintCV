import {
  Directive,
  ElementRef,
  HostBinding,
  OnDestroy,
  AfterViewInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appScrollShadow]',
  standalone: true,
})
export class ScrollShadowDirective implements AfterViewInit, OnDestroy {
  @HostBinding('class.scrolled') scrolled = false;

  private sentinel!: HTMLElement;
  private intersectionObserver?: IntersectionObserver;

  constructor(
    private hostRef: ElementRef<HTMLElement>,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    const host = this.hostRef.nativeElement;
    const parent = host.parentElement;

    // Create a tiny sentinel placed BEFORE the header in the DOM
    this.sentinel = this.renderer.createElement('div');
    this.renderer.setStyle(this.sentinel, 'position', 'absolute');
    this.renderer.setStyle(this.sentinel, 'top', '0');
    this.renderer.setStyle(this.sentinel, 'left', '0');
    this.renderer.setStyle(this.sentinel, 'width', '1px');
    this.renderer.setStyle(this.sentinel, 'height', '1px');
    this.renderer.setStyle(this.sentinel, 'opacity', '0');
    this.renderer.setStyle(this.sentinel, 'pointerEvents', 'none');
    this.renderer.setAttribute(this.sentinel, 'aria-hidden', 'true');

    this.renderer.insertBefore(parent, this.sentinel, host);

    // Observe against the viewport
    this.intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        // sentinel visible => top of page; not visible => scrolled
        this.scrolled = !entry.isIntersecting;
      },
      { root: null, threshold: 0 },
    );

    this.intersectionObserver.observe(this.sentinel);

    // set initial state (in case we're not at top on load)
    const rect = this.sentinel.getBoundingClientRect();
    this.scrolled = rect.top < 0;
  }

  ngOnDestroy(): void {
    this.intersectionObserver?.disconnect();
    this.sentinel?.remove();
  }
}
