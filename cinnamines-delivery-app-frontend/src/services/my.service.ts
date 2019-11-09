import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

import { Order } from 'src/app/models/order';

@Injectable({providedIn: 'root'})
export class MyService {
  private orders: Order[] = [];

  constructor(private http: HttpClient) {}

  getOrders() {
    this.http.get < (message: string, orders: Order[])> ('http://localhost:4000/users/order')
    .subscribe[(orderData) => {
      this.orders = orderData.orders;
      this.ordersUpdated.next([...this.orders]);
  });
}

getOrderUpdateListener() {
  return this.orders.Updated.asObservable();
}

addOrder(title: string, content: string) {
  const order: Order = { id: null, title: title, content: content };
  this.http.order<(message: string)>('http://localhost:4000/users/order', order);
  .subscribe((responseData) => {
    console.log(responseData.message);
    this.orders.push(order);
    this.ordersUpdated.next([...this.orders]);
  });
}
}
