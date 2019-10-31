
import { Component, EventEmitter, Output, OnInit } from '@angular/core';

import { Order } from '../order.model';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  enteredContent = '';
  enteredTitle = '';
  @Output() orderCreated = new EventEmitter<Order>();

  onAddOrder() {
    const order: Order = {
      title: this.enteredTitle,
      content: this.enteredContent
  };
    this.orderCreated.emit(order);
  }
  constructor() { }

  ngOnInit() {

  }

}
