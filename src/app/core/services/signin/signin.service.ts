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
  // hoTen
  private currentUserName = new BehaviorSubject(null)
  shareUserName = this.currentUserName.asObservable();
  getCurrentUserName(): any {
    return this.currentUserName.value
  }
  setCurrentUserName(value: any) {
    this.currentUserName.next(value)
  }
  // Account
  private currentAccount = new BehaviorSubject(null)
  shareAccount = this.currentAccount.asObservable();
  getCurrentAccount(): any {
    return this.currentAccount.value
  }
  setCurrentAccount(value: any) {
    this.currentAccount.next(value)
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
    // hoTen
    const hoTen = localStorage.getItem("hoTen");
    if (hoTen) {
      this.setCurrentUserName(JSON.parse(hoTen))
    }
     // Account
     const taiKhoan = localStorage.getItem("taiKhoan");
     if (taiKhoan) {
       this.setCurrentAccount(JSON.parse(taiKhoan))
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
