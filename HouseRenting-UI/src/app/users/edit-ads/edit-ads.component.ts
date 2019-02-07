import { House } from './../models/ads';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Location } from '../../admin/models/location';
import { Division } from '../../admin/models/division';
import { LocationService } from '../../admin/service/location.service';

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
  public division: FormControl;
  public location: FormControl;
  public description: FormControl;
  house: House;
  public customFile: string;
  public houseID: string;
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
      Validators.min(0),
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
    private activeRoute: ActivatedRoute,
    private _locationService: LocationService
    ) { }

  ngOnInit() {
    this.createFormControls();
    this.createFormGroup();
    this.getHouseAdsID();
    this.getDivision();
    this.getHouseAdsInfo(this.houseID);
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
    this._userService.editHouseAds(this.houseID, this.house)
    .subscribe(data => {
      console.log(data);
      this.router.navigate(['user']);
    },
    err => {
      console.log(err);
    });
  }

  private getHouseAdsID() {
    this.activeRoute.params.subscribe(param => {
      this.houseID = param['id'];
      console.log(this.houseID);
    },
    err => {
      console.log(err);
    });
  }

  private getHouseAdsInfo(id: string) {
    this._userService._getHouseAdsInfo(id).subscribe(data => {
      this.house = data;
      this.setFormControlvalue();
    },
    err => {
      console.log(err);
    }
    );
  }

  private setFormControlvalue() {
    this.title.setValue(this.title.value);
    this.bedroom.setValue(this.bedroom.value);
    this.kitchen.setValue(this.kitchen.value);
    this.washroom.setValue(this.washroom.value);
    this.phon.setValue(this.phon.value);
    this.area.setValue(this.area.value);
    this.taka.setValue(this.taka.value);
    this.address.setValue(this.address.value);
    this.division.setValue(this.division.value);
    this.location.setValue(this.location.value);
    this.description.setValue(this.description.value);
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
