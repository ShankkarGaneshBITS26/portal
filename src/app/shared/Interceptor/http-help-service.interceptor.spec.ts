import { TestBed } from '@angular/core/testing';

import { HttpHelpServiceInterceptor } from './http-help-service.interceptor';

describe('HttpHelpServiceInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpHelpServiceInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: HttpHelpServiceInterceptor = TestBed.inject(HttpHelpServiceInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
