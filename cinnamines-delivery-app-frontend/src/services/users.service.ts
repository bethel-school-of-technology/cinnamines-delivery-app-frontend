import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[];

  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get<User[]>('http://localhost:4000/users');
  }

  getUser() {
    return this.http.get<User>('http://localhost:4000/users/profile');
  }

  // update one user with all new info (except password)
  updateUser(name, phone, email) {
    return this.http.post<User>('http://localhost:4000/users/updateall', {name, email, phone});
  }

  // update name
  updateName(name) {
    return this.http.post<User>('http://localhost:4000/users/updatename', {name});
  }

  // update email
  updateEmail(email) {
    return this.http.post<User>('http://localhost:4000/users/updateemail', {email});
  }

  // update phone
  updatePhone(phone) {
    return this.http.post<User>('http://localhost:4000/users/updatephone', {phone});
  }

  // delete user
  deleteUser(id) {
    return this.http.delete<User>('http://localhost:4000/users/updatephone');
  }

}
