import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ResumeRankingService {

  private apiUrl = 'http://localhost:8080/api/resume-ranking/rank';  // Spring Boot API endpoint

  constructor(private http: HttpClient) { }

  rankResumes(jobDescFile: File, resumeFiles: File[]): Observable<any> {
    const formData = new FormData();
    formData.append('jobDesc', jobDescFile, jobDescFile.name);
    
    resumeFiles.forEach(file => {
      formData.append('resumes', file, file.name);
    });

    return this.http.post<any>(this.apiUrl, formData);
  }
}
