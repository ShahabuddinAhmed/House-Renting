import { UserGuardService as UserGuard} from './../auth/user-guard.service';
import { AuthGuardService as AuthGuard } from './../auth/auth-guard.service';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { CreateadsComponent } from './createads/createads.component';
import { AddimageComponent } from './addimage/addimage.component';
import { DetailAdsComponent } from './detail-ads/detail-ads.component';

const routes: Routes = [
  { path: 'register', component: SignupComponent },
  { path: 'login', component: SigninComponent },
  { path: 'user', component: UserComponent, canActivate : [UserGuard], data: { expectedRole: 'User' } },
  { path: 'edit/:id', component: EditProfileComponent, canActivate : [UserGuard], data: { expectedRole: 'User' } },
  { path: 'editads/:id', component: EditAdsComponent, canActivate : [UserGuard], data: { expectedRole: 'User' } },
  { path: 'createads', component: CreateadsComponent, canActivate : [UserGuard], data: { expectedRole: 'User' } },
  { path: 'addimage/:id', component: AddimageComponent, canActivate : [UserGuard], data: { expectedRole: 'User' } },
  { path: 'detail/:id', component: DetailAdsComponent }
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
