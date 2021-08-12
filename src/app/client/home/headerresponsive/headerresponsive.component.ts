import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { LogoCinemaHeader } from 'src/app/core/models/header';
import { HeaderService } from 'src/app/core/services/header/header.service';
import { SigninService } from 'src/app/core/services/signin/signin.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';

@Component({
  selector: 'app-headerresponsive',
  templateUrl: './headerresponsive.component.html',
  styleUrls: ['./headerresponsive.component.scss']
})
export class HeaderresponsiveComponent implements OnInit {

  userNameSigin: any = null;
  userTypeCode: any = null;
  panelOpenState = false;
  logoCinemaHeader: LogoCinemaHeader[] | undefined;

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, private signinService: SigninService, private headerService: HeaderService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.setUserNameLogin();
    this.getListLogoCinemaS();
  }
  onSidenavClose = () => {
    this.sidenavClose.emit();  // đóng sidenav
  };
  handleLogOut() {
    this.userNameSigin = null;
    localStorage.clear();
    this.snackBar.open("Đăng Xuất Thành Công", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
    this.router.navigate(["/signin"]);
  }
  setUserNameLogin() {
    this.signinService.shareUserName.subscribe((data) => this.userNameSigin = data);
    this.signinService.shareUserTypeCode.subscribe((data) => {
      this.userTypeCode = data;
    });
  }
  getListLogoCinemaS() {
    this.headerService.getListLogoCinema().subscribe((data) => {
      this.logoCinemaHeader = data
    })
  }
}
