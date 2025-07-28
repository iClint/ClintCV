import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectHomeDiyComponent } from './project-home-diy.component';

describe('ProjectHomeDiyComponent', () => {
  let component: ProjectHomeDiyComponent;
  let fixture: ComponentFixture<ProjectHomeDiyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectHomeDiyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectHomeDiyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
