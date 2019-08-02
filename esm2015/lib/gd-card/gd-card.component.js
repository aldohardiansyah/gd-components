/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class GdCardComponent {
    constructor() {
        this.isLoaded = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
    /**
     * @return {?}
     */
    done() {
        this.isLoaded = true;
    }
}
GdCardComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-card',
                template: "<div class=\"GdCard basic-card\" *ngIf=\"type=='basic-card'\">\r\n<div class=\"loading-bar\" [ngClass]=\"{'full-loaded' : isLoaded }\"></div>\r\n<div class=\"loading-overlay\" *ngIf=\"!isLoaded\"></div>\r\n  <div class=\"head-card\"> \r\n      <ng-content select=[head]></ng-content>\r\n  </div>\r\n  <div class=\"content-card\"> <ng-content select=[content]></ng-content></div>\r\n  <div class=\"footer-card\"> <ng-content select=[footer]> </ng-content> </div>\r\n</div>\r\n\r\n<div class=\"GdCard advance-card\" *ngIf=\"type=='advance-card'\">\r\n\r\n    <div class=\"head-card\"> \r\n        <ng-content select=[head]></ng-content>\r\n    </div>\r\n    <div class=\"content-card\"> <ng-content select=[content]></ng-content></div>\r\n    <div class=\"footer-card\"> <ng-content select=[footer]> </ng-content> </div>\r\n\r\n</div>\r\n<br><button (click)=\"done()\">Done keun loading na</button>",
                styles: [".GdCard.basic-card{min-width:300px;max-width:300px;min-height:400px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between;box-shadow:0 5px 50px -10px rgba(0,0,0,.55);border-radius:15px;padding:15px;overflow:hidden;position:relative}.GdCard.basic-card .head-card{width:100%;top:0;margin-bottom:10px;margin-top:10px}.GdCard.basic-card .head-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.basic-card .head-card ion-label{font-weight:500}.GdCard.basic-card .footer-card{margin-bottom:10px;margin-top:10px;bottom:0}.GdCard.basic-card .footer-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.advance-card{min-width:250px;min-height:400px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between;box-shadow:0 5px 50px -20px rgba(0,0,0,.4);border-radius:15px;padding:15px}.GdCard.advance-card .head-card{top:0p;margin-bottom:10px;margin-top:10px}.GdCard.advance-card .head-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.advance-card .head-card ion-label{font-weight:500}.GdCard.advance-card .footer-card{margin-bottom:10px;margin-top:10px;bottom:0}.GdCard.advance-card .footer-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard .loading-bar{background:orange;width:92%;height:4px;position:absolute;top:0;left:0;-webkit-animation:2s alternate load;animation:2s alternate load;-webkit-transition:.3s;transition:.3s;z-index:2}.GdCard .full-loaded{width:100%!important}.GdCard .loading-overlay{background:#fff;width:100%;height:100%;position:absolute;top:0;left:0;opacity:.5;z-index:1;-webkit-transition:.2s;transition:.2s}@-webkit-keyframes load{0%{width:0%}40%{width:60%}100%{width:92%}}@keyframes load{0%{width:0%}40%{width:60%}100%{width:92%}}"]
            }] }
];
/** @nocollapse */
GdCardComponent.ctorParameters = () => [];
GdCardComponent.propDecorators = {
    type: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdCardComponent.prototype.isLoaded;
    /** @type {?} */
    GdCardComponent.prototype.type;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtY2FyZC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWNhcmQvZ2QtY2FyZC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyxlQUFlO0lBSTFCO1FBSEEsYUFBUSxHQUFXLEtBQUssQ0FBQztJQUdULENBQUM7Ozs7SUFFakIsUUFBUSxLQUFJLENBQUM7Ozs7SUFFYixJQUFJO1FBQ0YsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7SUFDdkIsQ0FBQzs7O1lBZkYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQiw0NEJBQXVDOzthQUV4Qzs7Ozs7bUJBR0UsS0FBSzs7OztJQUROLG1DQUF5Qjs7SUFDekIsK0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNhcmQnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1jYXJkLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1jYXJkLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZENhcmRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGlzTG9hZGVkOmJvb2xlYW4gPSBmYWxzZTtcclxuICBASW5wdXQoKSB0eXBlOmFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxuICBkb25lKCl7XHJcbiAgICB0aGlzLmlzTG9hZGVkID0gdHJ1ZTtcclxuICB9XHJcbn1cclxuIl19