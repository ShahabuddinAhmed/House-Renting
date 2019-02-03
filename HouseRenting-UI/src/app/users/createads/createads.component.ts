import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { House } from '../models/ads';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
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
      Validators.required
    ]);
    this.kitchen = new FormControl('', [
      Validators.required
    ]);
    this.washroom = new FormControl('', [
      Validators.required
    ]);
    this.phon = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(30)
    ]);
    this.area = new FormControl('', [
      Validators.required
    ]);
    this.taka = new FormControl('', [
      Validators.required
    ]);
    this.address = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5000)
    ]);
    this.division = new FormControl('', [
      Validators.required
    ]);
    this.location = new FormControl('', [
      Validators.required
    ]);
    this.description = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(5000)
    ]);
  }

  constructor(private _userService: UserService,
    private router: Router,
    private _locationService: LocationService
    ) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getDivision();
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
