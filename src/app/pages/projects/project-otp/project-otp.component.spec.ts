import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectOtpComponent } from './project-otp.component';

describe('ProjectOtpComponent', () => {
  let component: ProjectOtpComponent;
  let fixture: ComponentFixture<ProjectOtpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectOtpComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectOtpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
