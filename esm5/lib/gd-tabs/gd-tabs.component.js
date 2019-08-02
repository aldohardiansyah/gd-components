/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var GdTabsComponent = /** @class */ (function () {
    function GdTabsComponent() {
        this.selectedValue = 0;
        this.i = 0;
        this.positionLabel2 = this.positionLabel;
    }
    /**
     * @return {?}
     */
    GdTabsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.arraySection = document.querySelectorAll(".gdtab-section");
        console.log('anoo', this.arraySection);
    };
    /**
     * @return {?}
     */
    GdTabsComponent.prototype.ngAfterViewInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var selector = ".gd-sectiontab-" + 0;
        document.querySelector(selector).innerHTML = this.arraySection[0].outerHTML;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    GdTabsComponent.prototype.setValue = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _this = this;
        this.selectedValue = event;
        console.log(this.selectedValue);
        /** @type {?} */
        var selector = ".gd-sectiontab-" + this.selectedValue;
        setTimeout((/**
         * @return {?}
         */
        function () {
            document.querySelector(selector).innerHTML = _this.arraySection[_this.selectedValue].outerHTML;
        }), 0.01);
        console.log(this.arraySection[this.selectedValue].outerHTML);
        console.log(document.querySelector(selector));
    };
    GdTabsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-tabs',
                    template: "<mat-tab-group selectedIndex=\"0\" (selectedIndexChange)=\"setValue($event)\" [headerPosition]=\"positionLabel\" mat-align-tabs=\"alignLabel\">\r\n  <mat-tab  *ngFor=\"let item of arraySection; index as i\" [label]=\"dataLabel[i]\"> \r\n      <div class=\"gd-sectiontab-{{i}}\">\r\n      </div> \r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n<div class=\"tampung\">\r\n  <h1>tumpang</h1>\r\n    <ng-content select=\"[class=gdtab-section]\"></ng-content>\r\n</div>\r\n",
                    styles: [".tampung{display:none}"]
                }] }
    ];
    /** @nocollapse */
    GdTabsComponent.ctorParameters = function () { return []; };
    GdTabsComponent.propDecorators = {
        dataLabel: [{ type: Input }],
        alignLabel: [{ type: Input }],
        positionLabel: [{ type: Input }]
    };
    return GdTabsComponent;
}());
export { GdTabsComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtdGFicy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLXRhYnMvZ2QtdGFicy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVMsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXhEO0lBaUJFO1FBTEEsa0JBQWEsR0FBSyxDQUFDLENBQUM7UUFFcEIsTUFBQyxHQUFPLENBQUMsQ0FBQztRQUNWLG1CQUFjLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUluQyxDQUFDOzs7O0lBRUYsa0NBQVE7OztJQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoRSxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sRUFBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDeEMsQ0FBQzs7OztJQUVELHlDQUFlOzs7SUFBZjs7WUFDTSxRQUFRLEdBQUcsaUJBQWlCLEdBQUcsQ0FBQztRQUNwQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQztJQUM5RSxDQUFDOzs7OztJQUVELGtDQUFROzs7O0lBQVIsVUFBUyxLQUFLO1FBQWQsaUJBU0M7UUFSRyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzs7WUFDNUIsUUFBUSxHQUFHLGlCQUFpQixHQUFHLElBQUksQ0FBQyxhQUFhO1FBQ3JELFVBQVU7OztRQUFDO1lBQ1AsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2pHLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztRQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFDbEQsQ0FBQzs7Z0JBeENGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsNGRBQXVDOztpQkFFeEM7Ozs7OzRCQUlFLEtBQUs7NkJBQ0wsS0FBSztnQ0FDTCxLQUFLOztJQWtDUixzQkFBQztDQUFBLEFBNUNELElBNENDO1NBdkNZLGVBQWU7OztJQUcxQixvQ0FBdUI7O0lBQ3ZCLHFDQUF3Qjs7SUFDeEIsd0NBQTJCOztJQUMzQix1Q0FBaUI7O0lBQ2pCLHdDQUFvQjs7SUFDcEIsZ0NBQVU7O0lBQ1YsNEJBQVU7O0lBQ1YseUNBQW9DIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtdGFicycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLXRhYnMuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLXRhYnMuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdkVGFic0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5cclxuICBASW5wdXQoKSBkYXRhTGFiZWw6YW55O1xyXG4gIEBJbnB1dCgpIGFsaWduTGFiZWw6YW55O1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uTGFiZWw6YW55O1xyXG4gIGFycmF5U2VjdGlvbjphbnk7XHJcbiAgc2VsZWN0ZWRWYWx1ZTphbnk9MDtcclxuICBldmVudDphbnk7XHJcbiAgaTphbnkgPSAwO1xyXG4gIHBvc2l0aW9uTGFiZWwyID0gdGhpcy5wb3NpdGlvbkxhYmVsO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHtcclxuICAgIFxyXG4gICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5hcnJheVNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmdkdGFiLXNlY3Rpb25cIik7XHJcbiAgICBjb25zb2xlLmxvZygnYW5vbycsdGhpcy5hcnJheVNlY3Rpb24pO1xyXG4gIH1cclxuXHJcbiAgbmdBZnRlclZpZXdJbml0KCl7XHJcbiAgICB2YXIgc2VsZWN0b3IgPSBcIi5nZC1zZWN0aW9udGFiLVwiICsgMDtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpLmlubmVySFRNTCA9IHRoaXMuYXJyYXlTZWN0aW9uWzBdLm91dGVySFRNTDtcclxuICB9XHJcblxyXG4gIHNldFZhbHVlKGV2ZW50KXtcclxuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gZXZlbnQ7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XHJcbiAgICAgIHZhciBzZWxlY3RvciA9IFwiLmdkLXNlY3Rpb250YWItXCIgKyB0aGlzLnNlbGVjdGVkVmFsdWU7XHJcbiAgICAgIHNldFRpbWVvdXQoKCk9PnsgICAgXHJcbiAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKS5pbm5lckhUTUwgPSB0aGlzLmFycmF5U2VjdGlvblt0aGlzLnNlbGVjdGVkVmFsdWVdLm91dGVySFRNTDtcclxuICAgICAgfSwgMC4wMSk7XHJcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXJyYXlTZWN0aW9uW3RoaXMuc2VsZWN0ZWRWYWx1ZV0ub3V0ZXJIVE1MKTtcclxuICAgICAgY29uc29sZS5sb2coZG9jdW1lbnQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikpO1xyXG4gIH1cclxuXHJcbiAgXHJcblxyXG59XHJcbiJdfQ==