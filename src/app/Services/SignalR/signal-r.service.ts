// -----------------------------------------------------------------------
// <copyright file="signal-r.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';
import * as signalR from '@aspnet/signalr';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {PubsubService} from '../PubSub/pubsub.service';
import {BusinesObjectModel} from '../../Models/BusinesObjectModel';
import {LayoutTreeService} from '../../MockData/layout-tree.service';
import {ConstantsSignalR} from '../../Constants/Messages/SignalR/signalr-constants';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';


@Injectable({
    providedIn: 'root'
})
export class SignalRService {
    private hubConnection: signalR.HubConnection;
    private connected = false;
    private backupLayout: {} = {}; // dead server hack data
    private backupBusinesObjectsList: BusinesObjectModel[] = []; // dead server hack data

    constructor(
        private http: HttpClient,
        private pubSub: PubsubService,
        private layoutTreeService: LayoutTreeService,
    ) {
    }

    public get Connected() {
        return this.connected;
    }

    /**
     * prepare connection with signalR instance on backend
     */
    public buildConnection = () => {
        this.hubConnection = new signalR.HubConnectionBuilder()
            .withUrl(`${environment.SignalRTest}`, {
                skipNegotiation: true,
                transport: signalR.HttpTransportType.WebSockets
            })
            .configureLogging(signalR.LogLevel.Information)
            .build();
    };

    /**
     * start connection with signalR instance on backend
     */
    public startConnection = () => {
        this.hubConnection
            .start()
            .then(() => {
                this.connected = true;
                this.pubSub.Publish(ConstantsSignalR.SR_CONNECTED, {connected: this.connected});
                this.hubConnection.on(ConstantsSignalR.SR_TOKEN_CONFIRMED, (validTokenConfirmation) => {
                    console.log('Token confirmation from Messaging Service 2!', validTokenConfirmation);
                    this.pubSub.Publish(ConstantsSignalR.SR_TOKEN_CONFIRMATION, validTokenConfirmation);
                });
            })
            .catch((err) => {
                // TODO implement snackbar here (RACO)
                console.log('Error while starting connection !!!', err);

            });
    };

    /**
     * ask for a business object layout tree  and changes of business object from backend
     * @param businessObjectType (name of business object type)
     */
    public makeBusinessObjectSubscription(businessObjectType: string): void {
        if (!localStorage.getItem(ConstantsSignalR.SR_CONNECTED_TAB_ID)) {
            localStorage.setItem(ConstantsSignalR.SR_CONNECTED_TAB_ID, `${sessionStorage.getItem(ConstantsSignalR.SR_CONNECTED_TAB_ID)}`);
        } else {
            let connections = localStorage.getItem(ConstantsSignalR.SR_CONNECTED_TAB_ID);
            connections = `${(Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15))}, ${connections}`;
            // calStorage.setItem('_connectedTabId', JSON.stringify(connections));
        }
        const requestData = {
            Action: 'Subscribe',
            ClientID: '',
            ObjectType: businessObjectType,

        };
        this.hubConnection.invoke(ConstantsSignalR.SR_GET_SUBSCRIPTION, requestData).then(() => {
            console.log('sent', requestData);
            console.log('place where BackEnd actually broke if it is broken');
            this.hubConnection.on(ConstantsSignalR.SR_RECEIVED_LAYOUT_TREE, (GetLayoutMessage) => {
                this.pubSub.Publish(ConstantsSignalR.SR_SUBSCRIBED_TO_BUSINESS_OBJECT, {data: GetLayoutMessage});
            });
            this.hubConnection.on(ConstantsSignalR.SR_RECEIVED_BUSINESS_OBJECT_PROPERTY_CHANGED, (response) => {
                console.log('got property changed event', response);
                this.pubSub.Publish(ConstantsSignalR.SR_RECEIVED_BUSINESS_OBJECT_PROPERTY_CHANGED, {response});
            });
        })
            .catch((errorMessage) => {

                /**
                 * ----------------------
                 * this peace of crap requested by Nenad Curcic on Apr-15 2019.
                 * ----------------------
                 */
                const parsedErrorMessage = errorMessage.message.split(ConstantsSignalR.SR_HUB_EXCEPTION)[1];

                if (parsedErrorMessage.length) {
                    this.publishError(parsedErrorMessage);
                } else {
                    this.publishError(ConstantsSignalR.SR_UNKNOWN_ERRROR_OCCURED_ON_BACKEND);
                }

            });


    }

    /**
     * ask for business object list by business object name
     * @param businessObjectType (name of business object type)
     */
    public getBusinessObjectList = (businessObjectType: string): void => {
        // ################################### dead server hack ####################
        return;
        // #########################################################################
        console.log('we ask for the business object list', businessObjectType);
        const dataObject = {
            ObjectType: businessObjectType
        };
        this.hubConnection.invoke(ConstantsSignalR.SR_GET_BUSINESS_OBJECT_LIST, dataObject).then(() => {

            return this.hubConnection.on(ConstantsSignalR.SR_RECEIVED_BUSINESS_OBJECTS_LIST, (businessObjectList) => {
                console.log('we got the business object list', businessObjectList);
                this.pubSub.Publish(ConstantsPubSub.PS_RECEIVED_BUSINESS_OBJECTS_LIST, businessObjectList);
            });
        })
            .catch((errorData) => {
                console.log('ERROR', errorData);
                this.publishError(errorData);
            })
        ;
    };

    /**
     * ask for business object update
     * @param updatedObjectData, what is changed in object
     */
    public sendUpdatedBusinessObject = (updatedObjectData: any): void => {
        console.log('what we send', updatedObjectData);
        this.hubConnection.invoke(ConstantsSignalR.SR_REQUESTED_OBJECT_UPDATE, updatedObjectData).then(() => {
            console.log('hub reacted');
            return this.hubConnection.on(ConstantsSignalR.SR_RECEIVED_UPDATED_OBJECT, (confirmationMessage) => {
                console.log('updated object data', confirmationMessage, Math.random());
                this.pubSub.Publish(ConstantsSignalR.SR_RECEIVED_UPDATED_OBJECT, confirmationMessage);
            });
        })
            .catch((errorData) => {
                console.log('ERROR', errorData);
                this.publishError(errorData);
            });
    };

    /**
     * ask for save changes on business object
     * @param businessObjectToSave (object with fields ObjectType, BusinessObject, and Updated flag)
     */
    public requestSaveOnBusinessObject(businessObjectToSave: any) {
        console.log('object to save', businessObjectToSave);
        this.hubConnection.invoke(ConstantsSignalR.SR_REQUESTED_OBJECT_SAVE, businessObjectToSave).then(() => {
            console.log('save, hub reacted');
            return this.hubConnection.on(ConstantsSignalR.SR_SAVED_BUSINESS_OBJECT, (confirmationMessage) => {
                console.log('saved object data', confirmationMessage);
                this.pubSub.Publish(ConstantsSignalR.SR_SAVED_BUSINESS_OBJECT, confirmationMessage);
            });
        })
            .catch((errorData) => {
                console.log('ERROR', errorData);
                this.publishError(errorData);
            });
    }

    /**
     * ask for rollback changes on backend version of business object
     * @param objectType (name of business object to rolback)
     */
    public requestRollbackOnChangedBusinessObject(objectType: string) {
        console.log('objekat to rollback', objectType);
        this.hubConnection.invoke(ConstantsSignalR.SR_REQUESTED_OBJECT_ROLBACK, objectType).then(() => {
            console.log('rollback hub reacted');
            return this.hubConnection.on(ConstantsSignalR.SR_ROLBACK_BUSINESS_OBJECT_DONE, (confirmationMessage) => {
                console.log('rolback object data', confirmationMessage);
                this.pubSub.Publish(ConstantsSignalR.SR_ROLBACK_BUSINESS_OBJECT_DONE, confirmationMessage);
            });
        })
            .catch((errorData) => {
                console.log('ERROR', errorData);
                this.publishError(errorData);
            });
    }

    /**
     * ask for creation of new business object
     * @param objectType (name of business object to rolback)
     */
    public createNewBusinessObject(businessObjectType: string): void {
        this.hubConnection.invoke(ConstantsSignalR.SR_CREATE_NEW_OBJECT_REQUEST, businessObjectType).then(() => {
            console.log('create hub reacted');
            return this.hubConnection.on(ConstantsSignalR.SR_NEW_OBJECT_CREATED_DONE, (newObjectData) => {
                console.log('created new object confirmation data', newObjectData);
                this.pubSub.Publish(ConstantsSignalR.SR_NEW_BUSINESS_OBJECT_CREATED, newObjectData);
            });
        }).catch((errorData) => {
            console.log('ERROR', errorData);
            this.publishError(errorData);
        });
    }

    // TODO implement this one
    deleteBusinessObject(businessObjectId: number) {
        console.log('start delete process');
        this.hubConnection.invoke(ConstantsSignalR.SR_DELETE_OBJECT_REQUEST, businessObjectId).then(() => {
            console.log('delete hub reacted');

            return this.hubConnection.on(ConstantsSignalR.SR_BUSINESS_OBJECT_DELETED, (deletedObjectData) => {
                console.log('deleted object confirmation data', deletedObjectData);
            });

        });
    }

    doAuthentificationOnMessagingServiceWithToken(accessToken: string) {
        const requestDataResponse = {
            Token: accessToken
        };
        // console.log('usao u method', requestDataResponse);
        this.hubConnection.invoke(ConstantsSignalR.SR_WEB_CLIENT_REQUEST, requestDataResponse).then(() => {

        }).catch((err) => {
            console.log('Error Occured ', err.toString());
            this.pubSub.Publish(ConstantsSignalR.SR_TOKEN_CONFIRMATION_FAILED, err);
        });
    }

    /**
     * provide error answer from hub (SignalR)
     * @param data (error data received from backend - SignalR)
     */
    private publishError = (data) => {
        this.pubSub.Publish(ConstantsSignalR.SR_HUB_ERROR, {data});
    };
}
