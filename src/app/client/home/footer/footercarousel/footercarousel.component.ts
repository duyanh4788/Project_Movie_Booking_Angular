import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footercarousel',
  templateUrl: './footercarousel.component.html',
  styleUrls: ['./footercarousel.component.scss']
})
export class FootercarouselComponent implements OnInit {

  constructor() { }

  slides = [
    { img: "../../../../assets/images/slide1.jpg" },
    { img: "../../../../assets/images/slide2.jpg" },
    { img: "../../../../assets/images/slide3.jpg" },
    { img: "../../../../assets/images/slide4.jpg" },
    { img: "../../../../assets/images/slide5.jpg" },
    { img: "../../../../assets/images/slide6.jpg" },
    { img: "../../../../assets/images/slide7.jpg" },
    { img: "../../../../assets/images/slide8.jpg" },
    { img: "../../../../assets/images/slide9.jpg" },
    { img: "../../../../assets/images/slide10.jpg" },
    { img: "../../../../assets/images/slide11.jpg" },
    { img: "../../../../assets/images/slide12.jpg" },
    { img: "../../../../assets/images/slide13.jpg" },
    { img: "../../../../assets/images/slide14.jpg" },
    { img: "../../../../assets/images/slide15.jpg" },
    { img: "../../../../assets/images/slide16.jpg" },
  ];
  slideConfig = { "slidesToShow": 1, "slidesToScroll": 1, "dot": false, "arrows": false, "autoplay": false, "autoplaySpeed": 2000 };

  ngOnInit(): void {
  }

}
