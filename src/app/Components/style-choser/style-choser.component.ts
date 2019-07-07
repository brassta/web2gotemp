// -----------------------------------------------------------------------
// <copyright file="style-choser.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {StylesDataService} from '../../Services/DataServices/styles-data.service';
import {PubsubService} from '../../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';

@Component({
    selector: 'solo-style-choser',
    templateUrl: './style-choser.component.html',
    styleUrls: ['./style-choser.component.less']
})
export class StyleChoserComponent implements OnInit {

    stylesList = StylesDataService.ListOfStyles;

    constructor(
        private pubSub: PubsubService,
    ) {
    }

    ngOnInit() {
    }

    /**
     * style switcher
     * @param shortCode string
     */
    switchStyle = (shortCode: string) => {
        switch (shortCode) {
            case 'MD':
                this.pubSub.Publish(ConstantsPubSub.PS_STYLE_CHANGED, {code: shortCode});
                break;
            case 'DE':
                this.pubSub.Publish(ConstantsPubSub.PS_STYLE_CHANGED, {code: shortCode});
                break;
            case 'HC':
                this.pubSub.Publish(ConstantsPubSub.PS_STYLE_CHANGED, {code: shortCode});
                break;
        }
    };
}
