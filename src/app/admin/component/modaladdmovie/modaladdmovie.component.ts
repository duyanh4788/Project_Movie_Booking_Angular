import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { MoviemanagementService } from 'src/app/core/services/movieManagement/moviemanagement.service';
import { MoviemanagementComponent } from '../../moviemanagement/moviemanagement.component';

@Component({
  selector: 'app-modaladdmovie',
  templateUrl: './modaladdmovie.component.html',
  styleUrls: ['./modaladdmovie.component.scss']
})
export class ModaladdmovieComponent implements OnInit {

   // snackbar
   horizontalPosition: MatSnackBarHorizontalPosition = "center";
   verticalPosition: MatSnackBarVerticalPosition = "top";
   durationInSeconds = 2;
   // snackbar

  constructor(@Inject(MAT_DIALOG_DATA) public movieManagementComponent: MoviemanagementComponent, private movieManagementService: MoviemanagementService, private modal: MatDialog, private snackBar: MatSnackBar,) { }

  ngOnInit(): void {
  }

}
