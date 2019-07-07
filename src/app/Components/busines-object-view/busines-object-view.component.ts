// -----------------------------------------------------------------------
// <copyright file="busines-object-view.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, OnInit} from '@angular/core';
import {SignalRService} from '../../Services/SignalR/signal-r.service';
import {PubsubService} from '../../Services/PubSub/pubsub.service';
import {AppComponent} from '../../app.component';

@Component({
    selector: 'solo-busines-object-view',
    templateUrl: './busines-object-view.component.html',
    styleUrls: ['./busines-object-view.component.less']
})
export class BusinesObjectViewComponent implements OnInit {
    private subscription: any;

    constructor(private signalRService: SignalRService, private pubSub: PubsubService) {
    }

    ngOnInit() {
    }
}
