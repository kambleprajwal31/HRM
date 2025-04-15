import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class authInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Check if the request URL is for the login endpoint or if it's a POST request for login
    if (req.url.includes('/login') || req.method === 'POST' && req.url.includes('/login')) {
      return next.handle(req);
    }

    // Check if window and localStorage are available (browser environment)
    if (typeof window !== 'undefined' && window.localStorage) {
      const token = localStorage.getItem('token');

      // If there's a token, clone the request and add the Authorization header
      if (token) {
        const cloned = req.clone({
          setHeaders: {
            Authorization: `Bearer ${token}`
          }
        });
        return next.handle(cloned);
      }
    }

    // If no token or localStorage is not available, send the original request
    return next.handle(req);
  }
}
