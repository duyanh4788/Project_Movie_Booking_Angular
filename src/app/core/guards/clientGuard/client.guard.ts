import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from '../../services/signin/signin.service';

@Injectable({
  providedIn: 'root'
})
export class ClientGuard implements CanActivate {

  constructor(private signinService: SigninService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userTypeCode = this.signinService.getCurrentUserTypeCode()

    if (userTypeCode === null) {
      this.router.navigate(['/']);
      return false;
    }
    if (userTypeCode !== null) {
      return true;
    }
    return false;
  }

}
