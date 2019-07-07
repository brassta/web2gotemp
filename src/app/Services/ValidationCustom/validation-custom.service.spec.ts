import { TestBed } from '@angular/core/testing';

import { ValidationCustomService } from './validation-custom.service';

describe('ValidationCustomService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ValidationCustomService = TestBed.get(ValidationCustomService);
    expect(service).toBeTruthy();
  });
});
