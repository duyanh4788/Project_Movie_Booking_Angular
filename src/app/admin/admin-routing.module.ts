import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/adminGurad/admin.guard';
import { AdminComponent } from './admin.component';
import { ClientmannagementComponent } from './clientmannagement/clientmannagement.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MoviemanagementComponent } from './moviemanagement/moviemanagement.component';


const routes: Routes = [
  {
    path: "", component: AdminComponent, canActivate: [AdminGuard],
    children: [
      { path: "", component: DashboardComponent },
      { path: "clientManagement", component: ClientmannagementComponent },
      { path: "movieManagement", component: MoviemanagementComponent }
    ]
  },

]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
