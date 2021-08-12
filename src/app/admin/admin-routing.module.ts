import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/adminGurad/admin.guard';
import { AdminComponent } from './admin.component';


const routes: Routes = [
  {
    path: "", component: AdminComponent, canActivate: [AdminGuard]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
