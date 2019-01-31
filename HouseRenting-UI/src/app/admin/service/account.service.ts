import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { AdminRegister } from '../models/admin-register';
import { AdminLogin } from '../models/admin-login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private router: Router) { }

  _adminRegister(_register: AdminRegister) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/admin/register', _register, httpOptions);
  }

  _adminLogin(_login: AdminLogin) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    return this.http.post('http://localhost:3000/user/login', _login, httpOptions);
  }

  _getAllAdmin(): Observable<AdminRegister[]> {
    return this.http.get<AdminRegister[]>('http://localhost:3000/admin/all');
  }

  _deleteAdmin(id: string) {
    return this.http.delete(`http://localhost:3000/admin/delete/${id}`);
  }
}