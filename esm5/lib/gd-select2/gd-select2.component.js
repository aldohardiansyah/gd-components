/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
var GdSelect2Component = /** @class */ (function () {
    function GdSelect2Component() {
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
    GdSelect2Component.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.selectedEmployee = (this.listSelectedEmployee) ? this.listSelectedEmployee : [];
    };
    /**
     * @param {?} val
     * @param {?} type
     * @return {?}
     */
    GdSelect2Component.prototype.search = /**
     * @param {?} val
     * @param {?} type
     * @return {?}
     */
    function (val, type) {
        var e_1, _a, e_2, _b;
        if (this.textSearch != '' && type == 'selectable') {
            if (val.target.value !== undefined) {
                this.textSearch = val.target.value.trim();
            }
            else {
                this.textSearch = '';
            }
            try {
                for (var _c = tslib_1.__values(this.selectEmployee), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var emp = _d.value;
                    /** @type {?} */
                    var str = emp.Full_Name.toLowerCase();
                    if (str.indexOf(this.textSearch.toLowerCase()) == -1) {
                        emp.ishidden = true;
                    }
                    else {
                        emp.ishidden = false;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        else if (this.textSearch2 != '' && type == 'selected') {
            if (val.target.value !== undefined) {
                this.textSearch2 = val.target.value.trim();
            }
            else {
                this.textSearch2 = '';
            }
            try {
                for (var _e = tslib_1.__values(this.selectedEmployee), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var emp = _f.value;
                    /** @type {?} */
                    var str = emp.Full_Name.toLowerCase();
                    if (str.indexOf(this.textSearch2.toLowerCase()) == -1) {
                        emp.ishidden = true;
                    }
                    else {
                        emp.ishidden = false;
                    }
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        else {
            this.cancel(type);
        }
    };
    /**
     * @param {?} type
     * @return {?}
     */
    GdSelect2Component.prototype.cancel = /**
     * @param {?} type
     * @return {?}
     */
    function (type) {
        var e_3, _a, e_4, _b;
        if (type == 'selectable') {
            try {
                for (var _c = tslib_1.__values(this.selectEmployee), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var listemp = _d.value;
                    listemp.ishidden = false;
                }
            }
            catch (e_3_1) { e_3 = { error: e_3_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_3) throw e_3.error; }
            }
        }
        else if (type == 'selected') {
            try {
                for (var _e = tslib_1.__values(this.selectedEmployee), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var listemp = _f.value;
                    listemp.ishidden = false;
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    };
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    GdSelect2Component.prototype.selectItem = /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (item, i) {
        // this.animate(item, i);
        this.pushItem(item, i);
    };
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    GdSelect2Component.prototype.pushItem = /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (item, i) {
        // setTimeout(() => {
        this.selectEmployee.splice(i, 1);
        this.selectedEmployee.push(item);
        // this.indexLeave = item.emp_id;
        this.selectedEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.emp_id == item.emp_id) {
                element.status = 'added';
            }
        }));
        // }, 480);
        // setTimeout(() => {
        this.toggleMargin = false;
        // }, 470);
        this.selectedData.emit(this.selectedEmployee);
    };
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    GdSelect2Component.prototype.animate = /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (item, i) {
        this.toggleMargin = true;
        /** @type {?} */
        var elementRect = document.getElementById("x" + i);
        this.currentHeightSelect = elementRect.getBoundingClientRect().height;
        this.currentYSelect = elementRect.getBoundingClientRect().top - this.currentHeightSelect - 123;
        this.indexLeave = item;
    };
    /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    GdSelect2Component.prototype.removeItem = /**
     * @param {?} item
     * @param {?} i
     * @return {?}
     */
    function (item, i) {
        var _this = this;
        this.indexLeave = '';
        this.selectedEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            if (element.emp_id == item.emp_id) {
                _this.selectedEmployee.splice(_this.selectedEmployee.indexOf(item), 1);
                _this.selectEmployee.push(item);
            }
        }));
        this.selectEmployee.forEach((/**
         * @param {?} elements
         * @return {?}
         */
        function (elements) {
            if (elements.emp_id == item.emp_id) {
                elements.status = 'removed';
            }
        }));
        this.selectedData.emit(this.selectedEmployee);
    };
    /**
     * @return {?}
     */
    GdSelect2Component.prototype.clearAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.indexLeave = '';
        this.selectedEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            element.status = 'removed';
            _this.selectEmployee.push(element);
        }));
        this.selectedEmployee = [];
        this.selectedData.emit(this.selectedEmployee);
    };
    /**
     * @return {?}
     */
    GdSelect2Component.prototype.moveAll = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.selectEmployee.forEach((/**
         * @param {?} element
         * @return {?}
         */
        function (element) {
            element.status = 'added';
            _this.selectedEmployee.push(element);
        }));
        this.selectEmployee = [];
        this.selectedData.emit(this.selectedEmployee);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    GdSelect2Component.prototype.selectFilter = /**
     * @param {?} val
     * @return {?}
     */
    function (val) {
        this.selectedFilterData.emit(val);
    };
    GdSelect2Component.decorators = [
        { type: Component, args: [{
                    selector: 'gd-select2',
                    template: "<div *ngIf=\"mode == 'employee'\" class=\"card-box\" fxLayout=\"row\" fxLayoutAlign=\"center start\" grd-padding>\r\n    <div fxFlex=\"\" class=\"left-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"9px\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"textSearch\" (input)=\"search($event,'selectable')\">\r\n        </div>\r\n      \r\n        <ion-select\r\n          no-margin\r\n          *ngIf=\"filterList\"\r\n          (ionChange)=\"selectFilter($event)\"\r\n          [(ngModel)]=\"selectedFilter\"\r\n          cancelText=\"Dismiss\"\r\n          interface=\"popover\"\r\n          okText=\"Okay\" tappable>\r\n          <ion-select-option *ngFor=\"let filter of filterList\" value=\"{{filter?.value}}\">{{filter?.label}}</ion-select-option>\r\n        </ion-select>\r\n    \r\n      </div>\r\n        \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Selectable Employee</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"moveAll()\">Move All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" grd-ripple-effect tappable id=x{{i}} [ngStyle]=\"{'top': indexLeave == item ? currentYSelect + 'px' : 'unset'}\" [ngClass]=\"{'animate-forward': indexLeave == item, 'default-forward': indexLeave != item}\" (click)=\"selectItem(item, i)\" *ngFor=\"let item of selectEmployee; index as i\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [hidden]=\"item.ishidden\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"7px\">\r\n            <img src=\"item?.photo\" alt=\"\">\r\n            <div class=\"detail-box\" fxLayout=\"column\" fxLayoutGap=\"4px\">\r\n              <ion-label no-margin>{{item?.Full_Name}}</ion-label>\r\n              <ion-label no-margin>{{item?.pos_name_en }}</ion-label>\r\n            </div>\r\n          </div>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'removed' && !item.isNew \" fxFlex=\"none\" class=\"removed\">Removed</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"exchange-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/images/payroll/swap-icon.svg\" alt=\"\">\r\n    </div>\r\n  \r\n    <div fxFlex=\"\" class=\"right-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"textSearch2\" (input)=\"search($event,'selected')\">\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Total <span class=\"selected\">{{selectedEmployee?.length}}</span> Selected</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"clearAll()\">Clear All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" [ngStyle]=\"{'margin-top': toggleMargin ? currentHeightSelect + 'px' : '0px'}\" fxLayout=\"column\" fxLayoutGap=\"9px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" [ngClass]=\"{'animate-forward-right': indexLeave == item.name}\" fxLayoutGap=\"7px\" *ngFor=\"let item of selectedEmployee.slice().reverse(); index as i; first as isFirst\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [hidden]=\"item.ishidden\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"\" fxLayoutGap=\"7px\">\r\n            <img src=\"item?.photo\" alt=\"\">\r\n            <div fxFlex=\"\" class=\"detail-box\" fxLayout=\"column\" fxLayoutGap=\"4px\">\r\n              <ion-label no-margin>{{item?.Full_Name}}</ion-label>\r\n              <ion-label no-margin>{{item?.pos_name_en}}</ion-label>\r\n            </div>\r\n            <div fxFlex=\"none\" class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n              <ion-label no-margin *ngIf=\"item.status == 'added' && item.isNew\" fxFlex=\"none\" class=\"added\">Added</ion-label>\r\n            </div>\r\n          </div>\r\n          <ion-icon grd-ripple-effect (click)=\"removeItem(item, i)\" tappable fxFlex=\"none\" name=\"close\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf=\"mode == 'component'\" class=\"card-box\" fxLayout=\"row\" fxLayoutAlign=\"center start\" grd-padding>\r\n    <div fxFlex=\"\" class=\"left-box\" fxLayout=\"column\">\r\n      \r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"9px\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Selectable Employee</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"moveAll()\">Move All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" grd-ripple-effect tappable id=x{{i}} [ngStyle]=\"{'top': indexLeave == item ? currentYSelect + 'px' : 'unset'}\" [ngClass]=\"{'animate-forward': indexLeave == item, 'default-forward': indexLeave != item}\" (click)=\"selectItem(item, i)\" *ngFor=\"let item of selectEmployee; index as i\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"7px\">\r\n          <img src=\"item.img\" alt=\"\">\r\n          <ion-label no-margin>{{item.compName}}</ion-label>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'removed'\" fxFlex=\"none\" class=\"removed\">Removed</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"exchange-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/images/payroll/swap-icon.svg\" alt=\"\">\r\n    </div>\r\n    <div fxFlex=\"\" class=\"right-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Total <span class=\"selected\">5</span> Selected</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"clearAll()\">Clear All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" [ngStyle]=\"{'margin-top': toggleMargin ? currentHeightSelect + 'px' : '0px'}\" fxLayout=\"column\" fxLayoutGap=\"9px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" [ngClass]=\"{'animate-forward-right': indexLeave == item.name}\" *ngFor=\"let item of selectedEmployee.slice().reverse(); index as i; first as isFirst\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"7px\">\r\n          <img src=\"item.img\" alt=\"\">\r\n          <ion-label no-margin>{{item.compName}}</ion-label>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'added'\" fxFlex=\"none\" class=\"added\">Added</ion-label>\r\n          </div>\r\n          <ion-icon grd-ripple-effect (click)=\"removeItem(item, i)\" tappable fxFlex=\"none\" name=\"close\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                    styles: [".selected{color:var(--ion-color-primary)}.removed{background:var(--ion-color-rejected);color:#fff!important;font-size:10px!important;font-family:regular!important;padding:5px;border-radius:200px}.added{background:var(--ion-color-primary);color:#fff!important;font-size:10px!important;font-family:regular!important;padding:5px;border-radius:200px}.edit{color:var(--ion-color-text-secondary)!important;font-size:10px!important;font-family:regular!important}.card-box{background:#fff;box-shadow:0 13px 50px 0 rgba(226,233,237,.81);border-radius:15px;max-width:550px;height:100%;overflow:hidden}.card-box .search-box .search-section{padding:9px 16px;border-radius:10px;border:1px solid var(--ion-color-outline)}.card-box .search-box .search-section input{border:none;width:100%}.card-box .search-box .search-section ion-icon{font-size:23px}.card-box .search-box button{color:var(--ion-color-text-default)!important;font-size:14px!important;text-transform:capitalize;border-color:var(--ion-color-outline)!important;border-radius:10px}.card-box .title-box{position:-webkit-sticky;position:sticky}.card-box .list-box{overflow-y:auto;position:relative}.card-box .list-box .list-section{border-bottom:1px solid var(--ion-color-outline);padding:8px 0;z-index:10}.card-box .list-box .list-section image-component{width:38px;height:38px}.card-box .list-box .list-section image-component img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:200px}.card-box .list-box .list-section .detail-box ion-label{font-size:14px!important;font-family:regular!important}.card-box .list-box .list-section .detail-box ion-label:first-child{color:var(--ion-color-text-default)!important}.card-box .list-box .list-section .detail-box ion-label:last-child{color:var(--ion-color-text-secondary)!important}.card-box .list-box .list-section ion-icon{font-size:12px;color:#a5b0b7;padding:10px}.card-box .exchange-box{background:0 0;z-index:1;height:100%;-ms-grid-row-align:center;align-self:center}.card-box .left-box{z-index:2;height:100%}.card-box .left-box .title-box ion-label:last-child{color:var(--ion-color-primary)!important}.card-box .right-box{z-index:2;height:100%}.card-box .right-box .title-box ion-label:last-child{color:var(--ion-color-text-secondary)!important}.card-box .right-box .list-section{border-left:5px solid var(--ion-color-primary);padding-left:6px!important}.card-box .right-box .list-section .detail-box ion-label{width:100px}@-webkit-keyframes toForward{0%{left:0}90%{opacity:1}100%{border-left:5px solid var(--ion-color-primary);left:calc(100% + 18px);top:0;opacity:0}}@keyframes toForward{0%{left:0}90%{opacity:1}100%{border-left:5px solid var(--ion-color-primary);left:calc(100% + 18px);top:0;opacity:0}}.animate-forward{border-left:5px solid #fff;position:absolute;-webkit-animation-name:toForward;animation-name:toForward;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease}.default-forward{position:relative}.animate-forward-right{-webkit-animation-name:toForwardRight;animation-name:toForwardRight;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease}@-webkit-keyframes toForwardRight{0%{opacity:0}100%{opacity:1}}@keyframes toForwardRight{0%{opacity:0}100%{opacity:1}}ion-select{position:relative}"]
                }] }
    ];
    /** @nocollapse */
    GdSelect2Component.ctorParameters = function () { return []; };
    GdSelect2Component.propDecorators = {
        mode: [{ type: Input }],
        selectEmployee: [{ type: Input, args: ['data',] }],
        listSelectedEmployee: [{ type: Input, args: ['dataSelected',] }],
        filterList: [{ type: Input }],
        selectedFilter: [{ type: Input }],
        selectedData: [{ type: Output }],
        selectedFilterData: [{ type: Output }]
    };
    return GdSelect2Component;
}());
export { GdSelect2Component };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Qtc2VsZWN0Mi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLXNlbGVjdDIvZ2Qtc2VsZWN0Mi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQ2xELE9BQU8sRUFBRSxLQUFLLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdEMsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN2QyxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBRTdDO0lBMEJFO1FBYlUsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQztRQUMxRCx1QkFBa0IsR0FBc0IsSUFBSSxZQUFZLEVBQU8sQ0FBQzs7UUFJMUUscUJBQWdCLEdBQVEsRUFBRSxDQUFDO1FBSzNCLGVBQVUsR0FBUSxFQUFFLENBQUM7UUFDckIsZ0JBQVcsR0FBUSxFQUFFLENBQUM7SUFFTixDQUFDOzs7O0lBRWpCLHFDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUN2RixDQUFDOzs7Ozs7SUFFRCxtQ0FBTTs7Ozs7SUFBTixVQUFPLEdBQUcsRUFBRSxJQUFJOztRQUVkLElBQUksSUFBSSxDQUFDLFVBQVUsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLFlBQVksRUFBRTtZQUVqRCxJQUFJLEdBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSyxLQUFLLFNBQVMsRUFBRTtnQkFDbEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQzthQUMzQztpQkFBTTtnQkFDTCxJQUFJ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VUFBYSxHQUFHO1FBQ2QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNwQyxDQUFDOztnQkE1SkYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxZQUFZO29CQUN0QiwyK1FBQTBDOztpQkFFM0M7Ozs7O3VCQUdFLEtBQUs7aUNBQ0wsS0FBSyxTQUFDLE1BQU07dUNBQ1osS0FBSyxTQUFDLGNBQWM7NkJBQ3BCLEtBQUs7aUNBQ0wsS0FBSzsrQkFFTCxNQUFNO3FDQUNOLE1BQU07O0lBaUpULHlCQUFDO0NBQUEsQUEvSkQsSUErSkM7U0ExSlksa0JBQWtCOzs7SUFFN0Isa0NBQWM7O0lBQ2QsNENBQThCOztJQUM5QixrREFBNEM7O0lBQzVDLHdDQUFvQjs7SUFDcEIsNENBQXdCOztJQUV4QiwwQ0FBb0U7O0lBQ3BFLGdEQUEwRTs7SUFFMUUsa0NBQWE7O0lBRWIsOENBQTJCOztJQUMzQix3Q0FBZ0I7O0lBQ2hCLDRDQUFvQjs7SUFDcEIsaURBQXlCOztJQUN6QiwwQ0FBa0I7O0lBQ2xCLHdDQUFxQjs7SUFDckIseUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zZWxlY3QyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2Qtc2VsZWN0Mi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2Qtc2VsZWN0Mi5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RTZWxlY3QyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgbW9kZTtcclxuICBASW5wdXQoJ2RhdGEnKSBzZWxlY3RFbXBsb3llZTtcclxuICBASW5wdXQoJ2RhdGFTZWxlY3RlZCcpIGxpc3RTZWxlY3RlZEVtcGxveWVlO1xyXG4gIEBJbnB1dCgpIGZpbHRlckxpc3Q7XHJcbiAgQElucHV0KCkgc2VsZWN0ZWRGaWx0ZXI7XHJcblxyXG4gIEBPdXRwdXQoKSBzZWxlY3RlZERhdGE6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcjxhbnk+KCk7XHJcbiAgQE91dHB1dCgpIHNlbGVjdGVkRmlsdGVyRGF0YTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyPGFueT4oKTtcclxuXHJcbiAgdGV4dDogc3RyaW5nO1xyXG4gIC8vIHNlbGVjdEVtcGxveWVlOiBhbnkgPSBbXTtcclxuICBzZWxlY3RlZEVtcGxveWVlOiBhbnkgPSBbXTtcclxuICBpbmRleExlYXZlOiBhbnk7XHJcbiAgY3VycmVudFlTZWxlY3Q6IGFueTtcclxuICBjdXJyZW50SGVpZ2h0U2VsZWN0OiBhbnk7XHJcbiAgdG9nZ2xlTWFyZ2luOiBhbnk7XHJcbiAgdGV4dFNlYXJjaDogYW55ID0gJyc7XHJcbiAgdGV4dFNlYXJjaDI6IGFueSA9ICcnO1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZSA9ICh0aGlzLmxpc3RTZWxlY3RlZEVtcGxveWVlKSA/IHRoaXMubGlzdFNlbGVjdGVkRW1wbG95ZWUgOiBbXTtcclxuICB9XHJcblxyXG4gIHNlYXJjaCh2YWwsIHR5cGUpIHtcclxuXHJcbiAgICBpZiAodGhpcy50ZXh0U2VhcmNoICE9ICcnICYmIHR5cGUgPT0gJ3NlbGVjdGFibGUnKSB7XHJcblxyXG4gICAgICBpZiAodmFsLnRhcmdldC52YWx1ZSAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgdGhpcy50ZXh0U2VhcmNoID0gdmFsLnRhcmdldC52YWx1ZS50cmltKCk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy50ZXh0U2VhcmNoID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZW1wIG9mIHRoaXMuc2VsZWN0RW1wbG95ZWUpIHtcclxuICAgICAgICBjb25zdCBzdHIgPSBlbXAuRnVsbF9OYW1lLnRvTG93ZXJDYXNlKCk7XHJcbiAgICAgICAgaWYgKHN0ci5pbmRleE9mKHRoaXMudGV4dFNlYXJjaC50b0xvd2VyQ2FzZSgpKSA9PSAtMSkge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIGlmICh0aGlzLnRleHRTZWFyY2gyICE9ICcnICYmIHR5cGUgPT0gJ3NlbGVjdGVkJykge1xyXG5cclxuICAgICAgaWYgKHZhbC50YXJnZXQudmFsdWUgIT09IHVuZGVmaW5lZCkge1xyXG4gICAgICAgIHRoaXMudGV4dFNlYXJjaDIgPSB2YWwudGFyZ2V0LnZhbHVlLnRyaW0oKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICB0aGlzLnRleHRTZWFyY2gyID0gJyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGZvciAoY29uc3QgZW1wIG9mIHRoaXMuc2VsZWN0ZWRFbXBsb3llZSkge1xyXG4gICAgICAgIGNvbnN0IHN0ciA9IGVtcC5GdWxsX05hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICBpZiAoc3RyLmluZGV4T2YodGhpcy50ZXh0U2VhcmNoMi50b0xvd2VyQ2FzZSgpKSA9PSAtMSkge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gdHJ1ZTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgZW1wLmlzaGlkZGVuID0gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhpcy5jYW5jZWwodHlwZSk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjYW5jZWwodHlwZSkge1xyXG4gICAgaWYgKHR5cGUgPT0gJ3NlbGVjdGFibGUnKSB7XHJcbiAgICAgIGZvciAoY29uc3QgbGlzdGVtcCBvZiB0aGlzLnNlbGVjdEVtcGxveWVlKSB7XHJcbiAgICAgICAgbGlzdGVtcC5pc2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9IGVsc2UgaWYgKHR5cGUgPT0gJ3NlbGVjdGVkJykge1xyXG4gICAgICBmb3IgKGNvbnN0IGxpc3RlbXAgb2YgdGhpcy5zZWxlY3RlZEVtcGxveWVlKSB7XHJcbiAgICAgICAgbGlzdGVtcC5pc2hpZGRlbiA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBzZWxlY3RJdGVtKGl0ZW0sIGkpIHtcclxuICAgIC8vIHRoaXMuYW5pbWF0ZShpdGVtLCBpKTtcclxuICAgIHRoaXMucHVzaEl0ZW0oaXRlbSwgaSk7XHJcbiAgfVxyXG5cclxuICBwdXNoSXRlbShpdGVtLCBpKSB7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRoaXMuc2VsZWN0RW1wbG95ZWUuc3BsaWNlKGksIDEpO1xyXG4gICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLnB1c2goaXRlbSk7XHJcbiAgICAvLyB0aGlzLmluZGV4TGVhdmUgPSBpdGVtLmVtcF9pZDtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWUuZm9yRWFjaChlbGVtZW50ID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnQuZW1wX2lkID09IGl0ZW0uZW1wX2lkKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdGF0dXMgPSAnYWRkZWQnO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICAgIC8vIH0sIDQ4MCk7XHJcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgIHRoaXMudG9nZ2xlTWFyZ2luID0gZmFsc2U7XHJcbiAgICAvLyB9LCA0NzApO1xyXG4gICAgdGhpcy5zZWxlY3RlZERhdGEuZW1pdCh0aGlzLnNlbGVjdGVkRW1wbG95ZWUpO1xyXG4gIH1cclxuXHJcbiAgYW5pbWF0ZShpdGVtLCBpKSB7XHJcbiAgICB0aGlzLnRvZ2dsZU1hcmdpbiA9IHRydWU7XHJcbiAgICBsZXQgZWxlbWVudFJlY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInhcIiArIGkpO1xyXG4gICAgdGhpcy5jdXJyZW50SGVpZ2h0U2VsZWN0ID0gZWxlbWVudFJlY3QuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xyXG4gICAgdGhpcy5jdXJyZW50WVNlbGVjdCA9IGVsZW1lbnRSZWN0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIHRoaXMuY3VycmVudEhlaWdodFNlbGVjdCAtIDEyMztcclxuICAgIHRoaXMuaW5kZXhMZWF2ZSA9IGl0ZW07XHJcbiAgfVxyXG5cclxuICByZW1vdmVJdGVtKGl0ZW0sIGkpIHtcclxuICAgIHRoaXMuaW5kZXhMZWF2ZSA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGlmIChlbGVtZW50LmVtcF9pZCA9PSBpdGVtLmVtcF9pZCkge1xyXG4gICAgICAgIHRoaXMuc2VsZWN0ZWRFbXBsb3llZS5zcGxpY2UodGhpcy5zZWxlY3RlZEVtcGxveWVlLmluZGV4T2YoaXRlbSksIDEpO1xyXG4gICAgICAgIHRoaXMuc2VsZWN0RW1wbG95ZWUucHVzaChpdGVtKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgdGhpcy5zZWxlY3RFbXBsb3llZS5mb3JFYWNoKGVsZW1lbnRzID0+IHtcclxuICAgICAgaWYgKGVsZW1lbnRzLmVtcF9pZCA9PSBpdGVtLmVtcF9pZCkge1xyXG4gICAgICAgIGVsZW1lbnRzLnN0YXR1cyA9ICdyZW1vdmVkJztcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5lbWl0KHRoaXMuc2VsZWN0ZWRFbXBsb3llZSk7XHJcbiAgfVxyXG5cclxuICBjbGVhckFsbCgpIHtcclxuICAgIHRoaXMuaW5kZXhMZWF2ZSA9ICcnO1xyXG4gICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3RhdHVzID0gJ3JlbW92ZWQnO1xyXG4gICAgICB0aGlzLnNlbGVjdEVtcGxveWVlLnB1c2goZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdGVkRW1wbG95ZWUgPSBbXTtcclxuICAgIHRoaXMuc2VsZWN0ZWREYXRhLmVtaXQodGhpcy5zZWxlY3RlZEVtcGxveWVlKTtcclxuICB9XHJcblxyXG4gIG1vdmVBbGwoKSB7XHJcbiAgICB0aGlzLnNlbGVjdEVtcGxveWVlLmZvckVhY2goZWxlbWVudCA9PiB7XHJcbiAgICAgIGVsZW1lbnQuc3RhdHVzID0gJ2FkZGVkJztcclxuICAgICAgdGhpcy5zZWxlY3RlZEVtcGxveWVlLnB1c2goZWxlbWVudCk7XHJcbiAgICB9KTtcclxuXHJcbiAgICB0aGlzLnNlbGVjdEVtcGxveWVlID0gW107XHJcbiAgICB0aGlzLnNlbGVjdGVkRGF0YS5lbWl0KHRoaXMuc2VsZWN0ZWRFbXBsb3llZSk7XHJcbiAgfVxyXG5cclxuICBzZWxlY3RGaWx0ZXIodmFsKSB7XHJcbiAgICB0aGlzLnNlbGVjdGVkRmlsdGVyRGF0YS5lbWl0KHZhbCk7XHJcbiAgfVxyXG5cclxuXHJcbn1cclxuIl19