/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
export class GdButtonToggleComponent {
    constructor() {
        this.toggleList = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
GdButtonToggleComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button-toggle',
                template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n    <mat-button-toggle *ngFor=\"let item of toggleList\" name=\"\" disabled={{item.disable}} value=\"item.value\">\r\n        <p no-margin>{{item.label}}</p>\r\n    </mat-button-toggle>\r\n</mat-button-toggle-group>",
                styles: [""]
            }] }
];
/** @nocollapse */
GdButtonToggleComponent.ctorParameters = () => [];
GdButtonToggleComponent.propDecorators = {
    groupName: [{ type: Input }],
    toggleList: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdButtonToggleComponent.prototype.groupName;
    /** @type {?} */
    GdButtonToggleComponent.prototype.toggleList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWJ1dHRvbi10b2dnbGUvZ2QtYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU90QyxNQUFNLE9BQU8sdUJBQXVCO0lBS2xDO1FBRlEsZUFBVSxHQUFPLEVBQUUsQ0FBQztJQUkzQixDQUFDOzs7O0lBRUYsUUFBUSxLQUFJLENBQUM7OztZQWRkLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsa0JBQWtCO2dCQUM1QixnU0FBZ0Q7O2FBRWpEOzs7Ozt3QkFHRSxLQUFLO3lCQUNOLEtBQUs7Ozs7SUFETCw0Q0FBdUI7O0lBQ3hCLDZDQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWJ1dHRvbi10b2dnbGUnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1idXR0b24tdG9nZ2xlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1idXR0b24tdG9nZ2xlLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZEJ1dHRvblRvZ2dsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGdyb3VwTmFtZTphbnk7XHJcbiBASW5wdXQoKSB0b2dnbGVMaXN0OmFueSA9IFtdO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuXHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxufVxyXG4iXX0=