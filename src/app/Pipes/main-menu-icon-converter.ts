// -----------------------------------------------------------------------
// <copyright file="boolean-table-converter.pipe.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {PipeTransform, Pipe} from '@angular/core';
import {MainMenuIconsConstants} from '../Constants/Icons/MainMenu/main-menu-icons-constants';

@Pipe({name: 'mainMenuIconConverter'})

export class MainMenuIconConverter implements PipeTransform {
    /**
     * convert string value to FontAwesome icon
     * @param value (value to transform)
     */
    transform(value: string): string {
        const preparedValue = value.replace('&', 'AND').replace(/\s/g, 'LOWERDASH').replace('-', 'DASH');
        return MainMenuIconsConstants[preparedValue];
    }
}
