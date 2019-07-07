// -----------------------------------------------------------------------
// <copyright file="TokenDataModel.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
export interface TokenDataModel {

    access_token: string;
    expires_in: number;
    token_type: string;
    refresh_token: string;
}
