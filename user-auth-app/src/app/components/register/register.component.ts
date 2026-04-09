import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name = '';
  email = '';
  password = '';
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit(): void {
    if (!this.name.trim() || !this.email.trim() || !this.password.trim()) {
      this.message = 'All fields are required.';
      this.messageType = 'error';
      return;
    }
    const success = this.auth.register({ name: this.name, email: this.email, password: this.password });
    if (success) {
      this.message = 'Registration successful! Redirecting to login...';
      this.messageType = 'success';
      setTimeout(() => this.router.navigate(['/login']), 1500);
    } else {
      this.message = 'Email already registered.';
      this.messageType = 'error';
    }
  }
}
