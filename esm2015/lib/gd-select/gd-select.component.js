/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GdSelectComponent {
    constructor() {
        this.selectList = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GdSelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-select',
                template: "<mat-form-field appearance=\"outline\">\r\n  <mat-label>{{label}}</mat-label>\r\n  <mat-select  [(ngModel)]=\"selectedValue\" name=\"{{name}}\">\r\n    <mat-option *ngFor=\"let list of selectList\" [value]=\"list.id\">\r\n      {{list.value}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>",
                styles: ["::ng-deep .mat-form-field-infix{padding-top:4px!important;padding-bottom:12px!important}::ng-deep label.mat-form-field-empty{margin-top:-12px!important}::ng-deep .mat-form-field-appearance-outline .mat-select-arrow-wrapper{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:var(--ion-color-primary)!important;opacity:.8!important}::ng-deep .mat-input-element{caret-color:rgba(0,0,0,.6)!important}.mat-warn .mat-input-element,::ng-deep .mat-form-field-invalid .mat-input-element{caret-color:rgba(0,0,0,.6)!important}::ng-deep .mat-form-field.mat-focused .mat-select-value-text{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-focused .mat-select-arrow{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:var(--ion-color-primary)!important}"]
            }] }
];
/** @nocollapse */
GdSelectComponent.ctorParameters = () => [];
GdSelectComponent.propDecorators = {
    selectList: [{ type: Input }],
    label: [{ type: Input }],
    name: [{ type: Input }],
    selectedValue: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdSelectComponent.prototype.selectList;
    /** @type {?} */
    GdSelectComponent.prototype.label;
    /** @type {?} */
    GdSelectComponent.prototype.name;
    /** @type {?} */
    GdSelectComponent.prototype.selectedValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Qtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dkLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZ2Qtc2VsZWN0L2dkLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxpQkFBaUI7SUFRNUI7UUFOUyxlQUFVLEdBQVUsRUFBRSxDQUFDO0lBT2hDLENBQUM7Ozs7SUFFRCxRQUFRO0lBRVIsQ0FBQzs7O1lBbEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsMlRBQXlDOzthQUUxQzs7Ozs7eUJBR0UsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7NEJBQ0wsS0FBSzs7OztJQUhOLHVDQUFnQzs7SUFDaEMsa0NBQW1COztJQUNuQixpQ0FBa0I7O0lBQ2xCLDBDQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zZWxlY3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1zZWxlY3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLXNlbGVjdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RTZWxlY3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzZWxlY3RMaXN0Ok9iamVjdCA9IFtdO1xyXG4gIEBJbnB1dCgpIGxhYmVsOmFueTtcclxuICBASW5wdXQoKSBuYW1lOmFueTtcclxuICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOmFueTtcclxuICBcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==