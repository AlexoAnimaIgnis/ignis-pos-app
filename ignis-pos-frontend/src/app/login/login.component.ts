import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  login() {
    this.authService.login(this.username, this.password)
    .subscribe(
      () => {
        // successful login logic
      },
      error => {
        console.error('Login error:', error)
      }
    );
  }
}
