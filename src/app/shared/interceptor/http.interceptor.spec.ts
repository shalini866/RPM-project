import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HTTPInterceptor } from './http.interceptor';

describe('HTTPInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HTTPInterceptor
      ],
      imports: [HttpClientTestingModule],
  }));

  it('should be created', () => {
    const interceptor: HTTPInterceptor = TestBed.inject(HTTPInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
 