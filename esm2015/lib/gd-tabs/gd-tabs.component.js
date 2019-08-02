/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GdTabsComponent {
    constructor() {
        this.selectedValue = 0;
        this.i = 0;
        this.positionLabel2 = this.positionLabel;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.arraySection = document.querySelectorAll(".gdtab-section");
        console.log('anoo', this.arraySection);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /** @type {?} */
        var selector = ".gd-sectiontab-" + 0;
        document.querySelector(selector).innerHTML = this.arraySection[0].outerHTML;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    setValue(event) {
        this.selectedValue = event;
        console.log(this.selectedValue);
        /** @type {?} */
        var selector = ".gd-sectiontab-" + this.selectedValue;
        setTimeout((/**
         * @return {?}
         */
        () => {
            document.querySelector(selector).innerHTML = this.arraySection[this.selectedValue].outerHTML;
        }), 0.01);
        console.log(this.arraySection[this.selectedValue].outerHTML);
        console.log(document.querySelector(selector));
    }
}
GdTabsComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-tabs',
                template: "<mat-tab-group selectedIndex=\"0\" (selectedIndexChange)=\"setValue($event)\" [headerPosition]=\"positionLabel\" mat-align-tabs=\"alignLabel\">\r\n  <mat-tab  *ngFor=\"let item of arraySection; index as i\" [label]=\"dataLabel[i]\"> \r\n      <div class=\"gd-sectiontab-{{i}}\">\r\n      </div> \r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n<div class=\"tampung\">\r\n  <h1>tumpang</h1>\r\n    <ng-content select=\"[class=gdtab-section]\"></ng-content>\r\n</div>\r\n",
                styles: [".tampung{display:none}"]
            }] }
];
/** @nocollapse */
GdTabsComponent.ctorParameters = () => [];
GdTabsComponent.propDecorators = {
    dataLabel: [{ type: Input }],
    alignLabel: [{ type: Input }],
    positionLabel: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdTabsComponent.prototype.dataLabel;
    /** @type {?} */
    GdTabsComponent.prototype.alignLabel;
    /** @type {?} */
    GdTabsComponent.prototype.positionLabel;
    /** @type {?} */
    GdTabsComponent.prototype.arraySection;
    /** @type {?} */
    GdTabsComponent.prototype.selectedValue;
    /** @type {?} */
    GdTabsComponent.prototype.event;
    /** @type {?} */
    GdTabsComponent.prototype.i;
    /** @type {?} */
    GdTabsComponent.prototype.positionLabel2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLXRhYnMvZ2QtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3hELE1BQU0sT0FBTyxlQUFlO0lBWTFCO1FBTEEsa0JBQWEsR0FBSyxDQUFDLENBQUM7UUFFcEIsTUFBQyxHQUFPLENBQUMsQ0FBQztRQUNWLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUluQyxDQUFDOzs7O0lBRUYsUUFBUTtRQUNOLElBQUksQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLENBQUM7UUFDaEUsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7Ozs7SUFFRCxlQUFlOztZQUNULFFBQVEsR0FBRyxpQkFBaUIsR0FBRyxDQUFDO1FBQ3BDLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO0lBQzlFLENBQUM7Ozs7O0lBRUQsUUFBUSxDQUFDLEtBQUs7UUFDVixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7WUFDNUIsUUFBUSxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhO1FBQ3JELFVBQVU7OztRQUFDLEdBQUUsRUFBRTtZQUNYLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNqRyxDQUFDLEdBQUUsSUFBSSxDQUFDLENBQUM7UUFDVCxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzdELE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7OztZQXhDRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFNBQVM7Z0JBQ25CLDRkQUF1Qzs7YUFFeEM7Ozs7O3dCQUlFLEtBQUs7eUJBQ0wsS0FBSzs0QkFDTCxLQUFLOzs7O0lBRk4sb0NBQXVCOztJQUN2QixxQ0FBd0I7O0lBQ3hCLHdDQUEyQjs7SUFDM0IsdUNBQWlCOztJQUNqQix3Q0FBb0I7O0lBQ3BCLGdDQUFVOztJQUNWLDRCQUFVOztJQUNWLHlDQUFvQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXRhYnMnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC10YWJzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC10YWJzLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZFRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuXHJcbiAgQElucHV0KCkgZGF0YUxhYmVsOmFueTtcclxuICBASW5wdXQoKSBhbGlnbkxhYmVsOmFueTtcclxuICBASW5wdXQoKSBwb3NpdGlvbkxhYmVsOmFueTtcclxuICBhcnJheVNlY3Rpb246YW55O1xyXG4gIHNlbGVjdGVkVmFsdWU6YW55PTA7XHJcbiAgZXZlbnQ6YW55O1xyXG4gIGk6YW55ID0gMDtcclxuICBwb3NpdGlvbkxhYmVsMiA9IHRoaXMucG9zaXRpb25MYWJlbDtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXJyYXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nZHRhYi1zZWN0aW9uXCIpO1xyXG4gICAgY29uc29sZS5sb2coJ2Fub28nLHRoaXMuYXJyYXlTZWN0aW9uKTtcclxuICB9XHJcblxyXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpe1xyXG4gICAgdmFyIHNlbGVjdG9yID0gXCIuZ2Qtc2VjdGlvbnRhYi1cIiArIDA7XHJcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5pbm5lckhUTUwgPSB0aGlzLmFycmF5U2VjdGlvblswXS5vdXRlckhUTUw7XHJcbiAgfVxyXG5cclxuICBzZXRWYWx1ZShldmVudCl7XHJcbiAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IGV2ZW50O1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkVmFsdWUpO1xyXG4gICAgICB2YXIgc2VsZWN0b3IgPSBcIi5nZC1zZWN0aW9udGFiLVwiICsgdGhpcy5zZWxlY3RlZFZhbHVlO1xyXG4gICAgICBzZXRUaW1lb3V0KCgpPT57ICAgIFxyXG4gICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikuaW5uZXJIVE1MID0gdGhpcy5hcnJheVNlY3Rpb25bdGhpcy5zZWxlY3RlZFZhbHVlXS5vdXRlckhUTUw7XHJcbiAgICAgIH0sIDAuMDEpO1xyXG4gICAgICBjb25zb2xlLmxvZyh0aGlzLmFycmF5U2VjdGlvblt0aGlzLnNlbGVjdGVkVmFsdWVdLm91dGVySFRNTCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpKTtcclxuICB9XHJcblxyXG4gIFxyXG5cclxufVxyXG4iXX0=