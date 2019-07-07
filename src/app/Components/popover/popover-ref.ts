// -----------------------------------------------------------------------
// <copyright file="popover-ref.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {TemplateRef, Type} from '@angular/core';
import {Subject} from 'rxjs';
import {Overlay, OverlayRef} from '@angular/cdk/overlay';

export interface PopoverCloseEvent<T> {
    type: 'backdropClick' | 'close';
    data: T;
}

export type PopoverContent = TemplateRef<any> | Type<any> | string;

export class PopoverRef<T = any> {
    private afterClosed = new Subject<PopoverCloseEvent<T>>();
    private afterUpdated = new Subject<any>();

    afterClosed$ = this.afterClosed.asObservable();
    afterUpdated$ = this.afterUpdated.asObservable();

    constructor(public overlayRef: OverlayRef, public content: PopoverContent, public data: T) {
        overlayRef.backdropClick().subscribe(() => {
            this.doClose('backdropClick', null);
        });
    }

    /**
     * close event, notify about closing of popover component
     * @param data object, provided to popover element
     */
    close(data: T) {
        this.doClose('close', data);
    }

    /**
     * update data of popover component
     * @param newData any, new data to update
     */
    update(newData) {
        this.doUpdate(newData);
    }

    /**
     * private implementation of close object
     * @param data, data provided to event
     */
    private doClose(type, data: T) {
        this.overlayRef.dispose();
        this.afterClosed.next({
            type, data,
        });
        this.afterClosed.complete();
    }

    private doUpdate(newData) {
        this.data = Object.assign({}, newData);
        this.afterUpdated.next({
            newData
        });
    }
}
