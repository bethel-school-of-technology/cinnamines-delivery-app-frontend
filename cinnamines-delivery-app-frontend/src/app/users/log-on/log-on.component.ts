import { Component, OnInit } from '@angular/core';
import { MyService } from 'src/services/my.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-on',
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.css']
})
export class LogOnComponent implements OnInit {
  email: string;
  password: string;

  constructor(private myService: MyService, private router: Router) { }

  ngOnInit() { }

  onLogin() {
    this.myService.loginUser(this.email, this.password)
      .subscribe(
        user => this.router.navigate(['/home']),
        error => document.getElementById('errorMessage').innerHTML = 'Email or Password Incorrect, please try again'
      );
  }

}
