import { Component, OnInit, ViewChild } from "@angular/core";
import { NgForm } from "@angular/forms";
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from "@angular/material/snack-bar";
import {
  ItemMovie,
  MoviePagination,
} from "src/app/core/models/movieManagement";
import { MoviemanagementService } from "src/app/core/services/movieManagement/moviemanagement.service";
import * as dayjs from "dayjs";
import { MatDialog } from "@angular/material/dialog";
import { ModaleditmovieComponent } from "../component/modaleditmovie/modaleditmovie.component";
import { ModaladdmovieComponent } from "../component/modaladdmovie/modaladdmovie.component";
import { ModalschedulemovieComponent } from "../component/modalschedulemovie/modalschedulemovie.component";

@Component({
  selector: "app-moviemanagement",
  templateUrl: "./moviemanagement.component.html",
  styleUrls: ["./moviemanagement.component.scss"],
})
export class MoviemanagementComponent implements OnInit {
  @ViewChild("formSearchMovie") formSearchMovie!: NgForm;
  @ViewChild("formSearchMovieDate") formSearchMovieDate!: NgForm;

  maNhom: string = "GP01";
  searchMovie: string = "";
  messageDelete: any;
  listMoviePagination?: MoviePagination;
  arrayListMovie!: ItemMovie[];

  // pagination
  pageIndex = 1;
  pageSize = 5;
  // pagination

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  constructor(
    private movieManagementService: MoviemanagementService,
    private snackBar: MatSnackBar,
    private modal: MatDialog,
  ) { }

  displayedColumns: string[] = [
    "stt",
    "maPhim",
    "tenPhim",
    "trailer",
    "hinhAnh",
    "moTa",
    "ngayKhoiChieu",
    "danhGia",
    "setting",
  ];
  public arrMaNhom: Array<any> = [
    "GP01",
    "GP02",
    "GP03",
    "GP04",
    "GP05",
    "GP06",
    "GP07",
    "GP08",
    "GP09",
    "GP10",
  ];

  ngOnInit(): void {
    this.getMoviePaginations();
    this.movieManagementService.shareStatusUpdate.subscribe(data => {
      if (data === 200) {
        this.getMoviePaginations();
      }
    })
  }

  getMoviePaginations() {
    this.movieManagementService
      .getMoviePagination(this.maNhom, this.pageIndex, this.pageSize)
      .subscribe((data) => {
        this.listMoviePagination = data;
        data.items.forEach(item => {
          let https = item.hinhAnh.split(":");
          let fixHttps = https[0] + "s:" + https[1];
          item.hinhAnh = fixHttps
        })
        this.arrayListMovie = data.items;
      });
  }

  getGroupCode(maNhom: string) {
    this.maNhom = maNhom;
    this.movieManagementService
      .getMoviePagination(maNhom, this.pageIndex, this.pageSize)
      .subscribe((data) => {
        this.listMoviePagination = data;
        data.items.forEach(item => {
          let https = item.hinhAnh.split(":");
          let fixHttps = https[0] + "s:" + https[1];
          item.hinhAnh = fixHttps
        })
        this.arrayListMovie = data.items;
      });
  }

  getValuePagination(event?: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.movieManagementService
      .getMoviePagination(this.maNhom, this.pageIndex, this.pageSize)
      .subscribe((data) => {
        data.items.forEach(item => {
          let https = item.hinhAnh.split(":");
          let fixHttps = https[0] + "s:" + https[1];
          item.hinhAnh = fixHttps
        })
        this.arrayListMovie = data.items;
      });
  }

  handleSearchMovie() {
    this.searchMovie = this.formSearchMovie.value.searchMovie;
    this.movieManagementService
      .getMoviePaginationSearch(
        this.maNhom,
        this.formSearchMovie.value.searchMovie,
        this.pageIndex,
        this.pageSize
      )
      .subscribe((data) => {
        this.listMoviePagination = data;
        data.items.forEach(item => {
          let https = item.hinhAnh.split(":");
          let fixHttps = https[0] + "s:" + https[1];
          item.hinhAnh = fixHttps
        })
        this.arrayListMovie = data.items;
      });
    if (this.searchMovie === "") {
      this.getMoviePaginations();
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
    let formDate = dayjs(this.formSearchMovieDate.value.toDate).format(
      "DD/MM/YYYY"
    );
    let toDate = dayjs(this.formSearchMovieDate.value.formDate).format(
      "DD/MM/YYYY"
    );
    this.movieManagementService
      .getMoviePaginationSearchDate(
        this.maNhom,
        tenPhim,
        this.pageIndex,
        this.pageSize,
        toDate,
        formDate
      )
      .subscribe((data) => {
        this.listMoviePagination = data;
        data.items.forEach(item => {
          let https = item.hinhAnh.split(":");
          let fixHttps = https[0] + "s:" + https[1];
          item.hinhAnh = fixHttps
        })
        this.arrayListMovie = data.items;
      });
  }

  deleteMovies(maPhim: number) {
    this.movieManagementService.deleteMovie(maPhim).subscribe(
      (data) => {
        this.messageDelete = data;
        let cloneArray = [...this.arrayListMovie];
        let index = cloneArray.findIndex((item) => item.maPhim === maPhim);
        if (index !== -1) {
          cloneArray.splice(index, 1);
          this.arrayListMovie = cloneArray;
        }
        this.snackBar.open(this.messageDelete, "", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
      },
      (error) => {
        this.snackBar.open(error.error, "", {
          horizontalPosition: this.horizontalPosition,
          verticalPosition: this.verticalPosition,
          duration: this.durationInSeconds * 1000,
        });
      }
    );
  }

  editMovie(data: Object) {
    this.movieManagementService.setCurrentEditMovie(data)
    this.modal.open(ModaleditmovieComponent)
  }

  scheduleMovie(maPhim: number) {
    this.movieManagementService.setCurrentEditMovie(maPhim)
    this.modal.open(ModalschedulemovieComponent)
  }

  addMovie() {
    this.modal.open(ModaladdmovieComponent)
  }
}
