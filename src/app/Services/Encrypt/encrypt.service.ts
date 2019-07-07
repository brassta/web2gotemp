// -----------------------------------------------------------------------
// <copyright file="encrypt.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Injectable} from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
    providedIn: 'root'
})
export class EncryptService {
    static keySize = 256;
    static ivSize = 128;
    static iterations = 100;

    constructor() {
    }

    /**
     * do encryption
     * @param textToEncrypt string
     * @param secret string
     */
    static encrypt(textToEncrypt: string, secret: string) {


        const salt = CryptoJS.lib.WordArray.random(128 / 8);

        const key = CryptoJS.PBKDF2(secret, salt, {
            keySize   : this.keySize / 32,
            iterations: this.iterations
        });

        const iv = CryptoJS.lib.WordArray.random(128 / 8);

        const encrypted = CryptoJS.AES.encrypt(textToEncrypt, key, {
            iv,
            padding: CryptoJS.pad.Pkcs7,
            mode   : CryptoJS.mode.CBC

        });

        const transitmessage = salt.toString() + iv.toString() + encrypted.toString();
        return transitmessage;
    }

    /**
     * do decrypt
     * @param textToDecrypt string
     * @param secret string
     */
    static decrypt(textToDecrypt: string, secret: string) {

        const salt = CryptoJS.enc.Hex.parse(textToDecrypt.substr(0, 32));
        const iv = CryptoJS.enc.Hex.parse(textToDecrypt.substr(32, 32));
        const encrypted = textToDecrypt.substring(64);

        const key = CryptoJS.PBKDF2(secret, salt, {
            keySize: this.keySize / 32,
            iterations: this.iterations
        });

        const decrypted = CryptoJS.AES.decrypt(encrypted, key, {
            iv,
            padding: CryptoJS.pad.Pkcs7,
            mode   : CryptoJS.mode.CBC

        });
        return decrypted.toString(CryptoJS.enc.Utf8);
    }
}
