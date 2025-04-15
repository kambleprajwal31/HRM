import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { authInterceptor } from './auth.interceptor';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SignupComponent } from './signup/signup.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { EmployeeRegistrationComponent } from './employee-registration/employee-registration.component';
import { DepartmentComponent } from './department/department.component';
import { DefaultDashboardComponent } from './default-dashboard/default-dashboard.component';
import { RoleComponent } from './role/role.component';
import { EmployeeComponent } from './employee/employee.component';
import { LeaveComponent } from './leave/leave.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { CircularProgressComponent } from './circular-progress/circular-progress.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { HRFormComponent } from './hr-form/hr-form.component';
import { HRProfileComponent } from './hr-profile/hr-profile.component';
import { ProjectRequirementComponent } from './project-requirement/project-requirement.component';
import { JobSeekerComponent } from './job-seeker/job-seeker.component';
import { ResumeRankingComponent } from './resume-ranking/resume-ranking.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    DepartmentComponent,
    DefaultDashboardComponent,
    RoleComponent,
    EmployeeComponent,
    EmployeeRegistrationComponent,
    LeaveComponent,
    AttendanceComponent,
    CircularProgressComponent,
    ResetPasswordComponent,
    HRFormComponent,
    HRProfileComponent,
    ProjectRequirementComponent,
    JobSeekerComponent,
    ResumeRankingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
],
providers: [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: authInterceptor,
    multi: true
  }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
