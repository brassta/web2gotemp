// -----------------------------------------------------------------------
// <copyright file="refresh-token.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {PubsubService} from '../PubSub/pubsub.service';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';


@Injectable({
    providedIn: 'root'
})
export class RefreshTokenService {
    constructor(
        private http: HttpClient,
        public pubSub: PubsubService,
    ) {
    }

    /**
     * public method, refresh token functionality
     */
    doRefresh() {
        const data = new FormData();
        data.append('grant_type', 'refresh_token');
        data.append('client_id', 'vl');
        data.append('refresh_token', this.provideRefreshToken());

        this.http.post(environment.refreshTokenPath, data).subscribe(response => {
            if (response) {
                console.log('Refresh Token Response', response);
                this.setNewTokenData(JSON.stringify(response));
                this.pubSub.Publish(ConstantsPubSub.PS_REFRESH_TOKEN_STORED, response);
            }
        });
    }

    /**
     * pull refresh token from local storage
     */
    private provideRefreshToken(): string {
        const tokenObject = JSON.parse(localStorage.getItem('_spAuthData') || sessionStorage.getItem('_spAuthData'));
        console.log('token object refresh service', tokenObject);
        return tokenObject['refresh_token'];
    }

    /**
     * place new token object into local storage
     * @param receivedToken string
     */
    private setNewTokenData(receivedToken: string) {
        const receivedTokenData = JSON.parse(receivedToken);
        const tokenDataObject = {
            access_token: receivedTokenData.access_token,
            expires_in: receivedTokenData.expires_in,
            refresh_token: receivedTokenData.refresh_token,
            token_type: receivedTokenData.token_type
        };
        localStorage.setItem('_spAuthData', JSON.stringify(tokenDataObject));
        sessionStorage.setItem('_spAuthData', JSON.stringify(tokenDataObject));
    }
}
