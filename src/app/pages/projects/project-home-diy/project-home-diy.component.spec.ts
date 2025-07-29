import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectHomeDiyComponent } from './project-home-diy.component';
import { LightBoxService } from 'src/app/services/light-box/light-box.service';
import { LightBoxState } from 'src/app/models/light-box.model';
import { Subject } from 'rxjs';

describe('ProjectHomeDiyComponent', () => {
  let component: ProjectHomeDiyComponent;
  let fixture: ComponentFixture<ProjectHomeDiyComponent>;
  let lightBoxServiceMock: Partial<LightBoxService>;
  let lightBoxServiceSubject$: Subject<LightBoxState>;

  beforeEach(async () => {
    lightBoxServiceSubject$ = new Subject<LightBoxState>();

    lightBoxServiceMock = {
      state: lightBoxServiceSubject$.asObservable(),
      open: jest.fn(),
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
    const openSpy = jest.spyOn(lightBoxServiceMock, 'open');
    component.openImage('image.jpg', 'image alt', 'image label');

    expect(openSpy).toHaveBeenCalled();
    expect(openSpy).toHaveBeenCalledWith(
      'image.jpg',
      'image alt',
      'image label'
    );
  });
});
