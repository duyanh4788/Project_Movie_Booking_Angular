import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ClientPagination, Item } from 'src/app/core/models/clientManagement';
import { ClientmanagementService } from 'src/app/core/services/clientManagement/clientmanagement.service';
import { ModaladdclientComponent } from '../component/modaladdclient/modaladdclient.component';
import { ModalediitclientComponent } from '../component/modalediitclient/modalediitclient.component';

@Component({
  selector: 'app-clientmannagement',
  templateUrl: './clientmannagement.component.html',
  styleUrls: ['./clientmannagement.component.scss']
})
export class ClientmannagementComponent implements OnInit {

  @ViewChild('formSearchClient') formSearchClient!: NgForm;

  searchClient: string = "";
  messageDelete: any;
  listClientPagination?: ClientPagination;
  arrayListClient !: Item[];
  maNhom: string = "GP01"

  // pagination
  pageIndex = 1
  pageSize = 5;
  // pagination

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  displayedColumns: string[] = ['stt', 'taiKhoan', 'matKhau', 'hoTen', 'email', 'soDt', 'maLoaiNguoiDung', 'setting'];
  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];

  constructor(private clientManagementService: ClientmanagementService, private snackBar: MatSnackBar, private modal: MatDialog) { }

  ngOnInit(): void {
    this.getListClientPaginations()
    this.clientManagementService.shareStatusUpDate.subscribe(data=>{
      if(data === 200){
        this.getListClientPaginations()
      }
    })
  }
  

  getListClientPaginations() {
    this.clientManagementService.getListClientPagination(this.maNhom, this.pageIndex, this.pageSize).subscribe(data => {
      this.listClientPagination = data;
      this.arrayListClient = data.items
    })
  }

  getGroupCode(maNhom: string) {
    this.maNhom = maNhom;
    this.clientManagementService.getListClientPagination(maNhom, this.pageIndex, this.pageSize).subscribe(data => {
      this.listClientPagination = data;
      this.arrayListClient = data.items
    })
  }

  getValuePagination(event?: any) {
    this.pageIndex = event.pageIndex;
    this.pageSize = event.pageSize;
    this.clientManagementService.getListClientPagination(this.maNhom, this.pageIndex, this.pageSize).subscribe(data => {
      this.arrayListClient = data.items
    })
  }

  handleSearchClient() {
    this.searchClient = this.formSearchClient.value.searchClient;
    this.clientManagementService.getListClientPaginationSearch(this.maNhom, this.formSearchClient.value.searchClient, this.pageIndex, this.pageSize).subscribe(data => {
      this.listClientPagination = data;
      this.arrayListClient = data.items
    })
    if (this.searchClient === "") {
      this.getListClientPaginations()
    }
  }

  getValueSearch(event: any) {
    this.clientManagementService.getListClientPaginationSearch(this.maNhom, event.target.value, this.pageIndex, this.pageSize).subscribe(data => {
      this.listClientPagination = data;
      this.arrayListClient = data.items
    })
    if (event.target.value === "") {
      this.getListClientPaginations()
    }
  }

  deleteClient(taiKhoan: string) {
    this.clientManagementService.deleteClient(taiKhoan).subscribe(data => {
      this.messageDelete = data
      let cloneArray = [...this.arrayListClient]
      let index = cloneArray.findIndex(item => item.taiKhoan === taiKhoan)
      if (index !== -1) {
        cloneArray.splice(index, 1)
        this.arrayListClient = cloneArray;
      }
      this.snackBar.open(this.messageDelete, "", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    }, error => {
      this.snackBar.open(error.error, "", {
        horizontalPosition: this.horizontalPosition,
        verticalPosition: this.verticalPosition,
        duration: this.durationInSeconds * 1000,
      });
    })
  }

  editClient(item: Object) {
    this.clientManagementService.setCurrentEditClient(item)
    this.clientManagementService.setCurrentCodeGroup(this.maNhom)
    this.modal.open(ModalediitclientComponent)
  }

  addClient(){
    this.modal.open(ModaladdclientComponent)
  }

}
