/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
export class MyErrorStateMatcher {
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    isErrorState(control, form) {
        /** @type {?} */
        const isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    }
}
export class GdInputComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.required && this.type == 'email') {
            this.emailFormControl = new FormControl('', [
                Validators.required,
                Validators.email,
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        else if (!this.required && this.type == 'email') {
            this.emailFormControl = new FormControl('', [
                Validators.email,
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        else if (this.required && this.type != 'email') {
            this.basicFormControl = new FormControl('', [
                Validators.required,
            ]);
            this.matcher = new MyErrorStateMatcher();
        }
        else {
            this.basicFormControl = new FormControl('', []);
            this.matcher = new MyErrorStateMatcher();
        }
    }
    /**
     * @return {?}
     */
    checkName() {
        if (this.type == 'email') {
            return this.emailFormControl;
        }
        else {
            return this.basicFormControl;
        }
    }
}
GdInputComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-input',
                template: "    <mat-form-field appearance=\"outline\">\r\n      <mat-label>{{label}}</mat-label>\r\n      <input matInput type=\"{{type}}\" placeholder=\"{{placeholder}}\" [formControl]=\"checkName()\" [errorStateMatcher]=\"matcher\">\r\n      <mat-hint>{{hint}}</mat-hint> \r\n  \r\n      <mat-error *ngIf=\"type != 'email' && required && basicFormControl.hasError('required')\">\r\n        <strong>rusak rusak</strong>\r\n      </mat-error> \r\n      <mat-error *ngIf=\"type == 'email' && emailFormControl.hasError('email')\">\r\n        Please enter a valid email address\r\n      </mat-error>\r\n      <mat-error *ngIf=\"type == 'email' && required && emailFormControl.hasError('required')\">\r\n        Email is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>",
                styles: ["::ng-deep .mat-form-field-infix{padding-top:4px!important;padding-bottom:12px!important}::ng-deep label{margin-top:-12px!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-20px) scale(.75)!important;transform:translateY(-20px) scale(.75)!important}::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:var(--ion-color-primary)!important;opacity:.8!important}::ng-deep .mat-input-element{caret-color:rgba(0,0,0,.6)!important}.mat-warn .mat-input-element,::ng-deep .mat-form-field-invalid .mat-input-element{caret-color:rgba(0,0,0,.6)!important}::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-subscript-wrapper{overflow:visible!important}::ng-deep .mat-form-field-wrapper{padding-bottom:16px}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}"]
            }] }
];
/** @nocollapse */
GdInputComponent.ctorParameters = () => [];
GdInputComponent.propDecorators = {
    color: [{ type: Input }],
    placeholder: [{ type: Input }],
    label: [{ type: Input }],
    type: [{ type: Input }],
    required: [{ type: Input }],
    hint: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdInputComponent.prototype.color;
    /** @type {?} */
    GdInputComponent.prototype.placeholder;
    /** @type {?} */
    GdInputComponent.prototype.label;
    /** @type {?} */
    GdInputComponent.prototype.type;
    /** @type {?} */
    GdInputComponent.prototype.required;
    /** @type {?} */
    GdInputComponent.prototype.hint;
    /** @type {?} */
    GdInputComponent.prototype.emailFormControl;
    /** @type {?} */
    GdInputComponent.prototype.basicFormControl;
    /** @type {?} */
    GdInputComponent.prototype.matcher;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1pbnB1dC9nZC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQThCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR25GLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUM5QixZQUFZLENBQUMsT0FBMkIsRUFBRSxJQUF3Qzs7Y0FDMUUsV0FBVyxHQUFHLElBQUksSUFBSSxJQUFJLENBQUMsU0FBUztRQUMxQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsT0FBTyxJQUFJLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDN0YsQ0FBQztDQUNGO0FBUUQsTUFBTSxPQUFPLGdCQUFnQjtJQWEzQjtJQUNBLENBQUM7Ozs7SUFHRCxRQUFRO1FBQ04sSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQ3ZDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLFVBQVUsQ0FBQyxRQUFRO2dCQUNuQixVQUFVLENBQUMsS0FBSzthQUNqQixDQUFDLENBQUM7WUFDSCxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztTQUMxQzthQUNJLElBQUcsQ0FBQyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQzdDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLFVBQVUsQ0FBQyxLQUFLO2FBQ2pCLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1NBQzFDO2FBQ0ksSUFBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQzVDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxJQUFJLFdBQVcsQ0FBQyxFQUFFLEVBQUU7Z0JBQzFDLFVBQVUsQ0FBQyxRQUFRO2FBQ3BCLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1NBQzFDO2FBQ0c7WUFDRixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFLEVBQzNDLENBQUMsQ0FBQTtZQUNGLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxtQkFBbUIsRUFBRSxDQUFDO1NBQzFDO0lBQ0gsQ0FBQzs7OztJQUVELFNBQVM7UUFDUCxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCO2FBQUs7WUFDSixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QjtJQUNILENBQUM7OztZQXZERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHN4QkFBd0M7O2FBRXpDOzs7OztvQkFHRSxLQUFLOzBCQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUxOLGlDQUFtQjs7SUFDbkIsdUNBQXlCOztJQUN6QixpQ0FBbUI7O0lBQ25CLGdDQUFrQjs7SUFDbEIsb0NBQXNCOztJQUN0QixnQ0FBa0I7O0lBRWxCLDRDQUFxQjs7SUFDckIsNENBQXFCOztJQUNyQixtQ0FBWSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQge0Zvcm1Db250cm9sLCBGb3JtR3JvdXBEaXJlY3RpdmUsIE5nRm9ybSwgVmFsaWRhdG9yc30gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQge0Vycm9yU3RhdGVNYXRjaGVyfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jb3JlJztcclxuXHJcbmV4cG9ydCBjbGFzcyBNeUVycm9yU3RhdGVNYXRjaGVyIGltcGxlbWVudHMgRXJyb3JTdGF0ZU1hdGNoZXIge1xyXG4gIGlzRXJyb3JTdGF0ZShjb250cm9sOiBGb3JtQ29udHJvbCB8IG51bGwsIGZvcm06IEZvcm1Hcm91cERpcmVjdGl2ZSB8IE5nRm9ybSB8IG51bGwpOiBib29sZWFuIHtcclxuICAgIGNvbnN0IGlzU3VibWl0dGVkID0gZm9ybSAmJiBmb3JtLnN1Ym1pdHRlZDtcclxuICAgIHJldHVybiAhIShjb250cm9sICYmIGNvbnRyb2wuaW52YWxpZCAmJiAoY29udHJvbC5kaXJ0eSB8fCBjb250cm9sLnRvdWNoZWQgfHwgaXNTdWJtaXR0ZWQpKTtcclxuICB9XHJcbn1cclxuXHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWlucHV0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2QtaW5wdXQuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLWlucHV0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZElucHV0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgY29sb3I6YW55O1xyXG4gIEBJbnB1dCgpIHBsYWNlaG9sZGVyOmFueTtcclxuICBASW5wdXQoKSBsYWJlbDphbnk7XHJcbiAgQElucHV0KCkgdHlwZTphbnk7XHJcbiAgQElucHV0KCkgcmVxdWlyZWQ6YW55O1xyXG4gIEBJbnB1dCgpIGhpbnQ6YW55O1xyXG5cclxuICBlbWFpbEZvcm1Db250cm9sOmFueTtcclxuICBiYXNpY0Zvcm1Db250cm9sOmFueTtcclxuICBtYXRjaGVyOmFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IFxyXG4gIH1cclxuICBcclxuICBcclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGlmKHRoaXMucmVxdWlyZWQgJiYgdGhpcy50eXBlID09ICdlbWFpbCcpe1xyXG4gICAgICB0aGlzLmVtYWlsRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcclxuICAgICAgICBWYWxpZGF0b3JzLnJlcXVpcmVkLFxyXG4gICAgICAgIFZhbGlkYXRvcnMuZW1haWwsXHJcbiAgICAgIF0pO1xyXG4gICAgICB0aGlzLm1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpO1xyXG4gICAgfSBcclxuICAgIGVsc2UgaWYoIXRoaXMucmVxdWlyZWQgJiYgdGhpcy50eXBlID09ICdlbWFpbCcpe1xyXG4gICAgICB0aGlzLmVtYWlsRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcclxuICAgICAgICBWYWxpZGF0b3JzLmVtYWlsLFxyXG4gICAgICBdKVxyXG4gICAgICB0aGlzLm1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpOyAgICAgIFxyXG4gICAgfSBcclxuICAgIGVsc2UgaWYodGhpcy5yZXF1aXJlZCAmJiB0aGlzLnR5cGUgIT0gJ2VtYWlsJyl7XHJcbiAgICAgIHRoaXMuYmFzaWNGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgIF0pXHJcbiAgICAgIHRoaXMubWF0Y2hlciA9IG5ldyBNeUVycm9yU3RhdGVNYXRjaGVyKCk7ICAgICAgXHJcbiAgICB9XHJcbiAgICBlbHNle1xyXG4gICAgICB0aGlzLmJhc2ljRm9ybUNvbnRyb2wgPSBuZXcgRm9ybUNvbnRyb2woJycsIFtcclxuICAgICAgXSlcclxuICAgICAgdGhpcy5tYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTsgICAgXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjaGVja05hbWUoKXtcclxuICAgIGlmKHRoaXMudHlwZSA9PSAnZW1haWwnKXtcclxuICAgICAgcmV0dXJuIHRoaXMuZW1haWxGb3JtQ29udHJvbDtcclxuICAgIH0gZWxzZXtcclxuICAgICAgcmV0dXJuIHRoaXMuYmFzaWNGb3JtQ29udHJvbDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbn0iXX0=