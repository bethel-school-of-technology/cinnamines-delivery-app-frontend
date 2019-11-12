import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { OrdersService } from 'src/services/orders.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

// import { OrdersService } from '';

@Component ({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})

export class OrderCreateComponent implements OnInit {
  enteredTitle = '';
  enteredContent = '';

  constructor(public ordersService: OrdersService, private router: Router) {}

  ngOnInit() {
    // if (AuthService.token) {
    //   if (!AuthService.admin) {
    //     return;
    //   } else {
    //     this.router.navigate(['/home']);
    //   }
    // } else {
    //   console.log('User not logged in');
    // }
  }

  // onAddOrder(form: NgForm) {
  //   if (form.invalid) {
  //     return;
  //   }
  //   this.ordersService.addOrder(form.value.title, form.value.content);
  //   form.resetForm();
  // }
}
