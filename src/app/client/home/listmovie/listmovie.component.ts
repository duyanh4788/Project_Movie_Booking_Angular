import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { ArrayListMovie } from 'src/app/core/models/listMovie';
import { ListmovieService } from 'src/app/core/services/listMovie/listmovie.service';
import { SharemodalvideoService } from 'src/app/core/shared/shareData/shareModalVideo/sharemodalvideo.service';
import { ModalvideoComponent } from '../../component/modalvideo/modalvideo.component';

@Component({
    selector: 'app-listmovie',
    templateUrl: './listmovie.component.html',
    styleUrls: ['./listmovie.component.scss']
})
export class ListMoveComponent implements OnInit {

    public arrListMovie?: ArrayListMovie[] | null;
    maNhom: string = "GP01"

    constructor(
        private listMovieService: ListmovieService,
        private shareModalVideoService: SharemodalvideoService,
        public modal: MatDialog
    ) { }

    private subListMovie = new Subscription()
    private subMaNhom = new Subscription()

    // carousel
    slideConfigMovie = {
        slidesToShow: 5, slidesToScroll: 5, arrows: true, infinite: true, rows: 2, responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 3,
                },
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    arrows: false
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    arrows: false
                },
            },
            {
                breakpoint: 320,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                },
            },
        ]
    };
    public arrMaNhom: Array<any> = ['GP01', 'GP02', 'GP03', 'GP04', 'GP05', 'GP06', 'GP07', 'GP08', 'GP09', 'GP10',];

    ngOnInit(): void {
        this.getListMovieDefault()
    }

    getListMovie(maNhom: string) {
        this.maNhom = maNhom
        this.arrListMovie = null
        if (this.arrListMovie === null) {
            this.subMaNhom.add(this.listMovieService.getListMovie(maNhom).subscribe((data) => {
                this.arrListMovie = data
            }))
        }
    }

    getListMovieDefault() {
        let maNhom = "GP01"
        this.subListMovie.add(this.listMovieService.getListMovie(maNhom).subscribe((data) => {
            this.arrListMovie = data
        }))
    }

    showModalVideo(trailer: any) {
        let linkYoutube = "https://www.youtube.com/embed/";
        let fixTrailer = ""
        let linkOne = trailer.split("=")
        let linkTwo = trailer.split("/")
        if (linkOne.length == 2) {
            fixTrailer = linkYoutube + linkOne[1]
        } else if (linkTwo.length == 4) {
            fixTrailer = linkYoutube + linkTwo[3]
        } else if (linkTwo.length == 5) {
            fixTrailer = linkYoutube + linkTwo[4]
        }
        this.shareModalVideoService.getModalVideo(fixTrailer)
        this.modal.open(ModalvideoComponent)
    }
    ngOnDestroy() {
        this.subListMovie.unsubscribe();
        this.subMaNhom.unsubscribe();
    }

}
