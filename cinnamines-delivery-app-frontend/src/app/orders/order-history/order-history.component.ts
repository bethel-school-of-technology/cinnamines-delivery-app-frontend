import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Order } from 'src/app/models/order';
import { OrdersService } from 'src/services/orders.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  userIsAuthenticated = false;
  private ordersSub: Subscription;
  private authStatusSub: Subscription;

  constructor(public ordersService: OrdersService, private authService: AuthService) { }

  ngOnInit() {
    this.authStatusSub = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {this.userIsAuthenticated = isAuthenticated;
    });
    // this.ordersService.getOrders();
    // this.ordersSub = this.ordersService.getOrderUpdateListener()
    //   .subscribe((orders: Order[]) => {
    //     this.orders = orders;
    //   });
  }

  // onDelete(orderId: string) {
  //   this.ordersService.deleteOrder(orderId);
  // }

  ngOnDestroy() {
    // this.ordersSub.unsubscribe();
  }
}
