import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject, of, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';




@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(
    private router: Router,

  ) {
  }

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!request.headers.has('Content-Type')) {
      request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
    }
    request = request.clone({ headers: request.headers.set('Accept', 'application/json') }).clone({
      setHeaders: {
       
      }
    });

    return next.handle(request)
  }
}