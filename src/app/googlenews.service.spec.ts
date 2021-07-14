import { TestBed } from '@angular/core/testing';

import { GooglenewsService } from './googlenews.service';

describe('GooglenewsService', () => {
  let service: GooglenewsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GooglenewsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
