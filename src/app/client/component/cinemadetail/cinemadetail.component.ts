import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading/loading.service';

@Component({
  selector: 'app-cinemadetail',
  templateUrl: './cinemadetail.component.html',
  styleUrls: ['./cinemadetail.component.scss']
})
export class CinemadetailComponent implements OnInit {

  constructor(public loadingService: LoadingService) { }

  ngOnInit(): void {
    this.loadingService.hidden()
  }

}
