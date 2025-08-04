import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelObjectBuilderComponent } from './model-object-builder.component';

describe('ModelObjectBuilderComponent', () => {
  let component: ModelObjectBuilderComponent;
  let fixture: ComponentFixture<ModelObjectBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelObjectBuilderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModelObjectBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
