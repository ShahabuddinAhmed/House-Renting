import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { HouseImage } from '../models/houseImage';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient, private router: Router) { }

  _uploadImage(fd: any, userId: string) {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.post('http://localhost:3000/houseimg/create/', fd, httpOptions);
  }

  _uploadCoverImage(fd: any) {
    const httpOptions = {
      headers: new HttpHeaders({
      })
    };
    return this.http.post(`http://localhost:3000/houseimg/create/`, fd, httpOptions);
  }

  getImage(id: string): Observable<HouseImage[]> {
    return this.http.get<HouseImage[]>(`http://localhost:3000/houseimg/${id}`);
  }
}
