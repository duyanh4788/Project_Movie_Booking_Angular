import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LogoCinema, SystemCinema } from '../../models/navigationtab';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class NavigationtabService {

  constructor(private apiService: ApiService) { }

  getLogoCinema(): Observable<LogoCinema[]> {
    let url = "QuanLyRap/LayThongTinHeThongRap";
    return this.apiService.getApiLogoCinema<LogoCinema[]>(url)
  }

  getInfoSystemCinema(maHeThongRap: string): Observable<SystemCinema[]> {
    let url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`;
    return this.apiService.getApi<SystemCinema[]>(url)
  }
}
