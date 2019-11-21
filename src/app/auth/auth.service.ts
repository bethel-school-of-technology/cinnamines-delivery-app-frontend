import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { AuthData } from './auth-data-model';
import { Subject } from 'rxjs';

import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + '/users';

@Injectable({ providedIn: 'root' })
export class AuthService {
  public token: string;
  public userId: string;
  public admin: boolean;
  private authStatusListener = new Subject<boolean>();
  private authAdminListener = new Subject<boolean>();

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

  getAuthAdminListener() {
    return this.authAdminListener.asObservable();
  }

  createUser(name: string, email: string, password: string, phone: string) {
    this.http.post<{ message: string }>(BACKEND_URL + '/signup', { name, email, password, phone })
      .subscribe(response => {
        console.log(response.message);
        this.router.navigate(['/logon']);
      });
  }

  login(email: string, password: string) {
    this.http.post<{ token: string, userId: string, admin: boolean }>(BACKEND_URL + '/login', { email, password })

      .subscribe(response => {
        const token = response.token;
        const userId = response.userId;
        const admin = response.admin;
        this.token = token;
        this.userId = userId;
        this.admin = admin;
        this.authStatusListener.next(true);
        if (this.admin) {
          this.authAdminListener.next(true);
        }
        console.log('Users Id is: ' + userId);
        console.log('Is user a admin: ' + admin);
        console.log('The Token string is: ' + token);
        this.router.navigate(['/home']);
      });
  }

  logout() {
    this.http.post<{ message: string }>(BACKEND_URL + '/logout', {})
      .subscribe(response => {
        this.token = undefined;
        this.userId = '';
        this.admin = false;
        console.log(response.message);
        this.authStatusListener.next(false);
        this.authAdminListener.next(false);
        this.router.navigate(['/home']);
      });
  }

}
