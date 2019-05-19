import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Division } from '../models/division';
import { Location } from '../models/location';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  constructor(private http: HttpClient, private router: Router) { }

  _addLocation(_location: Location) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/location/create', _location, httpOptions);
  }

  _getLocation(): Observable<Location[]> {
    return this.http.get<Location[]>('http://localhost:3000/location/all');
  }

  selectLocation(_location: string): Observable<Location[]> {
    return this.http.get<Location[]>(`http://localhost:3000/location/${_location}`);
  }

  _deleteLocation(id: string) {
    return this.http.delete(`http://localhost:3000/location/delete/${id}`);
  }

  _getDivision(): Observable<Division[]> {
    return this.http.get<Division[]>('http://localhost:3000/division/all');
  }
}
