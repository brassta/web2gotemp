import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SortCommunicatorService} from '../../Services/sort-communicator.service';
import {PubsubService} from '../../../../Services/PubSub/pubsub.service';
import {PubsubHideColumnService} from '../../Services/pubsub-hide-column.service';
import {ConstantsPubSub} from '../../../../Constants/Messages/PubSub/pubsub-constants';

export enum SwapDirections {
    left, right
}

export interface ColumnSwapData {
    visibleColumnIndex: number;
    actualColumnIndex: number;
    swapDirection: SwapDirections;
}

@Component({
    selector: 'solo-header-toolbar',
    templateUrl: './grid-header-toolbar.component.html',
    styleUrls: ['./grid-header-toolbar.component.less']
})
export class GridHeaderToolbarComponent implements OnInit {
    @Input() sortPropertyId;
    @Input() sortPropertyName;
    @Input() visibleColumnIndex;
    @Input() actualColumnIndex;
    @Input() columnsLength;


    constructor(private sortMessageService: SortCommunicatorService,
                private hideColumnCommunicatorService: PubsubHideColumnService,
                private pubSub: PubsubService,
                private pubSubConstants: ConstantsPubSub
    ) {

    }

    ngOnInit() {

    }

    /**
     * publish event
     * @param direction string orderBy direction
     */
    sortButtonClicked(direction: string, event: Event) {
        event.stopPropagation();
        this.pubSub.Publish(ConstantsPubSub.PS_SORT_COLUMN_HAPPEN, {
            propertyId: this.sortPropertyId,
            propertyName: this.sortPropertyName,
            direction
        });
    }

    /**
     * publish event
     */
    hideButtonClicked() {
        this.hideColumnCommunicatorService.notifyHiddenColumnEvent({
            propertyId: this.sortPropertyId,
            propertyName: this.sortPropertyName,
            columnIndex: this.visibleColumnIndex,
            columnsLength: this.columnsLength
        });
    }

    /**
     * reorder button clicked publishing
     * @param direction:string direction to swap
     */
    reorderButtonClicked(direction: string) {
        let reorderParameters: ColumnSwapData;
        if (direction === 'left') {
            reorderParameters = {
                visibleColumnIndex: this.visibleColumnIndex,
                actualColumnIndex: this.actualColumnIndex,
                swapDirection: SwapDirections.left
            };
        } else {

            reorderParameters = {
                visibleColumnIndex: this.visibleColumnIndex,
                actualColumnIndex: this.actualColumnIndex,
                swapDirection: SwapDirections.right
            };
        }
        this.pubSub.Publish(ConstantsPubSub.PS_COLUMN_ORDER_CHANGE_REQUESTED, reorderParameters);
    }
}
