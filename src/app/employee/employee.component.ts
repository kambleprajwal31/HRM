import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DashboardService } from '../services/dashboard.service'; // adjust path if needed
declare var bootstrap: any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  standalone:false,
  styleUrl: './employee.component.css'
})
export class EmployeeComponent implements OnInit {

  constructor(
    private router: Router,
    private dashboardService: DashboardService
  ) {}

  employees: any[] = [];
  employeeSize: number = 0;
  selectedEmployee: any = {};
  ngOnInit() {
    this.fetchEmployees();

  }

  openEmployeeModal() {
    this.router.navigate(['dashboard/employees']);
  }
  fetchEmployees() {
    this.dashboardService.getAllEmployees().subscribe({
      next: (data) => {
        this.employeeSize = data.length
        this.employees = data.map(emp => ({
          id: emp.employeeId,
          name: emp.firstName && emp.lastName
            ? emp.firstName + ' ' + emp.lastName
            : 'No Name',
          role: emp.roleName ?? 'N/A',
          department: emp.departmentName ?? 'N/A',
          hiredDate: emp.joiningDate
            ? new Date(emp.joiningDate).toLocaleDateString('en-GB')
            : 'N/A',
          status: emp.status ?? 'Unknown',
          email: emp.email ?? 'Not Provided',
          phone: emp.phoneNumber ?? 'Not Provided',
          image: emp.image && emp.image !== 'http://localhost:8080/uploads/employees/'
            ? emp.image
            : 'assets/default.jpg'
        }));
      },
      error: (err) => {
        console.error('Error fetching employees:', err);
      }
    });
  }
  editEmployee(id: string) {
    this.router.navigate(['dashboard/employees/edit', id]);
  }
  
  confirmDelete(id: string) {
    if (confirm('Are you sure you want to delete this employee?')) {
      this.deleteEmployee(id);
    }
  }
  
  deleteEmployee(id: string) {
    this.dashboardService.deleteEmployeeById(id).subscribe({
      next: () => {
        this.employees = this.employees.filter(emp => emp.id !== id);
        this.employeeSize = this.employees.length;
      },
      error: (err) => {
        console.error('Failed to delete employee:', err);
      }
    });
  }
 
openEditModal(emp: any): void {
  this.selectedEmployee = { ...emp }; // Clone to avoid live changes before save
  const modal = new bootstrap.Modal(document.getElementById('editEmployeeModal')!);
  modal.show();
}
  
  openDeleteModal(emp: any): void {
    this.selectedEmployee = emp;
    const modal = new bootstrap.Modal(document.getElementById('deleteEmployeeModal'));
    modal.show();
  }
  saveEmployeeChanges(): void {
    // Call your update logic here (API call or update the employees array)
    console.log('Updated employee:', this.selectedEmployee);
  
    // If you're updating in list directly (demo purpose)
    const index = this.employees.findIndex(e => e.id === this.selectedEmployee.id);
    if (index !== -1) {
      this.employees[index] = { ...this.selectedEmployee };
    }
  
    // Close modal
    const modalEl = document.getElementById('editEmployeeModal');
    const modal = bootstrap.Modal.getInstance(modalEl!);
    modal?.hide();
  }
}
