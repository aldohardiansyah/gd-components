/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
var GdBadgeComponent = /** @class */ (function () {
    function GdBadgeComponent() {
    }
    /**
     * @return {?}
     */
    GdBadgeComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    GdBadgeComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-badge',
                    template: "<div  \r\n[ngClass]=\" {\r\n    'new': type == 'new', \r\n    'rejected': type == 'rejected', \r\n    'partially': type == 'partially', \r\n    'approve': type == 'approve', \r\n    'added': type == 'added', \r\n    'small' : size =='small', \r\n    'medium' : size =='medium', \r\n    'large' : size =='large',\r\n    'top'   : position == 'top',\r\n    'bottom' : position == 'bottom'}\" class=\"GdBadge\"><div class=\"label\">{{label}}</div>\r\n</div>    \r\n",
                    styles: [".GdBadge.small{position:relative;display:inline-block;width:15px;height:15px;border-radius:50%;font-size:.5em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.small .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.medium{position:relative;display:inline-block;width:20px;height:20px;border-radius:50%;font-size:.8em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.medium .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.large{position:relative;display:inline-block;width:28px;height:28px;border-radius:50%;font-size:1em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.large .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.top{z-index:99999;top:-8px;margin-left:-4px;margin-right:-4px}.GdBadge.bottom{z-index:99999;bottom:-10px;margin-left:-3px;margin-right:-3px}.GdBadge.new{background-color:var(--ion-color-new)!important}.GdBadge.rejected{background-color:var(--ion-color-rejected)!important}.GdBadge.partially{background-color:var(--ion-color-partially)!important}.GdBadge.added{background-color:var(--ion-color-primary)!important}.GdBadge.approve{background-color:var(--ion-color-approve)!important}@-webkit-keyframes show-badge{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes show-badge{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}"]
                }] }
    ];
    /** @nocollapse */
    GdBadgeComponent.ctorParameters = function () { return []; };
    GdBadgeComponent.propDecorators = {
        size: [{ type: Input }],
        color: [{ type: Input }],
        label: [{ type: Input }],
        type: [{ type: Input }],
        position: [{ type: Input }]
    };
    return GdBadgeComponent;
}());
export { GdBadgeComponent };
if (false) {
    /** @type {?} */
    GdBadgeComponent.prototype.size;
    /** @type {?} */
    GdBadgeComponent.prototype.color;
    /** @type {?} */
    GdBadgeComponent.prototype.label;
    /** @type {?} */
    GdBadgeComponent.prototype.type;
    /** @type {?} */
    GdBadgeComponent.prototype.position;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1iYWRnZS9nZC1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0QztJQWVFO0lBQWdCLENBQUM7Ozs7SUFFakIsbUNBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBakJkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsVUFBVTtvQkFDcEIsMGRBQXdDOztpQkFFekM7Ozs7O3VCQUdFLEtBQUs7d0JBQ0wsS0FBSzt3QkFDTCxLQUFLO3VCQUNMLEtBQUs7MkJBQ0wsS0FBSzs7SUFRUix1QkFBQztDQUFBLEFBbkJELElBbUJDO1NBZFksZ0JBQWdCOzs7SUFFM0IsZ0NBQWtCOztJQUNsQixpQ0FBbUI7O0lBQ25CLGlDQUFtQjs7SUFDbkIsZ0NBQWtCOztJQUNsQixvQ0FBc0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtYmFkZ2UnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1iYWRnZS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2QtYmFkZ2UuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdkQmFkZ2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICBASW5wdXQoKSBzaXplOmFueTtcclxuICBASW5wdXQoKSBjb2xvcjphbnk7XHJcbiAgQElucHV0KCkgbGFiZWw6YW55O1xyXG4gIEBJbnB1dCgpIHR5cGU6YW55O1xyXG4gIEBJbnB1dCgpIHBvc2l0aW9uOmFueTtcclxuXHJcblxyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG59XHJcbiJdfQ==