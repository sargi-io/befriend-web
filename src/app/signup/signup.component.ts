import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  model: any = {};

  constructor(private authService: AuthService) { }

  onSubmit() {
    this.authService.signup(this.model.name, this.model.email, this.model.password).subscribe(
      data => {
        console.log('Signup successful');
        // Handle successful signup
      },
      error => {
        console.error('Signup failed');
        // Handle signup failure
      }
    );
  }
}