import { setupZoneTestEnv } from 'jest-preset-angular/setup-env/zone';

setupZoneTestEnv({
  errorOnUnknownElements: true,
  errorOnUnknownProperties: true,
});

(function () {
  class MockIntersectionObserver {
    private _cb: (entries: any[]) => void;
    constructor(cb: (entries: any[]) => void) {
      this._cb = cb;
    }
    observe = (el: Element) => this._cb([{ isIntersecting: true, target: el }]);
    unobserve = () => {};
    disconnect = () => {};
    takeRecords = () => [];
  }
  // @ts-ignore
  global.IntersectionObserver = MockIntersectionObserver as any;
})();
