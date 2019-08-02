/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
export class GdBadgeComponent {
    constructor() { }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
GdBadgeComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-badge',
                template: "<div  \r\n[ngClass]=\" {\r\n    'new': type == 'new', \r\n    'rejected': type == 'rejected', \r\n    'partially': type == 'partially', \r\n    'approve': type == 'approve', \r\n    'added': type == 'added', \r\n    'small' : size =='small', \r\n    'medium' : size =='medium', \r\n    'large' : size =='large',\r\n    'top'   : position == 'top',\r\n    'bottom' : position == 'bottom'}\" class=\"GdBadge\"><div class=\"label\">{{label}}</div>\r\n</div>    \r\n",
                styles: [".GdBadge.small{position:relative;display:inline-block;width:15px;height:15px;border-radius:50%;font-size:.5em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.small .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.medium{position:relative;display:inline-block;width:20px;height:20px;border-radius:50%;font-size:.8em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.medium .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.large{position:relative;display:inline-block;width:28px;height:28px;border-radius:50%;font-size:1em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.large .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.top{z-index:99999;top:-8px;margin-left:-4px;margin-right:-4px}.GdBadge.bottom{z-index:99999;bottom:-10px;margin-left:-3px;margin-right:-3px}.GdBadge.new{background-color:var(--ion-color-new)!important}.GdBadge.rejected{background-color:var(--ion-color-rejected)!important}.GdBadge.partially{background-color:var(--ion-color-partially)!important}.GdBadge.added{background-color:var(--ion-color-primary)!important}.GdBadge.approve{background-color:var(--ion-color-approve)!important}@-webkit-keyframes show-badge{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes show-badge{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}"]
            }] }
];
/** @nocollapse */
GdBadgeComponent.ctorParameters = () => [];
GdBadgeComponent.propDecorators = {
    size: [{ type: Input }],
    color: [{ type: Input }],
    label: [{ type: Input }],
    type: [{ type: Input }],
    position: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtYmFkZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1iYWRnZS9nZC1iYWRnZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVF0QyxNQUFNLE9BQU8sZ0JBQWdCO0lBVTNCLGdCQUFnQixDQUFDOzs7O0lBRWpCLFFBQVEsS0FBSSxDQUFDOzs7WUFqQmQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiwwZEFBd0M7O2FBRXpDOzs7OzttQkFHRSxLQUFLO29CQUNMLEtBQUs7b0JBQ0wsS0FBSzttQkFDTCxLQUFLO3VCQUNMLEtBQUs7Ozs7SUFKTixnQ0FBa0I7O0lBQ2xCLGlDQUFtQjs7SUFDbkIsaUNBQW1COztJQUNuQixnQ0FBa0I7O0lBQ2xCLG9DQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1iYWRnZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWJhZGdlLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1iYWRnZS5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RCYWRnZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHNpemU6YW55O1xyXG4gIEBJbnB1dCgpIGNvbG9yOmFueTtcclxuICBASW5wdXQoKSBsYWJlbDphbnk7XHJcbiAgQElucHV0KCkgdHlwZTphbnk7XHJcbiAgQElucHV0KCkgcG9zaXRpb246YW55O1xyXG5cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge31cclxuXHJcbn1cclxuIl19