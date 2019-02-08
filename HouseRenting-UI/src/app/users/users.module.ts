import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatFormFieldModule,
  MatRippleModule,
  MatTooltipModule,
  MatMenuModule,
  MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatSidenavModule,
  MatSelectModule
} from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { EditAdsComponent } from './edit-ads/edit-ads.component';
import { ViewAdsComponent } from './view-ads/view-ads.component';
import { RouterModule } from '@angular/router';
import { CreateadsComponent } from './createads/createads.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { AddimageComponent } from './addimage/addimage.component';
import { NgxGalleryModule } from 'ngx-gallery';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
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
    MatSelectModule,
    RouterModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot()
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  declarations: [
    SignupComponent,
    SigninComponent,
    ViewProfileComponent,
    UserComponent,
    EditProfileComponent,
    EditAdsComponent,
    ViewAdsComponent,
    CreateadsComponent,
    SearchViewComponent,
    AddimageComponent
  ]
})
export class UsersModule { }
