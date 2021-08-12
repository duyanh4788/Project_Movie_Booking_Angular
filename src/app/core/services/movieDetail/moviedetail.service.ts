import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogoCinemaMovieDetail, MovieDetail } from '../../models/movieDetail';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviedetailService {

  constructor(private apiService: ApiService) { }

  getInfoMovie(maPhim: string): Observable<MovieDetail> {
    let url = `QuanLyPhim/LayThongTinPhim?MaPhim=${maPhim}`;
    return this.apiService.getApi<MovieDetail>(url)
  }

  getLogoCinemaDetailMovie() {
    let url = "QuanLyRap/LayThongTinHeThongRap"
    return this.apiService.getApiLogoCinema<LogoCinemaMovieDetail[]>(url)
  }
}
