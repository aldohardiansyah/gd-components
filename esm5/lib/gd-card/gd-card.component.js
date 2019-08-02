/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
var GdCardComponent = /** @class */ (function () {
    function GdCardComponent() {
        this.isLoaded = false;
    }
    /**
     * @return {?}
     */
    GdCardComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    /**
     * @return {?}
     */
    GdCardComponent.prototype.done = /**
     * @return {?}
     */
    function () {
        this.isLoaded = true;
    };
    GdCardComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-card',
                    template: "<div class=\"GdCard basic-card\" *ngIf=\"type=='basic-card'\">\r\n<div class=\"loading-bar\" [ngClass]=\"{'full-loaded' : isLoaded }\"></div>\r\n<div class=\"loading-overlay\" *ngIf=\"!isLoaded\"></div>\r\n  <div class=\"head-card\"> \r\n      <ng-content select=[head]></ng-content>\r\n  </div>\r\n  <div class=\"content-card\"> <ng-content select=[content]></ng-content></div>\r\n  <div class=\"footer-card\"> <ng-content select=[footer]> </ng-content> </div>\r\n</div>\r\n\r\n<div class=\"GdCard advance-card\" *ngIf=\"type=='advance-card'\">\r\n\r\n    <div class=\"head-card\"> \r\n        <ng-content select=[head]></ng-content>\r\n    </div>\r\n    <div class=\"content-card\"> <ng-content select=[content]></ng-content></div>\r\n    <div class=\"footer-card\"> <ng-content select=[footer]> </ng-content> </div>\r\n\r\n</div>\r\n<br><button (click)=\"done()\">Done keun loading na</button>",
                    styles: [".GdCard.basic-card{min-width:300px;max-width:300px;min-height:400px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between;box-shadow:0 5px 50px -10px rgba(0,0,0,.55);border-radius:15px;padding:15px;overflow:hidden;position:relative}.GdCard.basic-card .head-card{width:100%;top:0;margin-bottom:10px;margin-top:10px}.GdCard.basic-card .head-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.basic-card .head-card ion-label{font-weight:500}.GdCard.basic-card .footer-card{margin-bottom:10px;margin-top:10px;bottom:0}.GdCard.basic-card .footer-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.advance-card{min-width:250px;min-height:400px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between;box-shadow:0 5px 50px -20px rgba(0,0,0,.4);border-radius:15px;padding:15px}.GdCard.advance-card .head-card{top:0p;margin-bottom:10px;margin-top:10px}.GdCard.advance-card .head-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.advance-card .head-card ion-label{font-weight:500}.GdCard.advance-card .footer-card{margin-bottom:10px;margin-top:10px;bottom:0}.GdCard.advance-card .footer-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard .loading-bar{background:orange;width:92%;height:4px;position:absolute;top:0;left:0;-webkit-animation:2s alternate load;animation:2s alternate load;-webkit-transition:.3s;transition:.3s;z-index:2}.GdCard .full-loaded{width:100%!important}.GdCard .loading-overlay{background:#fff;width:100%;height:100%;position:absolute;top:0;left:0;opacity:.5;z-index:1;-webkit-transition:.2s;transition:.2s}@-webkit-keyframes load{0%{width:0%}40%{width:60%}100%{width:92%}}@keyframes load{0%{width:0%}40%{width:60%}100%{width:92%}}"]
                }] }
    ];
    /** @nocollapse */
    GdCardComponent.ctorParameters = function () { return []; };
    GdCardComponent.propDecorators = {
        type: [{ type: Input }]
    };
    return GdCardComponent;
}());
export { GdCardComponent };
if (false) {
    /** @type {?} */
    GdCardComponent.prototype.isLoaded;
    /** @type {?} */
    GdCardComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWNhcmQvZ2QtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRXpEO0lBU0U7UUFIQSxhQUFRLEdBQVcsS0FBSyxDQUFDO0lBR1QsQ0FBQzs7OztJQUVqQixrQ0FBUTs7O0lBQVIsY0FBWSxDQUFDOzs7O0lBRWIsOEJBQUk7OztJQUFKO1FBQ0UsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7Z0JBZkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxTQUFTO29CQUNuQiw0NEJBQXVDOztpQkFFeEM7Ozs7O3VCQUdFLEtBQUs7O0lBU1Isc0JBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLGVBQWU7OztJQUMxQixtQ0FBeUI7O0lBQ3pCLCtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jYXJkJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2QtY2FyZC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2QtY2FyZC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RDYXJkQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBpc0xvYWRlZDpib29sZWFuID0gZmFsc2U7XHJcbiAgQElucHV0KCkgdHlwZTphbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbiAgZG9uZSgpe1xyXG4gICAgdGhpcy5pc0xvYWRlZCA9IHRydWU7XHJcbiAgfVxyXG59XHJcbiJdfQ==