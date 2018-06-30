import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRippleModule, MatTooltipModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatInputModule,
    MatFormFieldModule,
    MatRippleModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatTooltipModule,
    BrowserAnimationsModule
  ],
  declarations: [
    SignupComponent,
    SigninComponent,
    ViewProfileComponent
  ]
})
export class UsersModule { }
