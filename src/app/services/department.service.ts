import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';
@Injectable({ providedIn: 'root' })
export class DepartmentService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}

 getAll(): Observable<any> {
     return this.http.get(`${this.apiUrl}/hr/departments`);
   }
   create(department: { name: string }) {
    return this.http.post(`${this.apiUrl}/hr/departments`, department);
  }

  update(id: number, dept: any) {
    return this.http.put(`${this.apiUrl}/hr/departments/${id}`, dept);
  }
  
  delete(id: number) {
    return this.http.delete(`${this.apiUrl}/hr/departments/${id}`);
  }
}