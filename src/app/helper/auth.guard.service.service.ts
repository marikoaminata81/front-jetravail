import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { CanActivate } from '@angular/router';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenserviceService } from '../service/tokenservice.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(
    private router: Router,
    private tokenService: TokenserviceService
    ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {


      if(this.tokenService.isLogged()){
        return true
      }

      return this.router.navigate(['auth'])
  }
}
