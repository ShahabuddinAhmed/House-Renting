import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AppRoutingModule } from './/app-routing.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { SignupComponent } from './users/signup/signup.component';
import { SigninComponent } from './users/signin/signin.component';
import { UsersRoutingModule } from './users/users-routing.module';
import { ViewProfileComponent } from './users/view-profile/view-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    AdminComponent,
    SignupComponent,
    SigninComponent,
    ViewProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    UsersRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
