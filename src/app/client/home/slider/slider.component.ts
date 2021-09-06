import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SharemodalvideoService } from 'src/app/core/shared/shareData/shareModalVideo/sharemodalvideo.service';
import { ModalvideoComponent } from '../../component/modalvideo/modalvideo.component';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {

  slides = [
    { img: "../../../../assets/images/4.jpg", trailer: "https://www.youtube.com/embed/vU3ZqtbIRPI" },
    { img: "../../../../assets/images/5.jpg", trailer: "https://www.youtube.com/embed/Skpu5HaVkOc" },
    { img: "../../../../assets/images/6.jpg", trailer: "https://www.youtube.com/embed/10r9ozshGVE" },
  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "dot": false, "arrows": false, "autoplay": true, "autoplaySpeed": 2000 };

  constructor(
    private shareModalVideoService: SharemodalvideoService,
    public modal: MatDialog,
  ) { }

  ngOnInit(): void {
  }

  showModalVideo(trailer: any) {
    this.shareModalVideoService.getModalVideo(trailer)
    this.modal.open(ModalvideoComponent)
  }
}
