import { AccountService } from './../admin/service/account.service';
import { JwtHelperService } from '@auth0/angular-jwt';
import { CommonService } from './../auth/common.service';
import { AuthService } from './../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../users/user.service';
import { RoleGuardService } from '../auth/role-guard.service';
import { UserGuardService } from '../auth/user-guard.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  jwtHelper = new JwtHelperService();
  public userID: string;
  public adminID: string;
  public userName: string;
  public adminName: string;

  constructor(
    private _userService: UserService,
    public _authService: AuthService,
    public _rollGuardService: RoleGuardService,
    public _userGuardService: UserGuardService,
    private _accountService: AccountService,
    public _commonService: CommonService
    ) { }

  ngOnInit() {
    this.getUserID();
  }

  public getUserID() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    this.userID = tokenPayload.userID;
    return this.userID;
  }

  public getAdminID() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    this.adminID = tokenPayload.adminID;
    return this.adminID;
  }

  getName() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    return this.userName = tokenPayload.userName;
  }

  getAdminName() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    return this.adminName = tokenPayload.adminName;
  }

  loggedOut() {
    this._userService.loggedOut();
  }

  adminLoggedOut() {
    this._accountService.loggedOut();
  }

}
