import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArrayListMovie } from '../../models/listMovie';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class ListmovieService {

  constructor(private apiService: ApiService) { }

  getListMovie(maNhom: string): Observable<ArrayListMovie[]> {
    let url = `QuanLyPhim/LayDanhSachPhim?maNhom=${maNhom}`
    return this.apiService.getApi<ArrayListMovie[]>(url)
  }
}
