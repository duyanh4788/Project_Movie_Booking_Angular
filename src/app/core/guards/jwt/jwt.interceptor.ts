import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { SigninService } from '../../services/signin/signin.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private signinService: SigninService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const accessToken = this.signinService.getCurrentAccessToken()   
    if (accessToken) {
      request = request.clone({
        headers: request.headers.append("Authorization", `Bearer ${accessToken}`)
      })
    }
    return next.handle(request);
  }
}
