import { Component } from '@angular/core';


@Component({
  selector: 'app-orders-create',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent  {
  onAddOrder() {
    alert('Order added!');
  }
}
