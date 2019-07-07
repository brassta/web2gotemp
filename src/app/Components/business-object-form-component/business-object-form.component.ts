// -----------------------------------------------------------------------
// <copyright file="business-object-form.component.ts" company="Soloplan GmbH">
//     Copyright (c) Soloplan GmbH. All rights reserved.
// </copyright>
// -----------------------------------------------------------------------

import {
    Component,
    EventEmitter,
    Input,
    OnChanges,
    OnInit,
    Output,
    SimpleChanges
} from '@angular/core';
import {BusinessObjectPropertyFieldConverterService} from '../../Services/BusinessObjectPropertyFieldConverter/business-object-property-field-converter.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {SingleLayoutTreeObjectModel} from '../../Models/SingleLayoutTreeObjectModel';
import {BusinesObjectModel} from '../../Models/BusinesObjectModel';
import {UtilitiesService} from '../../Services/Utilities/utilities.service';
import {PubsubService} from '../../Services/PubSub/pubsub.service';
import {FormFieldEntryModel} from '../../Models/FormFieldEntryModel';
import {ConstantsPubSub} from '../../Constants/Messages/PubSub/pubsub-constants';


@Component({
    selector   : 'solo-business-object-form',
    templateUrl: './business-object-form.component.html',
    styleUrls  : ['./business-object-form.component.less']
})
export class BusinessObjectFormComponent implements OnInit, OnChanges {
    @Input() businessObjectFields: SingleLayoutTreeObjectModel[];
    @Input() activeBusinessObject: BusinesObjectModel;
    @Input() originalBusinessObjectListChanged: boolean;
    @Input() isLoading: boolean;
    @Input() detailViewVisible: boolean;
    @Output() businessObjectChanged = new EventEmitter<any>();
    @Output() detailsViewVisibleChanged = new EventEmitter<boolean>();
    @Output() resetDetailViewRequest = new EventEmitter<any>();
    @Output() createNewBusinessObjectRequest = new EventEmitter<any>();
    @Output() saveBusinessObjectRequest = new EventEmitter<any>();
    @Output() deleteBusinessObjectRequest = new EventEmitter<any>();

    businessDetailForm: FormGroup;
    private styleChangedSubscription: any;
    private usedStyle = 'MD';
    formData: FormFieldEntryModel[];
    formDataKeysArray: string[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private propertyFieldConverterService: BusinessObjectPropertyFieldConverterService,
        private pubSub: PubsubService
    ) {
    }

    ngOnInit() {
        this.createForm();
        this.styleChangedSubscription = this.pubSub.Subscribe(
            ConstantsPubSub.PS_STYLE_CHANGED,
            data => {
                UtilitiesService.Style = data;
                this.usedStyle = data.code;
            }
        );
    }

    ngOnChanges(changes: SimpleChanges) {
        if (changes.hasOwnProperty(ConstantsPubSub.PS_ACTIVE_BUSINESS_OBJECT)) {
            this.createForm();
        }
    }

    /**
     * fire event about close detail fiev in mobile devices view
     * @param $event, generic event provided by Angular lib
     */
    closeDetailView($event): void {
        this.detailsViewVisibleChanged.emit(false);
    }

    /**
     * proces of creating form by code, fired on very beginning and after changes of business object
     */
    private createForm() {
        const fullFormData = this.propertyFieldConverterService.toFormGroup(
            this.businessObjectFields,
            this.activeBusinessObject
        );
        this.businessDetailForm = new FormGroup(fullFormData.formControlFields);
        this.formData = fullFormData.formFieldData;
        for (const entry of this.formData) {
            if (entry.fieldType !== 'checkbox') {
                this.businessDetailForm.get(entry.key).valueChanges.subscribe(value => {
                    const outData = {
                        propertyIdAttribute: this.businessObjectFields.filter(item => {
                            return item.propertyName === entry.key;
                        })[0].propertyId,
                        controlValue       : value
                    };
                    this.businessObjectChanged.emit(outData);
                });
            } else {
                this.businessDetailForm.get(entry.key).valueChanges.subscribe(value => {
                    const outData = {
                        propertyIdAttribute: this.businessObjectFields.filter(item => {
                            return item.propertyName === entry.key;
                        })[0].propertyId,
                        controlValue       : !value
                    };

                    this.businessObjectChanged.emit(outData);
                });
            }
        }
        this.formDataKeysArray = Object.keys(this.formData);
    }


    /**
     * dispatch event to parent component
     */
    resetDetailView() {
        this.resetDetailViewRequest.emit();
    }

    /**
     * dispatch event to parent component
     */
    createBusinessObject() {
        this.createNewBusinessObjectRequest.emit();
    }

    /**
     * dispatch event to parent component
     */
    submitChangesToSave() {
        this.saveBusinessObjectRequest.emit();
    }

    /**
     * dispatch event to parent component
     */
    deleteBusinessObject() {
        this.deleteBusinessObjectRequest.emit();
    }

    /**
     * problem with angular, with dynamically created form changes not reactive
     */
    checkboxChanged(eventData) {
        console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
        console.log('fired checkbox changed', eventData.target.value);
        const currentValue = eventData.target.value === 'true' ? false : true;
        const outData = {
            propertyIdAttribute: eventData.target.getAttribute('data-property-id'),
            controlValue       : currentValue
        };
        console.log('outDataForm', outData);
        this.businessObjectChanged.emit(outData);
        eventData.target.setAttribute('value', currentValue);
    }
}
