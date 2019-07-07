import { TestBed } from '@angular/core/testing';

import { LayoutBuilderService } from './layout-builder.service';

describe('LayoutBuilderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LayoutBuilderService = TestBed.get(LayoutBuilderService);
    expect(service).toBeTruthy();
  });
});
