import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// import { Order } from ' ';
import { NgForm } from '@angular/forms';
// import { OrdersService } from '';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})

export class OrderCreateComponent implements OnInit {
  enteredTitle = "";
  enteredContent = "";

  constructor(public ordersService: OrdersService) {}

  onAddOrder(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.ordersService.addOrder(form.value.title, form.value.content);
    form.resetForm();
  }
}
