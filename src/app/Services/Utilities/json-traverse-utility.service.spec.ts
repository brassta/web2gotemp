import { TestBed } from '@angular/core/testing';

import { JsonTraverseUtilityService } from './json-traverse-utility.service';

describe('JsonTraverseUtilityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: JsonTraverseUtilityService = TestBed.get(JsonTraverseUtilityService);
    expect(service).toBeTruthy();
  });
});
