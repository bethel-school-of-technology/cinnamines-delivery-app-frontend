import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { UsersService } from 'src/services/users.service';
import { AuthService } from 'src/app/auth/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

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
    this.getUser();
  }

  getUser() {
    if (this.authService.getToken()) {
      // if (this.authService.getAdmin() === false) {
        this.usersService.getUser().subscribe(user => {
          this.user = user;
          console.log(user);
        });
      // } else {
      //   console.log('User is a admin, route to admin-profile component');
      //   this.router.navigate(['/admin-profile']);
      // }
    } else {
      console.log('User not logged in');
      this.router.navigate(['/logon']);
    }
  }

  updateName(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.usersService.updateName(form.value.name).subscribe(response => {
      console.log(response.message);
      this.getUser();
    });
    form.resetForm();
  }

  updateEmail(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.usersService.updateEmail(form.value.email).subscribe(response => {
      console.log(response.message);
      this.getUser();
    });
    form.resetForm();
  }

  updatePhone(form: NgForm) {
    if (form.invalid) {
      return;
    }
    this.usersService.updatePhone(form.value.phone).subscribe(response => {
      console.log(response.message);
      this.getUser();
    });
    form.resetForm();
  }

}
