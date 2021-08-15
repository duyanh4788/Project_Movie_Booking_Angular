import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { MaterialModule } from '../core/shared/material/material.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ClientmannagementComponent } from './clientmannagement/clientmannagement.component';
import { MoviemanagementComponent } from './moviemanagement/moviemanagement.component';



@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ClientmannagementComponent,
    MoviemanagementComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
  ], exports: [
    DashboardComponent,
    ClientmannagementComponent,
    MoviemanagementComponent
  ]
})
export class AdminModule { }
