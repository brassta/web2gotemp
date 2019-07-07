// -----------------------------------------------------------------------
// <copyright file="app-routing.module.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {WelcomeComponent} from './Components/welcome/welcome.component';
import {MasterDetailWrapperComponent} from './Components/master-detail-wrapper/master-detail-wrapper.component';
import {LoginComponent} from './Components/login/login.component';

const appRoutes: Routes = [
    {
        path     : '',
        component: WelcomeComponent
    },
    {
        path     : 'business-object/:object',
        component: MasterDetailWrapperComponent
    },
    {
        path     : 'business-object/:object/:tab',
        component: MasterDetailWrapperComponent
    },
    {
        path     : 'login',
        component: LoginComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
