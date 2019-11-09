import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit, OnDestroy {
  orders: Order[] = [];
  private ordersSub: Subscription;

  constructor(public ordersService: OrdersService) { }

  ngOnInit() {
    this.ordersService.getOrders();
    this.ordersSub = this.ordersService.getOrderUpdateListener()
      .subscribe((orders: Order[]) => {
        this.orders = orders;
      });
  }

  onDelete(orderId: string) {
    this.ordersService.deleteOrder(orderId);
  }

  ngOnDestroy() {
    this.ordersSub.unsubscribe();
  }
}
