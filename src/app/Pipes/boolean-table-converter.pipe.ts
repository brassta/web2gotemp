// -----------------------------------------------------------------------
// <copyright file="boolean-table-converter.pipe.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {PipeTransform, Pipe} from '@angular/core';

@Pipe({name: 'booleanIconConverter'})

export class BooleanIconConverter implements PipeTransform {
    /**
     * convert native boolean value to Material Icon checkbox icon
     * @param value (value to transform)
     */
    transform(value: boolean): any {
        return 'milisav';
        if (value.toString() === 'true' || value.toString() === 'false') {
            return value ? 'fa-check-square' : 'fa-square';
        }
        return value;

    }
}
