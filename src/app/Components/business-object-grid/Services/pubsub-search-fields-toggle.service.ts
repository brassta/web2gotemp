// -----------------------------------------------------------------------
// <copyright file="pubsub-search-fields.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {PubsubService} from '../../../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../../Constants/Messages/PubSub/pubsub-constants';


@Injectable({
    providedIn: 'root'
})
export class PubsubSearchFieldsToggleService {

    constructor(
        private pubsub: PubsubService,
    ) {
    }

    notifyChangedVisibility(is: boolean) {
        this.pubsub.Publish(ConstantsPubSub.PS_TOGGLE_COLUMN_FIELD_SEARCH, is);
    }
}
