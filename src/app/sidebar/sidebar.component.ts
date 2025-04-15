import { Component,Input, Output, EventEmitter, OnInit} from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { isContext } from 'vm';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent implements OnInit{
  departments: any[] = [];

  constructor(private departmentService: DepartmentService) {}

  ngOnInit() {
    this.departmentService.getAll().subscribe((data) => {
      this.departments = data;
    });
  }
  sidebarItems = [
    { label: 'Employees', icon: 'bi bi-people', route: 'employee' },
    { label: 'Leaves', icon: 'bi bi-calendar-check', route: 'leave' },
    { label: 'Attendance', icon: 'bi bi-bar-chart', route: 'attendance' },
    { label: 'Departments', icon: 'bi bi-building', route: 'department' },
    { label: 'Roles', icon: 'bi bi-person-gear', route: 'role' },
    { label: 'Project Requirement', icon: 'bi bi-clipboard-check', route: 'projectrequirement'},
    { label: 'Job Seeker',icon: 'bi bi-person-lines-fill', route: 'jobseeker'},
    { label: 'Resume Ranker', route: 'rankresume'}
    
  ];
    
}
