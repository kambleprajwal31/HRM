import { Component, ViewChild, ElementRef } from '@angular/core';
import { DashboardService } from '../services/dashboard.service';
import { Router } from '@angular/router';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-registration',
  standalone: false,
  templateUrl: './employee-registration.component.html',
  styleUrl: './employee-registration.component.css'
})
export class EmployeeRegistrationComponent {
  departments: any;
  roles: any;
  passwordStrength = '';
  isPasswordValid = false;
  selectedEmployeeId: number | null = null;
  selectedFile: File | null = null;
  imagePreview: string | null = null;
  emailError: string = '';

  @ViewChild('uploadToast') uploadToast!: ElementRef;

  constructor(
    private dashboardService: DashboardService,
    private router: Router
  ) {}

  ngOnInit() {
    this.dashboardService.getDepartmentList().subscribe({
      next: (response) => {
        this.departments = response;
      },
      error: (error) => {
        console.error('Error loading departments:', error);
      }
    });
  }

  validatePassword(password: string) {
    const minLength = /.{8,}/;
    const hasUppercase = /[A-Z]/;
    const hasNumber = /\d/;
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
  
    const valid = minLength.test(password) && hasUppercase.test(password) && hasNumber.test(password) && hasSpecialChar.test(password);
    this.isPasswordValid = valid;
  
    // Optional: Show strength meter
    let score = 0;
    if (minLength.test(password)) score++;
    if (hasUppercase.test(password)) score++;
    if (hasNumber.test(password)) score++;
    if (hasSpecialChar.test(password)) score++;
  
    if (score <= 1) this.passwordStrength = 'Weak';
    else if (score === 2 || score === 3) this.passwordStrength = 'Medium';
    else this.passwordStrength = 'Strong';
  }

  onDepartmentChange(event: any) {
    const selectedDeptId = (event.target as HTMLSelectElement).value;
    this.dashboardService.getRoleList(selectedDeptId).subscribe({
      next: (response) => {
        this.roles = response;
      },
      error: (error) => {
        console.error('Error loading roles:', error);
        alert('Failed to load roles. Please try again.');
      }
    });
  }

  employee: any = {
    username: '',
    email: '',
    password: '',
    phoneNumber: '',
    address: '',
    employeeType: '',
    departmentId: null,
    roleId: null,
    firstName: '',
    lastName: ''
  };
  registerEmployee() {
    this.dashboardService.createEmployee(this.employee).subscribe({
      next: (response) => {
        this.emailError = '';
        console.log('Employee registered successfully:', response);
        this.selectedEmployeeId = response.employee.employeeId;
        this.openImageModal();
      },
      error: (error) => {
        console.error('Error registering employee:', error);
  
        if (error.status === 400 && error.error === 'Invalid or undeliverable email address.') {
          this.emailError = 'This email does not appear to exist. Please try another.';
        } else {
          this.emailError = '';
          alert('Failed to register employee. Please try again.');
        }
      },
      complete: () => {
        console.log('Employee registration request completed.');
      }
    });
  }
  
  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        this.imagePreview = reader.result as string;
      };
      reader.readAsDataURL(this.selectedFile);
    }
  }

  openImageModal() {
    const modal = new bootstrap.Modal(document.getElementById('uploadImageModal')!);
    modal.show();
  }

  uploadEmployeeImage() {
    console.log(this.selectedEmployeeId)
    console.log(this.selectedFile)
    if (!this.selectedEmployeeId || !this.selectedFile) return;

    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.dashboardService.uploadEmployeeImage(this.selectedEmployeeId, formData).subscribe({
      next: () => {
        const modalEl = document.getElementById('uploadImageModal')!;
        bootstrap.Modal.getInstance(modalEl)?.hide();

        const toast = new bootstrap.Toast(this.uploadToast.nativeElement);
        toast.show();

        // Optionally redirect or clear form
        this.router.navigate(['/dashboard/employee']);
      },
      error: () => {
        alert('Failed to upload image.');
      }
    });
  }
}
