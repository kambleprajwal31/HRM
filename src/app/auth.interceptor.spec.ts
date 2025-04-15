// import { TestBed } from '@angular/core/testing';
// import { HttpInterceptorFn } from '@angular/common/http';

// import { authInterceptor } from './auth.interceptor';

// describe('authInterceptor', () => {
//   const interceptor: HttpInterceptorFn = (req, next) => 
//     TestBed.runInInjectionContext(() => authInterceptor(req, next));

//   beforeEach(() => {
//     TestBed.configureTestingModule({});
//   });

//   it('should be created', () => {
//     expect(interceptor).toBeTruthy();
//   });
// });

import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpRequest } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';

describe('authInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: authInterceptor,
          multi: true
        }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify(); // Verify no unmatched requests
  });

  it('should be created', () => {
    const interceptor = TestBed.inject(authInterceptor);
    expect(interceptor).toBeTruthy();
  });

  it('should add Authorization header when token exists', () => {
    localStorage.setItem('token', 'test-token');

    httpClient.get('/test').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeTrue();
    expect(req.request.headers.get('Authorization')).toBe('test-token');

    req.flush({});
  });

  it('should not add Authorization header when token does not exist', () => {
    localStorage.removeItem('token');

    httpClient.get('/test').subscribe(response => {
      expect(response).toBeTruthy();
    });

    const req = httpTestingController.expectOne('/test');
    expect(req.request.headers.has('Authorization')).toBeFalse();

    req.flush({});
  });
});

