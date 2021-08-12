import { TestBed } from '@angular/core/testing';

import { NavigationtabService } from './navigationtab.service';

describe('NavigationtabService', () => {
  let service: NavigationtabService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationtabService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
