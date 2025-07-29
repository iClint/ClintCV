import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContactComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContactComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set label onMouseEnter()', () => {
    const label = 'test label';
    component.onMouseEnterIcon(label);

    expect(component.dynamicDescription).toEqual(label);
  });

  it('should clear dynamicLabel onMouseLeave()', () => {
    component.onMouseLeaveIcon();

    expect(component.dynamicDescription).toEqual('');
  });
});
