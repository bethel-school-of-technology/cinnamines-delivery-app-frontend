import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';
import { HttpClient } from '@angular/common/http';

import { environment } from 'src/environments/environment';

const BACKEND_URL = environment.apiUrl + '/orders';
@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[];

  constructor(private http: HttpClient) { }

  getAllOrders() {
    return this.http.get<Order[]>(BACKEND_URL);
  }

  getOrdersByStatus() {
    return this.http.get<Order[]>(BACKEND_URL + '/status');
  }

  getOneOrder(orderId) {
    return this.http.get<Order>(BACKEND_URL + orderId);
  }

  createOrder(qty: string, address: string, delivDate: string) {
    return this.http.post<{ message: string }>(BACKEND_URL + '/add', {qty, address, delivDate});
  }

  updateOrderStatus(orderId, status: string) {
    return this.http.post<{ message: string }>(BACKEND_URL + '/updatestatus/' + orderId, {status});
  }

  deleteOrder(orderId) {
    return this.http.delete<{ message: string }>(BACKEND_URL + '/delete/' + orderId);
  }

  getUserOrders() {
    return this.http.get<Order[]>(environment.apiUrl + '/users/history');
  }
}
