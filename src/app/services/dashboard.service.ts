import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getEmployeeTypeList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hr/employeeTypeList`);
  }

  createEmployee(employeeData: any): Observable<any> {
    const token = localStorage.getItem('token');

    return this.http.post(
      `${this.apiUrl}/hr/register/employee`,
      employeeData,
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      }
    );
  }
  getDepartmentList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/hr/departments`);
  }

  getRoleList(Id: any): Observable<any> {
    return this.http.get(`${this.apiUrl}/hr/departments/` + Id + `/roles`);
  }


  uploadEmployeeImage(employeeId: number, formData: FormData) {
    return this.http.post(`${this.apiUrl}/hr/employees/upload-image/${employeeId}`, formData);
  }

  getAllEmployees() {
    return this.http.get<any[]>(`${this.apiUrl}/hr/employees`);
  }

  createAnnouncement(data: any) {
    return this.http.post(`${this.apiUrl}/hr/announcements`, data, {
    });
  }

  getAnnouncements() {
    return this.http.get<any[]>(`${this.apiUrl}/hr/announcements`);
  }

  deleteAnnouncement(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/hr/announcements/${id}`);
  }
  updateAnnouncement(id: number, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/hr/announcements/${id}`, data);
  }

  private tasks: { title: string; date: Date; meetLink: string }[] = [];
  addTask(title: string, date: Date): void {
    const meetLink = this.generateGoogleMeetLink();
    const task = { title, date, meetLink };
    this.tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
    this.scheduleAlert(task);
  }

  generateGoogleMeetLink(): string {
    return 'https://meet.google.com/' + Math.random().toString(36).substring(2, 10);
  }

  scheduleAlert(task: { title: string; date: Date; meetLink: string }): void {
    const alertTime = new Date(task.date.getTime() - 5 * 60000);
    const now = new Date();
    if (alertTime > now) {
      const timeout = alertTime.getTime() - now.getTime();
      setTimeout(() => {
        //alert(Upcoming Task: ${task.title}\nGoogle Meet: ${task.meetLink});
      }, timeout);
    }
  }

  deleteEmployeeById(id: string) {
    return this.http.delete(`${this.apiUrl}/hr/user/${id}`);
  }
}
