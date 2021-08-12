import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserSignIn } from '../../models/signIn';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  // accessToken
  private currentAccessToken = new BehaviorSubject(null)
  shareAccessToken = this.currentAccessToken.asObservable();
  getCurrentAccessToken(): any {
    return this.currentAccessToken.value
  }
  setCurrentAccessToken(value: any) {
    this.currentAccessToken.next(value)
  }
  // Account
  private currentUserName = new BehaviorSubject(null)
  shareUserName = this.currentUserName.asObservable();
  getCurrentUserName(): any {
    return this.currentUserName.value
  }
  setCurrentUserName(value: any) {
    this.currentUserName.next(value)
  }
  // userTypeCode
  private currentUserTypeCode = new BehaviorSubject(null)
  shareUserTypeCode = this.currentUserTypeCode.asObservable();
  getCurrentUserTypeCode(): any {
    return this.currentUserTypeCode.value
  }
  setCurrentUserTypeCode(value: any) {
    this.currentUserTypeCode.next(value)
  }

  constructor(private apiService: ApiService) {
    // accessToken
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      this.setCurrentAccessToken(JSON.parse(accessToken))
    }
    // Account
    const hoTen = localStorage.getItem("hoTen");
    if (hoTen) {
      this.setCurrentUserName(JSON.parse(hoTen))
    }
    // userTypeCode
    const maLoaiNguoiDung = localStorage.getItem("maLoaiNguoiDung");
    if (maLoaiNguoiDung) {
      this.setCurrentUserTypeCode(JSON.parse(maLoaiNguoiDung))
    }
  }

  postSignIn(userSignIn: Object): Observable<UserSignIn> {
    let url = `QuanLyNguoiDung/DangNhap`
    return this.apiService.postApi<UserSignIn>(url, userSignIn)
  }
}
