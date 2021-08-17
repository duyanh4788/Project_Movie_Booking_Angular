import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CinemaDetail } from '../../models/cinemadetail';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class CinemaDetailService {

  constructor(private apiService : ApiService) { }

  getListCinemaDetail(maHeThongRap: string): Observable<CinemaDetail[]> {
    let url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    return this.apiService.getApi<CinemaDetail[]>(url)
  }
}
