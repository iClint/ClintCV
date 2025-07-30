import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { LightBoxComponent } from './light-box.component';
import { Subject } from 'rxjs';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { LightBoxGalleryState } from 'src/app/models/light-box.model';

describe('LightBoxComponent', () => {
  let component: LightBoxComponent;
  let fixture: ComponentFixture<LightBoxComponent>;
  let lightBoxGalleryStateSubject$: Subject<LightBoxGalleryState>;
  let lightBoxServiceMock: Partial<LightBoxService>;

  beforeEach(async () => {
    lightBoxGalleryStateSubject$ = new Subject<LightBoxGalleryState>();

    lightBoxServiceMock = {
      imageGalleryState: lightBoxGalleryStateSubject$.asObservable(),
      closeGallery: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [LightBoxComponent],
      providers: [{ provide: LightBoxService, useValue: lightBoxServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(LightBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should subscribe to state', fakeAsync(() => {
    const mockState: LightBoxGalleryState = {
      isGalleryOpen: false,
      imageGallery: [
        {
          imageSrc: 'test.jpg',
          imageAlt: 'test image',
          imageLabel: 'test image label',
        },
      ],
      index: 0,
    };

    lightBoxGalleryStateSubject$.next(mockState); // emit
    tick(); // flush microtasks
    fixture.detectChanges(); // update component

    expect(component.galleryState).toEqual(mockState); // assert
  }));

  it('should call lightBoxService.close() when close() is called', () => {
    const closeSpy = jest.spyOn(lightBoxServiceMock, 'closeGallery');
    component.closeGallery();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should call lightboxService.close() on destroy', () => {
    const closeSpy = jest.spyOn(lightBoxServiceMock, 'closeGallery');
    component.ngOnDestroy();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = jest.spyOn(
      component['gallerySubscription'],
      'unsubscribe'
    );
    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should render image when state.isOpen is true', fakeAsync(() => {
    const mockState = {
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

    lightBoxGalleryStateSubject$.next(mockState);
    tick();
    fixture.detectChanges();

    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain('image1.jpg');
    expect(img.alt).toContain('image alt');
  }));

  afterEach(() => {
    TestBed.resetTestingModule();
    jest.clearAllMocks();
  });
});
