import { Component, Input, OnInit } from '@angular/core';

import { Order } from '../order.model';

@Component({
  selector: 'app-order-history',
  templateUrl: './order-history.component.html',
  styleUrls: ['./order-history.component.css']
})
export class OrderHistoryComponent implements OnInit {
//  orders = [
//    {title: 'First Order', content: 'A dozen cinnamon rolls'},
//    {title: 'Second Order', content: 'A dozen cinnamon rolls'},
//    {title: 'Third Order', content: 'A dozen cinnamon rolls'},
//   ];

@Input() orders = [];

  constructor() { }

  ngOnInit() {
  }

}
