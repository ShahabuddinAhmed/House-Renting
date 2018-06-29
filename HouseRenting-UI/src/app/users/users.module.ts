import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent,
    ViewProfileComponent
  ]
})
export class UsersModule { }
