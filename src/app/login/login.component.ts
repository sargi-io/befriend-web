import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  model: any = {};

  constructor(private authService: AuthService, private router: Router) { }

  onSubmit() {
    this.authService.login(this.model.name, this.model.password).subscribe(
      (response) => {
        console.log('Login successful');
        const jwtToken = response.token;
        console.log(jwtToken)
        this.authService.setAuthToken(jwtToken);
        this.router.navigate(['']);
      },
      error => {
        console.error('Login failed');
        
      }
    );
  }
}