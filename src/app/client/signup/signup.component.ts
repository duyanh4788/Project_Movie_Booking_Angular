import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import { UserSignUp } from "src/app/core/models/signUp";
import { LoadingService } from "src/app/core/services/loading/loading.service";
import { SignupService } from "src/app/core/services/signup/signup.service";
import ValidationMatchPass from "./validationMatch";

@Component({
  selector: "app-signup",
  templateUrl: "./signup.component.html",
  styleUrls: ["./signup.component.scss"],
})
export class SignupComponent implements OnInit {
  notifySignUp: string = "";
  formSignUp!: FormGroup;
  showInfoSignUp?: UserSignUp; // edit chỗ này xem xong xoá comment nha gái

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  public mangMaNhom: Array<any> = [
    "GP01",
    "GP02",
    "GP03",
    "GP04",
    "GP05",
    "GP06",
    "GP07",
    "GP08",
    "GP09",
    "GP010",
  ];

  constructor(
    public loadingService: LoadingService,
    private signupService: SignupService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.loadingService.hidden();
    this.formSignUp = new FormGroup({
      taiKhoan: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      matKhau: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-zd$@$!%*?&].{8,}"
        ),
      ]),
      conFirmMatKhau: new FormControl(null),
      hoTen: new FormControl("", [
        Validators.required,
        Validators.minLength(3),
      ]),
      maNhom: new FormControl(""),
      email: new FormControl("", [
        Validators.required,
        Validators.pattern(
          "[a-zA-Z0-9.-_]{1,}@[a-zA-Z.-]{2,}[.]{1}[a-zA-Z]{2,}"
        ),
      ]),
      soDt: new FormControl("", [
        Validators.required,
        Validators.pattern("^[0-9]*$"),
      ]),
      maLoaiNguoiDung: new FormControl("Khách Hàng"),
    }, {
      // ValidationMatchPass => import ./validationMatch.ts
      validators: [ValidationMatchPass.match('matKhau', 'conFirmMatKhau')]
    });
  }

  handleSignUp() {
    if (this.formSignUp.valid) {

      this.signupService.postSignUp(this.formSignUp.value).subscribe((res) => {
        console.log(res);
        this.showInfoSignUp = res;
        this.snackBar.open("Đăng Kí Thành Công", "", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
        this.formSignUp.reset();
        this.onClear();
      }, (error) => {
        console.log(error.error);
        this.notifySignUp = error.error;
      })

      this.signupService.postSignUp(this.formSignUp.value).subscribe(
        (res) => {
          console.log(res);
          this.showInfoSignUp = res;
          this.snackBar.open("Đăng Kí Thành Công", "", {
            horizontalPosition: this.horizontalPosition,
            verticalPosition: this.verticalPosition,
            duration: this.durationInSeconds * 1000,
          });
          this.onClear();
        },
        (error) => {
          console.log(error.error);
          this.notifySignUp = error.error;
        }
      );
    }
  }

  onClear() {
    this.formSignUp.reset();
  }
  
}
