/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GdBreadcrumbComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.breadcrumbList);
    }
}
GdBreadcrumbComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-breadcrumb',
                template: "<ul class=\"GdBreadcrumb\">\r\n    <li *ngFor=\"let item of breadcrumbList;index as i;let last = last\">\r\n      <a href=\"#\" [ngClass]=\"{'active': last}\">{{breadcrumbList[i].label}}</a>\r\n      <svg [ngClass]=\"{'invisible': last}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"9.067\" height=\"15.365\" viewBox=\"0 0 9.067 15.365\">\r\n        <path id=\"Path_2606\" data-name=\"Path 2606\" d=\"M130.9-337l7.007,6.946L144.853-337\" transform=\"translate(337.71 145.561) rotate(-90)\" fill=\"none\" stroke=\"#a5b0b7\" stroke-width=\"2\"/>\r\n      </svg>      \r\n    </li>\r\n</ul>",
                styles: ["ul.GdBreadcrumb{padding:0 10px;list-style:none}ul.GdBreadcrumb>li{display:inline}ul.GdBreadcrumb svg{margin:0 5px;width:12px!important;height:12px!important}ul.GdBreadcrumb .invisible{display:none}ul.GdBreadcrumb .active{color:#333!important;font-weight:400!important;pointer-events:none!important}ul.GdBreadcrumb li a{text-decoration:none;color:var(--ion-color-primary);font-weight:700;-webkit-transition:color .25s;transition:color .25s}ul.GdBreadcrumb li a:hover{color:var(--ion-color-primary-shade)!important}@media only screen and (max-width:720px){ul.GdBreadcrumb>li{display:none}ul.GdBreadcrumb svg{display:none!important}ul.GdBreadcrumb.active{display:inline!important;color:#333!important;font-weight:400!important;pointer-events:none!important}}"]
            }] }
];
/** @nocollapse */
GdBreadcrumbComponent.ctorParameters = () => [];
GdBreadcrumbComponent.propDecorators = {
    breadcrumbList: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdBreadcrumbComponent.prototype.breadcrumbList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtYnJlYWRjcnVtYi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWJyZWFkY3J1bWIvZ2QtYnJlYWRjcnVtYi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxxQkFBcUI7SUFJaEM7SUFFQyxDQUFDOzs7O0lBRUYsUUFBUTtRQUNOLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDO0lBRW5DLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGVBQWU7Z0JBQ3pCLHdsQkFBNkM7O2FBRTlDOzs7Ozs2QkFHQSxLQUFLOzs7O0lBQU4sK0NBQTRCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWJyZWFkY3J1bWInLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1icmVhZGNydW1iLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1icmVhZGNydW1iLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZEJyZWFkY3J1bWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuQElucHV0KCkgYnJlYWRjcnVtYkxpc3Q6YW55O1xyXG4gIFxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgXHJcbiAgIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmJyZWFkY3J1bWJMaXN0KTtcclxuICAgIFxyXG4gIH1cclxuXHJcbn1cclxuIl19