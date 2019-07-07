// -----------------------------------------------------------------------
// <copyright file="layout-builder.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import {SingleLayoutTreeObjectModel} from '../../Models/SingleLayoutTreeObjectModel';

@Injectable({
    providedIn: 'root'
})
export class LayoutBuilderService {

    private layoutTree: any[];
    private displayedColumnsNameArray: string[];
    private displayedColumnsPropertyNameArray: string[];
    private displayedColumnsAllMetaData: SingleLayoutTreeObjectModel[];

    /**
     * prepare layout tree representation for frontend
     * @param inValueArray (array of layout tree objects received from backend)
     */
    set LayoutTree(inValueArray) {
        this.layoutTree = inValueArray.map(item => Object.assign({}, item));
        this.displayedColumnsNameArray = this.layoutTree.filter(item => {
            return item.dataType !== 'Interface' && item.showInGUI;
        }).map(item => item.caption);
        this.displayedColumnsPropertyNameArray = this.layoutTree.filter(item => {
            return item.dataType !== 'Interface' && item.showInGUI;
        }).map(item => item.propertyName);
        this.displayedColumnsAllMetaData = this.layoutTree.filter(item => {
            return item.dataType !== 'Interface' && item.showInGUI;
        }).map(item => {
            return {
                dataType    : item.dataType,
                columnName  : item.caption,
                propertyName: item.propertyName,
                propertyId  : item.propertyId,
                showInGUI   : item.showInGUI,
                isMandatory : item.isMandatory,
                caption     : item.caption,
                visible     : item.visible,
                maxLength   : item.maxLength
            };
        });
    }

    /**
     * getters
     */
    get LayoutTree() {
        return this.layoutTree;
    }

    get DisplayedColumnsNameArray() {
        return this.displayedColumnsNameArray;
    }

    get DisplayedColumnsPropertyNameArray() {
        return this.displayedColumnsPropertyNameArray;
    }

    get DisplayedColumnsAllMetaData() {
        return this.displayedColumnsAllMetaData;
    }


    constructor() {
    }
}
