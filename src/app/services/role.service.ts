import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environment/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hr/all`);
  }
  
  create(roleData: any) {
    return this.http.post(`${this.apiUrl}/hr`, roleData);
  }

  update(id: number, department: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/hr/roles/${id}`, department);
  }

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/hr/roles/${id}`);
  }
  
}
