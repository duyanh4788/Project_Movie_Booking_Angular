import { Injectable } from '@angular/core';
import { ArrayListMovieDropdown, GroupCinema } from '../../models/dropdown';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class DropdownService {

  constructor(private apiSerive: ApiService) { }

  getListMovieDropdown(maNhom: string) {
    let url = `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`
    return this.apiSerive.getApi<ArrayListMovieDropdown[]>(url)
  }

  getGroupCinemaDropDown(maPhim: number) {
    let url = `QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`;
    return this.apiSerive.getApi<GroupCinema>(url)
  }
}
