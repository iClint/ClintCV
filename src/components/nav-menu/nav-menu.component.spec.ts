import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';

describe('NavMenuComponent', () => {
  let component: NavMenuComponent;
  let fixture: ComponentFixture<NavMenuComponent>;

  const mockItems = [
    { icon: 'home', label: 'Home', path: '/home' },
    { icon: 'info', label: 'About', path: '/about' },
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, NavMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    component.items = mockItems;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should default to the horizontal layout', () => {
    expect(component.layout).toBe('horizontal');
  });

  it('should render all nav items', () => {
    const itemElements = fixture.debugElement.queryAll(
      By.css('.nav-menu__link'),
    );
    expect(itemElements.length).toBe(mockItems.length);
  });

  it('should render item labels', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Home');
    expect(text).toContain('About');
  });

  it('should render a nav list when layout is vertical', () => {
    component.layout = 'vertical';
    fixture.detectChanges();
    const list = fixture.nativeElement.querySelector('.nav-menu--vertical');
    expect(list).toBeTruthy();
  });

  it('should emit navigate when a link is clicked', () => {
    const navigateSpy = jest.fn();
    component.navigate.subscribe(navigateSpy);

    const firstLink = fixture.debugElement.query(By.css('.nav-menu__link'));
    firstLink.nativeElement.click();

    expect(navigateSpy).toHaveBeenCalled();
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    jest.clearAllMocks();
  });
});
