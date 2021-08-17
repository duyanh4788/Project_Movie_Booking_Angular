import { Component, OnInit } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { MatTableDataSource } from "@angular/material/table";
import { InfoUser, ThongTinDATVe } from "src/app/core/models/infoUser";
import { InfouserService } from "src/app/core/services/infoUser/infouser.service";
import { LoadingService } from "src/app/core/services/loading/loading.service";
import { SigninService } from "src/app/core/services/signin/signin.service";
import { ModalinfouserComponent } from "../modalinfouser/modalinfouser.component";

@Component({
  selector: "app-infouser",
  templateUrl: "./infouser.component.html",
  styleUrls: ["./infouser.component.scss"],
})
export class InfouserComponent implements OnInit {
  infoUser?: InfoUser;
  ELEMENT_DATA!: ThongTinDATVe[];
  historyTicKet = new MatTableDataSource(this.ELEMENT_DATA);

  constructor(
    private loadingService: LoadingService,
    private signInService: SigninService,
    private infoUserService: InfouserService,
    private modal: MatDialog,
  ) { }
  displayedColumns: Array<any> = [
    "stt",
    "tenPhim",
    "tenHeThongRap",
    "ngayDat",
    "gioDat",
    "danhSachGhe",
    "giaVe",
  ]; // arr sort

  ngOnInit(): void {
    this.loadingService.hidden();
    this.getInfoAccount();
  }

  getInfoAccount() {
    let account = { taikhoan: "" };
    account.taikhoan = this.signInService.getCurrentAccount();
    this.infoUserService.postInfoUser(account).subscribe((data) => {
      const { thongTinDatVe, ..._data } = data
      this.infoUserService.setCurrentInfoUser(_data)
      this.infoUserService.shareInfoUser.subscribe((data) => {
        this.infoUser = data
      });
      this.historyTicKet.data = thongTinDatVe;
    });
  }

  searchHistory(event: any) {
    this.historyTicKet.filter = event.target.value.trim().toLowerCase();
  }

  updateInfoUser() {
    this.modal.open(ModalinfouserComponent)
    this.infoUserService.setCurrentInfoUser(this.infoUser)
  }
}
