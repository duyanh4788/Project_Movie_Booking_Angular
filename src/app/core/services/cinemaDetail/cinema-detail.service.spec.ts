import { TestBed } from '@angular/core/testing';

import { CinemaDetailService } from './cinema-detail.service';

describe('CinemaDetailService', () => {
  let service: CinemaDetailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CinemaDetailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
