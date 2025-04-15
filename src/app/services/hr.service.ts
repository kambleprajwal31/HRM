import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { environment } from '../../environment/environment';

export interface HRDetails {
  designation: string;
  joiningDate: string;
  phoneNumber: string;
  address: string;
  gender: string;
  dob: string;
  maritalStatus: string;
  image?: string;
  email?: string;
  fullName?: string;
  hrId?: string;
  departmentId: number;
}

@Injectable({ providedIn: 'root' })
export class HRService {

private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

  getDetails(): Observable<HRDetails> {
    return this.http.get<HRDetails>(`${this.apiUrl}/hr/details`);
  }

  saveDetails(data: any) {
    return this.http.post<any>(`${this.apiUrl}/hr/details`, data);
  }

  uploadImage(hrId: any, file: File): Observable<any> {
    const formData = new FormData();
    formData.append('image', file);
  
    // Add the Authorization header
    const headers = {
      Authorization: `Bearer ${localStorage.getItem('token')}`
    };
  
    return this.http.post(`${this.apiUrl}/hr/upload-image/${hrId}`, formData, { headers });
  }
  
  checkHRProfile(): Observable<boolean> {
    return this.http.get(`${this.apiUrl}/hr/details`, { observe: 'response' }).pipe(
      map((res) => res.status === 200),
      catchError(() => of(false))
    );
  }
}