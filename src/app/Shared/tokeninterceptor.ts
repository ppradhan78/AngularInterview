import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Tokeninterceptor implements HttpInterceptor {

  intercept(reqest: HttpRequest<any>, next: HttpHandler) {
    const token = localStorage.getItem('token');
    reqest = this.addToke(reqest, token);
    return next.handle(reqest);
  }

  private addToke(reqest: HttpRequest<any>, token: string) {
    return reqest.clone(
      {
        setHeaders: { Authentication: `Bearer ${token}` }
      });
  }
}
