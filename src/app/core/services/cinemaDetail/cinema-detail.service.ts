import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { CinemaDetail } from '../../models/cinemadetail';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class CinemaDetailService {

  // info Client
  private currentSetCinemaDetail = new BehaviorSubject(0)
  shareSetCinemaDetail = this.currentSetCinemaDetail.asObservable();
  getCurrentSetCinemaDetail(): any {
    return this.currentSetCinemaDetail.value;
  }
  setCurrentSetCinemaDetail(value: any) {
    return this.currentSetCinemaDetail.next(value);
  }
  // info Client

  constructor(private apiService: ApiService) { }

  getListCinemaDetail(maHeThongRap: string): Observable<CinemaDetail[]> {
    let url = `QuanLyRap/LayThongTinLichChieuHeThongRap?maHeThongRap=${maHeThongRap}&maNhom=GP01`
    return this.apiService.getApi<CinemaDetail[]>(url)
  }
}
