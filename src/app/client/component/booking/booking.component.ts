import { Component, OnInit } from "@angular/core";
import { LoadingService } from "src/app/core/services/loading/loading.service";
// import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from "@angular/router";
import { BookingService } from "src/app/core/services/booking/booking.service";
import {
  ListTicket,
  DanhSachGhe,
  ThongTinPhim,
} from "src/app/core/models/booking";
import { SigninService } from "src/app/core/services/signin/signin.service";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";

@Component({
  selector: "app-booking",
  templateUrl: "./booking.component.html",
  styleUrls: ["./booking.component.scss"],
})
export class BookingComponent implements OnInit {

  listTicket?: ListTicket;
  infoMovie!: ThongTinPhim;
  danhSachGhe?: DanhSachGhe[];
  intoMoney: number = 0;
  bookingSuccess: any;

  danhSachVe?: any=[];
  listTicketBooking = {
    maLichChieu: "",
    danhSachVe: [],
    taiKhoanNguoiDung: null,
  }

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 5;
  // snackbar

  constructor(
    private loadingService: LoadingService,
    private bookingService: BookingService,
    private activated: ActivatedRoute,
    private router: Router,
    private signinService: SigninService,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    // check sigin booking
    this.signinService.shareUserName.subscribe((data) => {
      if (!data) {
        this.loadingService.show()
        this.snackBar.open("Bạn Phải Đăng Nhập Để Đặt Vé", "", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
        this.router.navigate(['/signin'], {
          queryParams: { successUrl: this.router.url }
        })
        this.loadingService.hidden()
      }
    })
    //  get value routerlink
    this.activated.params.subscribe((result) => {
      this.listTicketBooking.maLichChieu = result.maLichChieu
      this.bookingService
        .getListTicket(result.maLichChieu)
        .subscribe((data) => {
          const { danhSachGhe, thongTinPhim, ..._data } = data;
          this.danhSachGhe = danhSachGhe;
          // set countdown timer
          this.countdownTimerS();
          let https = thongTinPhim.hinhAnh.split(":");
          let fixHttps = https[0] + "s:" + https[1];
          thongTinPhim.hinhAnh = fixHttps
          this.infoMovie = thongTinPhim;
        });
    });
  }

  selectChair(maGhe: any) {
    if (this.danhSachGhe) {
      let cloneArray = [...this.danhSachGhe];
      let index = cloneArray.findIndex((item) => item.maGhe === maGhe);
      if (index !== -1) {
        let oldChair = cloneArray[index];
        let newChair = { ...oldChair, choiceChair: !oldChair.choiceChair };
        cloneArray[index] = newChair;
        const { choiceChair, daDat, tenGhe, loaiGhe, maRap, stt, taiKhoanNguoiDat, ..._data } = newChair
        this.danhSachVe.push(_data)
        this.danhSachGhe = cloneArray;
        let ketQua = this.danhSachGhe
          .filter((item) => item.choiceChair)
          .reduce((tong, item) => {
            return (tong += item.giaVe);
          }, 0);
        this.intoMoney = ketQua;
      }
    }
  }

  // countdown Timer
  count: any = 15;
  minutes: any;
  second: any;
  countDownTimer: any;
  clearTimer: any;
  valid: Boolean = true;
  countdownTimerS() {
    const secondPassed = () => {
      this.minutes = Math.round((this.count - 30) / 60);
      this.second = this.count % 60;
      if (this.second < 10) {
        this.second = "0" + this.second;
      }
      if (this.minutes < 10) {
        this.minutes = "0" + this.minutes;
      }
      this.countDownTimer = this.minutes + ":" + this.second;
      if (this.count == 0) {
        this.valid = false;
        clearInterval(this.clearTimer);
      } else this.count--;
    };
    this.clearTimer = setInterval(secondPassed, 1000);
  }
  bokingTicketAgain() {
    this.ngOnInit();
    this.valid = true;
    this.count = 15;
  }
  // countdown Timer

  steperTwo() {
    clearInterval(this.clearTimer);
  }
  backOne() {
    this.intoMoney = 0;
    this.ngOnInit();
    this.count = 15;
    this.valid = true;
  }

  bookingTicket() {
    this.signinService.shareAccount.subscribe(data => {
      this.listTicketBooking.taiKhoanNguoiDung = data
    })
    this.listTicketBooking.danhSachVe = this.danhSachVe;
    this.bookingService.postBookingMovie(this.listTicketBooking).subscribe((data) => {
      this.bookingSuccess = data
      this.snackBar.open(this.bookingSuccess, "", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
      this.router.navigate(['/'])
    })
  }
}
