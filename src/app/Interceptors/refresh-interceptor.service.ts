// -----------------------------------------------------------------------
// <copyright file="refresh-interceptor.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpRequest, HttpClient, HttpInterceptor} from '@angular/common/http';
import {Observable} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {PubsubService} from '../Services/PubSub/pubsub.service';

@Injectable({
    providedIn: 'root'
})
export class RefreshInterceptorService implements HttpInterceptor {

    constructor(public http: HttpClient, private pubSub: PubsubService) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let refreshToken = JSON.parse(localStorage.getItem('_spAuthData'));

        if (refreshToken === null) {
            refreshToken = JSON.parse(sessionStorage.getItem('_spAuthData'));
        }
        console.log('refresh token interceptor', refreshToken);
        if (refreshToken) {
            request = request.clone({
                setHeaders: {
                    grant_type: 'refresh_token',
                    client_id: 'vl',
                    refresh_token: refreshToken['refresh_token']
                }
            });
        }

        return next.handle(request);
    }
}
