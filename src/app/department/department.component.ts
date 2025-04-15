import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';

declare var bootstrap: any;
@Component({
  selector: 'app-department',
  standalone: false,
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})


export class DepartmentComponent implements OnInit {

  departments: any[] = [];
  newDepartmentName: string = '';

  editableDepartment: any = { id: null, name: '' };
  departmentToDelete: any = null;

  constructor(private departmentService: DepartmentService) {}
  
  ngOnInit() {
    this.loadDepartments();
  }

  loadDepartments() {
    this.departmentService.getAll().subscribe((data) => {
      this.departments = data;
    });
  }

  openModal() {
    const modalEl = document.getElementById('departmentModal');
    const modal = new bootstrap.Modal(modalEl!);
    modal.show();
  }

  addDepartment() {
    const newDept = { name: this.newDepartmentName };

    this.departmentService.create(newDept).subscribe(() => {
      this.newDepartmentName = '';
      this.loadDepartments();
      const modal = bootstrap.Modal.getInstance(document.getElementById('departmentModal')!);
      modal?.hide();
    });
  }

  openEditModal(dept: any) {
    this.editableDepartment = { ...dept }; // clone the object
    const modal = new bootstrap.Modal(document.getElementById('editModal')!);
    modal.show();
  }

  updateDepartment() {
    this.departmentService.update(this.editableDepartment.id, this.editableDepartment).subscribe(() => {
      this.loadDepartments();
      bootstrap.Modal.getInstance(document.getElementById('editModal')!)?.hide();
    });
  }

  openDeleteConfirm(dept: any) {
    this.departmentToDelete = dept;
    const modal = new bootstrap.Modal(document.getElementById('deleteModal')!);
    modal.show();
  }

  deleteDepartment() {
    this.departmentService.delete(this.departmentToDelete.id).subscribe(() => {
      this.loadDepartments();
      bootstrap.Modal.getInstance(document.getElementById('deleteModal')!)?.hide();
    });
  }

}
