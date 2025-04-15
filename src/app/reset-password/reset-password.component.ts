import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  standalone: false,
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {

  token = '';
newPassword = '';
confirmPassword = '';
error = '';
success = '';

constructor(private route: ActivatedRoute, private http: HttpClient, private router : Router) {}

ngOnInit() {
  this.route.queryParams.subscribe(params => {
    this.token = params['token'];
  });
}

submitResetPassword() {
  if (this.newPassword !== this.confirmPassword) {
    this.error = 'Passwords do not match.';
    this.success = '';
    return;
  }

  this.http.post('http://localhost:8080/api/auth/reset-password', {
    token: this.token,
    newPassword: this.newPassword
  }, { responseType: 'text' }).subscribe({
    next: res => {
      this.error = '';
      this.success = 'Password updated successfully!';

      // ✅ Redirect after 3 seconds
      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 3000);
    },
    error: err => {
      this.success = '';
      this.error = 'Reset failed. Token may be invalid or expired.';
    }
  });
}
}