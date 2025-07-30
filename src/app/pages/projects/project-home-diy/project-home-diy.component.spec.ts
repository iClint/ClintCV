import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectHomeDiyComponent } from './project-home-diy.component';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { LightBoxGalleryState } from 'src/app/models/light-box.model';
import { Subject } from 'rxjs';

describe('ProjectHomeDiyComponent', () => {
  let component: ProjectHomeDiyComponent;
  let fixture: ComponentFixture<ProjectHomeDiyComponent>;
  let lightBoxServiceMock: Partial<LightBoxService>;
  let lightBoxGalleryServiceSubject$: Subject<LightBoxGalleryState>;

  beforeEach(async () => {
    lightBoxGalleryServiceSubject$ = new Subject<LightBoxGalleryState>();

    lightBoxServiceMock = {
      imageGalleryState: lightBoxGalleryServiceSubject$.asObservable(),
      openGallery: jest.fn(),
    };

    await TestBed.configureTestingModule({
      imports: [ProjectHomeDiyComponent],
      providers: [{ provide: LightBoxService, useValue: lightBoxServiceMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectHomeDiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call LightBoxService on openImage()', () => {
    const openSpy = jest.spyOn(lightBoxServiceMock, 'openGallery');

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
    component.openGallery(mockState.imageGallery, 0);

    expect(openSpy).toHaveBeenCalled();
    expect(openSpy).toHaveBeenCalledWith(mockState.imageGallery, 0);
  });
});
