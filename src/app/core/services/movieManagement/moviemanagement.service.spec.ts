import { TestBed } from '@angular/core/testing';

import { MoviemanagementService } from './moviemanagement.service';

describe('MoviemanagementService', () => {
  let service: MoviemanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MoviemanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
