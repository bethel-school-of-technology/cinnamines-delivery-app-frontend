import { Component, OnInit } from '@angular/core';
import { Order } from '../models/order';
import { OrdersService } from 'src/services/orders.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MatRadioModule } from '@angular/material/radio';
import { strictEqual } from 'assert';
import { stringify } from 'querystring';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-admin-profile-edit',
  templateUrl: './admin-profile-edit.component.html',
  styleUrls: ['./admin-profile-edit.component.css']
})
export class AdminProfileEditComponent implements OnInit {
  orders: Order[];
  status: string;
  statusOption: string[] = [
    'Awaiting Confirmation',
    'Confirmed',
    'Enroute',
    'Delivered'
  ];
  title = 'angular-confirmation-dialog';


  constructor(
    private ordersService: OrdersService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
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

  updateStatus(orderId, form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.ordersService.updateOrderStatus(orderId, form.value.status).subscribe(response => {
      console.log(response.message);
      this.getStatusOrders();
    });
    form.resetForm();
  }

  deleteOrder(orderId) {
    this.ordersService.deleteOrder(orderId).subscribe(response => {
      console.log(response.message);
      this.getStatusOrders();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Confirm Deletion of this Order'
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        console.log('\"Yes\" Clicked');
        //  Do Something
      }
    });
  }


}

