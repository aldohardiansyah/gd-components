/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
export class GdSelect2Component {
    constructor() {
        this.selectedData = new EventEmitter();
        this.selectedFilterData = new EventEmitter();
        // selectEmployee: any = [];
        this.selectedEmployee = [];
        this.textSearch = '';
        this.textSearch2 = '';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.selectedEmployee = (this.listSelectedEmployee) ? this.listSelectedEmployee : [];
    }
    /**
     * @param {?} val
     * @param {?} type
     * @return {?}
     */
    search(val, type) {
        if (this.textSearch != '' && type == 'selectable') {
            if (val.target.value !== undefined) {
                this.textSearch = val.target.value.trim();
            }
            else {
                this.textSearch = '';
            }
            for (const emp of this.selectEmployee) {
                /** @type {?} */
                const str = emp.Full_Name.toLowerCase();
                if (str.indexOf(this.textSearch.toLowerCase()) == -1) {
                    emp.ishidden = true;
                }
                else {
                    emp.ishidden = false;
                }
            }
        }
        else if (this.textSearch2 != '' && type == 'selected') {
            if (val.target.value !== undefined) {
                this.textSearch2 = val.target.value.trim();
            }
            else {
                this.textSearch2 = '';
            }
            for (const emp of this.selectedEmployee) {
                /** @type {?} */
                const str = emp.Full_Name.toLowerCase();
                if (str.indexOf(this.textSearch2.toLowerCase()) == -1) {
                    emp.ishidden = true;
                }
                else {
                    emp.ishidden = false;
                }
            }
        }
        else {
            this.cancel(type);
        }
    }
    /**
     * @param {?} type
     * @return {?}
     */
    cancel(type) {
        if (type == 'selectable') {
            for (const listemp of this.selectEmployee) {
                listemp.ishidden = false;
            }
        }
        else if (type == 'selected') {
            for (const listemp of this.selectedEmployee) {
                listemp.ishidden = false;
            }
        }
    }
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    selectItem(item, i) {
        // this.animate(item, i);
        this.pushItem(item, i);
    }
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    pushItem(item, i) {
        // setTimeout(() => {
        this.selectEmployee.splice(i, 1);
        this.selectedEmployee.push(item);
        // this.indexLeave = item.emp_id;
        this.selectedEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.emp_id == item.emp_id) {
                element.status = 'added';
            }
        }));
        // }, 480);
        // setTimeout(() => {
        this.toggleMargin = false;
        // }, 470);
        this.selectedData.emit(this.selectedEmployee);
    }
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    animate(item, i) {
        this.toggleMargin = true;
        /** @type {?} */
        let elementRect = document.getElementById("x" + i);
        this.currentHeightSelect = elementRect.getBoundingClientRect().height;
        this.currentYSelect = elementRect.getBoundingClientRect().top - this.currentHeightSelect - 123;
        this.indexLeave = item;
    }
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    removeItem(item, i) {
        this.indexLeave = '';
        this.selectedEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.emp_id == item.emp_id) {
                this.selectedEmployee.splice(this.selectedEmployee.indexOf(item), 1);
                this.selectEmployee.push(item);
            }
        }));
        this.selectEmployee.forEach((/**
         * @param {?} elements
         * @return {?}
         */
        elements => {
            if (elements.emp_id == item.emp_id) {
                elements.status = 'removed';
            }
        }));
        this.selectedData.emit(this.selectedEmployee);
    }
    /**
     * @return {?}
     */
    clearAll() {
        this.indexLeave = '';
        this.selectedEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            element.status = 'removed';
            this.selectEmployee.push(element);
        }));
        this.selectedEmployee = [];
        this.selectedData.emit(this.selectedEmployee);
    }
    /**
     * @return {?}
     */
    moveAll() {
        this.selectEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            element.status = 'added';
            this.selectedEmployee.push(element);
        }));
        this.selectEmployee = [];
        this.selectedData.emit(this.selectedEmployee);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    selectFilter(val) {
        this.selectedFilterData.emit(val);
    }
}
GdSelect2Component.decorators = [
    { type: Component, args: [{
                selector: 'gd-select2',
                template: "<div *ngIf=\"mode == 'employee'\" class=\"card-box\" fxLayout=\"row\" fxLayoutAlign=\"center start\" grd-padding>\r\n    <div fxFlex=\"\" class=\"left-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"9px\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"textSearch\" (input)=\"search($event,'selectable')\">\r\n        </div>\r\n      \r\n        <ion-select\r\n          no-margin\r\n          *ngIf=\"filterList\"\r\n          (ionChange)=\"selectFilter($event)\"\r\n          [(ngModel)]=\"selectedFilter\"\r\n          cancelText=\"Dismiss\"\r\n          interface=\"popover\"\r\n          okText=\"Okay\" tappable>\r\n          <ion-select-option *ngFor=\"let filter of filterList\" value=\"{{filter?.value}}\">{{filter?.label}}</ion-select-option>\r\n        </ion-select>\r\n    \r\n      </div>\r\n        \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Selectable Employee</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"moveAll()\">Move All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" grd-ripple-effect tappable id=x{{i}} [ngStyle]=\"{'top': indexLeave == item ? currentYSelect + 'px' : 'unset'}\" [ngClass]=\"{'animate-forward': indexLeave == item, 'default-forward': indexLeave != item}\" (click)=\"selectItem(item, i)\" *ngFor=\"let item of selectEmployee; index as i\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [hidden]=\"item.ishidden\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"7px\">\r\n            <img src=\"item?.photo\" alt=\"\">\r\n            <div class=\"detail-box\" fxLayout=\"column\" fxLayoutGap=\"4px\">\r\n              <ion-label no-margin>{{item?.Full_Name}}</ion-label>\r\n              <ion-label no-margin>{{item?.pos_name_en }}</ion-label>\r\n            </div>\r\n          </div>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'removed' && !item.isNew \" fxFlex=\"none\" class=\"removed\">Removed</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"exchange-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/images/payroll/swap-icon.svg\" alt=\"\">\r\n    </div>\r\n  \r\n    <div fxFlex=\"\" class=\"right-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"textSearch2\" (input)=\"search($event,'selected')\">\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Total <span class=\"selected\">{{selectedEmployee?.length}}</span> Selected</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"clearAll()\">Clear All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" [ngStyle]=\"{'margin-top': toggleMargin ? currentHeightSelect + 'px' : '0px'}\" fxLayout=\"column\" fxLayoutGap=\"9px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" [ngClass]=\"{'animate-forward-right': indexLeave == item.name}\" fxLayoutGap=\"7px\" *ngFor=\"let item of selectedEmployee.slice().reverse(); index as i; first as isFirst\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [hidden]=\"item.ishidden\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"\" fxLayoutGap=\"7px\">\r\n            <img src=\"item?.photo\" alt=\"\">\r\n            <div fxFlex=\"\" class=\"detail-box\" fxLayout=\"column\" fxLayoutGap=\"4px\">\r\n              <ion-label no-margin>{{item?.Full_Name}}</ion-label>\r\n              <ion-label no-margin>{{item?.pos_name_en}}</ion-label>\r\n            </div>\r\n            <div fxFlex=\"none\" class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n              <ion-label no-margin *ngIf=\"item.status == 'added' && item.isNew\" fxFlex=\"none\" class=\"added\">Added</ion-label>\r\n            </div>\r\n          </div>\r\n          <ion-icon grd-ripple-effect (click)=\"removeItem(item, i)\" tappable fxFlex=\"none\" name=\"close\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf=\"mode == 'component'\" class=\"card-box\" fxLayout=\"row\" fxLayoutAlign=\"center start\" grd-padding>\r\n    <div fxFlex=\"\" class=\"left-box\" fxLayout=\"column\">\r\n      \r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"9px\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Selectable Employee</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"moveAll()\">Move All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" grd-ripple-effect tappable id=x{{i}} [ngStyle]=\"{'top': indexLeave == item ? currentYSelect + 'px' : 'unset'}\" [ngClass]=\"{'animate-forward': indexLeave == item, 'default-forward': indexLeave != item}\" (click)=\"selectItem(item, i)\" *ngFor=\"let item of selectEmployee; index as i\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"7px\">\r\n          <img src=\"item.img\" alt=\"\">\r\n          <ion-label no-margin>{{item.compName}}</ion-label>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'removed'\" fxFlex=\"none\" class=\"removed\">Removed</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"exchange-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/images/payroll/swap-icon.svg\" alt=\"\">\r\n    </div>\r\n    <div fxFlex=\"\" class=\"right-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Total <span class=\"selected\">5</span> Selected</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"clearAll()\">Clear All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" [ngStyle]=\"{'margin-top': toggleMargin ? currentHeightSelect + 'px' : '0px'}\" fxLayout=\"column\" fxLayoutGap=\"9px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" [ngClass]=\"{'animate-forward-right': indexLeave == item.name}\" *ngFor=\"let item of selectedEmployee.slice().reverse(); index as i; first as isFirst\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"7px\">\r\n          <img src=\"item.img\" alt=\"\">\r\n          <ion-label no-margin>{{item.compName}}</ion-label>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'added'\" fxFlex=\"none\" class=\"added\">Added</ion-label>\r\n          </div>\r\n          <ion-icon grd-ripple-effect (click)=\"removeItem(item, i)\" tappable fxFlex=\"none\" name=\"close\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                styles: [".selected{color:var(--ion-color-primary)}.removed{background:var(--ion-color-rejected);color:#fff!important;font-size:10px!important;font-family:regular!important;padding:5px;border-radius:200px}.added{background:var(--ion-color-primary);color:#fff!important;font-size:10px!important;font-family:regular!important;padding:5px;border-radius:200px}.edit{color:var(--ion-color-text-secondary)!important;font-size:10px!important;font-family:regular!important}.card-box{background:#fff;box-shadow:0 13px 50px 0 rgba(226,233,237,.81);border-radius:15px;max-width:550px;height:100%;overflow:hidden}.card-box .search-box .search-section{padding:9px 16px;border-radius:10px;border:1px solid var(--ion-color-outline)}.card-box .search-box .search-section input{border:none;width:100%}.card-box .search-box .search-section ion-icon{font-size:23px}.card-box .search-box button{color:var(--ion-color-text-default)!important;font-size:14px!important;text-transform:capitalize;border-color:var(--ion-color-outline)!important;border-radius:10px}.card-box .title-box{position:-webkit-sticky;position:sticky}.card-box .list-box{overflow-y:auto;position:relative}.card-box .list-box .list-section{border-bottom:1px solid var(--ion-color-outline);padding:8px 0;z-index:10}.card-box .list-box .list-section image-component{width:38px;height:38px}.card-box .list-box .list-section image-component img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:200px}.card-box .list-box .list-section .detail-box ion-label{font-size:14px!important;font-family:regular!important}.card-box .list-box .list-section .detail-box ion-label:first-child{color:var(--ion-color-text-default)!important}.card-box .list-box .list-section .detail-box ion-label:last-child{color:var(--ion-color-text-secondary)!important}.card-box .list-box .list-section ion-icon{font-size:12px;color:#a5b0b7;padding:10px}.card-box .exchange-box{background:0 0;z-index:1;height:100%;-ms-grid-row-align:center;align-self:center}.card-box .left-box{z-index:2;height:100%}.card-box .left-box .title-box ion-label:last-child{color:var(--ion-color-primary)!important}.card-box .right-box{z-index:2;height:100%}.card-box .right-box .title-box ion-label:last-child{color:var(--ion-color-text-secondary)!important}.card-box .right-box .list-section{border-left:5px solid var(--ion-color-primary);padding-left:6px!important}.card-box .right-box .list-section .detail-box ion-label{width:100px}@-webkit-keyframes toForward{0%{left:0}90%{opacity:1}100%{border-left:5px solid var(--ion-color-primary);left:calc(100% + 18px);top:0;opacity:0}}@keyframes toForward{0%{left:0}90%{opacity:1}100%{border-left:5px solid var(--ion-color-primary);left:calc(100% + 18px);top:0;opacity:0}}.animate-forward{border-left:5px solid #fff;position:absolute;-webkit-animation-name:toForward;animation-name:toForward;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease}.default-forward{position:relative}.animate-forward-right{-webkit-animation-name:toForwardRight;animation-name:toForwardRight;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease}@-webkit-keyframes toForwardRight{0%{opacity:0}100%{opacity:1}}@keyframes toForwardRight{0%{opacity:0}100%{opacity:1}}ion-select{position:relative}"]
            }] }
];
/** @nocollapse */
GdSelect2Component.ctorParameters = () => [];
GdSelect2Component.propDecorators = {
    mode: [{ type: Input }],
    selectEmployee: [{ type: Input, args: ['data',] }],
    listSelectedEmployee: [{ type: Input, args: ['dataSelected',] }],
    filterList: [{ type: Input }],
    selectedFilter: [{ type: Input }],
    selectedData: [{ type: Output }],
    selectedFilterData: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GdSelect2Component.prototype.mode;
    /** @type {?} */
    GdSelect2Component.prototype.selectEmployee;
    /** @type {?} */
    GdSelect2Component.prototype.listSelectedEmployee;
    /** @type {?} */
    GdSelect2Component.prototype.filterList;
    /** @type {?} */
    GdSelect2Component.prototype.selectedFilter;
    /** @type {?} */
    GdSelect2Component.prototype.selectedData;
    /** @type {?} */
    GdSelect2Component.prototype.selectedFilterData;
    /** @type {?} */
    GdSelect2Component.prototype.text;
    /** @type {?} */
    GdSelect2Component.prototype.selectedEmployee;
    /** @type {?} */
    GdSelect2Component.prototype.indexLeave;
    /** @type {?} */
    GdSelect2Component.prototype.currentYSelect;
    /** @type {?} */
    GdSelect2Component.prototype.currentHeightSelect;
    /** @type {?} */
    GdSelect2Component.prototype.toggleMargin;
    /** @type {?} */
    GdSelect2Component.prototype.textSearch;
    /** @type {?} */
    GdSelect2Component.prototype.textSearch2;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Qtc2VsZWN0Mi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLXNlbGVjdDIvZ2Qtc2VsZWN0Mi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN0QyxPQUFPLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3ZDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPN0MsTUFBTSxPQUFPLGtCQUFrQjtJQXFCN0I7UUFiVSxpQkFBWSxHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDO1FBQzFELHVCQUFrQixHQUFzQixJQUFJLFlBQVksRUFBTyxDQUFDOztRQUkxRSxxQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFLM0IsZUFBVSxHQUFRLEVBQUUsQ0FBQztRQUNyQixnQkFBVyxHQUFRLEVBQUUsQ0FBQztJQUVOLENBQUM7Ozs7SUFFakIsUUFBUTtRQUNOLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFFRCxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUk7UUFFZCxJQUFJLElBQUksQ0FBQyxVQUFVLElBQUksRUFBRSxJQUFJLElBQUksSUFBSSxZQUFZLEVBQUU7WUFFakQsSUFBSSxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssS0FBSyxTQUFTLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxVQUFVLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUM7YUFDM0M7aUJBQU07Z0JBQ0wsSUFBSSxD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REFBNEM7O0lBQzVDLHdDQUFvQjs7SUFDcEIsNENBQXdCOztJQUV4QiwwQ0FBb0U7O0lBQ3BFLGdEQUEwRTs7SUFFMUUsa0NBQWE7O0lBRWIsOENBQTJCOztJQUMzQix3Q0FBZ0I7O0lBQ2hCLDRDQUFvQjs7SUFDcEIsaURBQXlCOztJQUN6QiwwQ0FBa0I7O0lBQ2xCLHdDQUFxQjs7SUFDckIseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zZWxlY3QyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2Qtc2VsZWN0Mi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2Qtc2VsZWN0Mi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RTZWxlY3QyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbW9kZTtcclxuICBASW5wdXQoJ2RhdGEnKSBzZWxlY3RFbXBsb3llZTtcclxuICBASW5wdXQoJ2RhdGFTZWxlY3RlZCcpIGxpc3RTZWxlY3RlZEVtcGxveWVlO1xyXG4gIEBJbnB1dCgpIGZpbHRlckxpc3Q7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRGaWx0ZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZERhdGE6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkRmlsdGVyRGF0YTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8vIHNlbGVjdEVtcGxveWVlOiBhbnkgPSBbXTtcclxuICBzZWxlY3RlZEVtcGxveWVlOiBhbnkgPSBbXTtcclxuICBpbmRleExlYXZlOiBhbnk7XHJcbiAgY3VycmVudFlTZWxlY3Q6IGFueTtcclxuICBjdXJyZW50SGVpZ2h0U2VsZWN0OiBhbnk7XHJcbiAgdG9nZ2xlTWFyZ2luOiBhbnk7XHJcbiAgdGV4dFNlYXJjaDogYW55ID0gJyc7XHJcbiAgdGV4dFNlYXJjaDI6IGFueSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZSA9ICh0aGlzLmxpc3RTZWxlY3RlZEVtcGxveWVlKSA/IHRoaXMubGlzdFNlbGVjdGVkRW1wbG95ZWUgOiBbXTtcclxuICB9XHJcblxyXG4gIHNlYXJjaCh2YWwsIHR5cGUpIHtcclxuXHJcbiAgICBpZiAodGhpcy50ZXh0U2VhcmNoICE9ICcnICYmIHR5cGUgPT0gJ3NlbGVjdGFibGUnKSB7XHJcblxyXG4gICAgICBpZiAodmFsLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0U2VhcmNoID0gdmFsLnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZXh0U2VhcmNoID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZW1wIG9mIHRoaXMuc2VsZWN0RW1wbG95ZWUpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSBlbXAuRnVsbF9OYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHN0ci5pbmRleE9mKHRoaXMudGV4dFNlYXJjaC50b0xvd2VyQ2FzZSgpKSA9PSAtMSkge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRleHRTZWFyY2gyICE9ICcnICYmIHR5cGUgPT0gJ3NlbGVjdGVkJykge1xyXG5cclxuICAgICAgaWYgKHZhbC50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudGV4dFNlYXJjaDIgPSB2YWwudGFyZ2V0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRleHRTZWFyY2gyID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZW1wIG9mIHRoaXMuc2VsZWN0ZWRFbXBsb3llZSkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGVtcC5GdWxsX05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy50ZXh0U2VhcmNoMi50b0xvd2VyQ2FzZSgpKSA9PSAtMSkge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYW5jZWwodHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5jZWwodHlwZSkge1xyXG4gICAgaWYgKHR5cGUgPT0gJ3NlbGVjdGFibGUnKSB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdGVtcCBvZiB0aGlzLnNlbGVjdEVtcGxveWVlKSB7XHJcbiAgICAgICAgbGlzdGVtcC5pc2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3NlbGVjdGVkJykge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RlbXAgb2YgdGhpcy5zZWxlY3RlZEVtcGxveWVlKSB7XHJcbiAgICAgICAgbGlzdGVtcC5pc2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJdGVtKGl0ZW0sIGkpIHtcclxuICAgIC8vIHRoaXMuYW5pbWF0ZShpdGVtLCBpKTtcclxuICAgIHRoaXMucHVzaEl0ZW0oaXRlbSwgaSk7XHJcbiAgfVxyXG5cclxuICBwdXNoSXRlbShpdGVtLCBpKSB7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRoaXMuc2VsZWN0RW1wbG95ZWUuc3BsaWNlKGksIDEpO1xyXG4gICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLnB1c2goaXRlbSk7XHJcbiAgICAvLyB0aGlzLmluZGV4TGVhdmUgPSBpdGVtLmVtcF9pZDtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQuZW1wX2lkID09IGl0ZW0uZW1wX2lkKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdGF0dXMgPSAnYWRkZWQnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIH0sIDQ4MCk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRoaXMudG9nZ2xlTWFyZ2luID0gZmFsc2U7XHJcbiAgICAvLyB9LCA0NzApO1xyXG4gICAgdGhpcy5zZWxlY3RlZERhdGEuZW1pdCh0aGlzLnNlbGVjdGVkRW1wbG95ZWUpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZShpdGVtLCBpKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU1hcmdpbiA9IHRydWU7XHJcbiAgICBsZXQgZWxlbWVudFJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhcIiArIGkpO1xyXG4gICAgdGhpcy5jdXJyZW50SGVpZ2h0U2VsZWN0ID0gZWxlbWVudFJlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgdGhpcy5jdXJyZW50WVNlbGVjdCA9IGVsZW1lbnRSZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRoaXMuY3VycmVudEhlaWdodFNlbGVjdCAtIDEyMztcclxuICAgIHRoaXMuaW5kZXhMZWF2ZSA9IGl0ZW07XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW0sIGkpIHtcclxuICAgIHRoaXMuaW5kZXhMZWF2ZSA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50LmVtcF9pZCA9PSBpdGVtLmVtcF9pZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZS5zcGxpY2UodGhpcy5zZWxlY3RlZEVtcGxveWVlLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RW1wbG95ZWUucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RFbXBsb3llZS5mb3JFYWNoKGVsZW1lbnRzID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnRzLmVtcF9pZCA9PSBpdGVtLmVtcF9pZCkge1xyXG4gICAgICAgIGVsZW1lbnRzLnN0YXR1cyA9ICdyZW1vdmVkJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5lbWl0KHRoaXMuc2VsZWN0ZWRFbXBsb3llZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckFsbCgpIHtcclxuICAgIHRoaXMuaW5kZXhMZWF2ZSA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3RhdHVzID0gJ3JlbW92ZWQnO1xyXG4gICAgICB0aGlzLnNlbGVjdEVtcGxveWVlLnB1c2goZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWUgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWREYXRhLmVtaXQodGhpcy5zZWxlY3RlZEVtcGxveWVlKTtcclxuICB9XHJcblxyXG4gIG1vdmVBbGwoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEVtcGxveWVlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3RhdHVzID0gJ2FkZGVkJztcclxuICAgICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLnB1c2goZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdEVtcGxveWVlID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5lbWl0KHRoaXMuc2VsZWN0ZWRFbXBsb3llZSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaWx0ZXIodmFsKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRmlsdGVyRGF0YS5lbWl0KHZhbCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19