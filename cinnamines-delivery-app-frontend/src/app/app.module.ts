import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule
    } from '@angular/material';

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
import { AppRoutingModule } from './app-routing.module';
import { Header1Component } from './header1/header1.component';

@NgModule({
  declarations: [
    AppComponent,
    OrderCreateComponent,
    OrderHistoryComponent,
    HomeComponent,
    AdminProfileComponent,
    AdminProfileEditComponent,
    AdminOrdersComponent,
    SignUpComponent,
    LogOnComponent,
    ProfileComponent,
    Header1Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    AppRoutingModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
