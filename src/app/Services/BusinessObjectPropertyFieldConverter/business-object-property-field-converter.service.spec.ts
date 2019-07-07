import { TestBed } from '@angular/core/testing';

import { BusinessObjectPropertyFieldConverterService } from './business-object-property-field-converter.service';

describe('BusinessObjectPropertyFieldConverterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BusinessObjectPropertyFieldConverterService = TestBed.get(BusinessObjectPropertyFieldConverterService);
    expect(service).toBeTruthy();
  });
});
