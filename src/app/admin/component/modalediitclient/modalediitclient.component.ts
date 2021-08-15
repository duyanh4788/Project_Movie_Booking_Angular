import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Item } from 'src/app/core/models/clientManagement';
import { ClientmanagementService } from 'src/app/core/services/clientManagement/clientmanagement.service';
import { ClientmannagementComponent } from '../../clientmannagement/clientmannagement.component';
import ValidationMatchPass from './validationMatch';

@Component({
  selector: 'app-modalediitclient',
  templateUrl: './modalediitclient.component.html',
  styleUrls: ['./modalediitclient.component.scss']
})
export class ModalediitclientComponent implements OnInit {

  infoClient?: Item;
  formEditClient: any; // tag form any ?
  maNhom: string = "";

   // snackbar
   horizontalPosition: MatSnackBarHorizontalPosition = "center";
   verticalPosition: MatSnackBarVerticalPosition = "top";
   durationInSeconds = 2;
   // snackbar

  constructor(@Inject(MAT_DIALOG_DATA) public clientMannagementComponent: ClientmannagementComponent, private clientManagementService: ClientmanagementService ,private modal : MatDialog,   private snackBar: MatSnackBar,) { }
  
  ngOnInit(): void {
    this.getEditClient()
    this.editFormEditClient()
  }

  getEditClient() {
    this.infoClient = this.clientManagementService.getCurrentEditClient()
    this.maNhom = this.clientManagementService.getCurrentCodeGroup()
  }

  getTypeCode(event: any) {
    this.formEditClient.value.maLoaiNguoiDung = event.target.value;
  }

  editFormEditClient() {
    this.formEditClient = new FormGroup({
      'taiKhoan': new FormControl(this.infoClient?.taiKhoan, [Validators.required]),
      'hoTen': new FormControl(this.infoClient?.hoTen, [Validators.required]),
      'matKhau': new FormControl(this.infoClient?.matKhau, [Validators.required]),
      'newPassWord': new FormControl(null),
      'conFirmPassWord': new FormControl(null),
      'email': new FormControl(this.infoClient?.email, [Validators.required]),
      'maNhom': new FormControl(this.maNhom),
      'soDt': new FormControl(this.infoClient?.soDt, [Validators.required]),
      'maLoaiNguoiDung': new FormControl(this.infoClient?.maLoaiNguoiDung),
    }, {
      // ValidationMatchPass => import ./validationMatch.ts
      validators: [ValidationMatchPass.match('newPassWord', 'conFirmPassWord')]
    })
  }

  handleEditClient() {
    if (this.formEditClient.value.newPassWord !== null) {
      this.formEditClient.value.matKhau = this.formEditClient.value.newPassWord
    }
    this.formEditClient.value.maNhom = this.maNhom
    const { conFirmPassWord, newPassWord, ..._data } = this.formEditClient.value;
    this.clientManagementService.putEditClient(_data).subscribe(data => {
      this.clientManagementService.setCurrentStatusUpDate(200)
      this.modal.closeAll();
    })
    this.snackBar.open("Cập Nhật Thành Công", "", {
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
      duration: this.durationInSeconds * 1000,
    });
  }

}
