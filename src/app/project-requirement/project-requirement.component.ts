import { Component, OnInit } from '@angular/core';
import { ProjectRequirementService } from '../services/project-requirement.service';
import { ProjectRequirement } from './project-requirement.model';
import { DepartmentService } from '../services/department.service'; // Assuming you have this
import { saveAs } from 'file-saver';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-project-requirement',
  standalone: false,
  templateUrl: './project-requirement.component.html',
  styleUrl: './project-requirement.component.css'
})
export class ProjectRequirementComponent implements OnInit {
  requirements: ProjectRequirement[] = [];
  departments: any[] = [];

  newRequirement = {
    departmentId: 0,
    details: '',
    resourceRequired: 0
  };

  selectedFile: File | null = null;
  editingId: number | null = null;
  editDetails: string = '';
  editDepartmentId: number = 0;
  editResourceRequired: number = 0;
  //requirements = []; // Assuming you have an array of requirements



  constructor(
    private requirementService: ProjectRequirementService,
    private departmentService: DepartmentService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.loadRequirements();
    this.loadDepartments();
  }

  loadRequirements() {
    this.requirementService.getAll().subscribe(data => this.requirements = data);
  }

  loadDepartments() {
    this.departmentService.getAll().subscribe(data => this.departments = data);
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  onAdd() {
    if (!this.selectedFile) return;

    const formData = new FormData();
    formData.append('departmentId', this.newRequirement.departmentId.toString());
    formData.append('details', this.newRequirement.details);
    formData.append('resourceRequired', this.newRequirement.resourceRequired.toString());
    formData.append('file', this.selectedFile);

    this.requirementService.add(formData).subscribe(() => {
      this.loadRequirements();
      this.newRequirement = { departmentId: 0, details: '', resourceRequired: 0 };
      this.selectedFile = null;
    });
  }

  downloadFile(id: number) {
    this.requirementService.download(id).subscribe(blob => {
      saveAs(blob, 'JobDescription.pdf');
    });
  }

  deleteRequirement(id: number) {
    this.requirementService.delete(id).subscribe(() => this.loadRequirements());
  }



  editRequirement(req: ProjectRequirement) {
    this.editingId = req.id;
    this.editDepartmentId = req.department.id;
    this.editDetails = req.details;
    this.editResourceRequired = req.resourceRequired;
  }
  
  cancelEdit() {
    this.editingId = null;
    this.editDepartmentId = 0;
    this.editDetails = '';
    this.editResourceRequired = 0;
  }
  
  saveRow(req: ProjectRequirement) {
    const updatedData = {
      id: req.id,
      departmentId: this.editDepartmentId,
      details: this.editDetails,
      resourceRequired: this.editResourceRequired
    };
  
    this.requirementService.updateRequirement(updatedData).subscribe(() => {
      // Update local copy
      req.department = this.departments.find(d => d.id === this.editDepartmentId);
      req.details = this.editDetails;
      req.resourceRequired = this.editResourceRequired;
  
      this.editingId = null;
    });
  }
  rankResume(requirementId: number) {
    // Call the Python API for ranking the resume
    this.http.get(`http://localhost:5000/rank_resume/${requirementId}`, {})
      .subscribe(response => {
        console.log('Rank Resume API Response:', response);
        // Handle the response if needed
      }, error => {
        console.error('Error:', error);
      });
  }
  
  
}