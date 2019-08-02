/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GdProgressSpinnerComponent {
    constructor() {
        this.value = 0;
        this.type = 'primary';
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
GdProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-progress-spinner',
                template: "<mat-progress-spinner\r\n    *ngIf=\"type == 'primary'\"\r\n    class=\"primary-spinner\"\r\n    mode=\"determinate\"\r\n    value=\"{{value}}\">\r\n</mat-progress-spinner>\r\n\r\n<mat-progress-spinner\r\n    *ngIf=\"type == 'light'\"\r\n    class=\"light-spinner\"\r\n    mode=\"determinate\"\r\n    value=\"{{value}}\">\r\n</mat-progress-spinner>\r\n\r\n<mat-progress-spinner\r\n    *ngIf=\"type == 'dark'\"\r\n    class=\"dark-spinner\"\r\n    mode=\"determinate\"\r\n    value=\"{{value}}\">\r\n</mat-progress-spinner>\r\n",
                styles: ["::ng-deep .primary-spinner,::ng-deep svg{width:30px!important;height:30px!important}::ng-deep .primary-spinner svg circle{stroke:var(--ion-color-primary)!important}::ng-deep .light-spinner,::ng-deep svg{width:30px!important;height:30px!important}::ng-deep .light-spinner svg circle{stroke:#e9e9e9!important}::ng-deep .dark-spinner,::ng-deep svg{width:30px!important;height:30px!important}::ng-deep .dark-spinner svg circle{stroke:#464646!important}"]
            }] }
];
/** @nocollapse */
GdProgressSpinnerComponent.ctorParameters = () => [];
GdProgressSpinnerComponent.propDecorators = {
    value: [{ type: Input }],
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdProgressSpinnerComponent.prototype.value;
    /** @type {?} */
    GdProgressSpinnerComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLXByb2dyZXNzLXNwaW5uZXIvZ2QtcHJvZ3Jlc3Mtc3Bpbm5lci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTywwQkFBMEI7SUFHckM7UUFGUyxVQUFLLEdBQVUsQ0FBQyxDQUFDO1FBQ2pCLFNBQUksR0FBTyxTQUFTLENBQUM7SUFDZCxDQUFDOzs7O0lBRWpCLFFBQVEsS0FBSSxDQUFDOzs7WUFWZCxTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLHFCQUFxQjtnQkFDL0IsMGhCQUFtRDs7YUFFcEQ7Ozs7O29CQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLDJDQUEwQjs7SUFDMUIsMENBQThCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXByb2dyZXNzLXNwaW5uZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1wcm9ncmVzcy1zcGlubmVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZFByb2dyZXNzU3Bpbm5lckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdmFsdWU6bnVtYmVyID0gMDtcclxuICBASW5wdXQoKSB0eXBlOmFueSA9ICdwcmltYXJ5JztcclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG59XHJcbiJdfQ==