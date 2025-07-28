import { TestBed } from '@angular/core/testing';

import { LightBoxService } from './light-box.service';

describe('LightBoxService', () => {
  let service: LightBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LightBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
