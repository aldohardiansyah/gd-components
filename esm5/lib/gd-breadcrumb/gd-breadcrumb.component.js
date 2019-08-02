/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var GdBreadcrumbComponent = /** @class */ (function () {
    function GdBreadcrumbComponent() {
    }
    /**
     * @return {?}
     */
    GdBreadcrumbComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        console.log(this.breadcrumbList);
    };
    GdBreadcrumbComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-breadcrumb',
                    template: "<ul class=\"GdBreadcrumb\">\r\n    <li *ngFor=\"let item of breadcrumbList;index as i;let last = last\">\r\n      <a href=\"#\" [ngClass]=\"{'active': last}\">{{breadcrumbList[i].label}}</a>\r\n      <svg [ngClass]=\"{'invisible': last}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"9.067\" height=\"15.365\" viewBox=\"0 0 9.067 15.365\">\r\n        <path id=\"Path_2606\" data-name=\"Path 2606\" d=\"M130.9-337l7.007,6.946L144.853-337\" transform=\"translate(337.71 145.561) rotate(-90)\" fill=\"none\" stroke=\"#a5b0b7\" stroke-width=\"2\"/>\r\n      </svg>      \r\n    </li>\r\n</ul>",
                    styles: ["ul.GdBreadcrumb{padding:0 10px;list-style:none}ul.GdBreadcrumb>li{display:inline}ul.GdBreadcrumb svg{margin:0 5px;width:12px!important;height:12px!important}ul.GdBreadcrumb .invisible{display:none}ul.GdBreadcrumb .active{color:#333!important;font-weight:400!important;pointer-events:none!important}ul.GdBreadcrumb li a{text-decoration:none;color:var(--ion-color-primary);font-weight:700;-webkit-transition:color .25s;transition:color .25s}ul.GdBreadcrumb li a:hover{color:var(--ion-color-primary-shade)!important}@media only screen and (max-width:720px){ul.GdBreadcrumb>li{display:none}ul.GdBreadcrumb svg{display:none!important}ul.GdBreadcrumb.active{display:inline!important;color:#333!important;font-weight:400!important;pointer-events:none!important}}"]
                }] }
    ];
    /** @nocollapse */
    GdBreadcrumbComponent.ctorParameters = function () { return []; };
    GdBreadcrumbComponent.propDecorators = {
        breadcrumbList: [{ type: Input }]
    };
    return GdBreadcrumbComponent;
}());
export { GdBreadcrumbComponent };
if (false) {
    /** @type {?} */
    GdBreadcrumbComponent.prototype.breadcrumbList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWJyZWFkY3J1bWIvZ2QtYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBU0U7SUFFQyxDQUFDOzs7O0lBRUYsd0NBQVE7OztJQUFSO1FBQ0UsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7SUFFbkMsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsZUFBZTtvQkFDekIsd2xCQUE2Qzs7aUJBRTlDOzs7OztpQ0FHQSxLQUFLOztJQVdOLDRCQUFDO0NBQUEsQUFsQkQsSUFrQkM7U0FiWSxxQkFBcUI7OztJQUVsQywrQ0FBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtYnJlYWRjcnVtYicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWJyZWFkY3J1bWIuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLWJyZWFkY3J1bWIuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdkQnJlYWRjcnVtYkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG5ASW5wdXQoKSBicmVhZGNydW1iTGlzdDphbnk7XHJcbiAgXHJcbiAgY29uc3RydWN0b3IoKSB7XHJcbiAgICBcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKHRoaXMuYnJlYWRjcnVtYkxpc3QpO1xyXG4gICAgXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=