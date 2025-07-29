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

describe('LightBoxComponent', () => {
  let component: LightBoxComponent;
  let fixture: ComponentFixture<LightBoxComponent>;
  let lightBoxStateSubject$: Subject<LightBoxState>;
  let lightBoxServiceMock: Partial<LightBoxService>;

  beforeEach(async () => {
    lightBoxStateSubject$ = new Subject<LightBoxState>();

    lightBoxServiceMock = {
      state: lightBoxStateSubject$.asObservable(),
      close: jest.fn(),
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
    const mockState: LightBoxState = {
      isOpen: false,
      imageSrc: 'test.jpg',
      imageAlt: 'test image',
      imageLabel: 'test image label',
    };

    lightBoxStateSubject$.next(mockState); // emit
    tick(); // flush microtasks
    fixture.detectChanges(); // update component

    expect(component.state).toEqual(mockState); // assert
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

  it('should render image when state.isOpen is true', fakeAsync(() => {
    const mockState = {
      isOpen: true,
      imageSrc: 'image1.jpg',
      imageAlt: 'image alt',
      imageLabel: 'image lable',
    };

    lightBoxStateSubject$.next(mockState);
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
