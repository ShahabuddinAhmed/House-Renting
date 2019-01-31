import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MinMoney } from '../models/min-money';
import { MaxMoney } from '../models/max-money';

@Injectable({
  providedIn: 'root'
})
export class MoneyService {

  constructor(private http: HttpClient, private router: Router) { }

  _addMinMoney(_money: MinMoney) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/admin/minarea', _money, httpOptions);
  }

  _addMaxMoney(_money: MaxMoney) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/admin/maxarea', _money, httpOptions);
  }

  _getMinMoney(): Observable<MinMoney[]> {
    return this.http.get<MinMoney[]>('http://localhost:3000/admin/minarea');
  }

  _getMaxMoney(): Observable<MaxMoney[]> {
    return this.http.get<MaxMoney[]>('http://localhost:3000/admin/maxarea');
  }

  _deleteMinMoney(id: string) {
    return this.http.delete(`http://localhost:3000/admin/delete/${id}`);
  }

  _deleteMaxMoney(id: string) {
    return this.http.delete(`http://localhost:3000/admin/delete/${id}`);
  }
}
