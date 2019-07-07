// -----------------------------------------------------------------------
// <copyright file="business-object-property-field-converter.service.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import { Injectable } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { SingleLayoutTreeObjectModel } from "../../Models/SingleLayoutTreeObjectModel";
import { BusinesObjectModel } from "../../Models/BusinesObjectModel";
import { ValidationCustomService } from "../ValidationCustom/validation-custom.service";
import { FormFieldEntryModel } from "../../Models/FormFieldEntryModel";

@Injectable({
  providedIn: "root"
})
export class BusinessObjectPropertyFieldConverterService {
  constructor() {}

  /**
   * preparere all data needed to dynamic creation of form with business object data
   * @param businessFields (layout tree representation)
   * @param activeBusinessObject (actual business object)
   */
  toFormGroup(
    businessFields: SingleLayoutTreeObjectModel[],
    activeBusinessObject: BusinesObjectModel
  ) {
    let formData: {
      formFieldData: FormFieldEntryModel[];
      formControlFields: {};
    };
    const formFieldData: FormFieldEntryModel[] = [];
    const formControlFields: {} = {};
    businessFields.forEach(businessFieldSingle => {
      const value = activeBusinessObject[businessFieldSingle.propertyName];
      const isRequired = businessFieldSingle.isMandatory;
      const fieldEntry: FormFieldEntryModel = {
        fieldType: this.mapTypeToFormType(businessFieldSingle.dataType),
        label: businessFieldSingle.caption,
        key: businessFieldSingle.propertyName,
        value
      };
      formFieldData.push(fieldEntry);
      let validatorsArray = [];
      switch (this.mapTypeToFormType(businessFieldSingle.dataType)) {
        case "textbox":
          validatorsArray = [];
          if (businessFieldSingle.dataType === "Integer") {
            validatorsArray = [ValidationCustomService.numericIntegerValidator];
          }
          if (isRequired) {
            validatorsArray.push(Validators.required);
          }
          formControlFields[businessFieldSingle.propertyName] = new FormControl(
            value,
            {
              updateOn: "blur",
              validators: validatorsArray
            }
          );
          break;
        case "checkbox":
          validatorsArray = [];
          if (isRequired) {
            validatorsArray.push(Validators.required);
          }
          formControlFields[businessFieldSingle.propertyName] = new FormControl(
            value,
            {
              updateOn: "change",
              validators: validatorsArray
            }
          );
      }

      formData = {
        formFieldData,
        formControlFields
      };
    });

    return formData;
  }

  /**
   * simple mapper SoloPlan field type to html input types strings
   * @param currentControlTypeof SoloPlan property type name
   */
  private mapTypeToFormType(currentControlTypeof: string) {
    switch (currentControlTypeof) {
      case "String":
        return "textbox";
      case "Integer":
        return "textbox";
      case "Boolean":
        return "checkbox";
      case "Password":
        return "password";
      case "Email":
        return "email";
      default:
        return "textbox";
    }
  }
}
