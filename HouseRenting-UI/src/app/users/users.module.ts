import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule, MatCheckboxModule, MatInputModule, MatFormFieldModule, MatRippleModule, MatTooltipModule, MatMenuModule, MatToolbarModule, MatIconModule, MatCardModule, MatSidenavModule} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { ViewAdsComponent } from './view-ads/view-ads.component';


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
    ViewProfileComponent,
    UserComponent,
    EditProfileComponent,
    EditAdsComponent,
    ViewAdsComponent
  ]
})
export class UsersModule { }
