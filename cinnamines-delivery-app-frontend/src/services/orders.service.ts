import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[];

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<Order[]>('http://localhost:4000/orders');
  }

  getOrdersByStatus() {
    return this.http.get<Order[]>('http://localhost:4000/orders/status');
  }

  getOneOrder(orderId) {
    return this.http.get<Order>('http://localhost:4000/orders/' + orderId);
  }

  createOrder(qty: string, address: string, delivDate: string) {
    return this.http.post<{ message: string }>('http://localhost:4000/orders/add', {qty, address, delivDate});
  }

}
