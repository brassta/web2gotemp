// -----------------------------------------------------------------------
// <copyright file="app.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Component, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PubsubService} from './Services/PubSub/pubsub.service';
import {SignalRService} from './Services/SignalR/signal-r.service';
import {MatSnackBar} from '@angular/material';
import {UtilitiesService} from './Services/Utilities/utilities.service';
import {LayoutTreeService} from './MockData/layout-tree.service';
import {ActivatedRoute, Router} from '@angular/router';
import {EncryptService} from './Services/Encrypt/encrypt.service';
import {UserDataModel} from './Models/UserDataModel';
import {TokenDataModel} from './Models/TokenDataModel';
import {parseIntAutoRadix} from '@angular/common/src/i18n/format_number';
import {ConstantsPubSub} from './Constants/Messages/PubSub/pubsub-constants';


@Component({
    selector: 'solo-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit, OnDestroy {
    loadedSubscription: any;
    businessObjectReceivedSubscription: any;
    connectedToHubNotificationSubscription: any;
    hubErrorOccurredSubscription: any;
    businessObjectOccurredSubscription: any;
    userLogedOutSubscription: any;
    tokenConfiemationSubscription: any;
    failedTokenConfiemationSubscription: any;
    RefreshTokenRecivedSubscription: any;
    errrorMesage = '';
    tokenData: string;
    userDataObject: UserDataModel;
    tokenDataObject: TokenDataModel;
    userLoged = false;
    menuActivated = false;
    menuActive = false;

    constructor(
        private signalRServiceInstance: SignalRService,
        private pubSub: PubsubService,
        private snackBar: MatSnackBar,
        private route: ActivatedRoute,
        private router: Router,
        private constantsPubSub: ConstantsPubSub
    ) {
    }

    ngOnInit() {
        /**
         * token managament process
         */

        this.subscribeToMainMenuButtonTriggered();

        this.route.queryParams.subscribe(params => {
            if (params['data']) {
                this.tokenData = params['data'];
                this.tokenData = this.tokenData.toString().replace(/\s/g, '+');
                const tokenObjectString = EncryptService.decrypt(
                    this.tokenData,
                    '1234'
                );
                const tokenObject = JSON.parse(JSON.parse(tokenObjectString));
                sessionStorage.setItem('_connectedTabId', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
                if (tokenObject['rememberme'] === true) {
                    this.userDataObject = {
                        Name: tokenObject.Name,
                        FullName: tokenObject.FullName,
                        Organization: tokenObject.organization,
                        Rememberme: tokenObject.rememberme
                    };

                    this.tokenDataObject = {
                        access_token: tokenObject.access_token,
                        expires_in: tokenObject.expires_in,
                        refresh_token: tokenObject.refresh_token,
                        token_type: tokenObject.token_type
                    };

                    localStorage.setItem(
                        '_spAuthData',
                        JSON.stringify(this.tokenDataObject)
                    );
                    localStorage.setItem(
                        '_spUserData',
                        JSON.stringify(this.userDataObject)
                    );
                    if (!localStorage.getItem('_machineId')) {
                        localStorage.setItem('_machineId', Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15));
                    }
                    this.userLoged = true;
                    this.pubSub.Publish(ConstantsPubSub.PS_USER_LOGGED_EVENT, this.userLoged);
                    // this.router.navigate(['/']);
                } else if (tokenObject['rememberme'] === false) {
                    this.userDataObject = {
                        Name: tokenObject.Name,
                        FullName: tokenObject.FullName,
                        Organization: tokenObject.organization,
                        Rememberme: tokenObject.rememberme
                    };

                    this.tokenDataObject = {
                        access_token: tokenObject.access_token,
                        expires_in: tokenObject.expires_in,
                        refresh_token: tokenObject.refresh_token,
                        token_type: tokenObject.token_type
                    };
                    sessionStorage.setItem(
                        '_spAuthData',
                        JSON.stringify(this.tokenDataObject)
                    );
                    sessionStorage.setItem(
                        '_spUserData',
                        JSON.stringify(this.userDataObject)
                    );


                    this.userLoged = true;
                    this.pubSub.Publish(ConstantsPubSub.PS_USER_LOGGED_EVENT, this.userLoged);
                    // this.router.navigate(['/']);
                }
            } else if (localStorage.getItem('_spAuthData') !== null) {
                this.userLoged = true;
                // } else if (sessionStorage.getItem('_spAuthData') !== null) {
                //     this.userLoged = true;
                // } else if (localStorage.getItem('_spUserData') !== null) {
                //     this.userLoged = true;
                // } else if (sessionStorage.getItem('_spUserData') !== null) {
                //     this.userLoged = true;
            } else {
                this.userLoged = false;
            }
        });

        /**
         * coment out when work with mock services
         */
        this.signalRServiceInstance.buildConnection();
        this.signalRServiceInstance.startConnection();

        // test part Authenthification on Messaging Service

        this.connectedToHubNotificationSubscription = this.pubSub.Subscribe(
            ConstantsPubSub.PS_CONNECTED,
            result => {
                console.log('connection done, connected');
                if (this.tokenDataObject) {
                    this.signalRServiceInstance.doAuthentificationOnMessagingServiceWithToken(
                        this.tokenDataObject.access_token
                    );
                } else {
                    const tokenObjectData = JSON.parse(
                        localStorage.getItem('_spAuthData') ||
                        sessionStorage.getItem('_spAuthData')
                    );
                    this.signalRServiceInstance.doAuthentificationOnMessagingServiceWithToken(
                        tokenObjectData['access_token']
                    );
                }
            }
        );

        /**
         * subsriptions to error messages from backend
         */
        this.hubErrorOccurredSubscription = this.pubSub.Subscribe(
            ConstantsPubSub.PS_HUB_ERROR,
            result => {
                this.errrorMesage = result.data;
                // this.openSnackBar(ConstantsPubSub.PS_CLOSE, 5000);
            }
        );

        /**
         * subsriptions to error messages from backend
         */
        this.businessObjectOccurredSubscription = this.pubSub.Subscribe(
            ConstantsPubSub.PS_BUSINESS_OBJECT_ERROR,
            data => {
                this.errrorMesage = data.message;
                // this.openSnackBar(ConstantsPubSub.PS_CLOSE);
            }
        );

        /**
         * subscription to logout message from user context menu
         */
        this.userLogedOutSubscription = this.pubSub.Subscribe(
            ConstantsPubSub.PS_USER_LOGED_OUT,
            data => {
                // console.log('vidimo se logout ', data); // I still need this one
                this.userLoged = data;
                this.pubSub.Publish(ConstantsPubSub.PS_USER_LOGED_OUT, this.userLoged);
            }
        );


        /**
         * subscription to Token confirmation from Messaging Service
         */
        this.tokenConfiemationSubscription = this.pubSub.Subscribe(
            ConstantsPubSub.PS_TOKEN_CONFIRMATION,
            data => {
                // console.log('vidimo se token subscribe ', data); // I still need this one
                if (data) {
                    const messageSuccesTokenResponse =
                        ConstantsPubSub.PS_USER_SUBSCRIBED_ON_MESSAGING_SERVICE_WITH_USER_ID;
                    const tokenExpirationMessage = ConstantsPubSub.PS_TOKEN_EXPIRATION;

                    this.snackBar.open(
                        `${messageSuccesTokenResponse}${data['client_ID']} ${tokenExpirationMessage}${data['exp']}`,
                        '',
                        {
                            duration: 10000,
                            panelClass: ['success-token-response']
                        }
                    );
                }
            }
        );

        // TODO
        /**
         * subscription to Error during authentification on Messaging Service
         */
        this.failedTokenConfiemationSubscription = this.pubSub.Subscribe(
            ConstantsPubSub.PS_TOKEN_CONFIRMATION_FAILED,
            errorData => {
                const messageErrorDuringAuthorization = errorData.toString();
                this.snackBar.open(`${messageErrorDuringAuthorization}`, '', {
                    duration: 10000,
                    verticalPosition: 'bottom',
                    panelClass: ['error-token-response']
                });
                // this.pubSub.Publish('userLoggedEvent', false);
            }
        );

        this.RefreshTokenRecivedSubscription = this.pubSub.Subscribe(ConstantsPubSub.PS_REFRESH_TOKEN_STORED, (refreshTokenData) => {
            console.log('refresh token data', refreshTokenData);
            const messageSuccesTokenResponse = ConstantsPubSub.PS_REFRESH_TOKEN;
            const tokenExpirationMessage = ConstantsPubSub.PS_TOKEN_EXPIRATION;
            this.snackBar.open(
                `${messageSuccesTokenResponse}${refreshTokenData['refresh_token']}, ${tokenExpirationMessage}${refreshTokenData['expires_in']}`,
                '',
                {
                    duration: 10000,
                    panelClass: ['success-refresh-token-response']
                }
            );
        });
    }

    private subscribeToMainMenuButtonTriggered() {
        this.pubSub.Subscribe(
            ConstantsPubSub.PS_MAIN_MENU_BUTTON_TRIGGERED, () => {
                console.log('ikad ovo');
                console.log(this.menuActive);
                this.menuActive = !this.menuActive;
                console.log(this.menuActive);
            }
        );
    }

    /**
     * snack bar (Material Design) implementation
     * @param action what to happen after snackbar finish his own lifetime duration
     * @param duration duration of shown snack bar
     * TODO replace with plain html/css/js component and logic
     */
    openSnackBar(action: string, duration?: number) {
        if (duration) {
            this.snackBar.open(this.errrorMesage, action, {
                duration
            });
        } else {
            this.snackBar.open(this.errrorMesage, action);
        }
    }

    ngOnDestroy() {
        this.loadedSubscription.Remove();
    }

    setMenuState() {
        this.menuActivated = !this.menuActivated;
        console.log(this.menuActivated);
    }
}
