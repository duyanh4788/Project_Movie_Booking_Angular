import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoCinema, MovieSchedule, SystemCinema } from 'src/app/core/models/navigationtab';
import { NavigationtabService } from 'src/app/core/services/navigationtab/navigationtab.service';

@Component({
  selector: 'app-navigationtab',
  templateUrl: './navigationtab.component.html',
  styleUrls: ['./navigationtab.component.scss']
})
export class NavigationtabComponent implements OnInit {
  logoCinema?: LogoCinema[] | null
  systemCinema?: SystemCinema;
  listMovieCinema?: Array<any>;
  movieShowTime?: Array<any>;
  movieSchedule?: MovieSchedule;
  giaVe?: string;
  maPhim?: string;
  maCumRap?: string;
  timerStart: any;
  timerEnd: any;
  itemImages: any;
  constructor(private navigaTiontabService: NavigationtabService, private router: Router) { }

  imageCinema = [
    { code: "BHDStar", img: "../../../../assets/images/BHDStar.jpg" },
    { code: "CGV", img: "../../../../assets/images/CGV.jpg" },
    { code: "CineStar", img: "../../../../assets/images/CineStar.jpg" },
    { code: "Galaxy", img: "../../../../assets/images/Galaxy.jpg" },
    { code: "LotteCinima", img: "../../../../assets/images/LotteCinima.jpg" },
    { code: "MegaGS", img: "../../../../assets/images/MegaGS.jpg" },
  ]

  ngOnInit(): void {
    this.getLocoCinema()
  }

  getLocoCinema() {
    this.navigaTiontabService.getLogoCinema().subscribe((data) => {
      this.logoCinema = data;
    })
  }

  getCodeSysTemCinema(maHeThongRap: string) {
    this.listMovieCinema = undefined;
    this.movieShowTime = undefined;
    this.movieSchedule = undefined;
    this.navigaTiontabService.getInfoSystemCinema(maHeThongRap).subscribe((data) => {
      this.itemImages = this.imageCinema.find(item => item.code === maHeThongRap)
      let items = data.find(item => item.maHeThongRap === maHeThongRap)
      this.systemCinema = items
    })
  }

  getCodeGroupCinema(maCumRap: string) {
    this.movieShowTime = undefined
    this.movieSchedule = undefined;
    this.maCumRap = maCumRap;
    let items = this.systemCinema?.lstCumRap.find(item => item.maCumRap === maCumRap)
    this.listMovieCinema = items?.danhSachPhim
  }

  getShowTimeCodes(lichChieuTheoPhim: any, maPhim: string) {
    this.movieSchedule = undefined;
    this.movieShowTime = lichChieuTheoPhim
    this.maPhim = maPhim
  }

  getScheduleMovie(schedule: any) {
    this.movieSchedule = schedule
    this.giaVe = this.movieSchedule?.giaVe.toLocaleString()
    // code set time + 2h
    this.timerStart = this.movieSchedule?.ngayChieuGioChieu.slice(11, 16);
    let dateFormat = new Date()
    dateFormat.setHours(this.timerStart.slice(0, 2), this.timerStart.slice(3), 0)
    dateFormat.setHours(dateFormat.getHours() + 2)
    this.timerEnd = dateFormat.toLocaleTimeString("en-GB").slice(0, 5)
    this.timerEnd.slice(11, 16)
  }

  bookingTicket(maLichChieu: any) {
    this.router.navigate([`/booking/${maLichChieu}`])
  }

}
