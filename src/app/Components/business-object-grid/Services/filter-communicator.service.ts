// -----------------------------------------------------------------------
// <copyright file="filter-communicator.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';



@Injectable()
export class FilterCommunicatorService {

    // source
    private filterMessageSource = new Subject<string>();

    // sender
    filterMessageSender$ = this.filterMessageSource.asObservable();

    // send
    filterEventHappen(filterMessageObject: string) {
        this.filterMessageSource.next(filterMessageObject);
    }

    constructor() {
    }
}
