import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IsLoadingService } from '@service-work/is-loading';
import { Router, NavigationStart, NavigationEnd, NavigationCancel, NavigationError } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-loading-progress-bar',
  template:  `
    <mat-progress-bar
      *ngIf="isLoading | async"
      mode="indeterminate"
      color="warn"
      style="position: absolute; top: 0; z-index: 5000;"
    >
    </mat-progress-bar>

    <router-outlet></router-outlet>
  `,
  // './loading-progress-bar.component.html',
  styleUrls: ['./loading-progress-bar.component.css']
})
export class LoadingProgressBarComponent implements OnInit {

  isLoading: Observable<boolean>;

  constructor(
    private isLoadingService: IsLoadingService,
    private router: Router,
  ) { }

  ngOnInit() {

    this.isLoading = this.isLoadingService.isLoading$();

    this.router.events
    .pipe(
      filter(
        event =>
          event instanceof NavigationStart ||
          event instanceof NavigationEnd ||
          event instanceof NavigationCancel ||
          event instanceof NavigationError,
          ),
        )
      .subscribe(event => {
        // if navigation is starting add .add() - a loading indicator
        if (event instanceof NavigationStart) {
          this.isLoadingService.add();
          return;
        } else {
          // when no navigation remove loading indicator
          this.isLoadingService.remove();
        }
      });
      }
}
