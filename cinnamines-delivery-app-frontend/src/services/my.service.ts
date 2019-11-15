import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { Order } from 'src/app/models/order';

@Injectable({providedIn: 'root'})
export class MyService {
  private orders: Order[] = [];
  private ordersUpdated = new Subject<Order[]>();

  constructor(private http: HttpClient) {}

  getOrders() {
    this.http
      .get<{ message: string; orders: any }>(
        '"http://localhost:4000/orders'
      )
      .pipe(map((orderData) => {
        return orderData.orders.map(order => {
          return {
            title: order.title,
            content: order.content,
            id: order._id
          };
        });
      }))
      .subscribe(transformedOrder => {
        this.orders = transformedOrder;
        this.ordersUpdated.next([...this.orders]);
      });
  }

  getOrderUpdateListener() {
    return this.ordersUpdated.asObservable();
  }

  // addOrder(title: string, content: string) {
  //   const order: Order = { id: null, title: title, content: content };
  //   this.http
  //     .order<{ message: string }>('http://localhost:3400/order', order)
  //     .subscribe(responseData => {
  //       console.log(responseData.message);
  //       this.orders.push(order);
  //       this.ordersUpdated.next([...this.orders]);
  //     });
  // }

  // deleteOrder(orderId: string) {
  //   this.http.delete('http://localhost:4000/order' + orderId)
  //     .subscribe(() => {
  //       console.log('Deleted!');
  //     });
  // }
}
