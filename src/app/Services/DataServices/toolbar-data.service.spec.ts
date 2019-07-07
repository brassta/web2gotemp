import { TestBed } from '@angular/core/testing';

import { ToolbarDataService } from './toolbar-data.service';

describe('ToolbarDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolbarDataService = TestBed.get(ToolbarDataService);
    expect(service).toBeTruthy();
  });
});
