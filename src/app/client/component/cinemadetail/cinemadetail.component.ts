import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CinemaDetail,LstCumRap,MovieSchedule } from 'src/app/core/models/cinemadetail';
import { CinemaDetailService } from 'src/app/core/services/cinemaDetail/cinema-detail.service';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-cinemadetail',
  templateUrl: './cinemadetail.component.html',
  styleUrls: ['./cinemadetail.component.scss']
})
export class CinemadetailComponent implements OnInit {

  cinemaDetails!: CinemaDetail[];
  lstCumRap!: LstCumRap;
  maHeThongRap : string = "";
  danhSachPhims: any;
  timeMovie: any;
  infoTimeMovie?: MovieSchedule;
  maPhim?: string;
  giaVe?: string;
  timerStart: any;
  timerEnd: any;
  itemDetails:any;
  detailCinema?:CinemaDetail;

  constructor(public loadingService: LoadingService, public cinemaDetailService: CinemaDetailService , private activatedRoute : ActivatedRoute, public router:Router) { }

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
  }

  getListCinema(){
    this.activatedRoute.params.subscribe((res) => {
      this.maHeThongRap = res.maHeThongRap;
      this.cinemaDetailService.getListCinemaDetail(res.maHeThongRap).subscribe(data=>{
        this.cinemaDetails = data;

      })
    })
  }
  getCodeImg(maHeThongRap:string){
    this.cinemaDetailService.getListCinemaDetail(maHeThongRap).subscribe((data) =>{
      this.itemDetails = this.imageCinema.find(item=>item.code === maHeThongRap);
      let items = data.find(item=>item.maHeThongRap === maHeThongRap);
      this.detailCinema = items;
    })
  }
  showGroupCinema(dsPhim:any){
    this.danhSachPhims = dsPhim;
  }
  showTime(dsLichChieu: any, maPhim: any){
    this.timeMovie = dsLichChieu;
    this.maPhim = maPhim;
  }
  showInfoMovieTime(dsNgayChieu: any){
    this.infoTimeMovie = dsNgayChieu;
    this.giaVe = this.infoTimeMovie?.giaVe.toLocaleString();

    //set time + 2 hours
    this.timerStart = this.infoTimeMovie?.ngayChieuGioChieu.slice(11, 16);
    let dateFormat = new Date()
    dateFormat.setHours(this.timerStart.slice(0, 2), this.timerStart.slice(3), 0)
    dateFormat.setHours(dateFormat.getHours() + 2)
    this.timerEnd = dateFormat.toLocaleTimeString("en-GB").slice(0, 5)
    this.timerEnd.slice(11, 16)
  }
  bookingTicket(maLichChieu:any){
    this.router.navigate([`/booking/${maLichChieu}`]);
  }
}
