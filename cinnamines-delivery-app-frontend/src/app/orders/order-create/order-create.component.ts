
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-create',
  templateUrl: './order-create.component.html',
  styleUrls: ['./order-create.component.css']
})
export class OrderCreateComponent implements OnInit {
  enteredValue = '';
  newOrder = 'NO CONTENT';

  onAddOrder() {
    this.newOrder = this.enteredValue;
  }

  constructor() { }

  ngOnInit() {
  }

}
