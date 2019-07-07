// -----------------------------------------------------------------------
// <copyright file="busines-object-master-layout.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BusinesObjectModel} from '../../Models/BusinesObjectModel';
import {BooleanIconConverter} from '../../Pipes/boolean-table-converter.pipe';

@Component({
    selector   : 'solo-busines-object-master-layout',
    templateUrl: './busines-object-master-layout.component.html',
    styleUrls  : ['./busines-object-master-layout.component.less']
})
export class BusinesObjectMasterLayoutComponent implements OnInit {
    @Input() businessObjectList: BusinesObjectModel[];
    @Input() displayedColumns: string[];
    @Input() displayedColumnsMetaData: object[];
    @Output() tableRowClicked = new EventEmitter<number>();

    constructor() {
    }

    ngOnInit() {
    }

    setClickedRow(index: number) {
        this.tableRowClicked.emit(index);

    }
}
