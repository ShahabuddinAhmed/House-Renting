import { Login } from './../models/login';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  hide = true;
  public loginForm: FormGroup;
  public email: FormControl;
  public password: FormControl;
  login: Login;

  private createForm(): void {
    this.loginForm = new FormGroup( {
      email: this.email,
      password: this.password
    });
  }
  private CreateFormControls(): void {
    this.email = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30),
      Validators.email
    ]);
    this.password = new FormControl("", [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100)
    ]);
  }
  constructor() { }

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
  }

  onSubmit() {
    this.login = new Login();
    this.login.userEmail = this.email.value;
    this.login.userPassword = this.password.value;
    console.log(this.login.userEmail);
    console.log(this.login.userPassword);
  }

}
