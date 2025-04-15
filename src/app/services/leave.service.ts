import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LeaveService{
  getLeaves() {
    return [
      {
        name: 'William Johnson',
        leaveType: 'Casual Leave',
        department: 'Back-End Developer',
        days: '2 Days',
        start: '12 July 2024',
        end: '15 July 2024',
        status: 'Approved',
      },
      {
        name: 'Benjamin Martinez',
        leaveType: 'Maternity Leave',
        department: 'Full-Stack Developer',
        days: '1st Half Day',
        start: '03 July 2024',
        end: '04 July 2024',
        status: 'Approved',
      },
      {
        name: 'Michael Davis',
        leaveType: 'Maternity Leave',
        department: 'UI/UX Designer',
        days: '2nd Half Day',
        start: '05 June 2024',
        end: '05 June 2024',
        status: 'Pending',
      },
      // ... other mock leaves
    ];
  }
}