import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { House } from '../models/ads';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createads',
  templateUrl: './createads.component.html',
  styleUrls: ['./createads.component.css']
})
export class CreateadsComponent implements OnInit {

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
  public userID: string;

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

  constructor(private _userService: UserService, private router: Router) { }

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
    this._userService.createHouseAds(this.house)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['user']);
    },
    err => {
      console.log(err);
    });
  }

}
