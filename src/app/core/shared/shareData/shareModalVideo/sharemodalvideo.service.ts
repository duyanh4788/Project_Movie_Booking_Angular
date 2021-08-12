import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class SharemodalvideoService {
    private modalVideo = new BehaviorSubject("" as string)
    shareModal = this.modalVideo.asObservable()
    constructor() { }
    getModalVideo(trailer: string) {
        this.modalVideo.next(trailer)
    }
}
