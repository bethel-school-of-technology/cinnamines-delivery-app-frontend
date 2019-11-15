import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UsersService } from 'src/services/users.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  users: User[] = [];

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // gets all users
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

}
