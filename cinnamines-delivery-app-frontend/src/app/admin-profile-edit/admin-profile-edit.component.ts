import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from 'src/services/orders.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile-edit',
  templateUrl: './admin-profile-edit.component.html',
  styleUrls: ['./admin-profile-edit.component.css']
})
export class AdminProfileEditComponent implements OnInit {
  orders: Order[];

  constructor(
    private ordersService: OrdersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getStatusOrders();
  }

  getStatusOrders() {
    if (this.authService.getToken()) {
      if (this.authService.getAdmin() === true) {
        this.ordersService.getOrdersByStatus().subscribe(orders => {
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


}
