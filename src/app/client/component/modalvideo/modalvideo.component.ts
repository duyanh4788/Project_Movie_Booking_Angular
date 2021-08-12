import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SharemodalvideoService } from 'src/app/core/shared/shareData/shareModalVideo/sharemodalvideo.service';
import { SliderComponent } from '../../home/slider/slider.component';

@Component({
  selector: 'app-modalvideo',
  templateUrl: './modalvideo.component.html',
  styleUrls: ['./modalvideo.component.scss']
})
export class ModalvideoComponent implements OnInit {
  public trailer: any

  constructor(@Inject(MAT_DIALOG_DATA) public SliderComponent: SliderComponent, private shareModalVideoService: SharemodalvideoService,) { }

  ngOnInit(): void {
    this.showModalTrailer()
  }

  showModalTrailer() {
    this.shareModalVideoService.shareModal.subscribe((data: any) => {
      this.trailer = data + "?autoplay=1"
    })
  }
}
