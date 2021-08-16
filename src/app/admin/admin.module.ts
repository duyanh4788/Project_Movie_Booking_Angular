import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../core/shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientmannagementComponent } from './clientmannagement/clientmannagement.component';
import { MoviemanagementComponent } from './moviemanagement/moviemanagement.component';
import { PipeModule } from '../core/shared/pipe/pipe.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ModalediitclientComponent } from './component/modalediitclient/modalediitclient.component';
import { ModaladdclientComponent } from './component/modaladdclient/modaladdclient.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DateAdapter } from '@angular/material/core';
import { DateFormat } from './moviemanagement/dateFormat';
import { ModaleditmovieComponent } from './component/modaleditmovie/modaleditmovie.component';
import { ModaladdmovieComponent } from './component/modaladdmovie/modaladdmovie.component';
import { ModalschedulemovieComponent } from './component/modalschedulemovie/modalschedulemovie.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ClientmannagementComponent,
    MoviemanagementComponent,
    ModalediitclientComponent,
    ModaladdclientComponent,
    ModaleditmovieComponent,
    ModaladdmovieComponent,
    ModalschedulemovieComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    PipeModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
  ], exports: [
    DashboardComponent,
    ClientmannagementComponent,
    MoviemanagementComponent,
  ],
  providers: [
    { provide: DateAdapter, useClass: DateFormat },
  ]
})

export class AdminModule {
  constructor(private dateAdapter: DateAdapter<Date>) {
    dateAdapter.setLocale('en-in'); // DD/MM/YYYY
  }
}
