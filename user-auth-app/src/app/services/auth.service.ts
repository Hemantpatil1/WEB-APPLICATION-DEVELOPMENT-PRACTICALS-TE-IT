import { Injectable } from '@angular/core';

export interface User {
  name: string;
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  register(user: User): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const exists = users.find(u => u.email === user.email);
    if (exists) return false;
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string): boolean {
    const users: User[] = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem('loggedInUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getUser(): User | null {
    const data = localStorage.getItem('loggedInUser');
    return data ? JSON.parse(data) : null;
  }

  isLoggedIn(): boolean {
    return localStorage.getItem('loggedInUser') !== null;
  }

  logout(): void {
    localStorage.removeItem('loggedInUser');
  }
}
