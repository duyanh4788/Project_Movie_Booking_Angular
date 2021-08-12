import { Injectable } from '@angular/core';
import { LogoCinemaHeader } from '../../models/header';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor(private apiService : ApiService) { }

  getListLogoCinema(){
    let url = "QuanLyRap/LayThongTinHeThongRap"
    return this.apiService.getApiLogoCinema<LogoCinemaHeader[]>(url)
  }
}
