import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ToolbarDataService {

    constructor() {
    }

    public static toolBarData() {
        return {
            orders: {
                general: [{
                    Actives: {
                        selection: {
                            dataType: 'Interface',
                            objectType: 'selection',
                            icon: 'selection-icon',
                            showInGUI: true,
                            enabled: true,
                            submenuInfoItems: [{
                                objectText: 'Selection in the recycle bin',
                                objectIcon: '',
                                key: 'F2'
                            }]

                        },
                        new: {
                            dataType: 'Interface',
                            objectType: 'new',
                            icon: 'new-object-icon',
                            showInGUI: true,
                            enabled: true,
                            submenuInfoItems: [{
                                objectText: 'From quote',
                                objectIcon: 'quote-icon',
                                key: ''
                            }, {
                                objectText: 'From Order Template (reference date today)',
                                objectIcon: 'order-template-icon',
                                key: 'Ctrl+Shift+X'
                            }, {
                                objectText: 'From Order Template (enter reference date)',
                                objectIcon: 'order-template-icon',
                                key: 'Ctrl+Shift+V'
                            }, {
                                objectText: 'Create orders from cyclic template group',
                                objectIcon: 'orders-cyclic-icon',
                                key: ''
                            }]

                        },
                        refresh: {
                            dataType: 'object',
                            objectType: 'refresh',
                            icon: 'refresh-data-icon',
                            showInGUI: true,
                            enabled: true
                        },
                        delete: {
                            dataType: 'object',
                            objectType: 'delete',
                            icon: 'delete-data-icon',
                            showInGUI: true,
                            enabled: false
                        },
                        print: {
                            dataType: 'Interface',
                            objectType: 'print',
                            icon: 'print-data-icon',
                            showInGUI: true,
                            enabled: true,
                            submenuInfoItems: [{
                                objectText: 'Order confirmation',
                                objectIcon: '',
                                key: ''
                            }, {
                                objectText: 'Fight documents',
                                objectIcon: '',
                                key: 'Ctrl+Shift+H'
                            }, {
                                objectText: 'Delivery notes',
                                objectIcon: '',
                                key: 'Ctrl+Shift+E'
                            }, {
                                objectText: 'Consigment advice',
                                objectIcon: '',
                                key: ''
                            },
                                {
                                    objectText: 'Forwarding order',
                                    objectIcon: '',
                                    key: 'Ctrl+Shift+P'
                                }
                            ]
                        },
                        map: {
                            dataType: 'Interface',
                            objectType: 'map',
                            icon: 'map-data-icon',
                            showInGUI: true,
                            enabled: false,
                            submenuInfoItems: [{
                                objectText: 'Order confirmation',
                                objectIcon: '',
                                key: ''
                            }, {
                                objectText: 'Fight documents',
                                objectIcon: '',
                                key: 'Ctrl+Shift+H'
                            }, {
                                objectText: 'Delivery notes',
                                objectIcon: '',
                                key: 'Ctrl+Shift+E'
                            }, {
                                objectText: 'Consigment advice',
                                objectIcon: '',
                                key: ''
                            },
                                {
                                    objectText: 'Forwarding order',
                                    objectIcon: '',
                                    key: 'Ctrl+Shift+P'
                                }
                            ]
                        }
                    },
                    View: {
                        Orders: {
                            dataType: 'object',
                            masterDataName: 'Orders',
                            masterDataIcon: 'orders-icon',
                            showInGUI: true,
                            enabled: true
                        },
                        Consignments: {
                            dataType: 'object',
                            masterDataName: 'Consignments',
                            masterDataIcon: 'consignments-icon',
                            showInGUI: true,
                            enabled: true
                        },
                        Items: {
                            dataType: 'object',
                            masterDataName: 'Items',
                            masterDataIcon: 'items-icon',
                            showInGUI: true,
                            enabled: true
                        },
                        TransportOrders: {
                            dataType: 'object',
                            masterDataName: 'TransportOrders',
                            masterDataIcon: 'transportOrders-icon',
                            showInGUI: true,
                            enabled: true
                        },
                        Filing: {
                            dataType: 'object',
                            masterDataName: 'Filing',
                            masterDataIcon: 'filing-icon',
                            showInGUI: true,
                            enabled: true
                        },
                        Cockpit: {
                            dataType: 'object',
                            masterDataName: 'Cockpit',
                            masterDataIcon: 'cockpit-icon',
                            showInGUI: true,
                            enabled: true
                        }

                    }
                }],
                customize: [],
                table: []
            }
        };
    }
}
