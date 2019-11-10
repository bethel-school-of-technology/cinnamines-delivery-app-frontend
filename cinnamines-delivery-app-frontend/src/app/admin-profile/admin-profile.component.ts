import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {
  users: User[] = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    // gets all users
    this.usersService.getUsers().subscribe(
      users => this.users = users,
      error => document.getElementById('errorMessage').innerHTML = 'Error, not logged in or not authorized...please try again'
    );
  }
}
