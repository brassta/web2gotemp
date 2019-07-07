import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {MenuData} from '../../../MockData/side-menu';

@Component({
    selector: 'solo-tree-structure-children',
    templateUrl: './tree-structure-children.component.html',
    styleUrls: ['./tree-structure-children.component.less']
})
export class TreeStructureChildrenComponent implements OnChanges {

    @Output() toggleChildrenEvents: EventEmitter<MenuData>;

    @Input() public expandedChildren!: string[];
    @Input() public rootChildren!: MenuData;

    public isExpanded: boolean;

    fileIcons = [
        'fas fa-award fa-sm',
        'fab fa-battle-net fa-sm',
        'fab fa-bitcoin fa-sm',
        'fas fa-bus-alt fa-sm',
        'fas fa-bullhorn fa-sm',
        'fab fa-centos fa-sm',
        'fab fa-cc-paypal fa-sm',
        'fab fa-cc-visa fa-sm',
        'fas fa-chess-king fa-sm',
        'fas fa-chess-queen fa-sm'
    ];

    constructor() {
        this.isExpanded = false;
        this.toggleChildrenEvents = new EventEmitter<MenuData>();
    }

    public getRandomIcons(): string {
            const randomNumber = Math.floor(Math.random() * Math.floor(10));
            return this.fileIcons[randomNumber];
    }

    public ngOnChanges(changes: SimpleChanges): void {
        this.isExpanded = (this.expandedChildren.indexOf(this.rootChildren.Id) !== -1);
    }

    public toggleChildren(target: MenuData): void {
        this.toggleChildrenEvents.emit(target);
    }


    /**
     * Testing purposes (Need to get Value of Caption), will be deleted
     */
    // public getCaptionFromChildren(caption: string) {
    //     console.log('caption', caption);
    // }

}
