import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { LoadingInterceptor } from './loading-interceptor';

describe('LoadingInterceptor', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] })
  );

  it('should be created', () => {
    const service: LoadingInterceptor = TestBed.get(LoadingInterceptor);
    expect(service).toBeTruthy();
  });
});
