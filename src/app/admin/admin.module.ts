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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalediitclientComponent } from './component/modalediitclient/modalediitclient.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ClientmannagementComponent,
    MoviemanagementComponent,
    ModalediitclientComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    PipeModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule
  ], exports: [
    DashboardComponent,
    ClientmannagementComponent,
    MoviemanagementComponent,
  ]
})
export class AdminModule { }
