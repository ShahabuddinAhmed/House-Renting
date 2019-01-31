import { ViewAdsComponent } from './view-ads/view-ads.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';

const routes: Routes = [
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: 'profile', component: ViewProfileComponent },
  { path: 'user', component: UserComponent },
  { path: 'view', component: ViewProfileComponent },
  { path: 'edit', component: EditProfileComponent },
  { path: 'ads', component: ViewAdsComponent },
  { path: 'editads', component: EditAdsComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class UsersRoutingModule { }
