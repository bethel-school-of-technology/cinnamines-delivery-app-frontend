import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userIsAuthenticated = false;
  public authListenerSubs: Subscription;
  userIsAdmin = false;
  public authListenerAdminSubs: Subscription;

  constructor(public authService: AuthService) { }

  ngOnInit() {
    this.authListenerSubs = this.authService.getAuthStatusListener().subscribe(isAuthenticated => {
      this.userIsAuthenticated = isAuthenticated;
    });
    this.authListenerAdminSubs = this.authService.getAuthAdminListener().subscribe(isAdmin => {
      this.userIsAdmin = isAdmin;
    });
  }

  onLogout() {
    this.authService.logout();
  }
}
