import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavMenuComponent } from './nav-menu.component';
import { CommonModule } from '@angular/common';
import { RouterTestingModule } from '@angular/router/testing';
import { MatIconModule } from '@angular/material/icon';
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
      imports: [
        CommonModule,
        RouterTestingModule,
        MatIconModule,
        NavMenuComponent,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(NavMenuComponent);
    component = fixture.componentInstance;
    component.items = mockItems;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should render all nav items', () => {
    const itemElements = fixture.debugElement.queryAll(
      By.css('.nav-menu__link')
    );
    expect(itemElements.length).toBe(mockItems.length);
  });

  it('should render item labels', () => {
    const text = fixture.nativeElement.textContent;
    expect(text).toContain('Home');
    expect(text).toContain('About');
  });

  it('should toggle nav visibility on click', () => {
    expect(component.isNavMenuVisible).toBe(false);
    component.onMenuClick();
    expect(component.isNavMenuVisible).toBe(true);
    component.onMenuClick();
    expect(component.isNavMenuVisible).toBe(false);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    jest.clearAllMocks();
  });
});
