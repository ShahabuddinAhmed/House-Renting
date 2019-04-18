import { Router, ActivatedRoute } from '@angular/router';
import { AccountService } from './../service/account.service';
import { AdminRegister } from './../models/admin-register';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Admins } from '../models/admin';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  hide = true;
  hide1 = true;
  public Register: FormGroup;
  public name: FormControl;
  public email: FormControl;
  public password: FormControl;
  public confirmPassword: FormControl;
  register: AdminRegister;
  adminInfo: Admins;
  public adminID: string;

  private createFormGroup(): void {
    this.Register = new  FormGroup( {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword
    });
  }

  private createFormControls(): void {
    this.name = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.email = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(60)
    ]);
    this.password = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.confirmPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
  }

  constructor(private _accountService: AccountService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getadminID();
    this.getAdminInfo(this.adminID);
    this.setFormControlvalue();
  }

  onSubmit() {
    this.register = new AdminRegister();
    this.register.adminName = this.name.value;
    this.register.adminEmail = this.email.value;
    this.register.adminPassword = this.password.value;
    this.register.adminConfirmPassword = this.confirmPassword.value;
    this._accountService.updateAdmin(this.adminID, this.register)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['admin']);
    },
    err => {
      console.log(err);
    });
  }

  private getAdminInfo(id: string) {
    this._accountService._getAdminInfo(id).subscribe(data => {
      this.adminInfo = data;
      this.setFormControlvalue();
    },
    err => {
      console.log(err);
    }
    );
  }

  private setFormControlvalue() {
    this.name.setValue(this.adminInfo.adminName);
    this.email.setValue(this.adminInfo.adminEmail);
  }

  private getadminID() {
    this.activeRoute.params.subscribe(param => {
      this.adminID = param['id'];
      console.log(this.adminID);
    },
    err => {
      console.log(err);
    });
  }

}
