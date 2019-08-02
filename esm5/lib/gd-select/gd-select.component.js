/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var GdSelectComponent = /** @class */ (function () {
    function GdSelectComponent() {
        this.selectList = [];
    }
    /**
     * @return {?}
     */
    GdSelectComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    GdSelectComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-select',
                    template: "<mat-form-field appearance=\"outline\">\r\n  <mat-label>{{label}}</mat-label>\r\n  <mat-select  [(ngModel)]=\"selectedValue\" name=\"{{name}}\">\r\n    <mat-option *ngFor=\"let list of selectList\" [value]=\"list.id\">\r\n      {{list.value}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>",
                    styles: ["::ng-deep .mat-form-field-infix{padding-top:4px!important;padding-bottom:12px!important}::ng-deep label.mat-form-field-empty{margin-top:-12px!important}::ng-deep .mat-form-field-appearance-outline .mat-select-arrow-wrapper{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:var(--ion-color-primary)!important;opacity:.8!important}::ng-deep .mat-input-element{caret-color:rgba(0,0,0,.6)!important}.mat-warn .mat-input-element,::ng-deep .mat-form-field-invalid .mat-input-element{caret-color:rgba(0,0,0,.6)!important}::ng-deep .mat-form-field.mat-focused .mat-select-value-text{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-focused .mat-select-arrow{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:var(--ion-color-primary)!important}"]
                }] }
    ];
    /** @nocollapse */
    GdSelectComponent.ctorParameters = function () { return []; };
    GdSelectComponent.propDecorators = {
        selectList: [{ type: Input }],
        label: [{ type: Input }],
        name: [{ type: Input }],
        selectedValue: [{ type: Input }]
    };
    return GdSelectComponent;
}());
export { GdSelectComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Qtc2VsZWN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dkLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZ2Qtc2VsZWN0L2dkLXNlbGVjdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBYUU7UUFOUyxlQUFVLEdBQVUsRUFBRSxDQUFDO0lBT2hDLENBQUM7Ozs7SUFFRCxvQ0FBUTs7O0lBQVI7SUFFQSxDQUFDOztnQkFsQkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxXQUFXO29CQUNyQiwyVEFBeUM7O2lCQUUxQzs7Ozs7NkJBR0UsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7Z0NBQ0wsS0FBSzs7SUFVUix3QkFBQztDQUFBLEFBcEJELElBb0JDO1NBZlksaUJBQWlCOzs7SUFFNUIsdUNBQWdDOztJQUNoQyxrQ0FBbUI7O0lBQ25CLGlDQUFrQjs7SUFDbEIsMENBQTJCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXNlbGVjdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLXNlbGVjdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2Qtc2VsZWN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZFNlbGVjdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHNlbGVjdExpc3Q6T2JqZWN0ID0gW107XHJcbiAgQElucHV0KCkgbGFiZWw6YW55O1xyXG4gIEBJbnB1dCgpIG5hbWU6YW55O1xyXG4gIEBJbnB1dCgpIHNlbGVjdGVkVmFsdWU6YW55O1xyXG4gIFxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19