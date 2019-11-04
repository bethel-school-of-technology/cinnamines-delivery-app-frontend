import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Order } from 'src/app/models/order';

@Injectable({providedIn: 'root'})
export class MyService {
  private orders: Order[] = []

  constructor(private http: HttpClient, private router: Router) {}

  getOrders() {

  }
}
//   updateUser(id) {
//   }

//   // update name
//   updateName(id) {
//   }

//   // update email
//   updateEmail(id) {
//   }

//   // update phone
//   updatePhone(id) {
//   }

//   // get all open orders
//   getOpenOrders() { }

//   // get one order
//   getOrder(id) { }

//   // add order
//   addOrder() { }

//   // update status
//   updateStatus(id) { }

//   // delete order
//   deleteOrder(id) { }

//   // order history for single user
//   getOrderHistory(id) { }
//}

