import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProjectsComponent } from './projects.component';
import { provideRouter, RouterLink } from '@angular/router';
import { By } from '@angular/platform-browser';

describe('ProjectsComponent', () => {
  let component: ProjectsComponent;
  let fixture: ComponentFixture<ProjectsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectsComponent],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(ProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render a card for every project', () => {
    const cards = fixture.debugElement.queryAll(By.css('.projects__card'));
    expect(cards.length).toBe(component.content.projects.length);
  });

  it('should attach a routerLink to every card', () => {
    const routerLinks = fixture.debugElement.queryAll(By.directive(RouterLink));
    expect(routerLinks.length).toBe(component.content.projects.length);
  });

  it('should render each project title in order', () => {
    const titles = fixture.debugElement
      .queryAll(By.css('mat-card-title'))
      .map((el) => el.nativeElement.textContent.trim());
    expect(titles).toEqual(component.content.projects.map((p) => p.title));
  });
});
