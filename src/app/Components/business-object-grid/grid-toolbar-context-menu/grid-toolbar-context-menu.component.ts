// -----------------------------------------------------------------------
// <copyright file="grid-toolbar-context-menu.components.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, DoCheck, EventEmitter, Output} from '@angular/core';
import {PopoverRef} from '../../popover/popover-ref';
import {PubsubHideColumnService} from '../Services/pubsub-hide-column.service';
import {PubsubSearchFieldsToggleService} from '../Services/pubsub-search-fields-toggle.service';
import {PubsubService} from '../../../Services/PubSub/pubsub.service';
import {ConstantsPubSub} from '../../../Constants/Messages/PubSub/pubsub-constants';
import {moveItemInArray} from '@angular/cdk/drag-drop';


@Component({
    templateUrl: './grid-toolbar-context-menu.component.html',
    styleUrls: ['./grid-toolbar-context-menu.component.less']
})
export class GridToolbarContextMenuComponent {
    columnsData;
    visibilityColumnsArr;
    shrink;

    constructor(private popoverRef: PopoverRef,
                private hideColumnPubSubService: PubsubHideColumnService,
                private toggleSearchFieldsPubSubService: PubsubSearchFieldsToggleService,
                private pubsubService: PubsubService,
    ) {
        this.columnsData = this.popoverRef.data.columnsData;
        this.visibilityColumnsArr = this.popoverRef.data.columnsVisibility;
        this.shrink = this.popoverRef.data.shrink;

        pubsubService.Subscribe(ConstantsPubSub.PS_COLUMN_ORDER_CHANGED, (data) => {
            this.columnsData = [...data['columnsMetaData']];
            this.visibilityColumnsArr = [...data['columnsVisibility']];
            const newData = {
                columnsVisibility: this.visibilityColumnsArr,
                columnsData: this.columnsData,
                shrink: this.shrink
            };
        });
    }

    /**
     * close popup
     */
    close() {
        this.popoverRef.close({id: 1});
    }

    /**
     * fire hide column event
     * @param i, number index of chosen column
     */
    visibilityColumnChangeNotify(i: number) {

        this.hideColumnPubSubService.notifyHiddenColumnEvent({
            propertyId: this.columnsData[i]['propertyId'],
            propertyName: this.columnsData[i]['propertyName']
        });
        this.visibilityColumnsArr[i] = !this.visibilityColumnsArr[i];
    }



    /**
     * toggle search fields
     */
    toggleSearchFields() {
        this.shrink = !this.shrink;
        this.toggleSearchFieldsPubSubService.notifyChangedVisibility(this.shrink);
    }


    onColumnsDragReordered(event) {
        moveItemInArray(this.columnsData, event.previousIndex, event.currentIndex);
        moveItemInArray(this.visibilityColumnsArr, event.previousIndex, event.currentIndex);
    }
}

