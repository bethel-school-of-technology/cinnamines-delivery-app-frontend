import { Component } from '@angular/core';

import { Order } from './orders/order.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  storedOrders: Order[] = [];

  onOrderAdded(order) {
    this.storedOrders.push(order);
  }
}
