import { HttpInterceptor, HttpHeaders, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, catchError } from "rxjs";

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let cloneRequest = request;

    if (localStorage.getItem('token_storage')) {
        cloneRequest = request.clone({
            setHeaders: {
                Authorization: localStorage.getItem('token_storage')! //Sets a Token into any request Header.
            }
        });
    }
    return next.handle(cloneRequest);
  }
}

/* 
Inside "app.module.ts":
providers: [{
    provide: HTTP_INTERCEPTORS, //from imports
    useClass: HeadersInterceptor,
    multi: true
}]
*/
