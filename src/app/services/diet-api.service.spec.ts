import { TestBed } from '@angular/core/testing';

import { DietApiService } from './diet-api.service';

describe('DietApiService', () => {
  let service: DietApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DietApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
