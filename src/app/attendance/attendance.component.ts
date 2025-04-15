import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import Chart from 'chart.js/auto';
import { isPlatformBrowser } from '@angular/common';
import { Inject, PLATFORM_ID } from '@angular/core';


@Component({
  selector: 'app-attendance',
  standalone: false,
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.css'
})
export class AttendanceComponent implements AfterViewInit {
  @ViewChild('attendanceChart') attendanceChartRef!: ElementRef;
  @ViewChild('employeeTypeChart') employeeTypeChartRef!: ElementRef;

  currentDate: string = new Date().toLocaleDateString();
  totalEmployees: number = 1206;
  searchText: string = '';

  daysInMonth: number[] = Array.from({ length: 31 }, (_, i) => i + 1);

  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  employeeList = [
    { 
      name: 'John Doe', 
      image: 'assets/john.jpg', 
      attendance: ['✓', 'X', '✓', '✓', '✓', '✓', 'X', '✓', '✓', '✓', '✓', '✓', 'X', '✓', '✓', '✓', '✓', '✓', '✓', '✓', '✓', 'X', '✓', '✓', '✓', '✓', '✓', '✓', '✓', 'X', '✓'], 
      leave: 2 
    },
    { 
      name: 'Jane Smith', 
      image: 'assets/jane.jpg', 
      attendance: ['✓', '✓', '✓', '✓', 'X', '✓', '✓', '✓', '✓', '✓', 'X', '✓', '✓', '✓', '✓', '✓', '✓', '✓', 'X', '✓', '✓', '✓', '✓', '✓', 'X', '✓', '✓', '✓', '✓', '✓', '✓'], 
      leave: 3 
    }
  ];

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // Ensure canvas is ready
      setTimeout(() => {
        this.renderAttendanceChart();
        this.renderEmployeeTypeChart();
      }, 300);
    }
  }

  // ngAfterViewInit() {
  //   this.renderAttendanceChart();
  //   this.renderEmployeeTypeChart();
  // }

  renderAttendanceChart() {
    new Chart(this.attendanceChartRef.nativeElement, {
      type: 'bar',
      data: {
        labels: ['Present', 'Absent', 'On Leave'],
        datasets: [{
          label: 'Attendance Overview',
          data: [950, 200, 56], // Sample data
          backgroundColor: ['#28a745', '#dc3545', '#ffc107']
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'top'
          }
        }
      }
    });
  }

  renderEmployeeTypeChart() {
    new Chart(this.employeeTypeChartRef.nativeElement, {
      type: 'pie',
      data: {
        labels: ['Full-time', 'Part-time', 'Contract'],
        datasets: [{
          label: 'Employee Types',
          data: [800, 300, 106], // Sample data
          backgroundColor: ['#007bff', '#17a2b8', '#6c757d']
        }]
      },
      options: {
        responsive: true
      }
    });
  }

  filteredEmployees() {
    return this.employeeList.filter(emp => 
      emp.name.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
