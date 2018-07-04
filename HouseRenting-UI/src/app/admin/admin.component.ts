import { District } from './models/district';
import { Division } from './models/division';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

export interface Food {
  value: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  foods: Food[] = [
    {value: 'Dhaka'},
    {value: 'Rajshahi'},
    {value: 'Khulna'},
    {value: 'Sylet'},
    {value: 'Chittagong'},
    {value: 'Comilla'},
    {value: 'Barisal'}
  ];
  public newDivision: FormGroup;
  public division: FormControl;
  inputDivision: Division;

  public newDistict: FormGroup;
  public selectDivision: FormControl;
  public district: FormControl;
  inputDistrict: District;


  private createDivisionForm(): void {
    this.newDivision = new FormGroup( {
      division: this.division
    });
  }

  private createDistrictForm(): void {
    this.newDistict = new FormGroup( {
      selectDivision: this.selectDivision,
      district: this.district
    });
  }

  private CreateDivisionFormControls(): void {
    this.division = new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);
  }

  private CreateDistrictFormControls(): void {
    this.selectDivision = new FormControl("", [
      Validators.required
    ]);
    this.district = new FormControl("", [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);
  }

  constructor() { }

  ngOnInit() {
    this.CreateDivisionFormControls(),
    this.CreateDistrictFormControls(),
    this.createDivisionForm(),
    this.createDistrictForm()
  }

  onSubmitDivision() {
    this.inputDivision = new Division();
    this.inputDivision.userDivision = this.division.value;
  }

  onSubmitDistict() {
    this.inputDistrict = new District();
    this.inputDistrict.userDivision = this.selectDivision.value;
    this.inputDistrict.userDistrict = this.district.value;
  }

}
