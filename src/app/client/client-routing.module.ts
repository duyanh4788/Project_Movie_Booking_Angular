import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientComponent } from './client.component';
import { BookingComponent } from './component/booking/booking.component';
import { CinemadetailComponent } from './component/cinemadetail/cinemadetail.component';
import { MoviedetailComponent } from './component/moviedetail/moviedetail.component';
import { HomeComponent } from './home/home.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';


const routes: Routes = [
  {
    path: '', component: ClientComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'moviedetail/:maPhim', component: MoviedetailComponent },
      { path: 'cinemadetail/:maHeThongRap', component: CinemadetailComponent },
      { path: 'booking/:maLichChieu', component: BookingComponent },
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent },
    ]
  }
]
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClientRoutingModule { }
