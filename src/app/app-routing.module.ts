import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { DepartmentComponent } from './department/department.component';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { RoleComponent } from './role/role.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HRFormComponent } from './hr-form/hr-form.component';
import { HRProfileComponent } from './hr-profile/hr-profile.component';
import { ProjectRequirementComponent } from './project-requirement/project-requirement.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { ResumeRankingComponent } from './resume-ranking/resume-ranking.component';

// const routes: Routes = [
//   { path: 'login', component: LoginComponent }, 
//   { path: 'signup', component: SignupComponent }, 
//   {path: 'dashboard', component: DashboardComponent,
//     children: [
//       { path: 'employees', component: EmployeeRegistrationComponent },
//       { path: 'employee', component: EmployeeComponent },
//       { path: 'department', component: DepartmentComponent },
//       { path: 'role', component: RoleComponent },
//       { path: 'default', component: DefaultDashboardComponent },
//       { path: 'leave', component:LeaveComponent},
//       { path: 'attendance', component:AttendanceComponent},
//       { path: 'announcements/list', component: AnnouncementsListComponent },
//       { path: '', redirectTo: 'default', pathMatch: 'full' }, // Default dashboard child
//     ]
//   },
//   // {path: 'employee', component: EmployeeRegistrationComponent},
//   // { path: 'department', component: DepartmentComponent },
//   { path: '', redirectTo: 'login', pathMatch: 'full' },
// ];
const routes: Routes = [
  { path: 'login', component: LoginComponent }, 
  { path: 'signup', component: SignupComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children: [
      { path: 'employees', component: EmployeeRegistrationComponent },
      { path: 'employee', component: EmployeeComponent },
      { path: 'department', component: DepartmentComponent },
      { path: 'role', component: RoleComponent },
      { path: 'default', component: DefaultDashboardComponent },
      { path: 'leave', component: LeaveComponent },
      { path: 'attendance', component: AttendanceComponent },
      { path: 'hr/fill-details', component: HRFormComponent },
      { path: 'hr/profile', component: HRProfileComponent },
      { path: 'profile', component: HRProfileComponent },
      { path: 'projectrequirement', component: ProjectRequirementComponent},
      { path: 'jobseeker', component: JobSeekerComponent},
      { path: 'rankresume', component: ResumeRankingComponent},
      { path: '', redirectTo: 'default', pathMatch: 'full' },
    ]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  { path: '**', redirectTo: 'dashboard/default' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
