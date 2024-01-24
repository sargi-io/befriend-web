import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.login(this.model.username, this.model.password).subscribe(
      data => {
        console.log('Login successful');
        // Handle successful login, redirect or store JWT if you're using it
      },
      error => {
        console.error('Login failed');
        // Handle login failure
      }
    );
  }
}