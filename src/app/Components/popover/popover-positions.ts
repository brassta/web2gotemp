// -----------------------------------------------------------------------
// <copyright file="popover-positions.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

export class PopoverPositions {

    private static topleft = {
        originX : 'start',
        originY : 'top',
        overlayX: 'start',
        overlayY: 'bottom',
    };
    private static topcenter = {
        originX : 'center',
        originY : 'top',
        overlayX: 'center',
        overlayY: 'bottom',
    };
    private static topright = {
        originX : 'end',
        originY : 'top',
        overlayX: 'end',
        overlayY: 'bottom',
    };

    private static right = {
        originX : 'end',
        originY : 'center',
        overlayX: 'end',
        overlayY: 'center',
    };

    private static left = {
        originX : 'start',
        originY : 'center',
        overlayX: 'start',
        overlayY: 'center',
    };

    private static bottomleft = {
        originX : 'start',
        originY : 'bottom',
        overlayX: 'start',
        overlayY: 'top',
    };

    private static bottomcenter = {
        originX : 'center',
        originY : 'bottom',
        overlayX: 'center',
        overlayY: 'top',
    };

    private static bottomright = {
        originX : 'end',
        originY : 'bottom',
        overlayX: 'end',
        overlayY: 'top',
    };

    static get TopCenter() {
        return this.topcenter;
    }

    static get TopLeft() {
        return this.topleft;
    }

    static get TopRight() {
        return this.topright;
    }

    static get Right() {
        return this.right;
    }

    static get Left() {
        return this.left;
    }

    static get BottomLeft() {
        return this.bottomleft;
    }

    static get BottomCenter() {
        return this.bottomcenter;
    }

    static get BottomRight() {
        return this.bottomright;
    }

}
