import { Component, OnInit } from '@angular/core';
import { DashboardService } from 'src/app/core/services/dashboard/dashboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  maNhom = "GP01";
  listMovie: number = 0;
  listClient: number = 0;

  constructor(private dashboardService: DashboardService) { }

  public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];

  ngOnInit(): void {
    this.getListMovies();
    this.getListClients()
  }

  getGroupCode(maNhom: string) {
    this.dashboardService.getListMovie(maNhom).subscribe((data) => {
      this.listMovie = data.length;
    })
    this.dashboardService.getListClient(maNhom).subscribe((data) => {
      this.listClient = data.length;
    })
  }

  getListMovies() {
    this.dashboardService.getListMovie(this.maNhom).subscribe((data) => {
      this.listMovie = data.length;
    })
  }
  getListClients() {
    this.dashboardService.getListClient(this.maNhom).subscribe((data) => {
      this.listClient = data.length;
    })
  }

}
