import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/login`, credentials , { headers: { 'Content-Type': 'application/json' } }).pipe(
      tap((response: any) => {
        if (response.token) {
          localStorage.setItem('token', response.token);
        }
      })
    );
  }


  signup(userData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/auth/register/hr`, userData, { headers: { 'Content-Type': 'application/json' } }); // ✅ Send JSON payload
  }

  logout(): void {
    localStorage.removeItem('token');
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getLoggedInUser(): Observable<any> {
    const token = localStorage.getItem('token');
    return this.http.get(`${this.apiUrl}/hr/me`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
  }

  sendForgotPasswordEmail(email: string): Observable<any> {
    const body = { email }; // 👈 wrap email into object
  
    return this.http.post('http://localhost:8080/api/auth/forgot-password', body, {
      headers: { 'Content-Type': 'application/json' },
      responseType: 'text' // or 'json' if backend returns JSON
    });
  }
}
