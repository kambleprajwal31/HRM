import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { HRService } from '../services/hr.service';
import { jwtDecode } from 'jwt-decode';
declare var bootstrap: any;
interface JwtPayload {
  sub: string;
  role: 'HR' | 'EMPLOYEE';
  profileExists : any;
  userId : any;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  standalone : false,
  styleUrl: './login.component.css'
})

export class LoginComponent {
  credentials = { email: '', password: '' };
  forgotEmail = '';
  forgotError = '';



  constructor(private authService: AuthService, private router: Router, private hrService: HRService ) {}


  login() {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        console.log('Login Successful:', response);
        localStorage.setItem('token', response.token);
  
        const decoded: JwtPayload = jwtDecode(response.token);
        console.log(decoded)
        if (decoded.role === 'HR') {
          //this.hrService.checkHRProfile().subscribe((exists) => {
            if (!decoded.profileExists) {
              this.router.navigate(['/dashboard/hr/fill-details']);
            } else {
              this.router.navigate(['/dashboard']);
            }
          //});
        } else if (decoded.role === 'EMPLOYEE') {
          this.router.navigate(['/coming-soon']);
        } else {
          alert('Unknown user role');
        }
      },
      error: (error) => {
        console.error('Login failed:', error);
        alert('Invalid credentials or server error.');
      }
    });
  }


  goToSignup() {
    this.router.navigate(['/signup']); 
  }
  openForgotPasswordModal() {
    const modal = new bootstrap.Modal(document.getElementById('forgotPasswordModal'));
    modal.show();
  }
  
  submitForgotPassword() {
    this.authService.sendForgotPasswordEmail(this.forgotEmail).subscribe({
      next: res => {
        this.forgotError = '';
        alert('Reset link sent to your email!');
      },
      error: err => {
        this.forgotError = 'Email not found or server error.';
      }
    });
  }
  

}
