// -----------------------------------------------------------------------
// <copyright file="simple-branch.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, OnInit} from '@angular/core';
import {SignalRService} from '../../Services/SignalR/signal-r.service';
import {PubsubService} from '../../Services/PubSub/pubsub.service';
import {UtilitiesService} from '../../Services/Utilities/utilities.service';
import {BusinesObjectModel} from '../../Models/BusinesObjectModel';
import {BranchesDataService} from '../../Services/DataServices/branches-data.service';
import {LayoutBuilderService} from '../../Services/LayoutBuilder/layout-builder.service';
import {SingleLayoutTreeObjectModel} from '../../Models/SingleLayoutTreeObjectModel';
import {LayoutTreeService} from '../../MockData/layout-tree.service';
import {BusinessObjectListService} from '../../MockData/business-object-list.service';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';


@Component({
    selector   : 'solo-simple-branch',
    templateUrl: './simple-branch.component.html',
    styleUrls  : ['./simple-branch.component.less']
})
export class SimpleBranchComponent implements OnInit {
    private connectedToHubNotificationSubscription: any;
    private connectedToMockNotificationSubscription: any;
    private receivedPropertyChangedBusinessObjectNotificationSubscription: any;
    private receivedBusinessLayoutAndObjectsSubscription: any;
    private receivedUpdatedObjectsSubscription: any;
    private receivedCreatedNewObjectSubscription: any;
    private savedBusinessObjectConfirmationSubscription: any;
    private rollbackDoneBusinessObjectConfirmationSubscription: any;
    private deleteDoneBusinessObjectConfirmationSubscription: any;
    private objectName = 'Branch';
    private backupBusinessObjectList: BusinesObjectModel[];

    hasObjects = false;
    hasLayoutTree = false;
    isLoading = false;
    selectedBusinessObjectIndex = 0;
    activeBusinessObject: BusinesObjectModel;
    layoutTree = [];
    bussinesObjectName: string;
    displayedColumns: string[] = [
        'active',
        'id',
        'number',
        'matchcode',
        'designation'
    ];
    displayedColumnsPropertyNames: string[];
    displayedColumnsMetaData: SingleLayoutTreeObjectModel[];
    detailViewVisible = false;
    businessObjectsList: BusinesObjectModel[];

    public get IsLoading() {
        return this.isLoading;
    }

    public get DetailViewVisible() {
        return this.detailViewVisible;
    }

    constructor(
        private signalRService: SignalRService,
        private layoutTreeService: LayoutTreeService,
        private businessListService: BusinessObjectListService,
        private pubSub: PubsubService,
        private layoutBuilder: LayoutBuilderService,
    ) {
        // console.log('vidimo li se mi', this.businessObjectsList);
    }

    ngOnInit() {

        if (!this.signalRService.Connected) {
            console.log('just connecting');
            this.connectedToHubNotificationSubscription = this.pubSub.Subscribe(
                ConstantsPubSub.PS_CONNECTED,
                result => {
                    this.signalRService.makeBusinessObjectSubscription(this.objectName);
                }
            );
        } else {
            console.log('was connected');
            this.signalRService.makeBusinessObjectSubscription(this.objectName);
        }
        this.subscribeToReceivedLayoutEvent();
        this.subscribeToReceivedBusinessObjectsList();
        this.subscribeToReceivedBusinessObjectPropertyChanged();
        this.subscribeToReceivedUpdatedBusinessObject();
        this.subscribeToSavedBusinessObjectConfirmation();
        this.subscribeToRollbackBusinessObjectConfirmation();
        this.subscribeToReceivedNewBusinessObject();
        this.subscribeToDeletedBusinessObjectConfirmation();

        this.businessObjectsList = BranchesDataService.MockBranches;
        // ########################-- mock, do not remove --######################
        // console.log('ima ovo', this.businessListService);
        // this.layoutTreeService.getLayoutTreeAll();
        // this.subscribeToReceivedLayoutEvent();
        // this.businessListService.getBusinessObjectList();
        // this.subscribeToReceivedBusinessObjectsList();
    }

    private subscribeToReceivedBusinessObjectPropertyChanged() {
        this.receivedPropertyChangedBusinessObjectNotificationSubscription = this.pubSub.Subscribe(
            'ReceivedBusinessObjectPropertyChanged',
            response => {
                if (typeof this.activeBusinessObject === 'undefined') {
                    return;
                }
                const searchObject = response.response.involvedObject;
                const foundIndex = this.businessObjectsList.findIndex(
                    el => el.id === searchObject.id
                );
                Object.assign(this.businessObjectsList[foundIndex], ...searchObject);
                this.activeBusinessObject = Object.assign({}, ...searchObject);
            }
        );
    }

    /**
     * subscribe to pull layout tree object arrival event
     */
    private subscribeToReceivedLayoutEvent() {
        this.receivedBusinessLayoutAndObjectsSubscription = this.pubSub.Subscribe(
            'SubscribedToBusinessObject',
            response => {
                this.bussinesObjectName = response.data.objectType;
                console.log('got response', response.data.layoutTree);
                this.layoutTree = response.data.layoutTree.layoutTree;
                this.layoutBuilder.LayoutTree = this.layoutTree;
                this.displayedColumnsPropertyNames = this.layoutBuilder.DisplayedColumnsPropertyNameArray;
                this.displayedColumnsMetaData = this.layoutBuilder.DisplayedColumnsAllMetaData;
                this.displayedColumns = this.displayedColumnsMetaData.map(
                    item => item.columnName
                );
                this.hasLayoutTree = true;
                this.signalRService.getBusinessObjectList(this.objectName);
            }
        );
    }

    /**
     * subscribe to business object list arrival event
     */
    private subscribeToReceivedBusinessObjectsList() {
        this.receivedBusinessLayoutAndObjectsSubscription = this.pubSub.Subscribe(
            'ReceivedBusinessObjectsList',
            response => {
                console.log('business object list content', response);
                this.backupBusinessObjectList = UtilitiesService.DeepCopy(
                    response.objectList
                );
                this.hasObjects = true;
                this.buildDynamicLayout(response);
            }
        );
    }

    /**
     * subscribe to newly created business object event
     */
    private subscribeToReceivedNewBusinessObject() {
        this.receivedCreatedNewObjectSubscription = this.pubSub.Subscribe(
            'NewBusinessObjectCreated',
            response => {
                console.log('new empty one', response.businessObject);
                const newBusinessObject = Object.assign({}, ...response.businessObject);
                console.log(newBusinessObject);
                /**
                 * refresh table on front end:
                 */
                this.businessObjectsList.push(newBusinessObject);
                this.backupBusinessObjectList.push(newBusinessObject);

                const businessObjectsListRefreshBackup = this.businessObjectsList.map(
                    el => Object.assign({}, el)
                );
                this.businessObjectsList = [];
                this.businessObjectsList = businessObjectsListRefreshBackup.map(el =>
                    Object.assign({}, el)
                );
                this.selectedBusinessObjectIndex = this.businessObjectsList.length - 1;
                this.activeBusinessObject = this.businessObjectsList[
                    this.selectedBusinessObjectIndex
                    ];
            }
        );
    }

    /**
     * subscribe to updated business object event
     */
    private subscribeToReceivedUpdatedBusinessObject() {
        this.receivedUpdatedObjectsSubscription = this.pubSub.Subscribe(
            'ReceivedUpdatedObject',
            response => {
                this.isLoading = false;
                if (response.updated) {
                } else {
                    // TODO some rollback
                }
            }
        );
    }

    /**
     * check is current active object pristine
     */
    public get OriginalBusinessObjectListChanged(): {} {
        return (
            JSON.stringify(this.businessObjectsList) ===
            JSON.stringify(this.backupBusinessObjectList)
        );
    }

    /**
     * subscribe to saved business object event
     */
    private subscribeToSavedBusinessObjectConfirmation() {
        this.savedBusinessObjectConfirmationSubscription = this.pubSub.Subscribe(
            'SavedBusinessObject',
            response => {
                console.log('save response arrived', response, response.businessObject);
                if (!response) {
                    this.resetDetailView();
                }
                Object.assign(
                    this.businessObjectsList[this.selectedBusinessObjectIndex],
                    ...response.businessObject
                );
                this.activeBusinessObject = Object.assign(
                    {},
                    ...response.businessObject
                );
            }
        );
    }

    /**
     * subscribe to rollback of business object changes event
     */
    private subscribeToRollbackBusinessObjectConfirmation() {
        this.rollbackDoneBusinessObjectConfirmationSubscription = this.pubSub.Subscribe(
            'RolbackBusinessObjectDone',
            response => {
                console.log('rollback business objects response arrived', response);
                if (!response) {
                    this.resetDetailView();
                }
            }
        );
    }

    /**
     * subscribe to rollback of business object changes event, not implemented yet
     */
    private subscribeToDeletedBusinessObjectConfirmation() {
        this.deleteDoneBusinessObjectConfirmationSubscription = this.pubSub.Subscribe(
            'BusinessObjectDeleted',
            response => {
                console.log('deleted object response arrived', response);
            }
        );
    }

    /**
     * build Dynamic Layout with arrived data
     * @param arrivedData list of business objects
     */
    private buildDynamicLayout(arrivedData) {
        this.businessObjectsList = [];
        for (const businessObjectBlock of arrivedData.objectList) {
            this.businessObjectsList.push(businessObjectBlock);
        }
        this.activeBusinessObject = this.businessObjectsList[0];
    }

    /**
     * set active business object when user click on some of row in master view
     * @param i (index of clicked row in table)
     */
    setClickedRow(i: number) {
        this.selectedBusinessObjectIndex = i;
        this.activeBusinessObject = this.businessObjectsList[
            this.selectedBusinessObjectIndex
            ];
        this.detailViewVisible = true;
    }

    /**
     * reset detail view on beginning state after loading or last save
     */
    resetDetailView() {
        if (this.activeBusinessObject.id === 0) {
            this.businessObjectsList = this.businessObjectsList.filter(
                businessObject => {
                    return businessObject.id !== 0;
                }
            );
            this.backupBusinessObjectList = this.backupBusinessObjectList.filter(
                businessObject => {
                    return businessObject.id !== 0;
                }
            );
            this.selectedBusinessObjectIndex = 0;
            this.activeBusinessObject = this.businessObjectsList[
                this.selectedBusinessObjectIndex
                ];
            this.rollbackChanges();
            return;
        }

        this.businessObjectsList = this.backupBusinessObjectList.map(el =>
            Object.assign({}, el)
        );
        this.activeBusinessObject = this.businessObjectsList[
            this.selectedBusinessObjectIndex
            ];
        this.rollbackChanges();
    }

    /**
     * Save business object, prepare data and start process of BE saving
     */
    submitChangesToSave() {
        const dataSend = {
            ObjectType    : this.objectName,
            BusinessObject: this.businessObjectsList[
                this.selectedBusinessObjectIndex
                ],
            Updated       : false
        };
        if (this.activeBusinessObject.id !== null) {
            if (
                !UtilitiesService.ObjectsAreEqual(
                    this.activeBusinessObject,
                    this.backupBusinessObjectList[this.selectedBusinessObjectIndex]
                )
            ) {
                console.log('we have condition to save');
                this.signalRService.requestSaveOnBusinessObject(dataSend);
            } else {
                console.log('not changes at all');
            }
        }
    }

    /**
     * event fired on blur action on detail form
     * @param sentData (object with propertyId and actual value)
     */
    fireBlur(sentData) {
        console.log('fired event', sentData);
        const affectedBusinessObject = this.businessObjectsList[
            this.selectedBusinessObjectIndex
            ];
        console.log('this is what we looking for', affectedBusinessObject);
        const dataToSend = {
            ClientID         : '',
            ObjectType       : this.objectName,
            PropertyId       : sentData.propertyIdAttribute,
            ObjectID         : affectedBusinessObject.id,
            NewValue         : sentData.controlValue,
            Updated          : false,
            DestinationMethod: ''
        };
        console.log('what we send ', dataToSend);
        this.isLoading = true;
        this.signalRService.sendUpdatedBusinessObject(dataToSend);
    }

    /**
     * reset changes request
     */
    private rollbackChanges() {
        this.signalRService.requestRollbackOnChangedBusinessObject(this.objectName);
    }

    /**
     * create new business object request
     */
    createBusinessObject() {
        this.signalRService.createNewBusinessObject(this.objectName);
    }

    /**
     * request for deleting business object (not implemented yet)
     */
    deleteBusinessOBjectRequestListener() {
        console.log('prosledjen delete request');
        this.signalRService.deleteBusinessObject(this.activeBusinessObject.id);
    }

    /**
     * ----------------------
     * Detail view Listeners
     * ---------------------
     */

    detailsViewVisibleChangedListener($event): void {
        this.detailViewVisible = $event;
    }

    detailsViewBusinessObjectChangedListener(sentData): void {
        this.fireBlur(sentData);
    }

    resetDetailViewRequestListener() {
        this.resetDetailView();
    }

    createNewBusinessObjectRequestListener() {
        this.createBusinessObject();
    }

    saveBusinesObjectRequestListener() {
        this.submitChangesToSave();
    }

    tableRowClickedListener(index: number) {
        this.setClickedRow(index);
        this.detailViewVisible = true;
    }
}
