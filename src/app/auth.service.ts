import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt'; // Import JwtHelperService


@Injectable({
  providedIn: 'root'
})
export class AuthService {  
  private authTokenKey = 'auth_token';


  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) { }

  login(name: string, password: string) {
    return this.http.post<any>(environment.apiUrl + '/api/login', {name, password});
  }

  signup(name: string, email: string, password: string) {
    return this.http.post<any>(environment.apiUrl +'/api/signup', {name, email, password});
  }

  setAuthToken(token: string): void {
    localStorage.setItem(this.authTokenKey, token);
  }

  getAuthToken(): string | null {
    return localStorage.getItem(this.authTokenKey);
  }

  isAuthenticated(): boolean {
    const token = this.getAuthToken();
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      // Token is present and not expired
      return true;
    }

    // Token is either not present or expired
    return false;
  }

  logout(): void {
    localStorage.removeItem(this.authTokenKey);
  }
}