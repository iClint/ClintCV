import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render header content', () => {
    component.title = 'website title';
    component.subtitle = 'website subtitle';
    component.description = 'website description';
    fixture.detectChanges();

    const headerTitle = fixture.nativeElement.querySelector('.header__title');
    const headerSubtitle =
      fixture.nativeElement.querySelector('.header__subtitle');
    const headerDescription = fixture.nativeElement.querySelector(
      '.header__description',
    );

    expect(headerTitle.textContent).toEqual('website title');
    expect(headerSubtitle.textContent).toEqual('website subtitle');
    expect(headerDescription.textContent).toEqual('website description');
  });

  it('should render the nav menu', () => {
    const navMenu = fixture.nativeElement.querySelector('app-nav-menu');
    expect(navMenu).toBeTruthy();
  });
});
