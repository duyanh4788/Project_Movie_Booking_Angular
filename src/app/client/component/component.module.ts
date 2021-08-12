import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalvideoComponent } from './modalvideo/modalvideo.component';
import { PipeModule } from 'src/app/core/shared/pipe/pipe.module';
import { MaterialModule } from 'src/app/core/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BookingComponent } from './booking/booking.component';
import { CinemadetailComponent } from './cinemadetail/cinemadetail.component';

@NgModule({
  declarations: [
    ModalvideoComponent,
    MoviedetailComponent,
    BookingComponent,
    CinemadetailComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule,
    FlexLayoutModule,
  ],
  exports: [
    ModalvideoComponent,
    MoviedetailComponent,
    BookingComponent,
    CinemadetailComponent,
  ]
})
export class ComponentModule { }
