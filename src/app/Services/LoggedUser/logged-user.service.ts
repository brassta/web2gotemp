// -----------------------------------------------------------------------
// <copyright file="logged-user.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------
import { Injectable } from "@angular/core";
import { UserDataModel } from "../../Models/UserDataModel";

@Injectable({
  providedIn: "root"
})
export class LoggedUserService {
  static userData: UserDataModel;

  constructor() {}

  /**
   * Check is user logged by inspect local storage
   */
  static isUserLoggedLocalStorage() {
    return localStorage.getItem("_spUserData") !== null;
  }

  /**
   * return user data from local storage
   */
  static getUserDataLocalStorage() {
    if (this.isUserLoggedLocalStorage()) {
      return Object.assign({}, JSON.parse(localStorage.getItem("_spUserData")));
    }
  }

  static isUserLoggedSessionStorage() {
    return sessionStorage.length === 0
      ? sessionStorage.getItem("_spUserData") !== null
      : null;
  }

  /**
   * return user data from local storage
   */
  static getUserDataSessionStorage() {
    if (this.isUserLoggedSessionStorage()) {
      return Object.assign(
        {},
        JSON.parse(sessionStorage.getItem("_spUserData"))
      );
    }
  }
}
