// -----------------------------------------------------------------------
// <copyright file="main-navigation.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, Input, OnInit} from '@angular/core';
import {PubsubService} from 'src/app/Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';


@Component({
    selector: 'solo-main-navigation',
    templateUrl: './main-navigation.component.html',
    styleUrls: ['./main-navigation.component.less']
})
export class MainNavigationComponent implements OnInit {
    @Input() userLogged;

    constructor(
        private pubSub: PubsubService,
    ) {
    }

    ngOnInit() {
        // this.pubSub.Publish('userLoggedEvent', this.userLogged);
        this.pubSub.Subscribe(ConstantsPubSub.PS_USER_LOGGED_EVENT, (userLoggedEventFlag) => {
            this.userLogged = userLoggedEventFlag;
        });
    }
}
