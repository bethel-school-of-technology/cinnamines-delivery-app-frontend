import { Component, OnInit } from '@angular/core';

import { User } from 'src/app/models/user';
import { MyService } from 'src/services/my.service';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent  {
  users: User[] = [];

  constructor( private myService: MyService ) { }

  // ngOnInit() {
  //   this.myService.getUsers().subscribe(users => {
  //     this.users = users;
  //   });
  }
