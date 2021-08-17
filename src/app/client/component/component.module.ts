import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalvideoComponent } from './modalvideo/modalvideo.component';
import { PipeModule } from 'src/app/core/shared/pipe/pipe.module';
import { MaterialModule } from 'src/app/core/shared/material/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MoviedetailComponent } from './moviedetail/moviedetail.component';
import { BookingComponent } from './booking/booking.component';
import { CinemadetailComponent } from './cinemadetail/cinemadetail.component';
import { InfouserComponent } from './infouser/infouser.component';
import { ModalinfouserComponent } from './modalinfouser/modalinfouser.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ModalvideoComponent,
    MoviedetailComponent,
    BookingComponent,
    CinemadetailComponent,
    InfouserComponent,
    ModalinfouserComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PipeModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  exports: [
    ModalvideoComponent,
    MoviedetailComponent,
    BookingComponent,
    CinemadetailComponent,
    InfouserComponent,
    ModalinfouserComponent,
  ]
})
export class ComponentModule { }
