import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { SigninService } from '../../services/signin/signin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private signinService: SigninService, private router: Router, private snackBar: MatSnackBar) { }

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 5;
  // snackbar

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userTypeCode = this.signinService.getCurrentUserTypeCode()
    if (userTypeCode !== "QuanTri") {
      this.snackBar.open("Bạn Không Phải Admin", "", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
      this.router.navigate(['/'])
      return false;
    }
    if (userTypeCode && userTypeCode === "QuanTri") {
      return true
    }
    return false
  }

}
