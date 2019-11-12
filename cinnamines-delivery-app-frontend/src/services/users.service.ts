import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private users: User[];

  constructor(private http: HttpClient) { }

  // get all users - admin only
  getUsers() {
    return this.http.get<User[]>('http://localhost:4000/users');
  }

  // get one user - user only
  getUser() {
    return this.http.get<User>('http://localhost:4000/users/profile');
  }

  // update one user with all new info (except password) - user only
  updateUser(name, phone, email) {
    return this.http.post<User>('http://localhost:4000/users/updateall', {name, email, phone});
  }

  // update name - user only
  updateName(name) {
    return this.http.post<User>('http://localhost:4000/users/updatename', {name});
  }

  // update email - user only
  updateEmail(email) {
    return this.http.post<User>('http://localhost:4000/users/updateemail', {email});
  }

  // update phone - user only
  updatePhone(phone) {
    return this.http.post<User>('http://localhost:4000/users/updatephone', {phone});
  }

  // delete user - admin only
  deleteUser(id) {
    return this.http.delete<{ message: string }>('http://localhost:4000/users/delete/' + id);
  }

}
