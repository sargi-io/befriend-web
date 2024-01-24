import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    return this.http.post<any>(environment.apiUrl + '/api/login', {username, password});
  }

  signup(name: string, email: string, password: string) {
    return this.http.post<any>(environment.apiUrl +'/api/signup', {name, email, password});
  }
}