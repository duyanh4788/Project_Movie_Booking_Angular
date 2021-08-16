import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { DanhSachRap, InfoCinema, InfoGroupCinema } from 'src/app/core/models/movieManagement';
import { MoviemanagementService } from 'src/app/core/services/movieManagement/moviemanagement.service';
import { MoviemanagementComponent } from '../../moviemanagement/moviemanagement.component';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-modalschedulemovie',
  templateUrl: './modalschedulemovie.component.html',
  styleUrls: ['./modalschedulemovie.component.scss']
})
export class ModalschedulemovieComponent implements OnInit {

  maPhim: number = 0;
  maRap: number = 0;
  formCreatSchedule: any;
  infoCinema?: InfoCinema[];
  infoGroupCinema?: InfoGroupCinema[];
  danhSachRap?: DanhSachRap[];

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  constructor(@Inject(MAT_DIALOG_DATA) public movieManagementComponent: MoviemanagementComponent, private movieManagementService: MoviemanagementService, private modal: MatDialog, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.movieManagementService.shareCodeMovie.subscribe(data => {
      this.maPhim = data
    });
    this.scheDuleFormMovie();
    this.getInfoCinemas();
  }

  getInfoCinemas() {
    this.movieManagementService.getInfoCinema().subscribe((data) => {
      this.infoCinema = data
    })
  }

  scheDuleFormMovie() {
    this.formCreatSchedule = new FormGroup({
      'maPhim': new FormControl(this.maPhim, [Validators.required]),
      'ngayChieuGioChieu': new FormControl(null, [Validators.required]),
      'maRap': new FormControl(null, [Validators.required]),
      'giaVe': new FormControl(null, [Validators.required]),
    })
  }


  getCodeCinema(maHeThongRap: string) {
    this.movieManagementService.getInfoGroupCinema(maHeThongRap).subscribe(data => {
      this.infoGroupCinema = data
    })
  }
  getListCinema(maCumRap: string) {
    let item = this.infoGroupCinema?.find(item => item.maCumRap === maCumRap)
    this.danhSachRap = item?.danhSachRap
  }
  getTheaterCode(maRap: number) {
    this.maRap = maRap;
  }

  handleSubmit() {
    this.formCreatSchedule.value.maRap = this.maRap
    this.formCreatSchedule.value.giaVe = parseInt(this.formCreatSchedule.value.giaVe)
    this.formCreatSchedule.value.ngayChieuGioChieu = dayjs(this.formCreatSchedule.value.ngayChieuGioChieu).format("DD/MM/YYYY hh:mm:ss");
    this.movieManagementService.creatSchedule(this.formCreatSchedule.value).subscribe(data => {
      this.snackBar.open("Tạo Lịch Chiếu Thành Công", "", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
      this.modal.closeAll();
    }, error => {
      this.snackBar.open(error.error, "", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    })
  }

}
