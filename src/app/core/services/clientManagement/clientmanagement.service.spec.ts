import { TestBed } from '@angular/core/testing';

import { ClientmanagementService } from './clientmanagement.service';

describe('ClientmanagementService', () => {
  let service: ClientmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
