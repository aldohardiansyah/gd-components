/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GdLoadingComponent {
    constructor() {
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
GdLoadingComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-loading',
                template: "<div class=\"balls\" [ngStyle]=\"{'opacity': !isLoading ? 1:0, 'width.px': !isLoading ? 36:0, 'margin-right.px': !isLoading ? 10:0 }\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n</div>\r\n<div id=\"text\">{{isLoading}}</div>\r\n/ {{loadingnya}} /\r\n",
                styles: [".balls{width:2.4em;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-right:10px;-webkit-transition:.2s;transition:.2s;-webkit-animation:.4s ease-in loading;animation:.4s ease-in loading}.balls div{width:.5em;height:.5em;border-radius:50%;background-color:#fff;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-animation:.8s ease-in-out infinite alternate wave;animation:.8s ease-in-out infinite alternate wave}.balls div:nth-of-type(1){-webkit-animation-delay:-.4s;animation-delay:-.4s}.balls div:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes wave{from{-webkit-transform:translateY(-50%);transform:translateY(-50%)}to{-webkit-transform:translateY(50%);transform:translateY(50%)}}@keyframes wave{from{-webkit-transform:translateY(-50%);transform:translateY(-50%)}to{-webkit-transform:translateY(50%);transform:translateY(50%)}}@-webkit-keyframes loading{0%,80%{opacity:0}100%{opacity:1}}@keyframes loading{0%,80%{opacity:0}100%{opacity:1}}"]
            }] }
];
/** @nocollapse */
GdLoadingComponent.ctorParameters = () => [];
GdLoadingComponent.propDecorators = {
    isLoading: [{ type: Input }],
    text: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdLoadingComponent.prototype.isLoading;
    /** @type {?} */
    GdLoadingComponent.prototype.text;
    /** @type {?} */
    GdLoadingComponent.prototype.loadingnya;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtbG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWxvYWRpbmcvZ2QtbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxrQkFBa0I7SUFLN0I7SUFFQSxDQUFDOzs7O0lBRUQsUUFBUTtJQUVSLENBQUM7OztZQWhCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFlBQVk7Z0JBQ3RCLHdSQUEwQzs7YUFFM0M7Ozs7O3dCQUVFLEtBQUs7bUJBQ0wsS0FBSzs7OztJQUROLHVDQUE0Qjs7SUFDNUIsa0NBQW1COztJQUVuQix3Q0FBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtbG9hZGluZycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWxvYWRpbmcuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLWxvYWRpbmcuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdkTG9hZGluZ0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaXNMb2FkaW5nOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpIHRleHQ6IGFueTtcclxuXHJcbiAgbG9hZGluZ255YTpib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgXHJcbiAgfVxyXG5cclxufVxyXG4iXX0=