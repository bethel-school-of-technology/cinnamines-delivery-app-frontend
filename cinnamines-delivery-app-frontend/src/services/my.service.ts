import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Order } from 'src/app/models/order';

@Injectable({providedIn: 'root'})
export class MyService {
  private orders: Order[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  getOrders() {

  }
}
