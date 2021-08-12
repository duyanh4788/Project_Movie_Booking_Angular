import { TestBed } from '@angular/core/testing';

import { ListmovieService } from './listmovie.service';

describe('ListmovieService', () => {
  let service: ListmovieService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListmovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
