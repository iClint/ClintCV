import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectPortfolioComponent } from './project-portfolio.component';
import { TickerComponent } from 'src/components/ticker/ticker.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('ProjectPortfolioComponent', () => {
  let component: ProjectPortfolioComponent;
  let fixture: ComponentFixture<ProjectPortfolioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ProjectPortfolioComponent,
        TickerComponent,
        NoopAnimationsModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectPortfolioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
