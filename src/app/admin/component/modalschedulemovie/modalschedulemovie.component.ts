import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MoviemanagementService } from 'src/app/core/services/movieManagement/moviemanagement.service';
import { MoviemanagementComponent } from '../../moviemanagement/moviemanagement.component';

@Component({
  selector: 'app-modalschedulemovie',
  templateUrl: './modalschedulemovie.component.html',
  styleUrls: ['./modalschedulemovie.component.scss']
})
export class ModalschedulemovieComponent implements OnInit {

   // snackbar
   horizontalPosition: MatSnackBarHorizontalPosition = "center";
   verticalPosition: MatSnackBarVerticalPosition = "top";
   durationInSeconds = 2;
   // snackbar

  constructor(@Inject(MAT_DIALOG_DATA) public movieManagementComponent: MoviemanagementComponent, private movieManagementService: MoviemanagementService, private modal: MatDialog, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
    let maPhim = this.movieManagementService.getCurrentEditMovie()
    console.log(maPhim);
  }

}
