import { TestBed } from '@angular/core/testing';

import { ApiRefrenceService } from './api-refrence.service';

describe('ApiRefrenceService', () => {
  let service: ApiRefrenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRefrenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
