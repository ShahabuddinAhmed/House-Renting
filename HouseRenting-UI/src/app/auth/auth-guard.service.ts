import { AuthService } from './auth.service';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService {

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(): boolean {
    if(!this.auth.isAuthenticated())
    {
      this.router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
