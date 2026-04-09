import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.email.trim() || !this.password.trim()) {
      this.message = 'All fields are required.';
      this.messageType = 'error';
      return;
    }
    const success = this.auth.login(this.email, this.password);
    if (success) {
      this.message = 'Login successful! Redirecting...';
      this.messageType = 'success';
      setTimeout(() => this.router.navigate(['/profile']), 1500);
    } else {
      this.message = 'Invalid email or password.';
      this.messageType = 'error';
    }
  }
}
