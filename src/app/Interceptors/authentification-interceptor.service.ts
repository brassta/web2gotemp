// -----------------------------------------------------------------------
// <copyright file="authentification-interceptor.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthentificationInterceptorService implements HttpInterceptor {


    constructor() {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const tokenData = localStorage.getItem('_spAuthData') || sessionStorage.getItem('_spAuthData') ;
        const tokenObject = JSON.parse(tokenData);

        if (tokenObject['access_token']) {
            request = request.clone({
                headers: request.headers.set(
                    'Authorization', tokenObject['access_token']
                )
            });
        }
        return undefined;
    }
}
