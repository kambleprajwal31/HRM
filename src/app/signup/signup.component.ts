import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: false,
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  userData = { username: '',firstName: '', lastName: '', email: '', password: '' };

  constructor(private authService: AuthService, private router: Router) {}

  passwordStrength = '';
  isPasswordValid = false;

  signup() {
    this.authService.signup(this.userData).subscribe({
      next: (response) => {
        console.log('User Registered:', response);
        alert('Registration successful! Please login.');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        console.error('Signup failed:', error);
        alert('Signup failed: ' + error.error.message); // ✅ Show backend error message
      },
      complete: () => {
        console.log('Signup request completed.');
      }
    });
  }


  goToLogin() {
    this.router.navigate(['/login']); // Redirects to the login page
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

}
