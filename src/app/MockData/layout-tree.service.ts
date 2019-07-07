// -----------------------------------------------------------------------
// <copyright file="layout-tree.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {PubsubService} from '../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../Constants/Messages/PubSub/pubsub-constants';


@Injectable({
    providedIn: 'root'
})
export class LayoutTreeService {

    url = 'http://localhost:3004/layouttree';

    constructor(
        private httpClient: HttpClient,
        private pubSub: PubsubService,
    ) {
    }

    mockConnection(): void {
        console.log('vidi se ovo');
        this.pubSub.Publish(ConstantsPubSub.PS_CONNECTED, {connected: true});
    }

    getLayoutTreeAll(): void {
        this.httpClient.get(this.url).subscribe(response => {
            console.log(response);
            this.pubSub.Publish(ConstantsPubSub.PS_SUBSCRIBED_TO_BUSINESS_OBJECT, {data: response});
        });
    }
}
