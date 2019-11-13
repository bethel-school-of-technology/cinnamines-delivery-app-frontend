import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { NgForm } from '@angular/forms';
import { OrdersService } from 'src/services/orders.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})

export class OrderCreateComponent implements OnInit {

  constructor(
    public ordersService: OrdersService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.onStart();
  }

  onStart() {
    if (this.authService.getToken()) {
      console.log(this.authService.getToken());
      if (this.authService.getAdmin() === false) {
        console.log('User logged in and not admin, create your order!');
      } else {
        console.log('User is a admin, route to admin-profile-edit component');
        this.router.navigate(['/admin-profile-edit']);
      }
    } else {
      console.log('User not logged in');
      this.router.navigate(['/logon']);
    }
  }

  onAddOrder(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.ordersService.createOrder(form.value.qty, form.value.address, form.value.delivDate)
      .subscribe(response => {
        console.log(response.message);
        this.router.navigate(['/home']);
      });
    // form.resetForm();
  }
}
