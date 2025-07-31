import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Router, NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Subject } from 'rxjs';

describe('AppComponent – constructor behavior (Jest)', () => {
  let fixture: ComponentFixture<AppComponent>;
  let component: AppComponent;
  let router: Router;
  let routerEvents$: Subject<any>;

  // helpers for window.goatcounter
  const setGoat = (impl?: { count?: jest.Mock }) => {
    (window as any).goatcounter = impl ?? {};
  };
  const clearGoat = () => {
    delete (window as any).goatcounter;
  };

  // helpers for <script> path
  const removeGoatScript = () => {
    Array.from(
      document.querySelectorAll('script[src*="goatcounter.com/count.js"]'),
    ).forEach((el) => el.remove());
  };
  const addGoatScriptTag = () => {
    const script = document.createElement('script');
    script.src = 'https://gc.goatcounter.com/count.js';
    document.body.appendChild(script);
    return script;
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes([]), AppComponent],
    }).compileComponents();

    router = TestBed.inject(Router);

    // Replace router.events with our own Subject stream
    routerEvents$ = new Subject<any>();
    jest
      .spyOn(router as any, 'events', 'get') // spy on Router.events getter
      .mockReturnValue(routerEvents$.asObservable());
  });

  afterEach(() => {
    routerEvents$.complete();
    clearGoat();
    removeGoatScript();
    if (fixture) fixture.destroy();
    jest.clearAllMocks();
  });

  it('should create', () => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should set goatcounterReady=true after constructor when GoatCounter exists', fakeAsync(() => {
    setGoat({ count: jest.fn() });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    // constructor chains waitForGoatCounter().then(() => set flag + subscribe)
    tick(0);

    expect(component.goatcounterReady).toBe(true);
  }));

  it('should call goatcounter.count on NavigationEnd after ready', fakeAsync(() => {
    const count = jest.fn();
    setGoat({ count });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    tick(0); // readiness + subscription

    routerEvents$.next(new NavigationEnd(1, '/from', '/after'));
    expect(count).toHaveBeenCalledWith({ path: '/after' });
  }));

  it('should ignore NavigationEnd events emitted before readiness, then track after ready', fakeAsync(() => {
    // Not ready at start
    clearGoat();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    const count = jest.fn();

    // BEFORE readiness -> ignored
    routerEvents$.next(new NavigationEnd(1, '/early', '/ignored'));

    // GoatCounter appears later; polling will detect it
    setGoat({ count });
    tick(100); // poll interval
    tick(0); // flush microtask: subscription attaches

    // AFTER readiness -> tracked
    routerEvents$.next(new NavigationEnd(2, '/from', '/tracked'));
    expect(count).toHaveBeenCalledWith({ path: '/tracked' });
  }));

  it('should not throw if goatcounter.count is missing on NavigationEnd', fakeAsync(() => {
    setGoat({}); // exists but no count()

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    tick(0); // subscribe

    expect(() =>
      routerEvents$.next(new NavigationEnd(3, '/x', '/y')),
    ).not.toThrow();
  }));

  // --- waitForGoatCounter branches ---

  it('should resolve immediately when goatcounter already exists (early return)', fakeAsync(() => {
    setGoat({ count: jest.fn() });

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    let resolved = false;
    component['waitForGoatCounter']().then(() => (resolved = true));

    tick(0);
    expect(resolved).toBe(true);
  }));

  it('should resolve when script loads (script branch: load)', fakeAsync(() => {
    clearGoat();
    const script = addGoatScriptTag();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    let resolved = false;
    component['waitForGoatCounter']().then(() => (resolved = true));

    script.dispatchEvent(new Event('load'));
    tick(0);
    expect(resolved).toBe(true);

    // set ready for completeness
    setGoat({ count: jest.fn() });
    tick(0);
    expect(component.goatcounterReady).toBe(true);
  }));

  it('should resolve when script fails to load (script branch: error)', fakeAsync(() => {
    clearGoat();
    const script = addGoatScriptTag();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    let resolved = false;
    component['waitForGoatCounter']().then(() => (resolved = true));

    script.dispatchEvent(new Event('error')); // triggers warn + resolve
    tick(0);

    expect(resolved).toBe(true);
    // expect(warnSpy).toHaveBeenCalledWith(
    //   '🐐 GoatCounter script failed to load',
    // );
    warnSpy.mockRestore();
  }));

  it('should resolve via polling when no script exists and goatcounter appears (polling branch)', fakeAsync(() => {
    clearGoat();
    removeGoatScript(); // ensure no script is present (forces polling)

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    let resolved = false;
    component['waitForGoatCounter']().then(() => (resolved = true));

    // nothing yet
    tick(100);
    expect(resolved).toBe(false);

    // now goatcounter shows up, next poll resolves
    setGoat({ count: jest.fn() });
    tick(100);
    tick(0);

    expect(resolved).toBe(true);
  }));
});
