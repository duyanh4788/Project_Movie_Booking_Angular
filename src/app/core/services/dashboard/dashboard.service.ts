import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private apiService: ApiService) { }

  getListMovie(maNhom: string):Observable<any> {
    let url = `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`
    return this.apiService.getApi<any>(url)
  }
  getListClient(maNhom: string):Observable<any> {
    let url = `QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${maNhom}`
    return this.apiService.getApi<any>(url)
  }
}
