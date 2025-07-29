import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FooterComponent } from './footer.component';
import { after } from 'node:test';

describe('FooterComponent', () => {
  let component: FooterComponent;
  let fixture: ComponentFixture<FooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeAll(() => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2030-01-01T00:00:00.000Z'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should rerturn the current year', () => {
    const currentYear = 2030;
    expect(component.currentYear).toBe(currentYear);
  });

  it('should build the footer text correctly', () => {
    const expectedText = '© 2030 Clint Kingston - All rights reserved.';

    expect(component.buildFooterText).toBe(expectedText);
  });

  it('should return the disclaimer text', () => {
    const expectedDisclaimer =
      'Opinions expressed are solely my own and do not represent my employer or clients. All screenshots use mock data—no real customer information is displayed.';

    expect(component.disclaimer).toBe(expectedDisclaimer);
  });

  afterAll(() => {
    jest.useRealTimers();
  });
});
