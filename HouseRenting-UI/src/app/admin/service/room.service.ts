import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { RoomNumber } from '../models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http: HttpClient, private router: Router) { }

  _addRoom(_room: RoomNumber) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/admin/division', _room, httpOptions);
  }

  _getRoom(): Observable<RoomNumber[]> {
    return this.http.get<RoomNumber[]>('http://localhost:3000/admin/minarea');
  }

  _deleteRoom(id: string) {
    return this.http.delete(`http://localhost:3000/admin/delete/${id}`);
  }
}
