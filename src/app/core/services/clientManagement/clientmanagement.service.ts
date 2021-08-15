import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ClientPagination, Item } from '../../models/clientManagement';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class ClientmanagementService {
  // info Client
  private currentEditClient = new BehaviorSubject({} as Item)
  shareEditClient = this.currentEditClient.asObservable();
  getCurrentEditClient(): any {
    return this.currentEditClient.value;
  }
  setCurrentEditClient(value: any) {
    return this.currentEditClient.next(value);
  }
  // info Client

  // maNhom
  private currentCodeGroup = new BehaviorSubject("" as string)
  shareCodeGroup = this.currentCodeGroup.asObservable();
  getCurrentCodeGroup(): any {
    return this.currentCodeGroup.value;
  }
  setCurrentCodeGroup(value: any) {
    return this.currentCodeGroup.next(value);
  }

  //  call api
  constructor(private apiService: ApiService) { }

  getListClientPaginationSearch(maNhom: string, tuKhoa: string, soTrang: number, soPhanTu: number): Observable<ClientPagination> {
    let url = `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${maNhom}&tuKhoa=${tuKhoa}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}`
    return this.apiService.getApi<ClientPagination>(url)
  }

  getListClientPagination(maNhom: string, soTrang: number, soPhanTu: number): Observable<ClientPagination> {
    let url = `QuanLyNguoiDung/LayDanhSachNguoiDungPhanTrang?MaNhom=${maNhom}&soTrang=${soTrang}&soPhanTuTrenTrang=${soPhanTu}`
    return this.apiService.getApi<ClientPagination>(url)
  }

  deleteClient(taiKhoan: string) {
    let url = `QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`;
    return this.apiService.deleteApi(url, { responseType: "text" });
  }

  putEditClient(data: Object): Observable<Item> {
    let url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
    return this.apiService.putApi(url, data)
  }

}
