import { House } from './../models/ads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-ads',
  templateUrl: './edit-ads.component.html',
  styleUrls: ['./edit-ads.component.css']
})
export class EditAdsComponent implements OnInit {

  public adsHouse: FormGroup;
  public title: FormControl;
  public bedroom: FormControl;
  public kitchen: FormControl;
  public washroom: FormControl;
  public phon: FormControl;
  public area: FormControl;
  public taka: FormControl;
  public address: FormControl;
  public description: FormControl;
  house: House;

  private createFormGroup(): void {
    this.adsHouse = new  FormGroup( {
      title: this.title,
      bedroom: this.bedroom,
      kitchen: this.kitchen,
      washroom: this.washroom,
      phon: this.phon,
      area: this.area,
      taka: this.taka,
      address: this.address,
      description: this.description
    });
  }

  private createFormControls(): void {
    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.bedroom = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.kitchen = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.washroom = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.phon = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.area = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.taka = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.address = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5000)
    ]);
    this.description = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5000)
    ]);
  }

  constructor() { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
  }

  onSubmit() {
    this.house = new House();
    this.house.userTitle = this.title.value;
    this.house.userBeadRoom = this.bedroom.value;
    this.house.userKitchen = this.kitchen.value;
    this.house.userWashRoom = this.washroom.value;
    this.house.userPhon = this.phon.value;
    this.house.userArea = this.area.value;
    this.house.userTaka = this.taka.value;
    this.house.userAddress = this.address.value;
    this.house.userDescription = this.description.value;
    console.log(this.house.userTitle);
    console.log(this.house.userBeadRoom);
    console.log(this.house.userKitchen);
    console.log(this.house.userWashRoom);
    console.log(this.house.userPhon);
    console.log(this.house.userArea);
    console.log(this.house.userTaka);
    console.log(this.house.userAddress);
    console.log(this.house.userDescription);
  }

}
