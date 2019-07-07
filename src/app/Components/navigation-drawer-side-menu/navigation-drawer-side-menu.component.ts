import {Component, OnInit} from '@angular/core';
import {DrawerMenuFakeData, MenuData} from '../../MockData/side-menu';
import {JsonTraverseUtilityService} from '../../Services/Utilities/json-traverse-utility.service';


@Component({
    selector: 'solo-navigation-drawer-side-menu',
    templateUrl: './navigation-drawer-side-menu.component.html',
    styleUrls: ['./navigation-drawer-side-menu.component.less']
})
export class NavigationDrawerSideMenuComponent implements OnInit {

    menuJsonData: MenuData[];

    constructor(private jsonTraverseUtility: JsonTraverseUtilityService) {
    }

    ngOnInit(): void {
        this.menuJsonData = JSON.parse(DrawerMenuFakeData.generateData());
        this.jsonTraverseUtility.traverse(this.menuJsonData);
    }

    public get MenuJsonData() {
        return this.menuJsonData;
    }
}
