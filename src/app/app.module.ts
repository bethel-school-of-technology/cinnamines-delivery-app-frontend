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
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule
} from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { IsLoadingModule } from '@service-work/is-loading';

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
import { ConfirmationDialogComponent } from './components/shared/confirmation-dialog/confirmation-dialog.component';
import { LoadingProgressBarComponent } from './components/shared/loading-progress-bar/loading-progress-bar.component';

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
    ConfirmationDialogComponent,
    LoadingProgressBarComponent,
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
    MatRadioModule,
    HttpClientModule,
    MatDialogModule,
    MatProgressBarModule,
    IsLoadingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    UsersService,
    OrdersService
  ],
  entryComponents: [ConfirmationDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
