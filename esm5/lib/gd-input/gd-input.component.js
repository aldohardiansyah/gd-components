/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    MyErrorStateMatcher.prototype.isErrorState = /**
     * @param {?} control
     * @param {?} form
     * @return {?}
     */
    function (control, form) {
        /** @type {?} */
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());
export { MyErrorStateMatcher };
var GdInputComponent = /** @class */ (function () {
    function GdInputComponent() {
    }
    /**
     * @return {?}
     */
    GdInputComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @return {?}
     */
    GdInputComponent.prototype.checkName = /**
     * @return {?}
     */
    function () {
        if (this.type == 'email') {
            return this.emailFormControl;
        }
        else {
            return this.basicFormControl;
        }
    };
    GdInputComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-input',
                    template: "    <mat-form-field appearance=\"outline\">\r\n      <mat-label>{{label}}</mat-label>\r\n      <input matInput type=\"{{type}}\" placeholder=\"{{placeholder}}\" [formControl]=\"checkName()\" [errorStateMatcher]=\"matcher\">\r\n      <mat-hint>{{hint}}</mat-hint> \r\n  \r\n      <mat-error *ngIf=\"type != 'email' && required && basicFormControl.hasError('required')\">\r\n        <strong>rusak rusak</strong>\r\n      </mat-error> \r\n      <mat-error *ngIf=\"type == 'email' && emailFormControl.hasError('email')\">\r\n        Please enter a valid email address\r\n      </mat-error>\r\n      <mat-error *ngIf=\"type == 'email' && required && emailFormControl.hasError('required')\">\r\n        Email is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>",
                    styles: ["::ng-deep .mat-form-field-infix{padding-top:4px!important;padding-bottom:12px!important}::ng-deep label{margin-top:-12px!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-20px) scale(.75)!important;transform:translateY(-20px) scale(.75)!important}::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:var(--ion-color-primary)!important;opacity:.8!important}::ng-deep .mat-input-element{caret-color:rgba(0,0,0,.6)!important}.mat-warn .mat-input-element,::ng-deep .mat-form-field-invalid .mat-input-element{caret-color:rgba(0,0,0,.6)!important}::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-subscript-wrapper{overflow:visible!important}::ng-deep .mat-form-field-wrapper{padding-bottom:16px}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}"]
                }] }
    ];
    /** @nocollapse */
    GdInputComponent.ctorParameters = function () { return []; };
    GdInputComponent.propDecorators = {
        color: [{ type: Input }],
        placeholder: [{ type: Input }],
        label: [{ type: Input }],
        type: [{ type: Input }],
        required: [{ type: Input }],
        hint: [{ type: Input }]
    };
    return GdInputComponent;
}());
export { GdInputComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtaW5wdXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1pbnB1dC9nZC1pbnB1dC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sRUFBQyxXQUFXLEVBQThCLFVBQVUsRUFBQyxNQUFNLGdCQUFnQixDQUFDO0FBR25GO0lBQUE7SUFLQSxDQUFDOzs7Ozs7SUFKQywwQ0FBWTs7Ozs7SUFBWixVQUFhLE9BQTJCLEVBQUUsSUFBd0M7O1lBQzFFLFdBQVcsR0FBRyxJQUFJLElBQUksSUFBSSxDQUFDLFNBQVM7UUFDMUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxPQUFPLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLElBQUksT0FBTyxDQUFDLE9BQU8sSUFBSSxXQUFXLENBQUMsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFDSCwwQkFBQztBQUFELENBQUMsQUFMRCxJQUtDOztBQUdEO0lBa0JFO0lBQ0EsQ0FBQzs7OztJQUdELG1DQUFROzs7SUFBUjtRQUNFLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBQztZQUN2QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxVQUFVLENBQUMsUUFBUTtnQkFDbkIsVUFBVSxDQUFDLEtBQUs7YUFDakIsQ0FBQyxDQUFDO1lBQ0gsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLG1CQUFtQixFQUFFLENBQUM7U0FDMUM7YUFDSSxJQUFHLENBQUMsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBQztZQUM3QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxVQUFVLENBQUMsS0FBSzthQUNqQixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztTQUMxQzthQUNJLElBQUcsSUFBSSxDQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxJQUFJLE9BQU8sRUFBQztZQUM1QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsSUFBSSxXQUFXLENBQUMsRUFBRSxFQUFFO2dCQUMxQyxVQUFVLENBQUMsUUFBUTthQUNwQixDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztTQUMxQzthQUNHO1lBQ0YsSUFBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksV0FBVyxDQUFDLEVBQUUsRUFBRSxFQUMzQyxDQUFDLENBQUE7WUFDRixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksbUJBQW1CLEVBQUUsQ0FBQztTQUMxQztJQUNILENBQUM7Ozs7SUFFRCxvQ0FBUzs7O0lBQVQ7UUFDRSxJQUFHLElBQUksQ0FBQyxJQUFJLElBQUksT0FBTyxFQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDLGdCQUFnQixDQUFDO1NBQzlCO2FBQUs7WUFDSixPQUFPLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQztTQUM5QjtJQUNILENBQUM7O2dCQXZERixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHN4QkFBd0M7O2lCQUV6Qzs7Ozs7d0JBR0UsS0FBSzs4QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3VCQUNMLEtBQUs7O0lBNkNSLHVCQUFDO0NBQUEsQUF6REQsSUF5REM7U0FwRFksZ0JBQWdCOzs7SUFFM0IsaUNBQW1COztJQUNuQix1Q0FBeUI7O0lBQ3pCLGlDQUFtQjs7SUFDbkIsZ0NBQWtCOztJQUNsQixvQ0FBc0I7O0lBQ3RCLGdDQUFrQjs7SUFFbEIsNENBQXFCOztJQUNyQiw0Q0FBcUI7O0lBQ3JCLG1DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7Rm9ybUNvbnRyb2wsIEZvcm1Hcm91cERpcmVjdGl2ZSwgTmdGb3JtLCBWYWxpZGF0b3JzfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7RXJyb3JTdGF0ZU1hdGNoZXJ9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2NvcmUnO1xyXG5cclxuZXhwb3J0IGNsYXNzIE15RXJyb3JTdGF0ZU1hdGNoZXIgaW1wbGVtZW50cyBFcnJvclN0YXRlTWF0Y2hlciB7XHJcbiAgaXNFcnJvclN0YXRlKGNvbnRyb2w6IEZvcm1Db250cm9sIHwgbnVsbCwgZm9ybTogRm9ybUdyb3VwRGlyZWN0aXZlIHwgTmdGb3JtIHwgbnVsbCk6IGJvb2xlYW4ge1xyXG4gICAgY29uc3QgaXNTdWJtaXR0ZWQgPSBmb3JtICYmIGZvcm0uc3VibWl0dGVkO1xyXG4gICAgcmV0dXJuICEhKGNvbnRyb2wgJiYgY29udHJvbC5pbnZhbGlkICYmIChjb250cm9sLmRpcnR5IHx8IGNvbnRyb2wudG91Y2hlZCB8fCBpc1N1Ym1pdHRlZCkpO1xyXG4gIH1cclxufVxyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtaW5wdXQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1pbnB1dC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2QtaW5wdXQuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdkSW5wdXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBjb2xvcjphbnk7XHJcbiAgQElucHV0KCkgcGxhY2Vob2xkZXI6YW55O1xyXG4gIEBJbnB1dCgpIGxhYmVsOmFueTtcclxuICBASW5wdXQoKSB0eXBlOmFueTtcclxuICBASW5wdXQoKSByZXF1aXJlZDphbnk7XHJcbiAgQElucHV0KCkgaGludDphbnk7XHJcblxyXG4gIGVtYWlsRm9ybUNvbnRyb2w6YW55O1xyXG4gIGJhc2ljRm9ybUNvbnRyb2w6YW55O1xyXG4gIG1hdGNoZXI6YW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgXHJcbiAgfVxyXG4gIFxyXG4gIFxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgaWYodGhpcy5yZXF1aXJlZCAmJiB0aGlzLnR5cGUgPT0gJ2VtYWlsJyl7XHJcbiAgICAgIHRoaXMuZW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xyXG4gICAgICAgIFZhbGlkYXRvcnMucmVxdWlyZWQsXHJcbiAgICAgICAgVmFsaWRhdG9ycy5lbWFpbCxcclxuICAgICAgXSk7XHJcbiAgICAgIHRoaXMubWF0Y2hlciA9IG5ldyBNeUVycm9yU3RhdGVNYXRjaGVyKCk7XHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZighdGhpcy5yZXF1aXJlZCAmJiB0aGlzLnR5cGUgPT0gJ2VtYWlsJyl7XHJcbiAgICAgIHRoaXMuZW1haWxGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xyXG4gICAgICAgIFZhbGlkYXRvcnMuZW1haWwsXHJcbiAgICAgIF0pXHJcbiAgICAgIHRoaXMubWF0Y2hlciA9IG5ldyBNeUVycm9yU3RhdGVNYXRjaGVyKCk7ICAgICAgXHJcbiAgICB9IFxyXG4gICAgZWxzZSBpZih0aGlzLnJlcXVpcmVkICYmIHRoaXMudHlwZSAhPSAnZW1haWwnKXtcclxuICAgICAgdGhpcy5iYXNpY0Zvcm1Db250cm9sID0gbmV3IEZvcm1Db250cm9sKCcnLCBbXHJcbiAgICAgICAgVmFsaWRhdG9ycy5yZXF1aXJlZCxcclxuICAgICAgXSlcclxuICAgICAgdGhpcy5tYXRjaGVyID0gbmV3IE15RXJyb3JTdGF0ZU1hdGNoZXIoKTsgICAgICBcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHRoaXMuYmFzaWNGb3JtQ29udHJvbCA9IG5ldyBGb3JtQ29udHJvbCgnJywgW1xyXG4gICAgICBdKVxyXG4gICAgICB0aGlzLm1hdGNoZXIgPSBuZXcgTXlFcnJvclN0YXRlTWF0Y2hlcigpOyAgICBcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNoZWNrTmFtZSgpe1xyXG4gICAgaWYodGhpcy50eXBlID09ICdlbWFpbCcpe1xyXG4gICAgICByZXR1cm4gdGhpcy5lbWFpbEZvcm1Db250cm9sO1xyXG4gICAgfSBlbHNle1xyXG4gICAgICByZXR1cm4gdGhpcy5iYXNpY0Zvcm1Db250cm9sO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxufSJdfQ==