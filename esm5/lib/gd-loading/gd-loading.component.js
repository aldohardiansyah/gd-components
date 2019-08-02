/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var GdLoadingComponent = /** @class */ (function () {
    function GdLoadingComponent() {
    }
    /**
     * @return {?}
     */
    GdLoadingComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    GdLoadingComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-loading',
                    template: "<div class=\"balls\" [ngStyle]=\"{'opacity': !isLoading ? 1:0, 'width.px': !isLoading ? 36:0, 'margin-right.px': !isLoading ? 10:0 }\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n</div>\r\n<div id=\"text\">{{isLoading}}</div>\r\n/ {{loadingnya}} /\r\n",
                    styles: [".balls{width:2.4em;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-right:10px;-webkit-transition:.2s;transition:.2s;-webkit-animation:.4s ease-in loading;animation:.4s ease-in loading}.balls div{width:.5em;height:.5em;border-radius:50%;background-color:#fff;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-animation:.8s ease-in-out infinite alternate wave;animation:.8s ease-in-out infinite alternate wave}.balls div:nth-of-type(1){-webkit-animation-delay:-.4s;animation-delay:-.4s}.balls div:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes wave{from{-webkit-transform:translateY(-50%);transform:translateY(-50%)}to{-webkit-transform:translateY(50%);transform:translateY(50%)}}@keyframes wave{from{-webkit-transform:translateY(-50%);transform:translateY(-50%)}to{-webkit-transform:translateY(50%);transform:translateY(50%)}}@-webkit-keyframes loading{0%,80%{opacity:0}100%{opacity:1}}@keyframes loading{0%,80%{opacity:0}100%{opacity:1}}"]
                }] }
    ];
    /** @nocollapse */
    GdLoadingComponent.ctorParameters = function () { return []; };
    GdLoadingComponent.propDecorators = {
        isLoading: [{ type: Input }],
        text: [{ type: Input }]
    };
    return GdLoadingComponent;
}());
export { GdLoadingComponent };
if (false) {
    /** @type {?} */
    GdLoadingComponent.prototype.isLoading;
    /** @type {?} */
    GdLoadingComponent.prototype.text;
    /** @type {?} */
    GdLoadingComponent.prototype.loadingnya;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtbG9hZGluZy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWxvYWRpbmcvZ2QtbG9hZGluZy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBVUU7SUFFQSxDQUFDOzs7O0lBRUQscUNBQVE7OztJQUFSO0lBRUEsQ0FBQzs7Z0JBaEJGLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsWUFBWTtvQkFDdEIsd1JBQTBDOztpQkFFM0M7Ozs7OzRCQUVFLEtBQUs7dUJBQ0wsS0FBSzs7SUFXUix5QkFBQztDQUFBLEFBbEJELElBa0JDO1NBYlksa0JBQWtCOzs7SUFDN0IsdUNBQTRCOztJQUM1QixrQ0FBbUI7O0lBRW5CLHdDQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1sb2FkaW5nJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2QtbG9hZGluZy5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2QtbG9hZGluZy5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RMb2FkaW5nQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSBpc0xvYWRpbmc6IGJvb2xlYW47XHJcbiAgQElucHV0KCkgdGV4dDogYW55O1xyXG5cclxuICBsb2FkaW5nbnlhOmJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoKSB7XHJcblxyXG4gIH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==