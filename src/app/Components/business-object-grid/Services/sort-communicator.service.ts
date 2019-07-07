// -----------------------------------------------------------------------
// <copyright file="sort-communicator.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

interface SortEventMessage {
    direction: string;
    propertyName: string;
    propertyId: number;
}

@Injectable()
export class SortCommunicatorService {

    // source
    private sortMessageSource = new Subject<SortEventMessage>();

    // sender
    sortMessageSender$ = this.sortMessageSource.asObservable();

    // send
    sortEventHappen(sortMessageObject: SortEventMessage) {
        this.sortMessageSource.next(sortMessageObject);
    }

    constructor() {
    }
}
