import { Injectable } from '@angular/core';
import { User } from 'src/app/models/user';
import { Order } from 'src/app/models/order';

import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyService {
  private backEndRoute = 'http://localhost:4000';

  constructor(private http: HttpClient) { }

  // get all users
  getUsers() {
    return this.http.get<User[]>(this.backEndRoute + '/users');
  }

  // get one user
  getUser(id) {
    return this.http.get<User>(this.backEndRoute + '/users/' + id);
  }

  // add one user
  addUser() {
  }

  // login route
  loginUser(email, password) {
    return this.http.post(this.backEndRoute + '/users/login', {email, password});
  }

  // update one user with all new info (except password)
  updateUser(id) {
  }

  // update name
  updateName(id) {
  }

  // update email
  updateEmail(id) {
  }

  // update phone
  updatePhone(id) {
  }

  // delete user
  deleteUser(id) { }

  // get all orders
  getOrders() { }

  // get all open orders
  getOpenOrders() { }

  // get one order
  getOrder(id) { }

  // add order
  addOrder() { }

  // update status
  updateStatus(id) { }

  // delete order
  deleteOrder(id) { }

  // order history for single user
  getOrderHistory(id) { }
}
