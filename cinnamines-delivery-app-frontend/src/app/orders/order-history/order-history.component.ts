import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/services/orders.service';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  // private ordersSub: Subscription;

  constructor(
    public ordersService: OrdersService,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit() {
    this.onStart();
  }

  onStart() {
    if (this.authService.getToken()) {
      if (this.authService.getAdmin() === false) {
        console.log('User logged in and not admin, here is your order history!');
        this.ordersService.getUserOrders().subscribe(orders => {
          this.orders = orders;
          console.log(orders);
        });
      } else {
        console.log('User is a admin, route to admin-orders component');
        this.router.navigate(['/admin-orders']);
      }
    } else {
      console.log('User not logged in');
      this.router.navigate(['/logon']);
    }
  }

  ngOnDestroy() {
    // this.ordersSub.unsubscribe();
  }
}
