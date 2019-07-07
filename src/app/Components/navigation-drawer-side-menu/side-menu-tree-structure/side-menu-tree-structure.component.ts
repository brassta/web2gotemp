import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MenuData} from '../../../MockData/side-menu';

@Component({
    selector: 'solo-side-menu-tree-structure',
    templateUrl: './side-menu-tree-structure.component.html',
    styleUrls: ['./side-menu-tree-structure.component.less']
})
export class SideMenuTreeStructureComponent {

    @Output() public toggleChildrenEvents: EventEmitter<MenuData>;

    @Input() public expandedChildren!: string[];
    @Input() public rootChildren!: MenuData;

    constructor() {
        this.toggleChildrenEvents = new EventEmitter<MenuData>();
    }

    public toggleChildren(target: MenuData): void {
        this.toggleChildrenEvents.emit(target);
    }

}
