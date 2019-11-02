import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { MyService } from 'src/services/my.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  private backEndRoute = 'http://localhost:4000';
  user: User;

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getUser(this.route.snapshot.paramMap.get('id'));
  }

  getUser(id) {
    this.http.get<User>(this.backEndRoute + '/users/' + id).subscribe(user => {
      this.user = user;
    });
  }


}
