// -----------------------------------------------------------------------
// <copyright file="business-object-grid.components.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BusinesObjectModel} from '../../Models/BusinesObjectModel';
import {SortCommunicatorService} from './Services/sort-communicator.service';
import {FilterCommunicatorService} from './Services/filter-communicator.service';
import {PubsubService} from '../../Services/PubSub/pubsub.service';
import {PubsubSearchFieldsToggleService} from './Services/pubsub-search-fields-toggle.service';
import {UtilitiesService} from '../../Services/Utilities/utilities.service';
import {ColumnSwapData, SwapDirections} from './grid-header-cell/header-toolbar/grid-header-toolbar.component';
import {first} from 'rxjs/operators';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';


@Component({
    selector: 'solo-business-object-grid',
    templateUrl: './business-object-grid.component.html',
    styleUrls: ['./business-object-grid.component.less'],
    providers: [SortCommunicatorService, FilterCommunicatorService]
})
export class BusinessObjectGridComponent implements OnInit {
    columnsVisibility: boolean[] = [];
    sortByColumn: boolean[] = [];
    sortDirection = 'asc';
    hiddenRows: number[] = [];
    activeRowPosition: boolean[] = [];
    searchTermsArr: string[] = [];
    searchFieldsPerColumnVisible = false;
    visibleColumnsLength = 0;
    displayedColumnsIndexes: number[] = [];
    sparse = false;

    @Input() businessObjectList: BusinesObjectModel[];
    @Input() displayedColumns: string[];
    @Input() displayedColumnsMetaData: object[];


    constructor(private sortService: SortCommunicatorService,
                private filterService: FilterCommunicatorService,
                private pubSubService: PubsubService,
    ) {

        /**
         * subscription to PubSub service, wait to column visibility changed message
         */
        pubSubService.Subscribe(ConstantsPubSub.PS_COLUMN_VISIBILITY_CHANGED, (data) => {
            this.hideColumn(data.propertyId, data.propertyName);
        });

        /**
         * subscription to PubSub service, wait to toggle search by column fields
         */
        pubSubService.Subscribe(ConstantsPubSub.PS_TOGGLE_COLUMN_FIELD_SEARCH, (data) => {
            this.searchFieldsPerColumnVisible = data;
        });


        /**
         * subscription to PubSub service, wait until reorder columns occured
         * in order to proper work of functionality array of meta data and array of visible columns needs to be reordered
         */
        pubSubService.Subscribe(ConstantsPubSub.PS_COLUMN_ORDER_CHANGE_REQUESTED, (data) => {
            const firstVisibleColumnIndex = this.findIndexOfFirstVisibleColumn(data);

            this.displayedColumnsMetaData = [...UtilitiesService.arraySwapElements(this.displayedColumnsMetaData, data['actualColumnIndex'], firstVisibleColumnIndex)];
            this.searchTermsArr = [...UtilitiesService.arraySwapElements(this.searchTermsArr, data['actualColumnIndex'], firstVisibleColumnIndex)];

            this.columnsVisibility = [...UtilitiesService.arraySwapElements(this.columnsVisibility, data['actualColumnIndex'], firstVisibleColumnIndex)];
            pubSubService.Publish(ConstantsPubSub.PS_COLUMN_ORDER_CHANGED, {
                columnsMetaData: this.displayedColumnsMetaData,
                columnsVisibility: this.columnsVisibility,
                searchTermsArr: this.searchTermsArr
            });
        });


        /**
         * sorting subscription
         */
        this.pubSubService.Subscribe(ConstantsPubSub.PS_SORT_COLUMN_HAPPEN, (data) => {
            this.sortBusinessObjectList(data.propertyId, data.propertyName, data.direction);
        });

        /**
         * filtering subscription
         */
        filterService.filterMessageSender$.subscribe(
            message => {
                this.doFilter(message);
            }
        );
    }

    private findIndexOfFirstVisibleColumn(swapData: ColumnSwapData) {
        console.log(swapData);
        let firstVisibleIndex: number;
        switch (SwapDirections[swapData['swapDirection']].toString()) {
            case 'right':
                for (let i = swapData['actualColumnIndex'] + 1; i < this.columnsVisibility.length; ++i) {
                    if (this.columnsVisibility[i]) {
                        console.log(this.columnsVisibility[i]);
                        firstVisibleIndex = i;
                        break;
                    }
                }
                break;
            case 'left':
                for (let i = swapData['actualColumnIndex'] - 1; i > 0; --i) {
                    console.log('levo', i);
                    console.log(this.columnsVisibility[i], i);
                    if (this.columnsVisibility[i]) {
                        firstVisibleIndex = i;
                        break;
                    }
                }
                break;
        }
        return firstVisibleIndex;
    }

    /**
     * provide master filter functionality to component
     * @param message string
     */
    private doFilter(message: string) {

        const filtered = this.businessObjectList.filter(item =>
            Object.keys(item).some(key => item[key].toString().toLowerCase().includes(message.toLowerCase()))).map((item) => {
            return item['id'];
        });

        const ids = this.businessObjectList.map((item) => {
            return item['id'];

        });

        const unique1 = filtered.filter((uniqueFilterItem) => ids.indexOf(uniqueFilterItem) === -1);
        const unique2 = ids.filter((uniqueFilterItem) => filtered.indexOf(uniqueFilterItem) === -1);

        this.hiddenRows = unique1.concat(unique2);


    }

    public writeSomething(){
        console.log('something');
    }

    /**
     * provide filter functionality by column based criteria
     * TODO implement OR and AND possibility
     */
    private doFilterByColumnValue() {
        this.hiddenRows = [];
        this.searchTermsArr.map((searchItem, index) => {
            const columnName = this.displayedColumnsMetaData[index]['propertyName'];
            if (searchItem.toString().length > 0) {
                const filtered = this.businessObjectList.filter(businessObject =>
                    businessObject[columnName].toString().toLowerCase().includes(searchItem.toString().toLowerCase())).map((businessObject) => {
                    return businessObject['id'];
                });
                const ids = this.businessObjectList.map((businessObject) => {
                    return businessObject['id'];
                });
                const unique1 = filtered.filter((uniqueFilterItem) => ids.indexOf(uniqueFilterItem) === -1);
                const unique2 = ids.filter((uniqueFilterItem) => filtered.indexOf(uniqueFilterItem) === -1);

                this.hiddenRows = this.hiddenRows.concat(unique1.concat(unique2));
            }
        });
    }

    /**
     * check is object actually in list
     * @param idOfCurrentObject number
     */
    isInList(idOfCurrentObject: number) {
        if (this.hiddenRows.length === 0) {
            return false;
        }
        return !(this.hiddenRows.indexOf(idOfCurrentObject) < 0);
    }

    /**
     * hide column functionality
     * @param propertyId string
     * @param propertyName string
     */
    private hideColumn(propertyId: string, propertyName: string) {
        let totalVisible = 0;
        const columnOrderIndex = this.displayedColumnsMetaData.map(item => {
            return item['propertyId'];
        }).indexOf(propertyId);

        this.columnsVisibility = this.columnsVisibility.map((item, index) => {
            if (index === columnOrderIndex) {
                return !item;
            }
            return item;
        });

        for (const current of this.columnsVisibility) {
            if (current) {
                totalVisible++;
            }
        }
        this.visibleColumnsLength = totalVisible;
    }

    /**
     * sort business objects by criteria and orderby
     * @param propertyId number
     * @param propertyName string
     * @param direction string order by
     */
    private sortBusinessObjectList(propertyId: number, propertyName: string, direction: string) {
        // id of active object is on same place where is active object array have value of true
        // which of activeobjectsarray have actually value of true;

        const indexOfActiveObject = this.activeRowPosition.indexOf(true);
        const idOfActiveObject = this.businessObjectList.map((item) => {
            return item['id'];
        })[indexOfActiveObject];
        const actualMetaDataSetType = this.displayedColumnsMetaData.filter((currentMetaDataSet) => {
            return currentMetaDataSet['propertyId'] === propertyId;
        })[0]['dataType'];
        switch (actualMetaDataSetType) {
            case 'Integer':
                this.businessObjectList.sort((businessObjectA, businessObjectB) => {
                    if (direction === 'up') {
                        return businessObjectA[propertyName] - businessObjectB[propertyName];
                    } else {
                        return businessObjectB[propertyName] - businessObjectA[propertyName];
                    }

                });
                break;
            case 'String':
                this.businessObjectList.sort((businessObjectA, businessObjectB) => {
                    if (direction === 'up') {
                        if (businessObjectA[propertyName] < businessObjectB[propertyName]) {
                            return -1;
                        }
                        if (businessObjectA[propertyName] > businessObjectB[propertyName]) {
                            return 1;
                        }
                        return 0;
                    } else {
                        if (businessObjectA[propertyName] > businessObjectB[propertyName]) {
                            return -1;
                        }
                        if (businessObjectA[propertyName] < businessObjectB[propertyName]) {
                            return 1;
                        }
                        return 0;
                    }
                });
                break;
            case 'Boolean':
                this.businessObjectList.sort((businessObjectA, businessObjectB) => {
                    if (direction === 'up') {
                        return (businessObjectA[propertyName] === businessObjectB[propertyName]) ? 0 : businessObjectA[propertyName] ? -1 : 1;
                    } else {
                        return (businessObjectA[propertyName] === businessObjectB[propertyName]) ? 0 : businessObjectA[propertyName] ? 1 : -1;
                    }
                });
                break;
            default:
                return;

        }

        this.setActiveRowPositionArray(idOfActiveObject);
        // set active row again here
    }

    ngOnInit() {
        this.columnsVisibility = this.displayedColumnsMetaData.map((item) => {
            return true;
            this.visibleColumnsLength++;
        });

        this.sortByColumn = this.displayedColumnsMetaData.map((item, index) => {
            return false;
        });

        this.activeRowPosition = this.businessObjectList.map((item) => {
            return false;
        });

        this.searchTermsArr = this.displayedColumnsMetaData.map((item) => {
            return '';
        });

        console.log(this.searchTermsArr);
    }

    /**
     * mark row with business object to appears as active one
     * @param index number
     * @param idOfActiveObject number
     */
    setClickedRow(index: number, idOfActiveObject: number) {
        this.pubSubService.Publish(ConstantsPubSub.PS_ACTIVE_BUSINESS_OBJECT_CHANGED, {
            index, idOfActiveObject
        });
        this.setActiveRowPositionArray(idOfActiveObject);
    }

    /**
     * set active row afer reordering of data
     * @param idOfActiveObject number
     */
    setActiveRowPositionArray(idOfActiveObject: number) {
        this.activeRowPosition = [...this.activeRowPosition.map((item) => {
            return false;
        })];
        const rowOfActiveObject = this.businessObjectList.map(item => item.id).indexOf(idOfActiveObject);
        this.activeRowPosition[rowOfActiveObject] = true;
    }

    /**
     * set usable index in case of hidden columns
     * @param i actual index of column
     */
    getVisibleColumnIndex(actualIndex: number) {
        let result = 0;
        for (let i = 0; i < actualIndex; i++) {
            if (this.columnsVisibility[i]) {
                result++;
            }
        }
        return result;
    }

    /**
     * select all rows in table, still not clear what need to be happen in detail view
     * TODO implement full logic
     */
    selectAllRowsAction() {
        console.log('it is active');
    }

    /**
     * provice internal functionality of search by colmnn
     * TODO finish this one
     * @param columnData:object
     * @param event:object
     * @param index:number
     */
    doSearchByColumn(columnData, event, actualColumnIndex, indexOfVisibleColumn) {
        this.searchTermsArr[actualColumnIndex] = event.target.value;
        console.log('search by column', this.searchTermsArr);
        this.doFilterByColumnValue();
    }

    /**
     * geter
     */
    public get VisibleColumnsLength(): number {
        return this.columnsVisibility.filter(item => item === true).length;
    }

    /**
     * geter
     */
    public get DisplayedColumnsIndexes(): number[] {
        let resultIndex = 0;
        return this.columnsVisibility.map((item, index) => {
                if (item) {
                    return resultIndex++;
                } else {
                    return -1000;
                }
            }
        );
    }

    sortRequestHappen(i: number) {
        if (this.sortByColumn[i]) {
            this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
            return;
        }
        this.sortByColumn = this.sortByColumn.map((item, index) => {
            this.sortDirection = 'asc';
            if (index === i) {
                return true;
            }
            return false;
        });
    }
}
