import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ItemMovie } from 'src/app/core/models/movieManagement';
import { MoviemanagementService } from 'src/app/core/services/movieManagement/moviemanagement.service';
import { MoviemanagementComponent } from '../../moviemanagement/moviemanagement.component';

@Component({
  selector: 'app-modaleditmovie',
  templateUrl: './modaleditmovie.component.html',
  styleUrls: ['./modaleditmovie.component.scss']
})
export class ModaleditmovieComponent implements OnInit {

  itemMovies?: ItemMovie;
  formEditMovie?: any;
  imgShowLocal: any;

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  constructor(@Inject(MAT_DIALOG_DATA) public movieManagementComponent: MoviemanagementComponent, private movieManagementService: MoviemanagementService, private modal: MatDialog, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    this.getItemMovie();
    this.editFormEditMoive();
  }

  getItemMovie() {
    this.itemMovies = this.movieManagementService.getCurrentEditMovie()
  }

  editFormEditMoive() {
    this.formEditMovie = new FormGroup({
      'maPhim': new FormControl(this.itemMovies?.maPhim, [Validators.required]),
      'tenPhim': new FormControl(this.itemMovies?.tenPhim, [Validators.required]),
      'biDanh': new FormControl(this.itemMovies?.biDanh, [Validators.required]),
      'maNhom': new FormControl(this.itemMovies?.maNhom, [Validators.required]),
      'danhGia': new FormControl(this.itemMovies?.danhGia, [Validators.required]),
      'trailer': new FormControl(this.itemMovies?.trailer, [Validators.required]),
      'hinhAnh': new FormControl(this.itemMovies?.hinhAnh, [Validators.required]),
      'moTa': new FormControl(this.itemMovies?.moTa, [Validators.required]),
    })
  }

  getFileImage(event: any) {
    let target = event.target.files[0]
    if (this.itemMovies) {
      let cloneObject = { ...this.itemMovies }
      if (target) {
        const reader = new FileReader();
        reader.onload = e => this.imgShowLocal = reader.result;
        reader.readAsDataURL(target);
      }
      cloneObject.hinhAnh = target;
      this.itemMovies = cloneObject
    }
  }

  handleEditMovie() {
    this.formEditMovie.value.hinhAnh = this.itemMovies?.hinhAnh;
    let formData = new FormData();
    for (let key in this.formEditMovie.value) {
      formData.append(key, this.formEditMovie.value[key])
    }
    this.movieManagementService.updateMovie(formData).subscribe(data => {
      this.movieManagementService.setCurrentStatusUpdate(200)
      this.snackBar.open("Cập Nhật Thành Công", "", {
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
