import { Component } from '@angular/core';
import { HRService, HRDetails } from '../services/hr.service';
import { Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/auth.service';

interface JwtPayload {
  sub: string;
  role: 'HR' | 'EMPLOYEE';
  profileExists : any;
  userId : any;
}

@Component({
  selector: 'app-hr-form',
  standalone: false,
  templateUrl: './hr-form.component.html',
  styleUrl: './hr-form.component.css'
})
export class HRFormComponent {
  hrData: HRDetails = {
    "designation": "string",
    "joiningDate": "2025-04-04",
    "phoneNumber": "string",
    "address": "string",
    "gender": "string",
    "dob": "2025-04-04",
    "maritalStatus": "string",
    "image": "string",
    "fullName": "string",
    "email": "string",
    "hrId": "string",
    "departmentId": 0
  };
  imageFile: File | null = null;
  token : any = "";
  decoded : any;

  constructor(private hrService: HRService, private router: Router,private authService : AuthService) {
    this.token = this.authService.getToken();
    const decode: JwtPayload = jwtDecode(this.token);
    this.decoded = decode;
    console.log(this.decoded);
  }

  onImageChange(event: any) {
    this.imageFile = event.target.files[0];
  }



  onSubmit() {
    this.hrService.saveDetails(this.hrData).subscribe({
      next: (data) => {
        debugger;
        if (this.imageFile && this.decoded.userId) {
          this.hrService.uploadImage(this.decoded.userId, this.imageFile).subscribe(() => {
            this.router.navigate(['/dashboard/hr/profile']);
          });
        } else {
          this.router.navigate(['/dashboard/hr/profile']);
        }
      }
    });
  }
}
