import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { District } from '../models/district';


export interface Food {
  value: string;
}

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  foods: Food[] = [
    {value: 'Dhaka'},
    {value: 'Rajshahi'},
    {value: 'Khulna'},
    {value: 'Sylet'},
    {value: 'Chittagong'},
    {value: 'Comilla'},
    {value: 'Barisal'}
  ];

  public newDistict: FormGroup;
  public selectDivision: FormControl;
  public district: FormControl;
  inputDistrict: District;

  private createDistrictForm(): void {
    this.newDistict = new FormGroup( {
      selectDivision: this.selectDivision,
      district: this.district
    });
  }

  private CreateDistrictFormControls(): void {
    this.selectDivision = new FormControl('', [
      Validators.required
    ]);
    this.district = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);
  }

  constructor() { }

  ngOnInit() {
    this.CreateDistrictFormControls();
    this.createDistrictForm();
  }

  onSubmitDistict() {
    this.inputDistrict = new District();
    this.inputDistrict.userDivision = this.selectDivision.value;
    this.inputDistrict.userDistrict = this.district.value;
  }

}
