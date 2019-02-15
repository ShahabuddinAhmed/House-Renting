import { Component, OnInit } from '@angular/core';
import { AdminRegister } from '../models/admin-register';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from '../service/account.service';


@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {

  hide = true;
  hide1 = true;
  public Register: FormGroup;
  public adminName: FormControl;
  public adminEmail: FormControl;
  public adminPassword: FormControl;
  public adminConfirmPassword: FormControl;
  register: AdminRegister;
  public adminList: AdminRegister[];
  public len: number;

  private createFormGroup(): void {
    this.Register = new  FormGroup( {
      adminName: this.adminName,
      adminEmail: this.adminEmail,
      adminPassword: this.adminPassword,
      adminConfirmPassword: this.adminConfirmPassword
    });
  }

  private createFormControls(): void {
    this.adminName = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.adminEmail = new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.minLength(6),
      Validators.maxLength(60)
    ]);
    this.adminPassword = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(100)
    ]);
    this.adminConfirmPassword = new FormControl('', [
      Validators.required
    ]);
  }

  constructor(private _accountService: AccountService, private router: Router) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getAllAdmin();
  }

  onSubmit() {
    this.register = new AdminRegister();
    this.register.adminName = this.adminName.value;
    this.register.adminEmail = this.adminEmail.value;
    this.register.adminPassword = this.adminPassword.value;
    this.register.adminConfirmPassword = this.adminConfirmPassword.value;
    this._accountService._adminRegister(this.register)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['admin']);
    },
    error => {
      console.error(error);
    }
    );
  }

  private getAllAdmin() {
    this._accountService._getAllAdmin()
    .subscribe(data => {
      this.adminList = data;
      this.len = this.adminList.length;
      console.log(this.adminList);
    },
    err => {
      console.log(err);
    }
      );
  }

  deleteAdmin(ID: string) {
    this._accountService._deleteAdmin(ID)
    .subscribe(data => {
      this.getAllAdmin();
    },
    err => {
      console.log(err);
    });
  }

}
