import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {
  MatInputModule,
  MatCardModule,
  MatButtonModule,
  MatToolbarModule,
  MatExpansionModule,
  MatSelectModule
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { OrderCreateComponent } from './orders/order-create/order-create.component';
import { OrderHistoryComponent } from './orders/order-history/order-history.component';
import { HomeComponent } from './home/home.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AdminProfileEditComponent } from './admin-profile-edit/admin-profile-edit.component';
import { AdminOrdersComponent } from './admin-orders/admin-orders.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { LogOnComponent } from './auth/log-on/log-on.component';
import { ProfileComponent } from './users/profile/profile.component';
import { AppRoutingModule } from './app-routing.module';
import { AuthInterceptor } from './auth/auth-interceptor';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

import { UsersService } from 'src/services/users.service';
import { OrdersService } from 'src/services/orders.service';

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
    LogOnComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatToolbarModule,
    MatSelectModule,
    AppRoutingModule,
    MatExpansionModule,
    HttpClientModule,
  ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true},
    UsersService,
    OrdersService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
