import { Component, OnInit } from "@angular/core";
import { ThemePalette } from "@angular/material/core";
import { MatDialog } from "@angular/material/dialog";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";
import { ActivatedRoute, Router } from "@angular/router";
import { Subscription } from "rxjs";
import {
  ImagesCinema,
  LogoCinemaMovieDetail,
  MovieDetail,
  ScheDuleListMovie,
  ScheDuleMovie,
} from "src/app/core/models/movieDetail";
import { MoviedetailService } from "src/app/core/services/movieDetail/moviedetail.service";
import { SharemodalvideoService } from "src/app/core/shared/shareData/shareModalVideo/sharemodalvideo.service";
import { ModalvideoComponent } from "../modalvideo/modalvideo.component";

@Component({
  selector: "app-moviedetail",
  templateUrl: "./moviedetail.component.html",
  styleUrls: ["./moviedetail.component.scss"],
})
export class MoviedetailComponent implements OnInit {
  maPhim: string = "";
  danhGia: number = 0;
  imagesCinema?: ImagesCinema;
  timerStart: any;
  timerEnd: string = "";
  scheduleLenght: number = 0
  movieDetail?: MovieDetail;
  scheDuleMovie?: ScheDuleMovie[];
  scheDuleListMovie: ScheDuleListMovie | undefined;
  logoCinemaMovieDetail?: LogoCinemaMovieDetail[];
  // material
  color: ThemePalette = "warn";
  mode: ProgressSpinnerMode = "determinate";
  value = this.danhGia;
  // material

  private subInfoMovie = new Subscription();
  private subLogoCinema = new Subscription();

  imageCinema = [
    { code: "BHDStar", img: "../../../../assets/images/BHDStar.jpg" },
    { code: "CGV", img: "../../../../assets/images/CGV.jpg" },
    { code: "CineStar", img: "../../../../assets/images/CineStar.jpg" },
    { code: "Galaxy", img: "../../../../assets/images/Galaxy.jpg" },
    { code: "LotteCinima", img: "../../../../assets/images/LotteCinima.jpg" },
    { code: "MegaGS", img: "../../../../assets/images/MegaGS.jpg" },
  ];

  constructor(
    private activated: ActivatedRoute,
    private movieDetailService: MoviedetailService,
    public modal: MatDialog,
    private router: Router,
    private shareModalVideoService: SharemodalvideoService,
  ) { }

  ngOnInit(): void {
    this.activated.params.subscribe((result) => {
      this.maPhim = result.maPhim;
    });
    this.getInfoMovieS();
    this.getLogoCinema();
  }

  getInfoMovieS() {
    this.subInfoMovie.add(
      this.movieDetailService.getInfoMovie(this.maPhim).subscribe((data) => {
        this.movieDetail = data;
        this.danhGia = this.movieDetail.danhGia * 10;
      })
    );
  }

  showModalVideo(trailer: any) {
    let linkYoutube = "https://www.youtube.com/embed/";
    let fixTrailer = "";
    let linkOne = trailer.split("=");
    let linkTwo = trailer.split("/");
    if (linkOne.length == 2) {
      fixTrailer = linkYoutube + linkOne[1];
    } else if (linkTwo.length == 4) {
      fixTrailer = linkYoutube + linkTwo[3];
    } else if (linkTwo.length == 5) {
      fixTrailer = linkYoutube + linkTwo[4];
    }
    this.shareModalVideoService.getModalVideo(fixTrailer);
    this.modal.open(ModalvideoComponent);
  }

  getLogoCinema() {
    this.subLogoCinema.add(
      this.movieDetailService.getLogoCinemaDetailMovie().subscribe((data) => {
        this.logoCinemaMovieDetail = data;
      })
    );
  }

  getCodeCinema(maHeThongRap: string) {
    this.scheDuleListMovie = undefined;
    this.scheDuleMovie = this.movieDetail?.lichChieu;
    if (this.scheDuleMovie) {
      this.scheDuleMovie = this.scheDuleMovie.filter(item => item.thongTinRap.maHeThongRap === maHeThongRap)
      this.scheduleLenght = this.scheDuleMovie.length
      this.imagesCinema = this.imageCinema.find(item => item.code === maHeThongRap)
    }
  }

  getSchedule(ngayChieuGioChieu: string) {
    this.scheDuleListMovie = this.scheDuleMovie?.find(item => item.ngayChieuGioChieu === ngayChieuGioChieu)
    console.log(this.scheDuleListMovie);

    // code set time + 2h
    this.timerStart = this.scheDuleListMovie?.ngayChieuGioChieu.slice(11, 16);
    let dateFormat = new Date()
    dateFormat.setHours(this.timerStart.slice(0, 2), this.timerStart.slice(3), 0)
    dateFormat.setHours(dateFormat.getHours() + 2)
    this.timerEnd = dateFormat.toLocaleTimeString("en-GB").slice(0, 5)
    this.timerEnd.slice(11, 16)
  }

  bookingTicket(maLichChieu: number) {
    this.router.navigate([`/booking/${maLichChieu}`])
  }

  ngOnDestroy() {
    this.subInfoMovie.unsubscribe();
    this.subLogoCinema.unsubscribe();
  }
}
