import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoadingService } from '../../services/loading/loading.service';
import { finalize } from 'rxjs/operators';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {

  requestCount: number = 0;

  constructor(private loadingSerive: LoadingService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    // code logic cho count = 0 => show +hidden
    if (this.requestCount === 0) {
      this.loadingSerive.show()
    }
    return next.handle(request).pipe(
      finalize(() => {
        this.requestCount -= 1
        if (this.requestCount === 0) {
          this.loadingSerive.hidden()
        }
      })
    )
  }
}
