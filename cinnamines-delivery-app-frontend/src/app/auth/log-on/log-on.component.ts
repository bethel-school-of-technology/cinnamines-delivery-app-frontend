import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

import { AuthService } from '../auth.service';

@Component({
  templateUrl: './log-on.component.html',
  styleUrls: ['./log-on.component.css']
})
export class LogOnComponent {

  constructor(public authService: AuthService) { }

  onLogIn(form: NgForm) {
    if (form.invalid) {
      return;
    }
    // this.authService.login(form.value.email, form.value.name, form.value.phone, form.value.password);
    this.authService.login(form.value.email, form.value.password);
  }
}
