/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class GdStepperComponent {
    constructor() {
        this.i = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.arraySection = document.querySelectorAll(".gd-stepper-section");
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.arraySection.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            /** @type {?} */
            var selector = ".gd-stepper-section-" + this.i;
            document.querySelector(selector).innerHTML = element.outerHTML;
            this.i++;
        }));
    }
}
GdStepperComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-stepper',
                template: "<mat-horizontal-stepper>\r\n        <mat-step [completed]=\"false\" *ngFor=\"let item of arraySection; index as i\">\r\n                <div class=\"gd-stepper-section-{{i}}\">\r\n                </div> \r\n        </mat-step>\r\n</mat-horizontal-stepper>\r\n<div class=\"tampung\">\r\n        <ng-content></ng-content>\r\n</div>",
                styles: [".tampung{display:none}"]
            }] }
];
/** @nocollapse */
GdStepperComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    GdStepperComponent.prototype.arraySection;
    /** @type {?} */
    GdStepperComponent.prototype.i;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Qtc3RlcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLXN0ZXBwZXIvZ2Qtc3RlcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFXbEQsTUFBTSxPQUFPLGtCQUFrQjtJQUs3QjtRQUZBLE1BQUMsR0FBTyxDQUFDLENBQUM7SUFJVCxDQUFDOzs7O0lBRUYsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLHFCQUFxQixDQUFDLENBQUM7SUFDdkUsQ0FBQzs7OztJQUVELGVBQWU7UUFDYixJQUFJLENBQUMsWUFBWSxDQUFDLE9BQU87Ozs7UUFBQyxPQUFPLENBQUMsRUFBRTs7Z0JBQzlCLFFBQVEsR0FBRyxzQkFBc0IsR0FBRyxJQUFJLENBQUMsQ0FBQztZQUM5QyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDO1lBQy9ELElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUNYLENBQUMsRUFBQyxDQUFDO0lBQ0wsQ0FBQzs7O1lBeEJGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsWUFBWTtnQkFDdEIscVZBQTBDOzthQUUzQzs7Ozs7O0lBR0MsMENBQWlCOztJQUNqQiwrQkFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEZvcm1Hcm91cCB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgRm9ybUJ1aWxkZXIgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXN0ZXBwZXInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1zdGVwcGVyLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1zdGVwcGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZFN0ZXBwZXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIFxyXG4gIGFycmF5U2VjdGlvbjphbnk7XHJcbiAgaTphbnkgPSAwO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFxyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcnJheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkLXN0ZXBwZXItc2VjdGlvblwiKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xyXG4gICAgdGhpcy5hcnJheVNlY3Rpb24uZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgdmFyIHNlbGVjdG9yID0gXCIuZ2Qtc3RlcHBlci1zZWN0aW9uLVwiICsgdGhpcy5pO1xyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5pbm5lckhUTUwgPSBlbGVtZW50Lm91dGVySFRNTDtcclxuICAgICAgdGhpcy5pKys7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==