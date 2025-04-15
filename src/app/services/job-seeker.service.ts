import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environment/environment';

export interface Department {
  id: number;
  name: string;
}

export interface JobSeeker {
  id?: number;
  name: string;
  email: string;
  contactNo: string;
  departmentId?: number;
  department?: Department;
  resumePath?: string;
}
@Injectable({
  providedIn: 'root'
})
export class JobSeekerService {

   private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAllJobSeekers(): Observable<JobSeeker[]> {
    return this.http.get<JobSeeker[]>(`${this.apiUrl}/jobseekers`);
  }

  // getDepartments(): Observable<Department[]> {
  //   return this.http.get<Department[]>(this.deptUrl);
  // }

  addJobSeeker(formData: FormData): Observable<JobSeeker> {
    return this.http.post<JobSeeker>(`${this.apiUrl}/jobseekers`, formData);
  }

  deleteJobSeeker(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/jobseekers/${id}`);
  }

  downloadResume(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/jobseekers/download/${id}`, { responseType: 'blob' });
  }
}