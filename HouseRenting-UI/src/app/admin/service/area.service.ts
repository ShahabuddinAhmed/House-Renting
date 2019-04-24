import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { MinArea } from '../models/min-area';
import { MaxArea } from '../models/max-area';

@Injectable({
  providedIn: 'root'
})
export class AreaService {

  constructor(private http: HttpClient, private router: Router) { }

  _addMinArea(_area: MinArea) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/minarea/create', _area, httpOptions);
  }

  _addMaxArea(_area: MaxArea) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/maxarea/create', _area, httpOptions);
  }

  _getMinArea(): Observable<MinArea[]> {
    return this.http.get<MinArea[]>('http://localhost:3000/minarea/all');
  }

  _getMaxArea(): Observable<MaxArea[]> {
    return this.http.get<MaxArea[]>('http://localhost:3000/maxarea/all');
  }

  selectedMaxArea(area: number): Observable<MaxArea[]> {
    return this.http.get<MaxArea[]>(`http://localhost:3000/maxarea/${area}`);
  }

  _deleteMinArea(id: string) {
    return this.http.delete(`http://localhost:3000/minarea/delete/${id}`);
  }

  _deleteMaxArea(id: string) {
    return this.http.delete(`http://localhost:3000/maxarea/delete/${id}`);
  }
}
