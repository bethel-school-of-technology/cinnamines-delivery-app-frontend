import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthData } from './auth-data-model';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public token: string;
  public userId: string;
  public admin: boolean;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) { }

  getToken() {
    return this.token;
  }

  getUserId() {
    return this.userId;
  }

  getAdmin() {
    return this.admin;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  createUser(name: string, email: string, password: string, phone: string) {
    this.http.post<{ message: string }>('http://localhost:4000/users/signup', { name, email, password, phone })
      .subscribe(response => {
        console.log(response.message);
        this.router.navigate(['/logon']);
      });
  }

  login(email: string, password: string) {
    this.http.post<{ token: string, userId: string, admin: boolean }>('http://localhost:4000/users/login', { email, password })
      .subscribe(response => {
        const token = response.token;
        const userId = response.userId;
        const admin = response.admin;
        this.token = token;
        this.userId = userId;
        this.admin = admin;
        console.log('Users Id is: ' + userId);
        console.log('Is user a admin: ' + admin);
        console.log('The Token string is: ' + token);
        this.router.navigate(['/home']);
      });
  }

  logout() {
    this.http.post<{ message: string }>('http://localhost:4000/users/logout', {})
      .subscribe(response => {
        this.token = 'undefined';
        this.userId = '';
        this.admin = false;
        console.log(response.message);
        this.router.navigate(['/home']);
      });
  }

  // createUser(email: string, name: string, phone: string, password: string) {
  //   const authData: AuthData = { email: email, name: name, phone: phone, password: password};
  //   this.http.post('http://localhost:4000/users/signup', authData)
  //   .subscribe(response => {
  //     console.log(response);
  //   });
  // }

  // login(email: string, name: string, phone: string, password: string) {
  // const authData: AuthData = { email: email, name: name, phone: phone, password: password };
  // this.http.post<{token: string}>('http://localhost:4000/users/login', authData)
  //   .subscribe(response => {
  //     const token = response.token;
  //     this.token = token;
  // });

}
