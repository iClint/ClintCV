import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { provideRouter, Router } from '@angular/router';
describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;
  let routerMock: Partial<Router>;

  beforeEach(async () => {
    routerMock = { navigate: jest.fn() };
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [{ provide: Router, useValue: routerMock }],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call router.navigate on navigate()', () => {
    const navigateSpy = jest.spyOn(routerMock, 'navigate');
    const testUrl = 'testUrl';
    component.navigate(testUrl);

    expect(navigateSpy).toHaveBeenCalledWith([testUrl]);
  });
});
