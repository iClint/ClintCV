import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent, NoopAnimationsModule],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    component.navMenuItems = [];
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render the title and subtitle', () => {
    component.title = 'website title';
    component.subtitle = 'website subtitle';
    fixture.detectChanges();

    const headerTitle = fixture.nativeElement.querySelector('.header__title');
    const headerSubtitle =
      fixture.nativeElement.querySelector('.header__subtitle');

    expect(headerTitle.textContent).toContain('website title');
    expect(headerSubtitle.textContent).toContain('website subtitle');
  });

  it('should emit menuToggle when the menu button is pressed', () => {
    const toggleSpy = jest.fn();
    component.menuToggle.subscribe(toggleSpy);

    const menuButton = fixture.nativeElement.querySelector(
      '.header__menu-button',
    );
    menuButton.click();

    expect(toggleSpy).toHaveBeenCalled();
  });

  it('should render the nav menu', () => {
    const navMenu = fixture.nativeElement.querySelector('app-nav-menu');
    expect(navMenu).toBeTruthy();
  });
});
