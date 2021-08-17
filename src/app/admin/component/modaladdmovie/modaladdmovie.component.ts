import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import * as dayjs from 'dayjs';
import { MoviemanagementService } from 'src/app/core/services/movieManagement/moviemanagement.service';
import { MoviemanagementComponent } from '../../moviemanagement/moviemanagement.component';

@Component({
  selector: 'app-modaladdmovie',
  templateUrl: './modaladdmovie.component.html',
  styleUrls: ['./modaladdmovie.component.scss']
})
export class ModaladdmovieComponent implements OnInit {

  @ViewChild('formAddMovie') formAddMovie!: NgForm

  imgShowLocal: any;
  hinhAnh: any;

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  constructor(@Inject(MAT_DIALOG_DATA) public movieManagementComponent: MoviemanagementComponent, private movieManagementService: MoviemanagementService, private modal: MatDialog, private snackBar: MatSnackBar,) { }

  public arrMaNhom: Array<any> = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  ngOnInit(): void {
  }

  getFileImage(event: any) {
    let target = event.target.files[0]
    if (target) {
      const reader = new FileReader();
      reader.onload = e => this.imgShowLocal = reader.result;
      reader.readAsDataURL(target);
    }
    this.hinhAnh = target;
  }

  handelSubmit() {
    this.formAddMovie.value.hinhAnh = this.hinhAnh;
    this.formAddMovie.value.ngayKhoiChieu = dayjs(this.formAddMovie.value.ngayKhoiChieu).format("DD/MM/YYYY")
    console.log(this.formAddMovie.value);
    let formData = new FormData;
    for (let key in this.formAddMovie.value) {
      formData.append(key, this.formAddMovie.value[key])
    }
    this.movieManagementService.addMovie(formData).subscribe((data) => {
      this.movieManagementService.setCurrentStatusAddMovie(200)
      this.snackBar.open("Thêm Phim Thành Công", "", {
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
