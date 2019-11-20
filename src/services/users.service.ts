import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + '/users';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[];

  constructor(private http: HttpClient) { }

  getUpdatedUsers() {
    return this.users;
  }

  // get all users - admin only
  getUsers() {
    return this.http.get<User[]>(BACKEND_URL);
    // .subscribe(users => {
    //   this.users = users;
    // });
  }

  // get one user - user only
  getUser() {
    return this.http.get<User>(BACKEND_URL + '/profile');
  }

  // update one user with all new info (except password) - user only
  updateUser(name, phone, email) {
    return this.http.post<User>(BACKEND_URL + '/updateall', {name, email, phone});
  }

  // update name - user only
  updateName(name) {
    return this.http.post<{ message: string }>(BACKEND_URL + '/updatename', {name});
  }

  // update email - user only
  updateEmail(email) {
    return this.http.post<{ message: string }>(BACKEND_URL + '/updateemail', {email});
  }

  // update phone - user only
  updatePhone(phone) {
    return this.http.post<{ message: string }>(BACKEND_URL + '/updatephone', {phone});
  }

  makeAdmin(id) {
    return this.http.post<{ message: string }>(BACKEND_URL + '/makeAdmin', {id});
  }

  // delete user - admin only
  deleteUser(id) {
    return this.http.delete<{ message: string }>(BACKEND_URL + '/delete/' + id);
  }

}
