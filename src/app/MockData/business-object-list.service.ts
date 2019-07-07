// -----------------------------------------------------------------------
// <copyright file="pubsub-hide-column.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {PubsubService} from '../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../Constants/Messages/PubSub/pubsub-constants';


@Injectable({
    providedIn: 'root'
})
export class BusinessObjectListService {

    url = 'http://localhost:3004/businessObjectList';

    constructor(
        private httpClient: HttpClient,
        private pubSub: PubsubService,
    ) {
    }

    mockConnection(): void {
        this.pubSub.Publish(ConstantsPubSub.PS_CONNECTED, {connected: true});
    }

    getBusinessObjectList(): void {
        this.httpClient.get(this.url).subscribe(response => {
            console.log(response);
            this.pubSub.Publish(ConstantsPubSub.PS_RECEIVED_BUSINESS_OBJECTS_LIST, {objectList: response});
        });
    }

}
