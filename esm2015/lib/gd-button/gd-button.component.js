/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Output, EventEmitter } from '@angular/core';
import { Input } from '@angular/core';
export class GdButtonComponent {
    constructor() {
        this.loadingPlaceholder = "Loading..";
        this.loading = false;
        this.loadingProcess = false;
        this.onClickBtn = new EventEmitter();
        this.type = "raised";
        this.color = "primary";
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @param {?} id
     * @return {?}
     */
    getClick(id) {
        this.onClickBtn.emit(id);
        if (this.loading) {
            this.loadingProcess = true;
        }
    }
    /**
     * @return {?}
     */
    onClick() {
    }
}
GdButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-button',
                template: "<button *ngIf=\"type == 'basic'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading-dark.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'raised'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\"  mat-raised-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'flat'\" id=\"{{name}}\" (click)=\"getClick('coba');\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-flat-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'outline'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-stroked-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading-dark.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'add'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-stroked-button>\r\n    <span>+</span>\r\n</button>\r\n",
                styles: ["button{border-radius:10px;text-transform:uppercase;font-family:regular}button img{margin-right:4px;width:24px}.loading-img{-webkit-transition:.2s;transition:.2s}.GdButton[type=basic-primary]{color:var(--ion-color-primary)}.GdButton[type=raised-primary]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-primary-r),var(--ion-color-primary-g),var(--ion-color-primary-b),.6)}.GdButton[type=raised-primary]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-primary-r),var(--ion-color-primary-g),var(--ion-color-primary-b),.6)}.GdButton[type=outline-primary]{color:var(--ion-color-primary);border-color:var(--ion-color-primary)}.GdButton[type=flat-primary]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.GdButton[type=add-primary]{border-radius:200px;background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-new]{color:var(--ion-color-new)}.GdButton[type=raised-new]{background-color:var(--ion-color-new);color:var(--ion-color-new-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-new-r),var(--ion-color-new-g),var(--ion-color-new-b),.6)}.GdButton[type=raised-new]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-new-r),var(--ion-color-new-g),var(--ion-color-new-b),.6)}.GdButton[type=outline-new]{color:var(--ion-color-new);border-color:var(--ion-color-new)}.GdButton[type=flat-new]{background-color:var(--ion-color-new);color:var(--ion-color-new-contrast)}.GdButton[type=add-new]{border-radius:200px;background-color:var(--ion-color-new);color:var(--ion-color-new-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-approve]{color:var(--ion-color-approve)}.GdButton[type=raised-approve]{background-color:var(--ion-color-approve);color:var(--ion-color-approve-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-approve-r),var(--ion-color-approve-g),var(--ion-color-approve-b),.6)}.GdButton[type=raised-approve]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-approve-r),var(--ion-color-approve-g),var(--ion-color-approve-b),.6)}.GdButton[type=outline-approve]{color:var(--ion-color-approve);border-color:var(--ion-color-approve)}.GdButton[type=flat-approve]{background-color:var(--ion-color-approve);color:var(--ion-color-approve-contrast)}.GdButton[type=add-approve]{border-radius:200px;background-color:var(--ion-color-approve);color:var(--ion-color-approve-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-partially]{color:var(--ion-color-partially)}.GdButton[type=raised-partially]{background-color:var(--ion-color-partially);color:var(--ion-color-partially-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-partially-r),var(--ion-color-partially-g),var(--ion-color-partially-b),.6)}.GdButton[type=raised-partially]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-partially-r),var(--ion-color-partially-g),var(--ion-color-partially-b),.6)}.GdButton[type=outline-partially]{color:var(--ion-color-partially);border-color:var(--ion-color-partially)}.GdButton[type=flat-partially]{background-color:var(--ion-color-partially);color:var(--ion-color-partially-contrast)}.GdButton[type=add-partially]{border-radius:200px;background-color:var(--ion-color-partially);color:var(--ion-color-partially-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-rejected]{color:var(--ion-color-rejected)}.GdButton[type=raised-rejected]{background-color:var(--ion-color-rejected);color:var(--ion-color-rejected-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-rejected-r),var(--ion-color-rejected-g),var(--ion-color-rejected-b),.6)}.GdButton[type=raised-rejected]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-rejected-r),var(--ion-color-rejected-g),var(--ion-color-rejected-b),.6)}.GdButton[type=outline-rejected]{color:var(--ion-color-rejected);border-color:var(--ion-color-rejected)}.GdButton[type=flat-rejected]{background-color:var(--ion-color-rejected);color:var(--ion-color-rejected-contrast)}.GdButton[type=add-rejected]{border-radius:200px;background-color:var(--ion-color-rejected);color:var(--ion-color-rejected-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}gd-loading{display:-webkit-box;display:flex}"]
            }] }
];
/** @nocollapse */
GdButtonComponent.ctorParameters = () => [];
GdButtonComponent.propDecorators = {
    text: [{ type: Input }],
    color: [{ type: Input }],
    size: [{ type: Input }],
    type: [{ type: Input }],
    coba: [{ type: Input }],
    src: [{ type: Input }],
    name: [{ type: Input }],
    loadingPlaceholder: [{ type: Input }],
    loading: [{ type: Input }],
    onClickBtn: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GdButtonComponent.prototype.text;
    /** @type {?} */
    GdButtonComponent.prototype.color;
    /** @type {?} */
    GdButtonComponent.prototype.size;
    /** @type {?} */
    GdButtonComponent.prototype.type;
    /** @type {?} */
    GdButtonComponent.prototype.coba;
    /** @type {?} */
    GdButtonComponent.prototype.src;
    /** @type {?} */
    GdButtonComponent.prototype.name;
    /** @type {?} */
    GdButtonComponent.prototype.loadingPlaceholder;
    /** @type {?} */
    GdButtonComponent.prototype.loading;
    /** @type {?} */
    GdButtonComponent.prototype.loadingProcess;
    /** @type {?} */
    GdButtonComponent.prototype.onClickBtn;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtYnV0dG9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dkLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZ2QtYnV0dG9uL2dkLWJ1dHRvbi5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN4RSxPQUFPLEVBQUUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3RDLE1BQU0sT0FBTyxpQkFBaUI7SUFnQjVCO1FBUFMsdUJBQWtCLEdBQU8sV0FBVyxDQUFDO1FBQ3JDLFlBQU8sR0FBVyxLQUFLLENBQUM7UUFDakMsbUJBQWMsR0FBWSxLQUFLLENBQUM7UUFFdEIsZUFBVSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBSTNELElBQUksQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO1FBQ3JCLElBQUksQ0FBQyxLQUFLLEdBQUcsU0FBUyxDQUFDO0lBQ3hCLENBQUM7Ozs7SUFFRixRQUFRO0lBQ1IsQ0FBQzs7Ozs7SUFFRCxRQUFRLENBQUMsRUFBRTtRQUVULElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFBO1FBQ3hCLElBQUcsSUFBSSxDQUFDLE9BQU8sRUFBQztZQUNkLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDO1NBQzVCO0lBQ0gsQ0FBQzs7OztJQUVELE9BQU87SUFDUCxDQUFDOzs7WUF0Q0YsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxXQUFXO2dCQUNyQixnN0VBQXlDOzthQUUxQzs7Ozs7bUJBR0UsS0FBSztvQkFDTCxLQUFLO21CQUNMLEtBQUs7bUJBQ0wsS0FBSzttQkFDTCxLQUFLO2tCQUNMLEtBQUs7bUJBQ0wsS0FBSztpQ0FDTCxLQUFLO3NCQUNMLEtBQUs7eUJBR0wsTUFBTTs7OztJQVhQLGlDQUFrQjs7SUFDbEIsa0NBQW1COztJQUNuQixpQ0FBa0I7O0lBQ2xCLGlDQUFrQjs7SUFDbEIsaUNBQWtCOztJQUNsQixnQ0FBaUI7O0lBQ2pCLGlDQUFrQjs7SUFDbEIsK0NBQThDOztJQUM5QyxvQ0FBaUM7O0lBQ2pDLDJDQUFnQzs7SUFFaEMsdUNBQTZEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWJ1dHRvbicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWJ1dHRvbi5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2QtYnV0dG9uLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZEJ1dHRvbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIHRleHQ6YW55O1xyXG4gIEBJbnB1dCgpIGNvbG9yOmFueTtcclxuICBASW5wdXQoKSBzaXplOmFueTtcclxuICBASW5wdXQoKSB0eXBlOmFueTtcclxuICBASW5wdXQoKSBjb2JhOmFueTtcclxuICBASW5wdXQoKSBzcmM6YW55O1xyXG4gIEBJbnB1dCgpIG5hbWU6YW55O1xyXG4gIEBJbnB1dCgpIGxvYWRpbmdQbGFjZWhvbGRlcjphbnkgPSBcIkxvYWRpbmcuLlwiO1xyXG4gIEBJbnB1dCgpIGxvYWRpbmc6Qm9vbGVhbiA9IGZhbHNlO1xyXG4gIGxvYWRpbmdQcm9jZXNzOiBCb29sZWFuID0gZmFsc2U7XHJcblxyXG4gIEBPdXRwdXQoKSBvbkNsaWNrQnRuOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgdGhpcy50eXBlID0gXCJyYWlzZWRcIjtcclxuICAgIHRoaXMuY29sb3IgPSBcInByaW1hcnlcIjtcclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIGdldENsaWNrKGlkKXtcclxuXHJcbiAgICB0aGlzLm9uQ2xpY2tCdG4uZW1pdChpZClcclxuICAgIGlmKHRoaXMubG9hZGluZyl7XHJcbiAgICAgIHRoaXMubG9hZGluZ1Byb2Nlc3MgPSB0cnVlO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgb25DbGljaygpe1xyXG4gIH1cclxuXHJcbn1cclxuIl19