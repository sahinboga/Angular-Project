import { TestBed } from '@angular/core/testing';

import { NewHeaderService } from './new-header.service';

describe('NewHeaderService', () => {
  let service: NewHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
