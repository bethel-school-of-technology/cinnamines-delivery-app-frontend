import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from 'src/services/orders.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-admin-orders',
  templateUrl: './admin-orders.component.html',
  styleUrls: ['./admin-orders.component.css']
})
export class AdminOrdersComponent implements OnInit {
  orders: Order[];

  constructor(
    private ordersService: OrdersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getAllOrders();
  }

  getAllOrders() {
    if (this.authService.getToken()) {
      if (this.authService.getAdmin() === true) {
        console.log('You are a admin, here is all the orders!');
        this.ordersService.getAllOrders().subscribe(orders => {
          this.orders = orders;
          console.log(orders);
        });
      } else {
        console.log('User is not a admin, route to home component');
        this.router.navigate(['/home']);
      }
    } else {
      console.log('User not logged in');
      this.router.navigate(['/logon']);
    }
  }

  deleteOrder(orderId) {
    this.ordersService.deleteOrder(orderId).subscribe(response => {
      console.log(response.message);
      this.getAllOrders();
    });
  }

}
