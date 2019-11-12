import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/services/users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: User;

  constructor(
    private usersService: UsersService,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    // console.log('User id is ' + this.authService.getUserId());
    // console.log('Admin is ' + this.authService.getAdmin());
    // console.log('Token is ' + this.authService.getToken());
    this.getUser();
  }

  getUser() {
    if (this.authService.getToken()) {
      if (this.authService.getAdmin() === false) {
        // need to use interceptor on http requests to add token
        this.usersService.getUser().subscribe(user => {
          this.user = user;
          console.log(user);
        });
      } else {
        console.log('User is a admin, route to admin-profile component');
        this.router.navigate(['/admin-profile']);
      }
    } else {
      console.log('User not logged in');
      this.router.navigate(['/logon']);
    }
  }

}
