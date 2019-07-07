// -----------------------------------------------------------------------
// <copyright file="main-navigation-items.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, OnInit, Input} from '@angular/core';
import {environment} from '../../../environments/environment';
import {RefreshTokenService} from '../../Services/RefreshToken/refresh-token.service';
import {PubsubService} from 'src/app/Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';


@Component({
    selector: 'solo-main-navigation-items',
    templateUrl: './main-navigation-items.component.html',
    styleUrls: ['./main-navigation-items.component.less']
})
export class MainNavigationItemsComponent implements OnInit {
    pathToLogin = environment.pathToLogin;
    isUserLogged = false;

    @Input() loggedUser: boolean;

    constructor(
        private refreshTokenService: RefreshTokenService,
        private pubSub: PubsubService,
    ) {
    }

    ngOnInit() {
        // console.log("main navigation component", this.loggedUser);

        this.isUserLogged = this.loggedUser;
        this.pubSub.Subscribe(ConstantsPubSub.PS_USER_LOGGED_EVENT, result => {
            this.isUserLogged = this.loggedUser = result;
        });

        // this.checkIfUserIsLogged();
    }

    doRefreshToken() {
        this.refreshTokenService.doRefresh();
    }
}
