import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

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
    return this.http.patch(`http://localhost:3000/post/update/${userId}`, fd, httpOptions);
  }
}
