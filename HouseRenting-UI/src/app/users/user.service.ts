import { Injectable } from '@angular/core';
import { Register } from './models/register';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Login } from './models/login';
import { House } from './models/ads';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router) { }

  userRegister(_register: Register) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/register/', _register, httpOptions);
  }

  userLogin(_login: Login) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/login/', _login, httpOptions);
  }

  _getUserInfo(id: string): Observable<Register> {
    return this.http.get<Register>(`http://localhost:3000/user/${id}`);
  }

  updateUser(id: string, register: Register) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(`http://localhost:3000/user/update/${id}`, register, httpOptions);
  }

  _getHouseAdsInfo(id: string): Observable<House[]> {
    return this.http.get<House[]>(`http://localhost:3000/houseads/${id}`);
  }

  editHouseAds(id: string, _house: House) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.patch(`http://localhost:3000/houseads/update/${id}`, _house, httpOptions);
  }

  createHouseAds(_house: House) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/houseads/create', _house, httpOptions);
  }

  _getAllAds(): Observable<House[]> {
    return this.http.get<House[]>('http://localhost:3000/houseads/all');
  }

  setToken(auth: any) {
    localStorage.setItem('token', auth.token);
  }
}
