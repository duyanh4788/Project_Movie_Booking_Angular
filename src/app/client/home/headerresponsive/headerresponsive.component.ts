import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { LogoCinemaHeader } from 'src/app/core/models/header';
import { HeaderService } from 'src/app/core/services/header/header.service';
import { SigninService } from 'src/app/core/services/signin/signin.service';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { CinemaDetailService } from 'src/app/core/services/cinemaDetail/cinema-detail.service';

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

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  durationInSeconds = 2;
  // snackbar

  @Output() sidenavClose = new EventEmitter();

  constructor(private router: Router, private signinService: SigninService, private cinemaDetailService: CinemaDetailService, private headerService: HeaderService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.setUserNameLogin();
    this.getListLogoCinemaS();
  }
  onSidenavClose = () => {
    this.sidenavClose.emit();  // đóng sidenav
  };
  handleLogOut() {
    this.signinService.setCurrentUserName(localStorage.removeItem("hoTen"))
    this.signinService.setCurrentAccessToken(localStorage.removeItem("accessToken"))
    this.signinService.setCurrentUserTypeCode(localStorage.removeItem("maLoaiNguoiDung"))
    this.snackBar.open("Đăng Xuất Thành Công", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
    this.router.navigate(["/signin"]);
  }

  setUserNameLogin() {
    this.signinService.shareUserName.subscribe((data) => {
      this.userNameSigin = data
    });
    this.signinService.shareUserTypeCode.subscribe((data) => {
      this.userTypeCode = data;
    });
  }

  getListLogoCinemaS() {
    this.headerService.getListLogoCinema().subscribe((data) => {
      data.forEach(item => {
        let https = item.logo.split(":");
        let fixHttps = https[0] + "s:" + https[1];
        item.logo = fixHttps
      })
      this.logoCinemaHeader = data
    })
  }

  routerLinkCinema(maHeThongRap: string) {
    this.cinemaDetailService.setCurrentSetCinemaDetail(200)
    this.router.navigate([`/cinemadetail/${maHeThongRap}`])
    this.sidenavClose.emit();
  }
}
