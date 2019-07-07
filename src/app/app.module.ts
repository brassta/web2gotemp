// -----------------------------------------------------------------------
// <copyright file="app.module.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatTableModule
} from '@angular/material';

import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDatepickerModule, MatNativeDateModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';

import {BooleanIconConverter} from './Pipes/boolean-table-converter.pipe';
import {MainMenuIconConverter} from './Pipes/main-menu-icon-converter';

import {BusinesObjectViewComponent} from './Components/busines-object-view/busines-object-view.component';
import {MainNavigationComponent} from './Components/main-navigation/main-navigation.component';
import {MainNavigationItemsComponent} from './Components/main-navigation-items/main-navigation-items.component';
import {MobileMainNavigationComponent} from './Components/mobile-main-navigation/mobile-main-navigation.component';
import {WelcomeComponent} from './Components/welcome/welcome.component';
// import {SimpleBranchComponent} from './Components/simple-branch/simple-branch.component';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {StyleChoserComponent} from './Components/style-choser/style-choser.component';
import {BusinesObjectMasterLayoutComponent} from './Components/busines-object-master-layout/busines-object-master-layout.component';
import {BusinessObjectFormComponent} from './Components/business-object-form-component/business-object-form.component';

import {BusinessObjectGridComponent} from './Components/business-object-grid/business-object-grid.component';
import {GridHeaderCellComponent} from './Components/business-object-grid/grid-header-cell/grid-header-cell.component';
import {GridHeaderToolbarComponent} from './Components/business-object-grid/grid-header-cell/header-toolbar/grid-header-toolbar.component';
import {LoginComponent} from './Components/login/login.component';
import {GridToolbarComponent} from './Components/business-object-grid/grid-toolbar/grid-toolbar.component';
import {PopoverComponent} from './Components/popover/popover.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {DragDropModule} from '@angular/cdk/drag-drop';
import {GridToolbarContextMenuComponent} from './Components/business-object-grid/grid-toolbar-context-menu/grid-toolbar-context-menu.component';
import {FooterWrapperComponent} from './Components/footer-wrapper/footer-wrapper.component';
import {UserDataHeaderDisplayComponent} from './Components/main-navigation/user-data-header-display/user-data-header-display.component';
import {UserDataContextMenuComponent} from './Components/main-navigation/user-data-header-display/user-data-context-menu/user-data-context-menu.component';
import {RefreshInterceptorService} from './Interceptors/refresh-interceptor.service';
import {RequestLogInterceptorService} from './Interceptors/request-log-interceptor.service';
import { HeaderComponent } from './Components/header/header.component';
import { HeaderIconButtonComponent } from './Components/header/header-icon-button/header-icon-button.component';
import { MasterDetailWrapperComponent } from './Components/master-detail-wrapper/master-detail-wrapper.component';
import {ConstantsSignalR} from './Constants/Messages/SignalR/signalr-constants';
import {ConstantsPubSub} from './Constants/Messages/PubSub/pubsub-constants';
import { NavigationDrawerSideMenuComponent } from './Components/navigation-drawer-side-menu/navigation-drawer-side-menu.component';
import { SideMenuTreeStructureComponent } from './Components/navigation-drawer-side-menu/side-menu-tree-structure/side-menu-tree-structure.component';
import { TreeStructureChildrenComponent } from './Components/navigation-drawer-side-menu/tree-structure-children/tree-structure-children.component';
import { TreeElementRendererComponent } from './Components/navigation-drawer-side-menu/tree-element-renderer/tree-element-renderer.component';





@NgModule({
    declarations   : [
        AppComponent,
        BusinesObjectViewComponent,
        MainNavigationComponent,
        MainNavigationItemsComponent,
        MobileMainNavigationComponent,
        WelcomeComponent,
        BooleanIconConverter,
        MainMenuIconConverter,
        StyleChoserComponent,
        BusinesObjectMasterLayoutComponent,
        BusinessObjectFormComponent,
        BusinessObjectGridComponent,
        GridHeaderCellComponent,
        GridHeaderToolbarComponent,
        LoginComponent,
        GridToolbarComponent,
        PopoverComponent,
        GridToolbarContextMenuComponent,
        FooterWrapperComponent,
        UserDataHeaderDisplayComponent,
        UserDataContextMenuComponent,
        HeaderComponent,
        HeaderIconButtonComponent,
        MasterDetailWrapperComponent,
        NavigationDrawerSideMenuComponent,
        SideMenuTreeStructureComponent,
        TreeStructureChildrenComponent,
        TreeElementRendererComponent,
    ],
    imports        : [
        BrowserModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatMenuModule,
        MatButtonModule,
        MatSnackBarModule,
        MatIconModule,
        MatCheckboxModule,
        MatDatepickerModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        HttpClientModule,
        MatNativeDateModule,
        MatTableModule,
        MatProgressSpinnerModule,
        OverlayModule,
        DragDropModule
    ],
    entryComponents: [PopoverComponent, GridToolbarContextMenuComponent, UserDataContextMenuComponent],
    providers      : [
        MatDatepickerModule, ConstantsSignalR, ConstantsPubSub,
        {provide: LocationStrategy, useClass: HashLocationStrategy},
        {provide: HTTP_INTERCEPTORS, useClass: RequestLogInterceptorService, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: RefreshInterceptorService, multi: true}
    ],
    bootstrap      : [AppComponent]
})
export class AppModule {
}
