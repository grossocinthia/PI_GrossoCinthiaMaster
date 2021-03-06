import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from './token-service.service';

@Injectable({
  providedIn: 'root'
})
export class GuardsGuard implements CanActivate {

  realRol!: string;

  constructor(private tokenService: TokenService, private router: Router ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const expectedRol = route.data['expectedRol'];
      const roles = this.tokenService.getAuthorities();
      this.realRol = 'user';
      roles.forEach(rol => {
        if (rol === 'ROLE_ADMIN') {
          this.realRol = 'admin';
        }
      });
      if (!this.tokenService.getToken() || expectedRol.indexOf(this.realRol) === -1) {
        this.router.navigate(['/']);
        return false;
      }
      return true;
    }
  }
  
  

