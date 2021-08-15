import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { InfoUser } from '../../models/infoUser';
import { ModalInfoUser } from '../../models/modaInfoUser';
import { ApiService } from '../apiService/api.service';

@Injectable({
    providedIn: 'root'
})
export class InfouserService {

    private currentInfoUser = new BehaviorSubject({} as InfoUser)
    shareInfoUser = this.currentInfoUser.asObservable();
    getCurrentInfoUser(): any {
        return this.currentInfoUser.value
    }
    setCurrentInfoUser(value: any) {
        this.currentInfoUser.next(value)
    }

    constructor(private http: ApiService) { }

    postInfoUser(taiKhoan: Object): Observable<InfoUser> {
        let url = "QuanLyNguoiDung/ThongTinTaiKhoan";
        return this.http.postApi<InfoUser>(url, taiKhoan)
    }

    putInfoUser(infoUser: Object): Observable<ModalInfoUser> {
        let url = "QuanLyNguoiDung/CapNhatThongTinNguoiDung";
        return this.http.putApi<ModalInfoUser>(url, infoUser)
    }
}
