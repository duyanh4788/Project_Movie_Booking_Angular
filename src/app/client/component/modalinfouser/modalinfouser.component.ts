import { Component, Inject, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from "@angular/material/snack-bar";
import { InfoUser } from "src/app/core/models/infoUser";
import { InfouserService } from "src/app/core/services/infoUser/infouser.service";
import { SigninService } from "src/app/core/services/signin/signin.service";
import { InfouserComponent } from "../infouser/infouser.component";
import ValidationMatchPass from "./validationMatch";

@Component({
  selector: "app-modalinfouser",
  templateUrl: "./modalinfouser.component.html",
  styleUrls: ["./modalinfouser.component.scss"],
})
export class ModalinfouserComponent implements OnInit {

  infoUser?: InfoUser;
  formEditUser: any; // tag form any ?

  public arrMaNhom: Array<any> = [// arr maNhom render html
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  constructor(
    @Inject(MAT_DIALOG_DATA) public infouserComponent: InfouserComponent,
    private infouserService: InfouserService,
    private signInService: SigninService,
    private modal : MatDialog,
    private snackBar: MatSnackBar,
  ) { }

  ngOnInit(): void {
    this.getInfoUser()
    this.editFormInforUser()
  }

  getInfoUser() {
    this.infoUser = this.infouserService.getCurrentInfoUser();
  }

  editFormInforUser() {
    const userTypeCode = this.signInService.getCurrentUserTypeCode()
    this.formEditUser = new FormGroup({
      'taiKhoan': new FormControl(this.infoUser?.taiKhoan, [Validators.required]),
      'hoTen': new FormControl(this.infoUser?.hoTen, [Validators.required]),
      'matKhau': new FormControl(this.infoUser?.matKhau, [Validators.required]),
      'newPassWord': new FormControl(null),
      'conFirmPassWord': new FormControl(null),
      'email': new FormControl(this.infoUser?.email, [Validators.required]),
      'maNhom': new FormControl(this.infoUser?.maNhom, [Validators.required]),
      'soDT': new FormControl(this.infoUser?.soDT, [Validators.required]),
      'maLoaiNguoiDung': new FormControl(userTypeCode),
    }, {
      // ValidationMatchPass => import ./validationMatch.ts
      validators: [ValidationMatchPass.match('newPassWord', 'conFirmPassWord')]
    })
  }

  handleEditInfoUser() {
    if (this.formEditUser.value.newPassWord !== null) {
      this.formEditUser.value.matKhau = this.formEditUser.value.newPassWord
    }
    const { conFirmPassWord, newPassWord, ..._data } = this.formEditUser.value;
    this.infouserService.putInfoUser(_data).subscribe(data => {
      this.infouserService.setCurrentInfoUser(data);
      localStorage.setItem("hoTen", JSON.stringify(data.hoTen))
      this.signInService.setCurrentUserName(data.hoTen)
      this.modal.closeAll()
    })
    this.snackBar.open("Cập Nhật Thành Công", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

}


