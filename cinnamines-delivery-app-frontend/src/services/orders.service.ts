import { Injectable } from '@angular/core';
import { Order } from 'src/app/models/order';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrdersService {
  private orders: Order[];

  constructor(private http: HttpClient) { }


}
