// -----------------------------------------------------------------------
// <copyright file="pubsub-hide-column.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {PubsubService} from '../../../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../../Constants/Messages/PubSub/pubsub-constants';


@Injectable({
    providedIn: 'root'
})
export class PubsubHideColumnService {

    constructor(
        private pubsub: PubsubService,
    ) {
    }

    notifyHiddenColumnEvent(data: {}) {
        this.pubsub.Publish(ConstantsPubSub.PS_COLUMN_VISIBILITY_CHANGED, data);
    }
}
