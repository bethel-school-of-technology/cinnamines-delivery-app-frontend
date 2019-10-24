import { Component } from '@angular/core';


@Component({
  selector: 'app-orders-create',
  templateUrl: './order-create.component.html'
})
export class OrderCreateComponent  {
  enteredValue = '';
  newOrder = 'NO CONTENT';

  onAddOrder()  {
    this.newOrder = this.enteredValue;
  }
}
