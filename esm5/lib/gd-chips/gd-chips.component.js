/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
var GdChipsComponent = /** @class */ (function () {
    function GdChipsComponent() {
    }
    /**
     * @return {?}
     */
    GdChipsComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        // console.log('meledaaak', this.color);
    };
    GdChipsComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-chips',
                    template: "<div *ngIf=\"type=='label-chips'\" class=\"GdChips label\" [ngClass]=\"{\r\n    'new': color == 'new', \r\n    'rejected': color == 'rejected', \r\n    'partially': color == 'partially', \r\n    'approve': color == 'approve', \r\n    'added': color == 'added',\r\n    'new-outline': color == 'new-outline', \r\n    'rejected-outline': color == 'rejected-outline', \r\n    'partially-outline': color == 'partially-outline', \r\n    'approve-outline': color == 'approve-outline', \r\n    'added-outline': color == 'added-outline',\r\n    'small' : size == 'small',\r\n    'large' : size == 'lagre'}\">\r\n    {{label}}\r\n</div>\r\n\r\n<div *ngIf=\"type=='close-chips'\" class=\"GdChips close\" [ngClass]=\"{\r\n  'new': color == 'new', \r\n  'rejected': color == 'rejected', \r\n  'partially': color == 'partially', \r\n  'approve': color == 'approve', \r\n  'added': color == 'added',\r\n  'new-outline': color == 'new-outline', \r\n  'rejected-outline': color == 'rejected-outline', \r\n  'partially-outline': color == 'partially-outline', \r\n  'approve-outline': color == 'approve-outline', \r\n  'added-outline': color == 'added-outline',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  <div class=\"icon\"> <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon> </div>\r\n  <div class=\"label\">{{label}}</div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='icon-chips'\" class=\"GdChips icon\" [ngClass]=\"{\r\n  'new': color == 'new', \r\n  'rejected': color == 'rejected', \r\n  'partially': color == 'partially', \r\n  'approve': color == 'approve', \r\n  'added': color == 'added',\r\n  'new-outline': color == 'new-outline', \r\n  'rejected-outline': color == 'rejected-outline', \r\n  'partially-outline': color == 'partially-outline', \r\n  'approve-outline': color == 'approve-outline', \r\n  'added-outline': color == 'added-outline',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  <div class=\"icon\"> <img src=\"{{srcIcon}}\" alt=\"\"> </div>\r\n  <div class=\"label\">{{label}}</div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='avatar-chips'\" class=\"GdChips avatar\"[ngClass]=\"{\r\n  'new': color == 'new', \r\n  'rejected': color == 'rejected', \r\n  'partially': color == 'partially', \r\n  'approve': color == 'approve', \r\n  'added': color == 'added',\r\n  'new-outline': color == 'new-outline', \r\n  'rejected-outline': color == 'rejected-outline', \r\n  'partially-outline': color == 'partially-outline', \r\n  'approve-outline': color == 'approve-outline', \r\n  'added-outline': color == 'added-outline',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  {{label}}\r\n</div>\r\n\r\n<div *ngIf=\"type=='status-chips'\" class=\"GdChips status\"[ngClass]=\"{\r\n  'new-outline': color == 'new', \r\n  'rejected-outline': color == 'rejected', \r\n  'partially-outline': color == 'partially', \r\n  'approve-outline': color == 'approve', \r\n  'added-outline': color == 'added',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  {{label}}\r\n</div>",
                    styles: ["::ng-deep .GdChips{border-radius:16px;-webkit-transition:-webkit-filter .3s;transition:filter .3s;display:-webkit-inline-box;display:inline-flex;padding:7px 20px;-webkit-box-align:center;align-items:center;cursor:default;-webkit-filter:brightness(100%);filter:brightness(100%);transition:filter .3s,-webkit-filter .3s;text-align:center;vertical-align:middle}::ng-deep .GdChips.status{border:1px solid!important}::ng-deep .GdChips.small{font-size:10px!important;padding:6px 12px}::ng-deep .GdChips.large{font-size:15px!important;padding:7px 20px}::ng-deep .GdChips>.icon{-webkit-filter:brightness(100%);filter:brightness(100%);-webkit-transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s}::ng-deep .GdChips:hover{-webkit-filter:brightness(90%);filter:brightness(90%);cursor:pointer}::ng-deep .GdChips>.icon:hover{-webkit-filter:brightness(85%);filter:brightness(85%);cursor:pointer}::ng-deep .GdChips.icon{padding:7px 20px 7px 15px!important;display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;text-overflow:ellipsis}::ng-deep .GdChips.icon .icon{position:relative;border-radius:50%;width:16.5px;height:17px;text-align:center;vertical-align:middle;margin-right:8px}::ng-deep .GdChips.icon .icon img{position:absolute;left:50%;top:50%;width:14px;height:14px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}::ng-deep .GdChips.new{background-color:var(--ion-color-new)!important;border-color:var(--ion-color-new-shade)!important;color:#fff}::ng-deep .GdChips.new .icon{background-color:var(--ion-color-new-shade)!important}::ng-deep .GdChips.new .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.new-outline{background-color:var(--ion-color-new-outline-background)!important;border-color:var(--ion-color-new-shade)!important;color:var(--ion-color-new-shade)!important}::ng-deep .GdChips.new-outline .icon{background-color:var(--ion-color-new-shade)!important}::ng-deep .GdChips.rejected{background-color:var(--ion-color-rejected)!important;border-color:var(--ion-color-rejected-shade)!important;color:#fff}::ng-deep .GdChips.rejected .icon{background-color:var(--ion-color-rejected-shade)!important}::ng-deep .GdChips.rejected .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.rejected-outline{background-color:var(--ion-color-rejected-outline-background)!important;border-color:var(--ion-color-rejected-shade)!important;color:var(--ion-color-rejected-shade)!important}::ng-deep .GdChips.rejected-outline .icon{background-color:var(--ion-color-rejected-shade)!important}::ng-deep .GdChips.partially{background-color:var(--ion-color-partially)!important;border-color:var(--ion-color-partially-shade)!important;color:#fff}::ng-deep .GdChips.partially .icon{background-color:var(--ion-color-partially-shade)!important}::ng-deep .GdChips.partially .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.partially-outline{background-color:var(--ion-color-partially-outline-background)!important;border-color:var(--ion-color-partially-shade)!important;color:var(--ion-color-partially-shade)!important}::ng-deep .GdChips.partially-outline .icon{background-color:var(--ion-color-partially-shade)!important}::ng-deep .GdChips.approve{background-color:var(--ion-color-approve)!important;border-color:var(--ion-color-approve-shade)!important;color:#fff}::ng-deep .GdChips.approve .icon{background-color:var(--ion-color-approve-shade)!important}::ng-deep .GdChips.approve .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.approve-outline{background-color:var(--ion-color-approve-outline-background)!important;border-color:var(--ion-color-approve-shade)!important;color:var(--ion-color-approve-shade)!important}::ng-deep .GdChips.approve-outline .icon{background-color:var(--ion-color-approve-shade)!important}"]
                }] }
    ];
    /** @nocollapse */
    GdChipsComponent.ctorParameters = function () { return []; };
    GdChipsComponent.propDecorators = {
        type: [{ type: Input }],
        color: [{ type: Input }],
        label: [{ type: Input }],
        size: [{ type: Input }],
        srcIcon: [{ type: Input }]
    };
    return GdChipsComponent;
}());
export { GdChipsComponent };
if (false) {
    /** @type {?} */
    GdChipsComponent.prototype.type;
    /** @type {?} */
    GdChipsComponent.prototype.color;
    /** @type {?} */
    GdChipsComponent.prototype.label;
    /** @type {?} */
    GdChipsComponent.prototype.size;
    /** @type {?} */
    GdChipsComponent.prototype.srcIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtY2hpcHMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1jaGlwcy9nZC1jaGlwcy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUd0QztJQWFFO0lBQWdCLENBQUM7Ozs7SUFFakIsbUNBQVE7OztJQUFSO1FBQ0Usd0NBQXdDO0lBQzFDLENBQUM7O2dCQWpCRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHUvRkFBd0M7O2lCQUV6Qzs7Ozs7dUJBR0UsS0FBSzt3QkFDTCxLQUFLO3dCQUNMLEtBQUs7dUJBQ0wsS0FBSzswQkFDTCxLQUFLOztJQVFSLHVCQUFDO0NBQUEsQUFuQkQsSUFtQkM7U0FkWSxnQkFBZ0I7OztJQUUzQixnQ0FBa0I7O0lBQ2xCLGlDQUFtQjs7SUFDbkIsaUNBQW1COztJQUNuQixnQ0FBa0I7O0lBQ2xCLG1DQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jaGlwcycsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWNoaXBzLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1jaGlwcy5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RDaGlwc0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHR5cGU6YW55O1xyXG4gIEBJbnB1dCgpIGNvbG9yOmFueTtcclxuICBASW5wdXQoKSBsYWJlbDphbnk7XHJcbiAgQElucHV0KCkgc2l6ZTphbnk7XHJcbiAgQElucHV0KCkgc3JjSWNvbjphbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgLy8gY29uc29sZS5sb2coJ21lbGVkYWFhaycsIHRoaXMuY29sb3IpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19