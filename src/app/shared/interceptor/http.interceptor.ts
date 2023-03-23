import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../shared/service/auth.service';

@Injectable()
export class HTTPInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let path = '/ivisit.ComV5.00/resources';
    path += `/${request.url}`;
    console.log('the url is given as:', path);
    request = request.clone({
      url: path
    });
    return next.handle(request);
  } 
} 

// https://dev.geniemd.net