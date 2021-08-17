import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaDetail, MovieSchedule, ShowImageMovie } from 'src/app/core/models/cinemadetail';
import { DanhSachPhim, LstLichChieuTheoPhim } from 'src/app/core/models/navigationtab';
import { CinemaDetailService } from 'src/app/core/services/cinemaDetail/cinema-detail.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-cinemadetail',
  templateUrl: './cinemadetail.component.html',
  styleUrls: ['./cinemadetail.component.scss']
})
export class CinemadetailComponent implements OnInit {

  cinemaDetails!: CinemaDetail[];
  danhSachPhims?: DanhSachPhim[];
  detailCinema?: CinemaDetail;
  scheDuleMovie?: LstLichChieuTheoPhim[];
  showImageMovie?: ShowImageMovie;

  infoTimeMovie?: MovieSchedule;

  maHeThongRap: string = "";
  maPhim?: number;
  giaVe?: string;
  timerStart: any;
  timerEnd: any;

  constructor(public loadingService: LoadingService, public cinemaDetailService: CinemaDetailService, private activatedRoute: ActivatedRoute, public router: Router) { }

  imageCinema = [
    { code: "BHDStar", img: "../../../../assets/images/BHDStar.jpg" },
    { code: "CGV", img: "../../../../assets/images/CGV.jpg" },
    { code: "CineStar", img: "../../../../assets/images/CineStar.jpg" },
    { code: "Galaxy", img: "../../../../assets/images/Galaxy.jpg" },
    { code: "LotteCinima", img: "../../../../assets/images/LotteCinima.jpg" },
    { code: "MegaGS", img: "../../../../assets/images/MegaGS.jpg" },
  ];

  ngOnInit(): void {
    this.loadingService.hidden();
    this.getListCinema();
    this.cinemaDetailService.shareSetCinemaDetail.subscribe(data => {
      if (data === 200) {
        this.danhSachPhims = undefined;
        this.infoTimeMovie = undefined;
        this.scheDuleMovie = undefined;
        this.showImageMovie = undefined;
      }
    })
  }

  getListCinema() {
    this.activatedRoute.params.subscribe((res) => {
      this.maHeThongRap = res.maHeThongRap;
      this.cinemaDetailService.getListCinemaDetail(res.maHeThongRap).subscribe(data => {
        this.cinemaDetails = data;
      })
    })
  }
  showGroupCinema(danhSachPhim: Array<any>) {
    this.infoTimeMovie = undefined;
    this.scheDuleMovie = undefined;
    this.showImageMovie = undefined;
    danhSachPhim.forEach(item => {
      let https = item.hinhAnh.split(":");
      let fixHttps = https[0] + "s:" + https[1];
      item.hinhAnh = fixHttps
    })
    this.danhSachPhims = danhSachPhim;
  }
  showScheduleMovie(lichChieuPhim: Array<any>, maPhim: number, items: any) {
    this.showImageMovie = items;
    this.infoTimeMovie = undefined;
    this.scheDuleMovie = lichChieuPhim;
    this.maPhim = maPhim;
  }
  showInfoMovieTime(items: any) {
    this.infoTimeMovie = items;
    this.giaVe = this.infoTimeMovie?.giaVe.toLocaleString();
    //set time + 2 hours
    this.timerStart = this.infoTimeMovie?.ngayChieuGioChieu.slice(11, 16);
    let dateFormat = new Date()
    dateFormat.setHours(this.timerStart.slice(0, 2), this.timerStart.slice(3), 0)
    dateFormat.setHours(dateFormat.getHours() + 2)
    this.timerEnd = dateFormat.toLocaleTimeString("en-GB").slice(0, 5)
    this.timerEnd.slice(11, 16)
  }
  bookingTicket(maLichChieu: any) {
    this.router.navigate([`/booking/${maLichChieu}`]);
  }
}
