// -----------------------------------------------------------------------
// <copyright file="utilities.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class UtilitiesService {

    static style: { code: string };

    constructor() {
    }

    /**
     * DeepCopy utilities
     * @param inObject object to copy
     */
    public static DeepCopy(inObject: any) {
        return JSON.parse(JSON.stringify(inObject));
    }

    /**
     * Equality of objects
     * @param objectA first object to compare
     * @param objectB second object to compare
     */
    public static ObjectsAreEqual(objectA: any, objectB: any) {
        const aProps = Object.getOwnPropertyNames(objectA);
        const bProps = Object.getOwnPropertyNames(objectB);

        if (aProps.length !== bProps.length) {
            return false;
        }

        for (const prop of aProps) {
            if (objectA[prop] !== objectB[prop]) {
                return false;
            }
        }

        return true;
    }

    public static get Style() {
        return UtilitiesService.style;
    }

    public static set Style(newStyle: { code: string }) {
        UtilitiesService.style = newStyle;
    }

    public static arraySwapElements(inputArray: any[], index1: number, index2: number) {
        inputArray[index1] = (inputArray.splice(index2, 1, inputArray[index1]))[0];
        return inputArray;
    }

}



