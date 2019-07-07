// -----------------------------------------------------------------------
// <copyright file="SingleLayoutTreeObjectModel.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

export interface SingleLayoutTreeObjectModel {
    caption: string;
    dataType: string;
    columnName: string;
    propertyName: string;
    propertyId: number;
    showInGUI: boolean;
    visible: boolean;
    isMandatory: boolean;
    maxLength: number;
}
