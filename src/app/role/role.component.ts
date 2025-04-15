import { Component, OnInit } from '@angular/core';
import { RoleService } from '../services/role.service';
import { DepartmentService } from '../services/department.service';
import { ViewChild, ElementRef } from '@angular/core';
declare var bootstrap: any;

@Component({
  selector: 'app-role',
  standalone: false,
  templateUrl: './role.component.html',
  styleUrl: './role.component.css'
})
export class RoleComponent implements OnInit {
  @ViewChild('roleModal', { static: true }) modalRef!: ElementRef;
  @ViewChild('editModal', { static: true }) editModalRef!: ElementRef;
  @ViewChild('deleteModal', { static: true }) deleteModalRef!: ElementRef;

  roles: any[] = [];
  departments: any[] = [];
  newRole = {
    name: '',
    departmentId: ''
  };

  constructor(
    private roleService: RoleService,
    private departmentService: DepartmentService
  ) {}

  editableRole: any = {
    id: null,
    name: '',
    departmentId: ''
  };

  roleToDelete: any = null;
  departmentRoleMap: { [key: number]: any[] } = {};
  ngOnInit() {
    this.loadRoles();
    this.loadDepartments();
  }

  loadRoles() {
    this.roleService.getAll().subscribe((data) => {
      this.roles = data;
      this.tryGroupingRoles();
    });
  }
  
  loadDepartments() {
    this.departmentService.getAll().subscribe((data) => {
      this.departments = data;
      this.tryGroupingRoles();
    });
  }
  
  tryGroupingRoles() {
    if (this.roles.length && this.departments.length) {
      this.groupRolesByDepartment();
    }
  }
  openModal() {
    const modal = new bootstrap.Modal(this.modalRef.nativeElement);
    modal.show();
  }
  
  groupRolesByDepartment() {
    this.departmentRoleMap = {};
    for (let dept of this.departments) {
      this.departmentRoleMap[dept.id] = this.roles.filter(role => role.department?.id === dept.id);
    }
  }

  addRole() {
    this.roleService.create(this.newRole).subscribe(() => {
      bootstrap.Modal.getInstance(this.modalRef.nativeElement)?.hide();
      this.newRole = { name: '', departmentId: '' };
      this.loadRoles();
    });
  }

  openEditModal(role: any) {
    this.editableRole = {
      id: role.id,
      name: role.name,
      departmentId: role.department?.id || ''
    };
    const modal = new bootstrap.Modal(this.editModalRef.nativeElement);
    modal.show();
  }

  updateRole() {
    this.roleService.update(this.editableRole.id, this.editableRole).subscribe(() => {
      bootstrap.Modal.getInstance(this.editModalRef.nativeElement)?.hide();
      this.loadRoles();
    });
  }

  openDeleteConfirm(role: any) {
    this.roleToDelete = role;
    const modal = new bootstrap.Modal(this.deleteModalRef.nativeElement);
    modal.show();
  }

  deleteRole() {
    if (!this.roleToDelete) return;

    this.roleService.delete(this.roleToDelete.id).subscribe(() => {
      bootstrap.Modal.getInstance(this.deleteModalRef.nativeElement)?.hide();
      this.roleToDelete = null;
      this.loadRoles();
    });
  }
 }