import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { LightBoxComponent } from './light-box.component';
import { LightBoxState } from 'src/app/models/light-box.model';
import { Subject } from 'rxjs';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';

const mockLightBoxState: LightBoxState = {
  isOpen: false,
  imageSrc: '',
  imageAlt: '',
  imageLabel: '',
};

const lightBoxStateSubject$ = new Subject<LightBoxState>();

export const lightBoxServiceMock = {
  state: lightBoxStateSubject$.asObservable(),
  close: jest.fn(),
};

describe('LightBoxComponent', () => {
  let component: LightBoxComponent;
  let fixture: ComponentFixture<LightBoxComponent>;

  beforeEach(async () => {
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
    const mockState: LightBoxState = {
      isOpen: false,
      imageSrc: 'test.jpg',
      imageAlt: 'test image',
      imageLabel: 'test image label',
    };

    lightBoxStateSubject$.next(mockState);
    fixture.detectChanges();

    expect(component.state).toEqual(mockState);
  }));

  it('should call lightBoxService.close() when close() is called', () => {
    const closeSpy = jest.spyOn(lightBoxServiceMock, 'close');
    component.close();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should call lightboxService.close() on destroy', () => {
    const closeSpy = jest.spyOn(lightBoxServiceMock, 'close');
    component.ngOnDestroy();

    expect(closeSpy).toHaveBeenCalled();
  });

  it('should unsubscribe on destroy', () => {
    const unsubscribeSpy = jest.spyOn(component['sub'], 'unsubscribe');
    component.ngOnDestroy();

    expect(unsubscribeSpy).toHaveBeenCalled();
  });

  it('should render image when state.isOpen is true', () => {
    const mockState = {
      isOpen: true,
      imageSrc: 'image1.jpg',
      imageAlt: 'image alt',
      imageLabel: 'image lable',
    };

    lightBoxStateSubject$.next(mockState);
    fixture.autoDetectChanges();

    const img = fixture.nativeElement.querySelector('img');
    expect(img.src).toContain('image1.jpg');
    expect(img.alt).toContain('image alt');
  });
});
