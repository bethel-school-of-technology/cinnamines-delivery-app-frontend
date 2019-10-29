import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderHistoryComponent } from './orders/order-history/order-history.component';
import { HomeComponent } from './home/home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileEditComponent } from './admin-profile-edit/admin-profile-edit.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { SignUpComponent } from './users/sign-up/sign-up.component';
import { LogOnComponent } from './users/log-on/log-on.component';
import { ProfileComponent } from './users/profile/profile.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'order-create',
    component: OrderCreateComponent
  },
  {
    path: 'order-history',
    component: OrderHistoryComponent
  },
  //
  {
    path: 'admin-profile',
    component: AdminProfileComponent
  },
  {
    path: 'admin-profile-edit',
    component: AdminProfileEditComponent
  },
  {
    path: 'admin-orders',
    component: AdminOrdersComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'logon',
    component: LogOnComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
