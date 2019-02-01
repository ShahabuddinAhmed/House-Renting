import { House } from './../models/ads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  jwtHelper = new JwtHelperService();
  public userID: string;

  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getUserID();
  }

  onSubmit() {

  }

  private getUserID() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    this.userID = tokenPayload.userID;
  }

}
