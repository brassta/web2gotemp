import {Component, Input, OnInit} from '@angular/core';
import {MainMenuIconsConstants} from '../../../Constants/Icons/MainMenu/main-menu-icons-constants';
import {isArray} from 'util';
import {MenuData} from '../../../MockData/side-menu';
import {JsonTraverseUtilityService} from '../../../Services/Utilities/json-traverse-utility.service';

@Component({
    selector: 'solo-tree-element-renderer',
    templateUrl: './tree-element-renderer.component.html',
    styleUrls: ['./tree-element-renderer.component.less']
})
export class TreeElementRendererComponent implements OnInit {

    @Input() data;
    @Input() parent;
    continue = false;
    founded = [];
    level = 0;


    constructor(private traverseJsonUtilityService: JsonTraverseUtilityService) {
    }

    ngOnInit() {
    }


    treeElementClicked(menuData: any, event: MouseEvent) {
        event.stopPropagation();
        console.log('click', menuData, menuData['TraversePath']);
        if (menuData['Type'] === 'Dialog') {
            const tabObjectsArr = this.traverseJsonUtilityService.searchJsonByKeyValueFoundedArr(menuData, 'Type', 'TabSheet');
            console.log('ovo su tabs', tabObjectsArr);
            // TODO open the dialog
            return;
        }
        if (menuData['Children'] && menuData['Children'].length) {
            this.closeAllInvolvedOpenedMenuItems(menuData);
        }

    }

    private closeAllInvolvedOpenedMenuItems(menuData: any) {
        if (!menuData['Opened']) {
            for (const element of this.data) {
                element['Opened'] = false;
            }
            menuData['Opened'] = true;
        } else {
            menuData['Opened'] = false;
        }
    }


}
