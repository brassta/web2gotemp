// -----------------------------------------------------------------------
// <copyright file="request-log-interceptor.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class RequestLogInterceptorService implements HttpInterceptor {

    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        console.log('HttpRequest', request.url);
        return next.handle(request);
    }
}
