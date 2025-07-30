import { TestBed } from '@angular/core/testing';

import { LightBoxService } from './light-box.service';
import { LightBoxGalleryState } from 'src/app/models/light-box.model';

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
    const subscription = service.imageGalleryState.subscribe(sub);
    const initial = sub.mock.calls.at(-1)![0];

    expect(initial).toEqual({
      isGalleryOpen: false,
      index: 0,
      imageGallery: [],
    });

    subscription.unsubscribe();
  });

  it('emits next state on open()', () => {
    const sub = jest.fn();
    const subscription = service.imageGalleryState.subscribe(sub);
    const state: LightBoxGalleryState = {
      isGalleryOpen: true,
      imageGallery: [
        {
          imageSrc: 'image1.jpg',
          imageAlt: 'image alt',
          imageLabel: 'image lable',
        },
      ],
      index: 0,
    };

    service.openGallery(state.imageGallery, state.index);

    expect(sub).toHaveBeenCalledTimes(2);
    const last = sub.mock.calls.at(-1)![0];
    expect(last).toEqual(state);

    subscription.unsubscribe();
  });

  it('flips the isOpen State on close()', () => {
    const sub = jest.fn();
    const subscription = service.imageGalleryState.subscribe(sub);
    const state: LightBoxGalleryState = {
      isGalleryOpen: true,
      imageGallery: [
        {
          imageSrc: 'image1.jpg',
          imageAlt: 'image alt',
          imageLabel: 'image lable',
        },
      ],
      index: 0,
    };

    service.openGallery(state.imageGallery, state.index);
    service.closeGallery();

    expect(sub).toHaveBeenCalledTimes(3);
    const last = sub.mock.calls.at(-1)![0];
    expect(last.isOpen).toBeFalsy();

    subscription.unsubscribe();
  });

  it('close() when already closed does nothing (no extra emission)', () => {
    const sub = jest.fn();
    const subscription = service.imageGalleryState.subscribe(sub);

    service.closeGallery();

    expect(sub).toHaveBeenCalledTimes(1); // only the initial
    subscription.unsubscribe();
  });

  it('subsequent open() overwrites previous data', () => {
    const sub = jest.fn();
    const subscription = service.imageGalleryState.subscribe(sub);

    const mockState1 = {
      isGalleryOpen: true,
      imageGallery: [
        {
          imageSrc: 'image1.jpg',
          imageAlt: 'image1 alt',
          imageLabel: 'image1 lable',
        },
      ],
      index: 0,
    };

    const mockState2 = {
      isGalleryOpen: true,
      imageGallery: [
        {
          imageSrc: 'image2.jpg',
          imageAlt: 'image2 alt',
          imageLabel: 'image2 lable',
        },
      ],
      index: 0,
    };

    service.openGallery(mockState1.imageGallery, 0);
    service.openGallery(mockState2.imageGallery, 0);

    expect(sub).toHaveBeenCalledTimes(3); // initial + open A + open B
    const last = sub.mock.calls.at(-1)![0];
    expect(last).toEqual(mockState2);

    subscription.unsubscribe();
  });
});
