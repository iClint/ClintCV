// src/components/ticker/ticker.component.spec.ts
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TickerComponent } from './ticker.component';

describe('TickerComponent', () => {
  let fixture: ComponentFixture<TickerComponent>;
  let component: TickerComponent;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TickerComponent, NoopAnimationsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(TickerComponent);
    component = fixture.componentInstance;
    component.items = ['a', 'b', 'c'];
    component.duration = 200; // fast cycles for tests
  });

  afterEach(() => {
    if (fixture) fixture.destroy();
    TestBed.resetTestingModule();
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it('should create', () => {
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('ngOnInit: starts ticker and sets predictable starting index', () => {
    const rndSpy = jest.spyOn(Math, 'random').mockReturnValue(0.5); // floor(0.5*3)=1
    const startSpy = jest.spyOn(component, 'startTicker');

    fixture.detectChanges(); // triggers ngOnInit

    expect(component.contentIndex).toBe(1);
    expect(component.fadeState).toBe('visible');
    expect(component.progress).toBe(0);
    expect(startSpy).toHaveBeenCalled();

    rndSpy.mockRestore();
  });

  it('startTicker: increments progress on each tick', fakeAsync(() => {
    fixture.detectChanges(); // startTicker kicks in
    const before = component.progress;
    tick(100); // one interval
    expect(component.progress).toBeGreaterThan(before);
  }));

  it('startTicker: does not increment while transitioning', fakeAsync(() => {
    fixture.detectChanges();
    component.isTransitioning = true;
    const before = component.progress;
    tick(100); // skipped due to isTransitioning
    expect(component.progress).toBe(before);
    component.isTransitioning = false;
  }));

  it('cycles to next item after reaching 100 and resets flags', fakeAsync(() => {
    fixture.detectChanges();
    const nextSpy = jest.spyOn(component, 'nextItem');

    tick(200); // reach >=100, schedule 400ms timeout
    expect(component.isTransitioning).toBe(true);

    tick(400); // run the timeout (and possibly the interval at the same time)

    expect(nextSpy).toHaveBeenCalled();
    // progress may be 0 (exact reset) or 50 (interval fired right after reset)
    expect(component.progress).toBeLessThan(100);
    expect(component.isTransitioning).toBe(false);
  }));

  it('nextItem: wraps index and keeps fadeState visible', () => {
    component.items = ['x', 'y', 'z'];
    component.contentIndex = 2;
    component.nextItem(); // +1 -> 0
    expect(component.contentIndex).toBe(0);
    expect(component.fadeState).toBe('visible');
  });

  it('onClickNavigation: negative index wraps and calls resetTicker', fakeAsync(() => {
    const resetSpy = jest.spyOn(component, 'resetTicker');
    component.items = ['x', 'y', 'z'];
    component.contentIndex = 0;

    component.onClickNavigation(-1); // fade out + schedule work in 400ms
    expect(component.isTransitioning).toBe(true);
    expect(component.fadeState).toBe('hidden');

    tick(400); // run the queued update
    expect(component.contentIndex).toBe(2); // wrapped
    expect(component.fadeState).toBe('visible');
    expect(component.progress).toBe(0);
    expect(component.isTransitioning).toBe(false);
    expect(resetSpy).toHaveBeenCalled();
  }));

  it('resetTicker: clears state and restarts ticker', () => {
    const startSpy = jest.spyOn(component, 'startTicker');
    // simulate an existing interval handle
    component.timer = setInterval(() => {}, 100) as unknown as ReturnType<
      typeof setInterval
    >;
    component.progress = 42;
    component.isTransitioning = true;

    component.resetTicker();

    expect(component.progress).toBe(0);
    expect(component.isTransitioning).toBe(false);
    expect(startSpy).toHaveBeenCalled();
  });

  it('ngOnDestroy: clears interval if present', () => {
    const clearSpy = jest.spyOn(window, 'clearInterval');
    component.timer = setInterval(() => {}, 100) as unknown as ReturnType<
      typeof setInterval
    >;

    component.ngOnDestroy();

    expect(clearSpy).toHaveBeenCalledWith(component.timer as any);
  });

  it('getters: currentItem and showProgressBar', () => {
    component.items = ['x', 'y', 'z'];
    component.contentIndex = 1;
    expect(component.currentItem).toBe('y');

    component.progress = 0;
    expect(component.showProgressBar).toBe(false);
    component.progress = 0.001;
    expect(component.showProgressBar).toBe(true);
  });
});
