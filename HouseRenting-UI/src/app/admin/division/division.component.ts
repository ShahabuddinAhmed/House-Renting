import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Division } from '../models/division';


export interface Food {
  value: string;
}

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {

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

  private createDivisionForm(): void {
    this.newDivision = new FormGroup( {
      division: this.division
    });
  }

  private CreateDivisionFormControls(): void {
    this.division = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(100)
    ]);
  }

  constructor() { }

  ngOnInit() {
    this.CreateDivisionFormControls();
    this.createDivisionForm();
  }

  onSubmitDivision() {
    this.inputDivision = new Division();
    this.inputDivision.userDivision = this.division.value;
  }

}
