import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminLogin } from '../models/admin-login';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  hide = true;
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  login: AdminLogin;

  private createForm(): void {
    this.loginForm = new FormGroup( {
      email: this.email,
      password: this.password
    });
  }
  private CreateFormControls(): void {
    this.email = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(60),
      Validators.email
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100)
    ]);
  }
  constructor(private _userService: AccountService, private router: Router) { }

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
  }

  onSubmit() {
    this.login = new AdminLogin();
    this.login.adminEmail = this.email.value;
    this.login.adminPassword = this.password.value;
    this._userService._adminLogin(this.login)
    .subscribe(data => {
      console.log(data);
      this._userService.setToken(data);
      this.router.navigate(['admin']);
      },
      err => {
        console.log(err);
      });
  }

}
