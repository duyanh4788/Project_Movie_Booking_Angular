import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListTicket, ListTicketBooking } from '../../models/booking';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private apiService: ApiService) { }

  getListTicket(maLichChieu: string): Observable<ListTicket> {
    let url = `QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`;
    return this.apiService.getApi<ListTicket>(url)
  }

  postBookingMovie(listTicket: object): Observable<ListTicketBooking> {
    console.log(listTicket);
    let url = "QuanLyDatVe/DatVe";
    return this.apiService.postApiToken(url, listTicket, { responseType: "text" })
  }
}
