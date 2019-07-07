// -----------------------------------------------------------------------
// <copyright file="user-data-header-display.componnent.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component} from '@angular/core';
import {UserDataModel} from '../../../Models/UserDataModel';
import {
    PopoverService,
    PossiblePositions
} from '../../popover/popover.service';
import {UserDataContextMenuComponent} from './user-data-context-menu/user-data-context-menu.component';

@Component({
    selector: 'solo-user-data-header-display',
    templateUrl: './user-data-header-display.component.html',
    styleUrls: ['./user-data-header-display.component.less']
})
export class UserDataHeaderDisplayComponent {
    userDataObject: UserDataModel;

    constructor(
        private popoverService: PopoverService,
    ) {
    }

    /**
     * open/close popup menu
     * @param origin, Html element which is anchor to popup element
     */
    toggleUserMenu(origin: HTMLElement) {
        let userData = {};
        const userDataLocalStorage = JSON.parse(
            localStorage.getItem('_spUserData')
        );
        // let userDataSessionStorage = JSON.parse(sessionStorage.getItem('_spUserData'));
        if (userDataLocalStorage === null || userDataLocalStorage === undefined) {
            userData = JSON.parse(sessionStorage.getItem('_spUserData'));
        } else {
            userData = JSON.parse(localStorage.getItem('_spUserData'));
        }
        console.log('user data', userData);
        const popoverRef = this.popoverService.open<{
            skills: number[];
            columnData: string[];
        }>({
            content: UserDataContextMenuComponent,
            origin,
            positions: [PossiblePositions.BottomRight],
            data: {
                username: userData['Name'],
                fullName: userData['FullName'],
                organization: userData['Organization']
            }
        });

        popoverRef.afterClosed$.subscribe(res => {
            console.log(res);
        });
    }
}
