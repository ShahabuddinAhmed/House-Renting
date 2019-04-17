import { JwtHelperService } from '@auth0/angular-jwt';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {

  jwtHelper = new JwtHelperService();
    roleMatch: boolean;

  constructor(public auth: AuthService, public router: Router) { }

  canActivate(route: ActivatedRouteSnapshot): boolean
  {
      const expectedRole = route.data.expectedRole;

      if (this.auth.isTokenExit()) {
        this.router.navigate(['/admin-login']);
          return false;
      }

      const token = localStorage.getItem('token');

      const tokenPayload = this.jwtHelper.decodeToken(token);
      this.roleMatch = false;
      if (tokenPayload.roll === expectedRole) {
        this.roleMatch = true;
      }
      if (!this.auth.isAuthenticated() || !this.roleMatch) {
          this.router.navigate(['/admin-login']);
          return false;
      }

      return true;
  }
}
