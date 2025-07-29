import { TestBed } from '@angular/core/testing';

import { LightBoxService } from './light-box.service';
import { LightBoxState } from 'src/app/models/light-box.model';

describe('LightBoxService', () => {
  let service: LightBoxService;

  beforeEach(() => {
    service = new LightBoxService();

    TestBed.configureTestingModule({});
    service = TestBed.inject(LightBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should expose initial closed state', () => {
    const sub = jest.fn();
    const subscription = service.state.subscribe(sub);
    const initial = sub.mock.calls.at(-1)![0];

    expect(initial).toEqual({
      isOpen: false,
      imageSrc: '',
      imageAlt: '',
      imageLabel: '',
    });

    subscription.unsubscribe();
  });

  it('emits next state on open()', () => {
    const sub = jest.fn();
    const subscription = service.state.subscribe(sub);
    const state: LightBoxState = {
      isOpen: true,
      imageSrc: 'imageA.jpg',
      imageAlt: 'image A',
      imageLabel: 'image A label',
    };

    service.open(state.imageSrc, state.imageAlt, state.imageLabel);

    expect(sub).toHaveBeenCalledTimes(2);
    const last = sub.mock.calls.at(-1)![0];
    expect(last).toEqual(state);

    subscription.unsubscribe();
  });

  it('flips the isOpen State on close()', () => {
    const sub = jest.fn();
    const subscription = service.state.subscribe(sub);
    const state: LightBoxState = {
      isOpen: true,
      imageSrc: 'imageA.jpg',
      imageAlt: 'image A',
      imageLabel: 'image A label',
    };

    service.open(state.imageSrc, state.imageAlt, state.imageLabel);
    service.close();

    expect(sub).toHaveBeenCalledTimes(3);
    const last = sub.mock.calls.at(-1)![0];
    expect(last.isOpen).toBeFalsy();

    subscription.unsubscribe();
  });

  it('close() when already closed does nothing (no extra emission)', () => {
    const sub = jest.fn();
    const subscription = service.state.subscribe(sub);

    service.close();

    expect(sub).toHaveBeenCalledTimes(1); // only the initial
    subscription.unsubscribe();
  });

  it('subsequent open() overwrites previous data', () => {
    const sub = jest.fn();
    const subscription = service.state.subscribe(sub);

    service.open('a.jpg', 'A', 'A');
    service.open('b.jpg', 'B', 'B');

    expect(sub).toHaveBeenCalledTimes(3); // initial + open A + open B
    const last = sub.mock.calls.at(-1)![0];
    expect(last).toEqual({
      isOpen: true,
      imageSrc: 'b.jpg',
      imageAlt: 'B',
      imageLabel: 'B',
    });

    subscription.unsubscribe();
  });
});
