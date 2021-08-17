import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { ClientmanagementService } from 'src/app/core/services/clientManagement/clientmanagement.service';
import { ClientmannagementComponent } from '../../clientmannagement/clientmannagement.component';

@Component({
  selector: 'app-modaladdclient',
  templateUrl: './modaladdclient.component.html',
  styleUrls: ['./modaladdclient.component.scss']
})
export class ModaladdclientComponent implements OnInit {

  @ViewChild('formAddClient') formAddClient!: NgForm

  // snackbar
  horizontalPosition: MatSnackBarHorizontalPosition = "center";
  verticalPosition: MatSnackBarVerticalPosition = "top";
  durationInSeconds = 2;
  // snackbar

  constructor(@Inject(MAT_DIALOG_DATA) public clientMannagementComponent: ClientmannagementComponent, private clientManagementService: ClientmanagementService, private modal: MatDialog, private snackBar: MatSnackBar) { }

  public arrMaNhom: Array<any> = [
    "GP01", "GP02", "GP03", "GP04", "GP05", "GP06", "GP07", "GP08", "GP09", "GP10",
  ]

  ngOnInit(): void {
  }

  handelSubmit() {
    this.clientManagementService.postClient(this.formAddClient.value).subscribe(data => {
      console.log(data);
      this.snackBar.open("Thêm Thành Công", "", {
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

}
