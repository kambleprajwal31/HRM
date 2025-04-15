import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProjectRequirement } from '../project-requirement/project-requirement.model';
import { environment } from '../../environment/environment';


@Injectable({
  providedIn: 'root'
})
export class ProjectRequirementService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getAll(): Observable<ProjectRequirement[]> {
    return this.http.get<ProjectRequirement[]>(`${this.apiUrl}/requirements`);
  }

  add(formData: FormData): Observable<ProjectRequirement> {
    return this.http.post<ProjectRequirement>(`${this.apiUrl}/requirements`, formData);
  }

  update(id: number, data: any): Observable<ProjectRequirement> {
    return this.http.put<ProjectRequirement>(`${this.apiUrl}/requirements/${id}`, data);
  }
  updateRequirement(data: any): Observable<any> {
    const formData = new FormData();
    formData.append('departmentId', data.departmentId);
    formData.append('details', data.details);
    formData.append('resourceRequired', data.resourceRequired.toString());
  
    return this.http.put(`${this.apiUrl}/requirements/${data.id}`, formData);
  }
  
  

  delete(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/requirements/${id}`);
  }

  download(id: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/requirements/download/${id}`, { responseType: 'blob' });
  }
}
