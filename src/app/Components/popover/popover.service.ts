// -----------------------------------------------------------------------
// <copyright file="popover.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable, Injector} from '@angular/core';
import {ConnectionPositionPair, Overlay, OverlayConfig, PositionStrategy} from '@angular/cdk/overlay';
import {PopoverContent, PopoverRef} from './popover-ref';
import {ComponentPortal, PortalInjector} from '@angular/cdk/portal';
import {PopoverComponent} from './popover.component';
import {PopoverPositions} from './popover-positions';

export enum PossiblePositions {TopLeft, TopCenter, TopRight, CenterRight, CenterLeft, BottomLeft, BotomCenter, BottomRight}

export interface PopoverParameters<T> {
    origin: HTMLElement;
    content: PopoverContent;
    data?: any;
    width?: string | number;
    height?: string | number;
    positions?: PossiblePositions[];
}

@Injectable({
    providedIn: 'root'
})
export class PopoverService {

    constructor(private overlay: Overlay, private injector: Injector) {
    }

    /**
     * common open functionality for all popover components
     * @param origin origin element
     * @param content /depends of provided object
     * @param data /custom data
     * @param width /width of new popover element
     * @param height /height of new popover element
     * @param positions /position of new popover element
     */
    open<T>({origin, content, data, width, height, positions}: PopoverParameters<T>) {

        const overlayRef = this.overlay.create(this.getOverlayConfig({origin, width, height, positions}));
        const popoverRef = new PopoverRef<T>(overlayRef, content, data);

        const injector = this.createInjector(popoverRef, this.injector);
        overlayRef.attach(new ComponentPortal(PopoverComponent, null, injector));

        return popoverRef;
    }

    private getOverlayConfig({origin, width, height, positions}): OverlayConfig {
        return new OverlayConfig({
            width,
            height,
            hasBackdrop     : true,
            backdropClass   : 'popover-background',
            positionStrategy: this.getOverlayPosition(origin, positions),
            scrollStrategy  : this.overlay.scrollStrategies.reposition()
        });
    }

    private getOverlayPosition(origin: any, positions: PossiblePositions) {
        const positionStrategy: PositionStrategy = this.overlay.position().flexibleConnectedTo(origin).withPositions(this.getPositions(positions)).withPush(false);
        return positionStrategy;
    }

    private getPositions(positions): ConnectionPositionPair[] {
        console.log('tuna', PossiblePositions[positions[0]]);
        const finalPositions = positions.map(position => {
            return PopoverPositions[PossiblePositions[position]];
        });
        console.log('ako je ovo dobro', finalPositions);

        return finalPositions;
    }

    private createInjector(popoverRef: PopoverRef, injector: Injector) {
        const tokens = new WeakMap([[PopoverRef, popoverRef]]);
        return new PortalInjector(injector, tokens);
    }
}
