import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AttendanceService  {
  constructor() {}

  getAttendance(): Observable<any[]> {
    // Mock attendance data
    const mockData = [
      { id: 1, name: 'John Doe', status: 'Present', date: '2025-03-27' },
      { id: 2, name: 'Jane Smith', status: 'Absent', date: '2025-03-27' },
    ];
    return of(mockData);
  }
}
