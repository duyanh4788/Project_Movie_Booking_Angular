import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserSignUp } from '../../models/signUp';
import { ApiService } from '../apiService/api.service';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(private apiService:ApiService) { }
  postSignUp(user:Object): Observable<UserSignUp> {
    let url = `QuanLyNguoiDung/DangKy`
    return this.apiService.postApi<UserSignUp>(url,user);
  } 
}
