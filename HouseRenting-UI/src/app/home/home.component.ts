import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Search } from '../model/search';
import { DivisionService } from '../admin/service/division.service';
import { Router } from '@angular/router';
import { LocationService } from '../admin/service/location.service';
import { Division } from '../admin/models/division';
import { Location } from '../admin/models/location';
import { MoneyService } from '../admin/service/money.service';
import { MinMoney } from '../admin/models/min-money';
import { MaxMoney } from '../admin/models/max-money';
import { AreaService } from '../admin/service/area.service';
import { MinArea } from '../admin/models/min-area';
import { MaxArea } from '../admin/models/max-area';
import { RoomService } from '../admin/service/room.service';
import { RoomNumber } from '../admin/models/room';
import { HomeService } from '../service/home.service';
import { House } from '../users/models/ads';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public Search: FormGroup;
  public district: FormControl;
  public location: FormControl;
  public minMoney: FormControl;
  public maxMoney: FormControl;
  public minArea: FormControl;
  public maxArea: FormControl;
  public roomNumber: FormControl;
  public search: Search;
  public customFile: string;
  public moneySelect: number;
  public areaSelect: number;
  public _location: Location[];
  public _division: Division[];
  public minMoneyValue: MinMoney[];
  public maxMoneyValue: MaxMoney[];
  public _minArea: MinArea[];
  public _maxArea: MaxArea[];
  public getRoomNumber: RoomNumber[];
  public _house: House[];

  private createForm(): void {
    this.Search = new FormGroup( {
      district: this.district,
      location: this.location,
      minMoney: this.minMoney,
      maxMoney: this.maxMoney,
      minArea: this.minArea,
      maxArea: this.maxArea,
      roomNumber: this.roomNumber,

    });
  }

  private CreateFormControls(): void {
    this.district = new FormControl('', [
      Validators.required
    ]);

    this.location = new FormControl('', [
      Validators.required
    ]);

    this.minMoney = new FormControl('', [
      Validators.required
    ]);

    this.maxMoney = new FormControl('', [
      Validators.required
    ]);

    this.minArea = new FormControl('', [
      Validators.required
    ]);

    this.maxArea = new FormControl('', [
      Validators.required
    ]);

    this.roomNumber = new FormControl('', [
      Validators.required
    ]);
  }

  constructor(
    private router: Router,
    private _locationService: LocationService,
    private _moneyService: MoneyService,
    private _areaService: AreaService,
    private _roomService: RoomService,
    private _homeService: HomeService
  ) { }

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
    this.getDivision();
    this.getMinMoney();
    this.getMinArea();
    this.getRoom();
    this.getInfo();
    this.getRoomInfo();
  }

  onSubmit() {

  }

  private getInfo() {
    this.location.setValue('0');
    this.maxMoney.setValue('0');
    this.maxArea.setValue('0');
  }

  private getRoomInfo() {
    this._homeService._getHouseAdsInfo()
    .subscribe(data => {
      console.log(data);
      this._house = data;
    },
    err => {
      console.log(err);
    });
  }

  private getDivision() {
    this._locationService._getDivision()
    .subscribe(data => {
      console.log(data);
      this._division = data;
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
      this._location = data;
    },
    err => {
      console.log(err);
    });
  }

  onMoneySelected(event) {
    this.moneySelect = event;
    console.log(this.moneySelect);
    this._getMaxMoney(this.moneySelect);
  }

  private getMinMoney() {
    this._moneyService._getMinMoney()
    .subscribe(data => {
      console.log(data);
      this.minMoneyValue = data;
    },
    err => {
      console.log(err);
    });
  }

  private _getMaxMoney(money: number) {
    this._moneyService.selectdMaxMoney(money)
    .subscribe(data => {
      console.log(data);
      this.maxMoneyValue = data;
    },
    err => {
      console.log(err);
    });
  }

  private getMinArea() {
    this._areaService._getMinArea()
    .subscribe(data => {
      console.log(data);
      this._minArea = data;
    },
    err => {
      console.log(err);
    });
  }

  onAreaSelected(event) {
    this.areaSelect = event;
    console.log(this.areaSelect);
    this._getMaxArea(this.areaSelect);
  }

  private _getMaxArea(area: number) {
    this._areaService.selectedMaxArea(area)
    .subscribe(data => {
      console.log(data);
      this._maxArea = data;
    },
    err => {
      console.log(err);
    });
  }

  private getRoom() {
    this._roomService._getRoom()
    .subscribe(data => {
      console.log(data);
      this.getRoomNumber = data;
    },
    err => {
      console.log(err);
    });
  }

}
