import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsSignalR {

// These ants are used in the signal-r.service.ts
    static SR_CONNECTED = 'connected';
    static SR_TOKEN_CONFIRMED = 'TokenConfirmed';
    static SR_TOKEN_CONFIRMATION = 'TokenConfirmation';
    static SR_CONNECTED_TAB_ID = '_connectedTabId';
    static SR_GET_SUBSCRIPTION = 'GetSubscription';
    static SR_RECEIVED_LAYOUT_TREE = 'ReceivedLayoutTree';
    static SR_SUBSCRIBED_TO_BUSINESS_OBJECT = 'SubscribedToBusinessObject';
    static SR_RECEIVED_BUSINESS_OBJECT_PROPERTY_CHANGED = 'ReceivedBusinessObjectPropertyChanged';
    static SR_HUB_EXCEPTION = 'HubException: ';
    static SR_UNKNOWN_ERRROR_OCCURED_ON_BACKEND = 'Unknown Errror Occured On BackEnd\n';
    static SR_GET_BUSINESS_OBJECT_LIST = 'GetBusinessObjectList';
    static SR_RECEIVED_BUSINESS_OBJECTS_LIST = 'ReceivedBusinessObjectsList';
    static SR_REQUESTED_OBJECT_UPDATE = 'RequestedObjectUpdate';
    static SR_RECEIVED_UPDATED_OBJECT = 'ReceivedUpdatedObject';
    static SR_REQUESTED_OBJECT_SAVE = 'RequestedObjectSave';
    static SR_SAVED_BUSINESS_OBJECT = 'SavedBusinessObject';
    static SR_HUB_ERROR = 'HubError';
    static SR_REQUESTED_OBJECT_ROLBACK = 'RequestedObjectRolback';
    static SR_ROLBACK_BUSINESS_OBJECT_DONE = 'RolbackBusinessObjectDone';
    static SR_CREATE_NEW_OBJECT_REQUEST = 'CreateNewObjectRequest';
    static SR_NEW_OBJECT_CREATED_DONE = 'NewObjectCreatedDone';
    static SR_NEW_BUSINESS_OBJECT_CREATED = 'NewBusinessObjectCreated';
    static SR_DELETE_OBJECT_REQUEST = 'DeleteObjectRequest';
    static SR_BUSINESS_OBJECT_DELETED = 'BusinessObjectDeleted';
    static SR_WEB_CLIENT_REQUEST = 'WebClientRequest';
    static SR_TOKEN_CONFIRMATION_FAILED = 'TokenConfirmationFailed';
}





























