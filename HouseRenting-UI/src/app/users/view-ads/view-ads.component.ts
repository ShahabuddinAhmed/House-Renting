import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { House } from '../models/ads';

@Component({
  selector: 'app-view-ads',
  templateUrl: './view-ads.component.html',
  styleUrls: ['./view-ads.component.css']
})
export class ViewAdsComponent implements OnInit {

  public allAds: House[];
  constructor(private _userService: UserService, private router: Router) { }

  ngOnInit() {
    this.getAllAds();
  }

  private getAllAds() {
    this._userService._getAllAds()
    .subscribe(data => {
      console.log(data);
      this.allAds = data;
    },
    err => {
      console.log(err);
    });
  }

}
