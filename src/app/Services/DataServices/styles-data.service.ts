// -----------------------------------------------------------------------
// <copyright file="style-data.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StylesDataService {

    constructor() {
    }

    /**
     * list of styles used in prototype
     */
    public static get ListOfStyles(): object[] {
        return [
            {
                title: 'Angular Material Design',
                buttonText: 'MD'
            },
            {
                title: 'DevEXpress',
                buttonText: 'DE'
            },
            {
                title: 'Plain HTML CSS',
                buttonText: 'HC'
            }
        ];
    }
}
