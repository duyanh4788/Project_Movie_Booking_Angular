import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as dayjs from 'dayjs';
import { ArrayListMovieDropdown } from 'src/app/core/models/dropdown';
import { DropdownService } from 'src/app/core/services/dropdown/dropdown.service';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {
  maNhom: string = "GP01";
  nameMovie: string = "Chọn Phim";
  nameGroupCinema: string = "Chọn Rạp";
  nameAddresCinema: string = "Chọn Loại Rạp";
  dateCinema: string = "Chọn Ngày Chiếu";
  timerCinema: string = "Giờ Chiếu";
  showTimeCode: string = "";
  codeMovie: string = "";
  groupCinema?: Array<any> | null;
  sysTemCinema?: Array<any> | null;
  theaterClusterCinema?: Array<any> | null;
  showTimeCinema?: Array<any> | null;


  arrayListMovieDropdown?: ArrayListMovieDropdown[] | null;

  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];

  constructor(private dropdownService: DropdownService, private router: Router) { }

  ngOnInit(): void {
    this.getListMovieDropdows()
  }

  setMaNhom(maNhom: string) {
    this.maNhom = maNhom
    this.dropdownService.getListMovieDropdown(maNhom).subscribe((data) => {
      this.arrayListMovieDropdown = data
    })
    this.nameMovie = "Chọn Phim";
    this.nameGroupCinema = "Chọn Rạp";
    this.sysTemCinema = undefined;
    this.nameAddresCinema = "Chọn Loại Rạp";
    this.theaterClusterCinema = undefined;
    this.dateCinema = "Chọn Ngày Chiếu";
    this.showTimeCinema = undefined;
    this.timerCinema = "Giờ Chiếu";
  }

  getListMovieDropdows() {
    let maNhom = "GP01"
    this.dropdownService.getListMovieDropdown(maNhom).subscribe((data) => {
      this.arrayListMovieDropdown = data
    })
  }

  selectMovie(movie: string, maPhim: number) {
    this.nameMovie = movie
    this.nameGroupCinema = "Chọn Rạp"
    this.nameAddresCinema = "Chọn Loại Rạp";
    this.theaterClusterCinema = undefined;
    this.dateCinema = "Chọn Ngày Chiếu";
    this.showTimeCinema = undefined;
    this.timerCinema = "Giờ Chiếu";
    this.dropdownService.getGroupCinemaDropDown(maPhim).subscribe(data => {
      const { heThongRapChieu, ..._data } = data
      this.sysTemCinema = heThongRapChieu
    })
  }

  selectCinema(cinema: string, cumRapChieu: Array<any>) {
    this.nameGroupCinema = cinema
    this.nameAddresCinema = "Chọn Loại Rạp";
    this.dateCinema = "Chọn Ngày Chiếu";
    this.showTimeCinema = undefined;
    this.timerCinema = "Giờ Chiếu";
    this.theaterClusterCinema = cumRapChieu
  }

  getShowTime(lichChieuPhim: Array<any>, tenCumRap: string) {
    this.dateCinema = "Chọn Ngày Chiếu";
    this.timerCinema = "Giờ Chiếu";
    this.nameAddresCinema = tenCumRap
    this.showTimeCinema = lichChieuPhim
  }

  getDateTimer(dateTime: string, maLichChieu: string) {
    this.showTimeCode = maLichChieu
    let dateFormat = dayjs(dateTime).format("DD-MM-YYYY")
    let timeFormat = dayjs(dateTime).format("HH:MM")
    this.dateCinema = dateFormat
    this.timerCinema = "Giờ Chiếu : " + timeFormat
  }

  bookingTicket(maLichChieu: string) {
    this.router.navigate([`/booking/${maLichChieu}`])
  }
}
