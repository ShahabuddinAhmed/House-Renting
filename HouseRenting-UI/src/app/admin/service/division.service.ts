import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Division } from '../models/division';

@Injectable({
  providedIn: 'root'
})
export class DivisionService {

  constructor(private http: HttpClient, private router: Router) { }

  _addDivision(_division: Division) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/admin/division', _division, httpOptions);
  }

  _getDivision(): Observable<Division[]> {
    return this.http.get<Division[]>('http://localhost:3000/admin/minarea');
  }

  _deleteDivision(id: string) {
    return this.http.delete(`http://localhost:3000/admin/delete/${id}`);
  }

}
