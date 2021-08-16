import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ItemMovie, MoviePagination } from '../../models/movieManagement';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class MoviemanagementService {
  statusUpdate: number = 0;

  // update movie
  private currentEditMovie = new BehaviorSubject({} as ItemMovie)
  shareEditMovie = this.currentEditMovie.asObservable()
  getCurrentEditMovie() {
    return this.currentEditMovie.value
  }
  setCurrentEditMovie(value: any) {
    this.currentEditMovie.next(value)
  }
  // update movie

  // update movie status
  private currentStatusUpdate = new BehaviorSubject(this.statusUpdate)
  shareStatusUpdate = this.currentStatusUpdate.asObservable()
  getCurrentStatusUpdate() {
    return this.currentStatusUpdate.value
  }
  setCurrentStatusUpdate(value: any) {
    this.statusUpdate = value
    this.currentStatusUpdate.next(this.statusUpdate)
  }
  // update movie status

  // maPhim
  private currentCodeMovie = new BehaviorSubject(0 as number)
  shareCodeMovie = this.currentCodeMovie.asObservable()
  getCurrentCodeMovie() {
    return this.currentCodeMovie.value
  }
  setCurrentCodeMovie(value: any) {
    this.currentCodeMovie.next(value)
  }
  // maPhim

  constructor(private apiService: ApiService) {
    if (this.statusUpdate == 200) {
      this.setCurrentEditMovie(this.statusUpdate)
    }
  }

  // search 
  getMoviePaginationSearch(maNhom: string, tenPhim: string, soTrang: number, soPhanTu: number): Observable<MoviePagination> {
    let url = `QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=${maNhom}&tenPhim=${tenPhim}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}`
    return this.apiService.getApi<MoviePagination>(url)
  }
  //  search date
  getMoviePaginationSearchDate(maNhom: string, tenPhim: string, soTrang: number, soPhanTu: number, tuNgay: string, denNgay: string): Observable<MoviePagination> {
    let url = `QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=${maNhom}&tenPhim=${tenPhim}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}&tuNgay=${tuNgay}&denNgay=${denNgay}`
    return this.apiService.getApi<MoviePagination>(url)
  }
  //  list movie
  getMoviePagination(maNhom: string, soTrang: number, soPhanTu: number): Observable<MoviePagination> {
    let url = `QuanLyPhim/LayDanhSachPhimPhanTrang?MaNhom=${maNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}`
    return this.apiService.getApi<MoviePagination>(url)
  }
  //  delete
  deleteMovie(maPhim: number) {
    let url = `QuanLyPhim/XoaPhim?MaPhim=${maPhim}`;
    return this.apiService.deleteApi(url, { responseType: "text" })
  }
  // update movie
  updateMovie(data: any) {
    let url = 'QuanLyPhim/CapNhatPhimUpload';
    return this.apiService.postApiToken(url, data, { responseType: "text" })
  }
}
