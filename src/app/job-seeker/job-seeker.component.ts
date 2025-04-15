import { Component, OnInit } from '@angular/core';
import { JobSeekerService} from '../services/job-seeker.service';
import { DepartmentService } from '../services/department.service'; 
interface Department {
  id: number;
  name: string;
}

interface JobSeeker {
  id?: number;
  name: string;
  email: string;
  contactNo: string;
  departmentId?: number;
  department?: Department;
  resumePath?: string;
}
@Component({
  selector: 'app-job-seeker',
  standalone: false,
  templateUrl: './job-seeker.component.html',
  styleUrl: './job-seeker.component.css'
})
export class JobSeekerComponent implements OnInit {

  jobSeekers: JobSeeker[] = [];
  departments: Department[] = [];

  newJobSeeker: JobSeeker = {
    name: '',
    email: '',
    contactNo: '',
    departmentId: 0
  };

  selectedFile: File | null = null;

  constructor(private jobSeekerService: JobSeekerService,private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadJobSeekers();
    this.loadDepartments();
  }

  loadJobSeekers(): void {
    this.jobSeekerService.getAllJobSeekers().subscribe(data => {
      this.jobSeekers = data;
    });
  }

  loadDepartments(): void {
    this.departmentService.getAll().subscribe(data => this.departments = data);
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }

  addJobSeeker(): void {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('name', this.newJobSeeker.name);
    formData.append('email', this.newJobSeeker.email);
    formData.append('contactNo', this.newJobSeeker.contactNo);
    formData.append('departmentId', this.newJobSeeker.departmentId!.toString());
    formData.append('file', this.selectedFile);

    this.jobSeekerService.addJobSeeker(formData).subscribe(() => {
      this.newJobSeeker = { name: '', email: '', contactNo: '', departmentId: 0 };
      this.selectedFile = null;
      this.loadJobSeekers();
    });
  }

  deleteJobSeeker(id: number): void {
    this.jobSeekerService.deleteJobSeeker(id).subscribe(() => {
      this.loadJobSeekers();
    });
  }

  downloadResume(id: number): void {
    this.jobSeekerService.downloadResume(id).subscribe(blob => {
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf'; // Optional: replace with dynamic filename if needed
      a.click();
      window.URL.revokeObjectURL(url);
    });
  }
}