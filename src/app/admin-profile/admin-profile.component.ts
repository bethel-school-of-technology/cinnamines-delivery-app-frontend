import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UsersService } from 'src/services/users.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { ConfirmationDialogComponent } from '../components/shared/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  users: User[];
  title = 'angular-confirmation-component';

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    if (this.authService.getToken()) {
      if (this.authService.getAdmin() === true) {
        this.usersService.getUsers().subscribe(users => {
          this.users = users;
          console.log(users);
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

  deleteUser(userId) {
    this.usersService.deleteUser(userId).subscribe(response => {
      console.log(response.message);
      this.getUsers();
    });
  }

  makeAdmin(userId) {
    this.usersService.makeAdmin(userId).subscribe(response => {
      console.log(response.message);
      this.getUsers();
    });
  }

    // delete confirmation dialog
  openDialog(userId): void {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '350px',
      data: 'Confirm Deletion of this User'
    });
    dialogRef.afterClosed().subscribe(result => {
      if(result) {
      console.log('\"Yes\" Clicked');
      console.log(userId);
      // Exterminate, Exterminate
      this.deleteUser(userId);
      }
    });
  }

}
