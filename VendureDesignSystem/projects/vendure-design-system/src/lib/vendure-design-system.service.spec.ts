import { TestBed } from '@angular/core/testing';

import { VendureDesignSystemService } from './vendure-design-system.service';

describe('VendureDesignSystemService', () => {
  let service: VendureDesignSystemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendureDesignSystemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
