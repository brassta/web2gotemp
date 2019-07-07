import {Injectable} from '@angular/core';

@Injectable()
export class ConstantsPubSub {


// These constants are used in the app.component.ts

    static PS_USER_LOGGED_EVENT = 'userLoggedEvent';  // -> also used in main-navigation-items.component.ts , main-navigation.component.ts
    static PS_CONNECTED = 'connected'; // -> also used in simple-branch.component.ts , pubsub-hide-column.service.ts, layout-tree.service.ts
    static PS_HUB_ERROR = 'HubError';
    static PS_CLOSE = 'Close';
    static PS_BUSINESS_OBJECT_ERROR = 'BusinessObjectError';
    static PS_USER_LOGED_OUT = 'UserLogedOut'; // ->  also used in user-data-context-menu.component.ts
    static PS_TOKEN_CONFIRMATION = 'TokenConfirmation';
    static PS_USER_SUBSCRIBED_ON_MESSAGING_SERVICE_WITH_USER_ID = 'User subscribed on Messaging Service with User ID: ';
    static PS_TOKEN_EXPIRATION = 'Token expiration: ';
    static PS_TOKEN_CONFIRMATION_FAILED = 'TokenConfirmationFailed';
    static PS_REFRESH_TOKEN_STORED = 'RefreshTokenStored'; // -> also used in refresh-token.service.ts
    static PS_REFRESH_TOKEN = 'Refresh Token: ';

    // These constants are used in the business-object-form.component.ts

    static PS_STYLE_CHANGED = 'StyleChanged'; // -> also used in style-choser.component.ts
    static PS_ACTIVE_BUSINESS_OBJECT = 'activeBusinessObject';

    // These constants are used in the  grid-toolbar-context-menu.components.ts

    static PS_COLUMN_ORDER_CHANGED = 'ColumnOrderChanged';  // ->  also used in business-object-grid.components.ts

    // These constants are used in the master-detail-wrapper.component.ts

    static PS_MAIN_MENU_BUTTON_TRIGGERED = 'MainMenuButtonTriggered';  // -> also used in header.component.ts
    static PS_RECEIVED_BUSINESS_OBJECT_PROPERTY_CHANGED = 'ReceivedBusinessObjectPropertyChanged';
    static PS_SUBSCRIBED_TO_BUSINESS_OBJECT = 'SubscribedToBusinessObject'; //  -> also used in layout-tree.service.ts
    static PS_RECEIVED_BUSINESS_OBJECTS_LIST = 'ReceivedBusinessObjectsList'; // -> also used in pubsub-hide-column.service.ts
    static PS_NEW_BUSINESS_OBJECT_CREATED = 'NewBusinessObjectCreated';
    static PS_RECEIVED_UPDATED_OBJECT = 'ReceivedUpdatedObject';
    static PS_SAVED_BUSINESS_OBJECT = 'SavedBusinessObject';
    static PS_ROLBACK_BUSINESS_OBJECT_DONE = 'RolbackBusinessObjectDone';
    static PS_BUSINESS_OBJECT_DELETED = 'BusinessObjectDeleted';
    static PS_ACTIVE_BUSINESS_OBJECT_CHANGED = 'activeBusinessObjectChanged';

    // These constants are used in the business-object-grid.components.ts

    static PS_COLUMN_VISIBILITY_CHANGED = 'columnVisibilityChanged';
    static PS_TOGGLE_COLUMN_FIELD_SEARCH = 'toggleColumnFieldSearch'; // -> also used in "pubsub-search-fields.service.ts
    static PS_COLUMN_ORDER_CHANGE_REQUESTED = 'ColumnOrderChangeRequested'; // -> also used in pubsub-reorder-columns.service.ts

    // These constants are used in the grid-header-toolbar.component.ts
    static PS_SORT_COLUMN_HAPPEN = 'sortColumnHappen'

}


