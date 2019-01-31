import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Search } from '../model/search';

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

  constructor() { }

  ngOnInit() {
    this.CreateFormControls();
    this.createForm();
  }

  onSubmit() {

  }

}
