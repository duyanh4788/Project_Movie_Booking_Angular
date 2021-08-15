import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ItemMovie, MoviePagination } from 'src/app/core/models/movieManagement';
import { MoviemanagementService } from 'src/app/core/services/movieManagement/moviemanagement.service';
import * as dayjs from 'dayjs'

@Component({
  selector: 'app-moviemanagement',
  templateUrl: './moviemanagement.component.html',
  styleUrls: ['./moviemanagement.component.scss'],
})
export class MoviemanagementComponent implements OnInit {

  @ViewChild('formSearchMovie') formSearchMovie!: NgForm;
  @ViewChild('formSearchMovieDate') formSearchMovieDate!: NgForm;

  maNhom: string = "GP01";
  searchMovie: string = "";
  listMoviePagination?: MoviePagination;
  arrayListMovie !: ItemMovie[];

  // pagination
  pageIndex = 1
  pageSize = 5;
  // pagination

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  constructor(private movieManagementService: MoviemanagementService, private snackBar: MatSnackBar) { }

  displayedColumns: string[] = ['stt', 'maPhim', 'tenPhim', 'trailer', 'hinhAnh', 'moTa', 'ngayKhoiChieu', 'danhGia', 'setting'];
  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];

  ngOnInit(): void {
    this.getMoviePaginations()
  }

  getMoviePaginations() {
    this.movieManagementService.getMoviePagination(this.maNhom, this.pageIndex, this.pageSize).subscribe(data => {
      this.listMoviePagination = data;
      this.arrayListMovie = data.items;
    })
  }

  getGroupCode(maNhom: string) {
    this.maNhom = maNhom;
    this.movieManagementService.getMoviePagination(maNhom, this.pageIndex, this.pageSize).subscribe(data => {
      this.listMoviePagination = data;
      this.arrayListMovie = data.items
    })
  }

  getValuePagination(event?: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.movieManagementService.getMoviePagination(this.maNhom, this.pageIndex, this.pageSize).subscribe(data => {
      this.arrayListMovie = data.items;
    })
  }

  handleSearchMovie() {
    this.searchMovie = this.formSearchMovie.value.searchMovie;
    this.movieManagementService.getMoviePaginationSearch(this.maNhom, this.formSearchMovie.value.searchMovie, this.pageIndex, this.pageSize).subscribe(data => {
      this.listMoviePagination = data;
      this.arrayListMovie = data.items
    })
    if (this.searchMovie === "") {
      this.getMoviePaginations()
    }
  }

  // getValueSearch(event: any) {
  //   this.movieManagementService.getMoviePaginationSearch(this.maNhom, event.target.value, this.pageIndex, this.pageSize).subscribe(data => {
  //     this.listMoviePagination = data;
  //     this.arrayListMovie = data.items
  //   })
  //   if (this.searchMovie === "") {
  //     this.getMoviePaginations()
  //   }
  // }

  handleSearchMovieDate() {
    let tenPhim = this.formSearchMovieDate.value.searchDate;
    let formDate = dayjs(this.formSearchMovieDate.value.toDate).format('DD/MM/YYYY');
    let toDate = dayjs(this.formSearchMovieDate.value.formDate).format('DD/MM/YYYY');    
    this.movieManagementService.getMoviePaginationSearchDate(this.maNhom, tenPhim, this.pageIndex, this.pageSize, toDate, formDate).subscribe((data) => {
      this.listMoviePagination = data;
      this.arrayListMovie = data.items
    })

  }

  deleteMovie(maPhim: string) {

  }

  editMovie(data: Object) {

  }

  scheduleMovie(data: Object) {

  }

  addMovie() {

  }

}
