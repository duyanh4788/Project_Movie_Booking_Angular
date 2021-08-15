import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MoviePagination } from '../../models/movieManagement';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviemanagementService {

  constructor(private apiService: ApiService) { }

  getMoviePaginationSearch(maNhom: string, tenPhim: string, soTrang: number, soPhanTu: number): Observable<MoviePagination> {
    let url = `QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=${maNhom}&tenPhim=${tenPhim}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}`
    return this.apiService.getApi<MoviePagination>(url)
  }

  getMoviePaginationSearchDate(maNhom: string, tenPhim: string, soTrang: number, soPhanTu: number, tuNgay: string, denNgay: string): Observable<MoviePagination> {
    let url = `QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=${maNhom}&tenPhim=${tenPhim}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}&tuNgay=${tuNgay}&denNgay=${denNgay}`
    return this.apiService.getApi<MoviePagination>(url)
  }

  getMoviePagination(maNhom: string, soTrang: number, soPhanTu: number): Observable<MoviePagination> {
    let url = `QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=${maNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}`
    return this.apiService.getApi<MoviePagination>(url)
  }
}
