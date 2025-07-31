import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { LightBoxGalleryState } from 'src/app/models/light-box.model';
import { ProjectComponent } from './project.component';
import { of, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

describe('ProjectComponent', () => {
  let component: ProjectComponent;
  let fixture: ComponentFixture<ProjectComponent>;
  let lightBoxServiceMock: Partial<LightBoxService>;
  let lightBoxGalleryServiceSubject$: Subject<LightBoxGalleryState>;

  beforeEach(async () => {
    lightBoxGalleryServiceSubject$ = new Subject<LightBoxGalleryState>();

    lightBoxServiceMock = {
      imageGalleryState: lightBoxGalleryServiceSubject$.asObservable(),
      openGallery: jest.fn(),
    };

    const mockConfig = { title: 'Test', content: [] } as any; // or your real type

    await TestBed.configureTestingModule({
      imports: [ProjectComponent],
      providers: [
        { provide: LightBoxService, useValue: lightBoxServiceMock },
        {
          provide: ActivatedRoute,
          useValue: { data: of({ config: mockConfig }) },
        }, // ✅
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectComponent);
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
