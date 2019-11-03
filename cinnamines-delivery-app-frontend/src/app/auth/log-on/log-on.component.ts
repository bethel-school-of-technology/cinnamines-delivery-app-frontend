import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MyService } from 'src/services/my.service';
import { Router } from '@angular/router';


@Component({
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.css']
})
export class LogOnComponent  {
  // email: string;
  // password: string;

  // constructor(private myService: MyService, private router: Router) { }

  // ngOnInit() { }

  onLogIn(form: NgForm) {
    console.log(form.value);
    // this.myService.loginUser(this.email, this.password)
    //   .subscribe(
    //     user => this.router.navigate(['/home']),
    //     error => document.getElementById('errorMessage').innerHTML = 'Email or Password Incorrect, please try again'
    //   );
  }
}
