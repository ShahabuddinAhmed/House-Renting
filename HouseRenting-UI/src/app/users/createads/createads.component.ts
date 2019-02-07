import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { House } from '../models/ads';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Division } from '../../admin/models/division';
import { Location } from '../../admin/models/location';
import { LocationService } from 'src/app/admin/service/location.service';

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
  public division: FormControl;
  public location: FormControl;
  public description: FormControl;
  house: House;
  public customFile: string;
  public userID: string;
  public divisionValue: Division[];
  public locationValue: Location[];
  jwtHelper = new JwtHelperService();

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
      division: this.division,
      location: this.location,
      description: this.description
    });
  }

  private createFormControls(): void {
    this.title = new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(500)
    ]);
    this.bedroom = new FormControl('', [
      Validators.required,
      Validators.min(1),
      Validators.max(100),
      Validators.pattern('[0-9]*')
    ]);
    this.kitchen = new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(10),
      Validators.pattern('[0-9]*')
    ]);
    this.washroom = new FormControl('', [
      Validators.required,
      Validators.min(0),
      Validators.max(100),
      Validators.pattern('[0-9]*')
    ]);
    this.phon = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(30)
    ]);
    this.area = new FormControl('', [
      Validators.required,
      Validators.min(100),
      Validators.max(10000),
      Validators.pattern('[0-9]*')
    ]);
    this.taka = new FormControl('', [
      Validators.required,
      Validators.min(500),
      Validators.max(500000),
      Validators.pattern('[0-9]*')
    ]);
    this.address = new FormControl('', [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(1000)
    ]);
    this.division = new FormControl('', [
      Validators.required
    ]);
    this.location = new FormControl('', [
      Validators.required
    ]);
    this.description = new FormControl('', [
      Validators.required,
      Validators.minLength(100),
      Validators.maxLength(1000000)
    ]);
  }

  constructor(
    private _userService: UserService,
    private router: Router,
    private _locationService: LocationService
    ) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getDivision();
    this.getUserID();
  }

  private getUserID() {
    const token = localStorage.getItem('token');
    const tokenPayload = this.jwtHelper.decodeToken(token);
    this.userID = tokenPayload.userID;
    console.log(this.userID);
  }

  onSubmit() {
    this.house = new House();
    this.house.title = this.title.value;
    this.house.bedRoom = this.bedroom.value;
    this.house.kitchen = this.kitchen.value;
    this.house.washRoom = this.washroom.value;
    this.house.phon = this.phon.value;
    this.house.area = this.area.value;
    this.house.taka = this.taka.value;
    this.house.address = this.address.value;
    this.house.division = this.division.value;
    this.house.location = this.location.value;
    this.house.description = this.description.value;
    this.house.userID = this.userID;
    this._userService.createHouseAds(this.house)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['user']);

    },
    err => {
      console.log(err);
    });
  }

  private getDivision() {
    this._locationService._getDivision()
    .subscribe(data => {
      console.log(data);
      this.divisionValue = data;
    },
    err => {
      console.log(err);
    });
  }

  onNameSelected(event) {
    this.customFile = event;
    console.log(this.customFile);
    this._getLocation(this.customFile);
  }

  private _getLocation(location: string) {
    this._locationService.selectLocation(location)
    .subscribe(data => {
      console.log(data);
      this.locationValue = data;
    },
    err => {
      console.log(err);
    });
  }

}
