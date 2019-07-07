// -----------------------------------------------------------------------
// <copyright file="popover.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

/**
 * common popover component for all other poppover functionalities
 */
import {Component, OnInit, TemplateRef} from '@angular/core';
import {PopoverContent, PopoverRef} from './popover-ref';

@Component({
    selector   : 'solo-popover',
    templateUrl: './popover.component.html',
    styleUrls  : ['./popover.component.less']
})
export class PopoverComponent implements OnInit {

    renderMethod: 'template' | 'component' | 'text' = 'component';
    content: PopoverContent;
    context;

    constructor(private popoverRef: PopoverRef) {
    }

    ngOnInit() {
        /**
         * switch renderer acoording to type of provided content
         */
        this.content = this.popoverRef.content;
        if (typeof this.content === 'string') {
            this.renderMethod = 'text';
        } else if (this.content instanceof TemplateRef) {
            this.renderMethod = 'template';
            this.context = {
                close: this.popoverRef.close.bind(this.popoverRef)
            };
        }
    }

}
