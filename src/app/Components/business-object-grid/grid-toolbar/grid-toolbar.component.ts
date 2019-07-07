// -----------------------------------------------------------------------
// <copyright file="grid-toolbar.components.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, EventEmitter, Input, OnInit, Output, DoCheck} from '@angular/core';
import {FilterCommunicatorService} from '../Services/filter-communicator.service';
import {PopoverParameters, PopoverService, PossiblePositions} from '../../popover/popover.service';
import {GridToolbarContextMenuComponent} from '../grid-toolbar-context-menu/grid-toolbar-context-menu.component';


@Component({
    selector: 'solo-grid-toolbar',
    templateUrl: './grid-toolbar.component.html',
    styleUrls: ['./grid-toolbar.component.less']
})
export class GridToolbarComponent implements OnInit {

    searchTerm = '';
    popoverRef;

    @Input() visibilityColumnsArr;
    @Input() columnsData;
    @Input() shrink;
    @Output() searchHappen = new EventEmitter<string>();


    constructor(private filterCommunicatorService: FilterCommunicatorService,
                private popoverService: PopoverService
    ) {
    }

    ngOnInit() {
    }


    /**
     * publish event, filter business list
     */
    doFilterBusinessList() {
        // publish event up
        this.filterCommunicatorService.filterEventHappen(this.searchTerm);
    }

    /**
     * open popup toolbar
     * @param origin, object which is anchor for popup object
     */
    toggleContextMenu(origin: HTMLElement) {
        this.popoverRef = this.popoverService.open<{ skills: number[], columnData: string[] }>({
            content: GridToolbarContextMenuComponent,
            origin,
            positions: [PossiblePositions.BottomRight],
            data: {
                columnsVisibility: this.visibilityColumnsArr,
                columnsData: this.ColumnsData,
                shrink: this.shrink
            }
        });

        this.popoverRef.afterClosed$.subscribe(response => {
            console.log(response);
        });

        this.popoverRef.afterUpdated$.subscribe(response => {
            console.log('update ', response);
        });


    }

    get ColumnsData() {
        return this.columnsData;
    }

    set ColumnsData(newColumnsData) {
        this.columnsData = [...newColumnsData];
    }

    clearSearchFirld() {
        this.searchTerm = '';
        this.filterCommunicatorService.filterEventHappen(this.searchTerm);
    }
}
