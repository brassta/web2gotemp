// -----------------------------------------------------------------------
// <copyright file="login.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {Component, OnInit} from '@angular/core';

@Component({
    selector   : 'solo-login',
    templateUrl: './login.component.html',
    styleUrls  : ['./login.component.less']
})
export class LoginComponent implements OnInit {

    activeUser = {};
    users = [
        {
            username: 'Branko',
            pass    : '34546',
            remember: true
        },
        {
            username: 'Radenko',
            pass    : '32324',
            remember: true
        },
        {
            username: 'Djordje',
            pass    : '98765123',
            remember: false
        }
    ];

    constructor() {
    }

    ngOnInit() {
        this.activeUser = this.users[0];
        console.log(this.activeUser);
    }

    changeUser(i: number) {
        this.activeUser = this.users[i];
    }

    loginUser(eventData) {

    }
}
