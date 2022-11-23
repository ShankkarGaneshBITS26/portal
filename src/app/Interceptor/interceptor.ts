import {Injectable} from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse
} from '@angular/common/http';

import {Observable, throwError } from 'rxjs';
import {map, catchError, delay, finalize} from 'rxjs/operators';
import {ErrorHandlerService} from '../shared/services/error-handler.service';
import {LoaderService} from '../shared/services/loader.service';

/** Pass untouched request through to the next request handler. */
@Injectable({
    providedIn: 'root'
})
export class Interceptor implements HttpInterceptor {
    public status: any;
    private pendingRequests = 0;

    constructor( private errorHandlerService: ErrorHandlerService, 
                 private loaderService: LoaderService) {
    }

    intercept(req: HttpRequest<any>, next: HttpHandler):
        Observable<any> {
        this.pendingRequests++;
        this.loaderService.setSpinner(true);
        return next.handle(req).pipe(
            catchError((error: HttpErrorResponse) => {
                if (error && error.error && error.error.errorCode === 'GATEWAY_ERROR') {
                    this.errorHandlerService.handleError(error);
                    return new Observable<any>(observer=> {observer.next({type:0}); observer.complete()});
                }
                if (error && error.error && error.error.error) {
                     if (error.error.status === 400) {
                    }
                    return throwError(error);
                }
                return throwError(error);
            })).pipe(
            finalize(() => {
                this.pendingRequests--;
                if (this.pendingRequests === 0) {
                    this.loaderService.setSpinner(false);
                }
            })
        );
    }
}
