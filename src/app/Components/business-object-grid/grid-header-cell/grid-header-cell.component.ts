import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector   : 'solo-grid-header-cell',
    templateUrl: './grid-header-cell.component.html',
    styleUrls  : ['./grid-header-cell.component.less']
})
export class GridHeaderCellComponent implements OnInit {
    @Input() actualHeaderValue;
    @Input() actualHeaderPropertyName;
    @Input() acutalHeaderPropertyId;
    @Input() actualHeaderOrderIndex;
    @Input() visibleColumnOrderIndex;
    @Input() columnsLength;

    constructor() {
    }

    ngOnInit() {
    }

}
