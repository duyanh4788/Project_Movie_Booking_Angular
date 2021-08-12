import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  // post data => client/client.component
  public isLoading: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false)
  public loadingService = this.isLoading.asObservable().pipe(delay(3))
  // show + hiden => shared/shareData/shareLoading/shareloading.interceptor
  show() {
    this.isLoading.next(true)
  }
  hidden() {
    this.isLoading.next(false)
  }

  constructor() { }
}
