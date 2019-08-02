(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/material/badge'), require('@angular/material/button-toggle'), require('@angular/material/progress-spinner'), require('@angular/router'), require('@angular/material/stepper'), require('@angular/material/list'), require('@angular/material'), require('@angular/material/icon'), require('@angular/material/chips'), require('@angular/platform-browser'), require('hammerjs'), require('@angular/material/progress-bar'), require('@angular/forms'), require('@angular/flex-layout'), require('@ionic/angular'), require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('gd-components', ['exports', '@angular/material/badge', '@angular/material/button-toggle', '@angular/material/progress-spinner', '@angular/router', '@angular/material/stepper', '@angular/material/list', '@angular/material', '@angular/material/icon', '@angular/material/chips', '@angular/platform-browser', 'hammerjs', '@angular/material/progress-bar', '@angular/forms', '@angular/flex-layout', '@ionic/angular', '@angular/core', '@angular/common'], factory) :
    (factory((global['gd-components'] = {}),global.ng.material.badge,global.ng.material['button-toggle'],global.ng.material['progress-spinner'],global.ng.router,global.ng.material.stepper,global.ng.material.list,global.ng.material,global.ng.material.icon,global.ng.material.chips,global.ng.platformBrowser,global.Hammer,global.ng.material['progress-bar'],global.ng.forms,global.ng['flex-layout'],global.angular,global.ng.core,global.ng.common));
}(this, (function (exports,badge,buttonToggle,progressSpinner,router,stepper,list,material,icon,chips,platformBrowser,Hammer,progressBar,forms,flexLayout,angular,i0,common) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdComponentsService = /** @class */ (function () {
        function GdComponentsService() {
        }
        GdComponentsService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        GdComponentsService.ctorParameters = function () { return []; };
        /** @nocollapse */ GdComponentsService.ngInjectableDef = i0.defineInjectable({ factory: function GdComponentsService_Factory() { return new GdComponentsService(); }, token: GdComponentsService, providedIn: "root" });
        return GdComponentsService;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdComponentsComponent = /** @class */ (function () {
        function GdComponentsComponent() {
        }
        /**
         * @return {?}
         */
        GdComponentsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdComponentsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-components',
                        template: "<p>\n  gd-components works!\n</p>\n",
                        styles: [":root{--ion-color-primary:#FBAC5E;--ion-color-primary-rgb:251,172,94;--ion-color-primary-r:251;--ion-color-primary-g:172;--ion-color-primary-b:94;--ion-color-primary-contrast:#ffffff;--ion-color-primary-contrast-rgb:255,255,255;--ion-color-primary-shade:#E29345;--ion-color-primary-tint:#FFC678;--ion-color-primary-outline-background:#FFFFC4;--ion-color-new:#63BEFB;--ion-color-new-rgb:99,190,251;--ion-color-new-r:99;--ion-color-new-g:190;--ion-color-new-b:251;--ion-color-new-contrast:#ffffff;--ion-color-new-contrast-rgb:255,255,255;--ion-color-new-shade:#4AA5E2;--ion-color-new-tint:#7DD8FF;--ion-color-new-outline-background:#C9FFFF;--ion-color-partially:#8D5EFB;--ion-color-partially-rgb:141,94,251;--ion-color-partially-r:141;--ion-color-partially-g:94;--ion-color-partially-b:251;--ion-color-partially-contrast:#ffffff;--ion-color-partially-contrast-rgb:255,255,255;--ion-color-partially-shade:#7445E2;--ion-color-partially-tint:#A778FF;--ion-color-partially-outline-background:#C091FF;--ion-color-approve:#8CC63F;--ion-color-approve-rgb:140,198,63;--ion-color-approve-r:140;--ion-color-approve-g:198;--ion-color-approve-b:63;--ion-color-approve-contrast:#ffffff;--ion-color-approve-contrast-rgb:255,255,255;--ion-color-approve-shade:#73AD26;--ion-color-approve-tint:#A6E059;--ion-color-approve-outline-background:#BFF972;--ion-color-rejected:#FB745E;--ion-color-rejected-rgb:251,116,94;--ion-color-rejected-r:251;--ion-color-rejected-g:116;--ion-color-rejected-b:94;--ion-color-rejected-contrast:#ffffff;--ion-color-rejected-contrast-rgb:255,255,255;--ion-color-rejected-shade:#E25B45;--ion-color-rejected-tint:#FF8E78;--ion-color-rejected-outline-background:#FFDAC4;--ion-color-text-default:#192528;--ion-color-text-default-rgb:25,37,40;--ion-color-text-default-r:25;--ion-color-text-default-g:37;--ion-color-text-default-b:40;--ion-color-text-default-contrast:#ffffff;--ion-color-text-default-contrast-rgb:255,255,255;--ion-color-text-default-shade:#000C0F;--ion-color-text-default-tint:#333F42;--ion-color-text-secondary:#A5B0B7;--ion-color-text-secondary-rgb:25,37,40;--ion-color-text-secondary-r:25;--ion-color-text-secondary-g:37;--ion-color-text-secondary-b:40;--ion-color-text-secondary-contrast:#ffffff;--ion-color-text-secondary-contrast-rgb:255,255,255;--ion-color-text-secondary-shade:#8C979E;--ion-color-text-secondary-tint:#BFCAD1;--ion-color-outline-button:#C1CCD2;--ion-color-outline-button-rgb:193,204,210;--ion-color-outline-button-r:193;--ion-color-outline-button-g:204;--ion-color-outline-button-b:210;--ion-color-outline-button-contrast:#ffffff;--ion-color-outline-button-contrast-rgb:255,255,255;--ion-color-outline-button-shade:#A8B3B9;--ion-color-outline-button-tint:#DBE6EC;--ion-color-outline:#E2E9ED;--ion-color-outline-rgb:226,233,237;--ion-color-outline-r:226;--ion-color-outline-g:233;--ion-color-outline-b:237;--ion-color-outline-contrast:#ffffff;--ion-color-outline-contrast-rgb:255,255,255;--ion-color-outline-shade:#C9D0D4;--ion-color-outline-tint:#FCFFFF;--ion-color-disabled:#F6F8FA;--ion-color-disabled-rgb:246,248,250;--ion-color-disabled-r:246;--ion-color-disabled-g:248;--ion-color-disabled-b:250;--ion-color-disabled-contrast:#ffffff;--ion-color-disabled-contrast-rgb:255,255,255}"]
                    }] }
        ];
        /** @nocollapse */
        GdComponentsComponent.ctorParameters = function () { return []; };
        return GdComponentsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdButtonComponent = /** @class */ (function () {
        function GdButtonComponent() {
            this.loadingPlaceholder = "Loading..";
            this.loading = false;
            this.loadingProcess = false;
            this.onClickBtn = new i0.EventEmitter();
            this.type = "raised";
            this.color = "primary";
        }
        /**
         * @return {?}
         */
        GdButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @param {?} id
         * @return {?}
         */
        GdButtonComponent.prototype.getClick = /**
         * @param {?} id
         * @return {?}
         */
            function (id) {
                this.onClickBtn.emit(id);
                if (this.loading) {
                    this.loadingProcess = true;
                }
            };
        /**
         * @return {?}
         */
        GdButtonComponent.prototype.onClick = /**
         * @return {?}
         */
            function () {
            };
        GdButtonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-button',
                        template: "<button *ngIf=\"type == 'basic'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading-dark.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'raised'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\"  mat-raised-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'flat'\" id=\"{{name}}\" (click)=\"getClick('coba');\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-flat-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'outline'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-stroked-button>\r\n    <img class=\"loading-img\" [ngStyle]=\"{'opacity': loadingProcess ? 1:0, 'width.px': loadingProcess ? 24:0, 'margin-right.px': loadingProcess ? 10:0 }\" src=\"/assets/icon/loading-dark.svg\" alt=\"\">\r\n    <img *ngIf=\"src != null && !loadingProcess\" src=\"{{src}}\" alt=\"\">\r\n    <span *ngIf=\"!loadingProcess\">{{text}}</span>\r\n    <span *ngIf=\"loadingProcess\">{{loadingPlaceholder}}</span>\r\n</button>\r\n\r\n<button *ngIf=\"type == 'add'\" id=\"{{name}}\" (click)=\"getClick('coba')\" class=\"GdButton\" type=\"{{type}}-{{color}}\" mat-stroked-button>\r\n    <span>+</span>\r\n</button>\r\n",
                        styles: ["button{border-radius:10px;text-transform:uppercase;font-family:regular}button img{margin-right:4px;width:24px}.loading-img{-webkit-transition:.2s;transition:.2s}.GdButton[type=basic-primary]{color:var(--ion-color-primary)}.GdButton[type=raised-primary]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-primary-r),var(--ion-color-primary-g),var(--ion-color-primary-b),.6)}.GdButton[type=raised-primary]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-primary-r),var(--ion-color-primary-g),var(--ion-color-primary-b),.6)}.GdButton[type=outline-primary]{color:var(--ion-color-primary);border-color:var(--ion-color-primary)}.GdButton[type=flat-primary]{background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast)}.GdButton[type=add-primary]{border-radius:200px;background-color:var(--ion-color-primary);color:var(--ion-color-primary-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-new]{color:var(--ion-color-new)}.GdButton[type=raised-new]{background-color:var(--ion-color-new);color:var(--ion-color-new-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-new-r),var(--ion-color-new-g),var(--ion-color-new-b),.6)}.GdButton[type=raised-new]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-new-r),var(--ion-color-new-g),var(--ion-color-new-b),.6)}.GdButton[type=outline-new]{color:var(--ion-color-new);border-color:var(--ion-color-new)}.GdButton[type=flat-new]{background-color:var(--ion-color-new);color:var(--ion-color-new-contrast)}.GdButton[type=add-new]{border-radius:200px;background-color:var(--ion-color-new);color:var(--ion-color-new-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-approve]{color:var(--ion-color-approve)}.GdButton[type=raised-approve]{background-color:var(--ion-color-approve);color:var(--ion-color-approve-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-approve-r),var(--ion-color-approve-g),var(--ion-color-approve-b),.6)}.GdButton[type=raised-approve]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-approve-r),var(--ion-color-approve-g),var(--ion-color-approve-b),.6)}.GdButton[type=outline-approve]{color:var(--ion-color-approve);border-color:var(--ion-color-approve)}.GdButton[type=flat-approve]{background-color:var(--ion-color-approve);color:var(--ion-color-approve-contrast)}.GdButton[type=add-approve]{border-radius:200px;background-color:var(--ion-color-approve);color:var(--ion-color-approve-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-partially]{color:var(--ion-color-partially)}.GdButton[type=raised-partially]{background-color:var(--ion-color-partially);color:var(--ion-color-partially-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-partially-r),var(--ion-color-partially-g),var(--ion-color-partially-b),.6)}.GdButton[type=raised-partially]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-partially-r),var(--ion-color-partially-g),var(--ion-color-partially-b),.6)}.GdButton[type=outline-partially]{color:var(--ion-color-partially);border-color:var(--ion-color-partially)}.GdButton[type=flat-partially]{background-color:var(--ion-color-partially);color:var(--ion-color-partially-contrast)}.GdButton[type=add-partially]{border-radius:200px;background-color:var(--ion-color-partially);color:var(--ion-color-partially-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}.GdButton[type=basic-rejected]{color:var(--ion-color-rejected)}.GdButton[type=raised-rejected]{background-color:var(--ion-color-rejected);color:var(--ion-color-rejected-contrast);box-shadow:0 3px 12px 0 rgba(var(--ion-color-rejected-r),var(--ion-color-rejected-g),var(--ion-color-rejected-b),.6)}.GdButton[type=raised-rejected]:active{box-shadow:0 6px 12px 0 rgba(var(--ion-color-rejected-r),var(--ion-color-rejected-g),var(--ion-color-rejected-b),.6)}.GdButton[type=outline-rejected]{color:var(--ion-color-rejected);border-color:var(--ion-color-rejected)}.GdButton[type=flat-rejected]{background-color:var(--ion-color-rejected);color:var(--ion-color-rejected-contrast)}.GdButton[type=add-rejected]{border-radius:200px;background-color:var(--ion-color-rejected);color:var(--ion-color-rejected-contrast);width:45px;height:45px;padding:0;min-width:unset;font-size:30px}gd-loading{display:-webkit-box;display:flex}"]
                    }] }
        ];
        /** @nocollapse */
        GdButtonComponent.ctorParameters = function () { return []; };
        GdButtonComponent.propDecorators = {
            text: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            coba: [{ type: i0.Input }],
            src: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            loadingPlaceholder: [{ type: i0.Input }],
            loading: [{ type: i0.Input }],
            onClickBtn: [{ type: i0.Output }]
        };
        return GdButtonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'gd-loading',
                        template: "<div class=\"balls\" [ngStyle]=\"{'opacity': !isLoading ? 1:0, 'width.px': !isLoading ? 36:0, 'margin-right.px': !isLoading ? 10:0 }\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n</div>\r\n<div id=\"text\">{{isLoading}}</div>\r\n/ {{loadingnya}} /\r\n",
                        styles: [".balls{width:2.4em;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-flow:row nowrap;-webkit-box-align:center;align-items:center;-webkit-box-pack:justify;justify-content:space-between;margin-right:10px;-webkit-transition:.2s;transition:.2s;-webkit-animation:.4s ease-in loading;animation:.4s ease-in loading}.balls div{width:.5em;height:.5em;border-radius:50%;background-color:#fff;-webkit-transform:translateY(-100%);transform:translateY(-100%);-webkit-animation:.8s ease-in-out infinite alternate wave;animation:.8s ease-in-out infinite alternate wave}.balls div:nth-of-type(1){-webkit-animation-delay:-.4s;animation-delay:-.4s}.balls div:nth-of-type(2){-webkit-animation-delay:-.2s;animation-delay:-.2s}@-webkit-keyframes wave{from{-webkit-transform:translateY(-50%);transform:translateY(-50%)}to{-webkit-transform:translateY(50%);transform:translateY(50%)}}@keyframes wave{from{-webkit-transform:translateY(-50%);transform:translateY(-50%)}to{-webkit-transform:translateY(50%);transform:translateY(50%)}}@-webkit-keyframes loading{0%,80%{opacity:0}100%{opacity:1}}@keyframes loading{0%,80%{opacity:0}100%{opacity:1}}"]
                    }] }
        ];
        /** @nocollapse */
        GdLoadingComponent.ctorParameters = function () { return []; };
        GdLoadingComponent.propDecorators = {
            isLoading: [{ type: i0.Input }],
            text: [{ type: i0.Input }]
        };
        return GdLoadingComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdLoadingComponentModule = /** @class */ (function () {
        function GdLoadingComponentModule() {
        }
        GdLoadingComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angular.IonicModule,
                        ],
                        declarations: [GdLoadingComponent],
                        exports: [
                            GdLoadingComponent
                        ]
                    },] }
        ];
        return GdLoadingComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdButtonComponentModule = /** @class */ (function () {
        function GdButtonComponentModule() {
        }
        GdButtonComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            material.MatButtonModule,
                            material.MatIconModule,
                            GdLoadingComponentModule
                        ],
                        declarations: [GdButtonComponent],
                        exports: [
                            GdButtonComponent
                        ]
                    },] }
        ];
        return GdButtonComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSelectComponent = /** @class */ (function () {
        function GdSelectComponent() {
            this.selectList = [];
        }
        /**
         * @return {?}
         */
        GdSelectComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        GdSelectComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-select',
                        template: "<mat-form-field appearance=\"outline\">\r\n  <mat-label>{{label}}</mat-label>\r\n  <mat-select  [(ngModel)]=\"selectedValue\" name=\"{{name}}\">\r\n    <mat-option *ngFor=\"let list of selectList\" [value]=\"list.id\">\r\n      {{list.value}}\r\n    </mat-option>\r\n  </mat-select>\r\n</mat-form-field>",
                        styles: ["::ng-deep .mat-form-field-infix{padding-top:4px!important;padding-bottom:12px!important}::ng-deep label.mat-form-field-empty{margin-top:-12px!important}::ng-deep .mat-form-field-appearance-outline .mat-select-arrow-wrapper{-webkit-transform:translateY(0)!important;transform:translateY(0)!important}::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:var(--ion-color-primary)!important;opacity:.8!important}::ng-deep .mat-input-element{caret-color:rgba(0,0,0,.6)!important}.mat-warn .mat-input-element,::ng-deep .mat-form-field-invalid .mat-input-element{caret-color:rgba(0,0,0,.6)!important}::ng-deep .mat-form-field.mat-focused .mat-select-value-text{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-focused .mat-select-arrow{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-primary .mat-option.mat-selected:not(.mat-option-disabled){color:var(--ion-color-primary)!important}"]
                    }] }
        ];
        /** @nocollapse */
        GdSelectComponent.ctorParameters = function () { return []; };
        GdSelectComponent.propDecorators = {
            selectList: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            name: [{ type: i0.Input }],
            selectedValue: [{ type: i0.Input }]
        };
        return GdSelectComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSelectComponentModule = /** @class */ (function () {
        function GdSelectComponentModule() {
        }
        GdSelectComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            material.MatSelectModule,
                        ],
                        declarations: [GdSelectComponent],
                        exports: [
                            GdSelectComponent
                        ]
                    },] }
        ];
        return GdSelectComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var MyErrorStateMatcher = /** @class */ (function () {
        function MyErrorStateMatcher() {
        }
        /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
        MyErrorStateMatcher.prototype.isErrorState = /**
         * @param {?} control
         * @param {?} form
         * @return {?}
         */
            function (control, form) {
                /** @type {?} */
                var isSubmitted = form && form.submitted;
                return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
            };
        return MyErrorStateMatcher;
    }());
    var GdInputComponent = /** @class */ (function () {
        function GdInputComponent() {
        }
        /**
         * @return {?}
         */
        GdInputComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                if (this.required && this.type == 'email') {
                    this.emailFormControl = new forms.FormControl('', [
                        forms.Validators.required,
                        forms.Validators.email,
                    ]);
                    this.matcher = new MyErrorStateMatcher();
                }
                else if (!this.required && this.type == 'email') {
                    this.emailFormControl = new forms.FormControl('', [
                        forms.Validators.email,
                    ]);
                    this.matcher = new MyErrorStateMatcher();
                }
                else if (this.required && this.type != 'email') {
                    this.basicFormControl = new forms.FormControl('', [
                        forms.Validators.required,
                    ]);
                    this.matcher = new MyErrorStateMatcher();
                }
                else {
                    this.basicFormControl = new forms.FormControl('', []);
                    this.matcher = new MyErrorStateMatcher();
                }
            };
        /**
         * @return {?}
         */
        GdInputComponent.prototype.checkName = /**
         * @return {?}
         */
            function () {
                if (this.type == 'email') {
                    return this.emailFormControl;
                }
                else {
                    return this.basicFormControl;
                }
            };
        GdInputComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-input',
                        template: "    <mat-form-field appearance=\"outline\">\r\n      <mat-label>{{label}}</mat-label>\r\n      <input matInput type=\"{{type}}\" placeholder=\"{{placeholder}}\" [formControl]=\"checkName()\" [errorStateMatcher]=\"matcher\">\r\n      <mat-hint>{{hint}}</mat-hint> \r\n  \r\n      <mat-error *ngIf=\"type != 'email' && required && basicFormControl.hasError('required')\">\r\n        <strong>rusak rusak</strong>\r\n      </mat-error> \r\n      <mat-error *ngIf=\"type == 'email' && emailFormControl.hasError('email')\">\r\n        Please enter a valid email address\r\n      </mat-error>\r\n      <mat-error *ngIf=\"type == 'email' && required && emailFormControl.hasError('required')\">\r\n        Email is <strong>required</strong>\r\n      </mat-error>\r\n    </mat-form-field>",
                        styles: ["::ng-deep .mat-form-field-infix{padding-top:4px!important;padding-bottom:12px!important}::ng-deep label{margin-top:-12px!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{-webkit-transform:translateY(-20px) scale(.75)!important;transform:translateY(-20px) scale(.75)!important}::ng-deep .mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid .mat-form-field-outline-thick{color:var(--ion-color-primary)!important;opacity:.8!important}::ng-deep .mat-input-element{caret-color:rgba(0,0,0,.6)!important}.mat-warn .mat-input-element,::ng-deep .mat-form-field-invalid .mat-input-element{caret-color:rgba(0,0,0,.6)!important}::ng-deep .mat-form-field.mat-focused .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label{color:var(--ion-color-primary)!important}::ng-deep .mat-form-field-subscript-wrapper{overflow:visible!important}::ng-deep .mat-form-field-wrapper{padding-bottom:16px}.example-form{min-width:150px;max-width:500px;width:100%}.example-full-width{width:100%}"]
                    }] }
        ];
        /** @nocollapse */
        GdInputComponent.ctorParameters = function () { return []; };
        GdInputComponent.propDecorators = {
            color: [{ type: i0.Input }],
            placeholder: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            hint: [{ type: i0.Input }]
        };
        return GdInputComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdInputComponentModule = /** @class */ (function () {
        function GdInputComponentModule() {
        }
        GdInputComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            material.MatFormFieldModule,
                            forms.ReactiveFormsModule,
                            material.MatInputModule,
                        ],
                        declarations: [GdInputComponent],
                        exports: [
                            GdInputComponent
                        ]
                    },] }
        ];
        return GdInputComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'gd-chips',
                        template: "<div *ngIf=\"type=='label-chips'\" class=\"GdChips label\" [ngClass]=\"{\r\n    'new': color == 'new', \r\n    'rejected': color == 'rejected', \r\n    'partially': color == 'partially', \r\n    'approve': color == 'approve', \r\n    'added': color == 'added',\r\n    'new-outline': color == 'new-outline', \r\n    'rejected-outline': color == 'rejected-outline', \r\n    'partially-outline': color == 'partially-outline', \r\n    'approve-outline': color == 'approve-outline', \r\n    'added-outline': color == 'added-outline',\r\n    'small' : size == 'small',\r\n    'large' : size == 'lagre'}\">\r\n    {{label}}\r\n</div>\r\n\r\n<div *ngIf=\"type=='close-chips'\" class=\"GdChips close\" [ngClass]=\"{\r\n  'new': color == 'new', \r\n  'rejected': color == 'rejected', \r\n  'partially': color == 'partially', \r\n  'approve': color == 'approve', \r\n  'added': color == 'added',\r\n  'new-outline': color == 'new-outline', \r\n  'rejected-outline': color == 'rejected-outline', \r\n  'partially-outline': color == 'partially-outline', \r\n  'approve-outline': color == 'approve-outline', \r\n  'added-outline': color == 'added-outline',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  <div class=\"icon\"> <ion-icon ios=\"ios-close\" md=\"md-close\"></ion-icon> </div>\r\n  <div class=\"label\">{{label}}</div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='icon-chips'\" class=\"GdChips icon\" [ngClass]=\"{\r\n  'new': color == 'new', \r\n  'rejected': color == 'rejected', \r\n  'partially': color == 'partially', \r\n  'approve': color == 'approve', \r\n  'added': color == 'added',\r\n  'new-outline': color == 'new-outline', \r\n  'rejected-outline': color == 'rejected-outline', \r\n  'partially-outline': color == 'partially-outline', \r\n  'approve-outline': color == 'approve-outline', \r\n  'added-outline': color == 'added-outline',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  <div class=\"icon\"> <img src=\"{{srcIcon}}\" alt=\"\"> </div>\r\n  <div class=\"label\">{{label}}</div>\r\n</div>\r\n\r\n<div *ngIf=\"type=='avatar-chips'\" class=\"GdChips avatar\"[ngClass]=\"{\r\n  'new': color == 'new', \r\n  'rejected': color == 'rejected', \r\n  'partially': color == 'partially', \r\n  'approve': color == 'approve', \r\n  'added': color == 'added',\r\n  'new-outline': color == 'new-outline', \r\n  'rejected-outline': color == 'rejected-outline', \r\n  'partially-outline': color == 'partially-outline', \r\n  'approve-outline': color == 'approve-outline', \r\n  'added-outline': color == 'added-outline',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  {{label}}\r\n</div>\r\n\r\n<div *ngIf=\"type=='status-chips'\" class=\"GdChips status\"[ngClass]=\"{\r\n  'new-outline': color == 'new', \r\n  'rejected-outline': color == 'rejected', \r\n  'partially-outline': color == 'partially', \r\n  'approve-outline': color == 'approve', \r\n  'added-outline': color == 'added',\r\n  'small' : size == 'small',\r\n  'large' : size == 'lagre'}\">\r\n  {{label}}\r\n</div>",
                        styles: ["::ng-deep .GdChips{border-radius:16px;-webkit-transition:-webkit-filter .3s;transition:filter .3s;display:-webkit-inline-box;display:inline-flex;padding:7px 20px;-webkit-box-align:center;align-items:center;cursor:default;-webkit-filter:brightness(100%);filter:brightness(100%);transition:filter .3s,-webkit-filter .3s;text-align:center;vertical-align:middle}::ng-deep .GdChips.status{border:1px solid!important}::ng-deep .GdChips.small{font-size:10px!important;padding:6px 12px}::ng-deep .GdChips.large{font-size:15px!important;padding:7px 20px}::ng-deep .GdChips>.icon{-webkit-filter:brightness(100%);filter:brightness(100%);-webkit-transition:-webkit-filter .3s;transition:filter .3s;transition:filter .3s,-webkit-filter .3s}::ng-deep .GdChips:hover{-webkit-filter:brightness(90%);filter:brightness(90%);cursor:pointer}::ng-deep .GdChips>.icon:hover{-webkit-filter:brightness(85%);filter:brightness(85%);cursor:pointer}::ng-deep .GdChips.icon{padding:7px 20px 7px 15px!important;display:-webkit-inline-box;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;text-overflow:ellipsis}::ng-deep .GdChips.icon .icon{position:relative;border-radius:50%;width:16.5px;height:17px;text-align:center;vertical-align:middle;margin-right:8px}::ng-deep .GdChips.icon .icon img{position:absolute;left:50%;top:50%;width:14px;height:14px;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}::ng-deep .GdChips.new{background-color:var(--ion-color-new)!important;border-color:var(--ion-color-new-shade)!important;color:#fff}::ng-deep .GdChips.new .icon{background-color:var(--ion-color-new-shade)!important}::ng-deep .GdChips.new .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.new-outline{background-color:var(--ion-color-new-outline-background)!important;border-color:var(--ion-color-new-shade)!important;color:var(--ion-color-new-shade)!important}::ng-deep .GdChips.new-outline .icon{background-color:var(--ion-color-new-shade)!important}::ng-deep .GdChips.rejected{background-color:var(--ion-color-rejected)!important;border-color:var(--ion-color-rejected-shade)!important;color:#fff}::ng-deep .GdChips.rejected .icon{background-color:var(--ion-color-rejected-shade)!important}::ng-deep .GdChips.rejected .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.rejected-outline{background-color:var(--ion-color-rejected-outline-background)!important;border-color:var(--ion-color-rejected-shade)!important;color:var(--ion-color-rejected-shade)!important}::ng-deep .GdChips.rejected-outline .icon{background-color:var(--ion-color-rejected-shade)!important}::ng-deep .GdChips.partially{background-color:var(--ion-color-partially)!important;border-color:var(--ion-color-partially-shade)!important;color:#fff}::ng-deep .GdChips.partially .icon{background-color:var(--ion-color-partially-shade)!important}::ng-deep .GdChips.partially .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.partially-outline{background-color:var(--ion-color-partially-outline-background)!important;border-color:var(--ion-color-partially-shade)!important;color:var(--ion-color-partially-shade)!important}::ng-deep .GdChips.partially-outline .icon{background-color:var(--ion-color-partially-shade)!important}::ng-deep .GdChips.approve{background-color:var(--ion-color-approve)!important;border-color:var(--ion-color-approve-shade)!important;color:#fff}::ng-deep .GdChips.approve .icon{background-color:var(--ion-color-approve-shade)!important}::ng-deep .GdChips.approve .icon img{-webkit-filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%);filter:invert(100%) sepia(1%) saturate(7486%) hue-rotate(288deg) brightness(117%) contrast(100%)}::ng-deep .GdChips.approve-outline{background-color:var(--ion-color-approve-outline-background)!important;border-color:var(--ion-color-approve-shade)!important;color:var(--ion-color-approve-shade)!important}::ng-deep .GdChips.approve-outline .icon{background-color:var(--ion-color-approve-shade)!important}"]
                    }] }
        ];
        /** @nocollapse */
        GdChipsComponent.ctorParameters = function () { return []; };
        GdChipsComponent.propDecorators = {
            type: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            size: [{ type: i0.Input }],
            srcIcon: [{ type: i0.Input }]
        };
        return GdChipsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdChipsComponentModule = /** @class */ (function () {
        function GdChipsComponentModule() {
        }
        GdChipsComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            chips.MatChipsModule,
                            icon.MatIconModule
                        ],
                        declarations: [GdChipsComponent],
                        exports: [
                            GdChipsComponent
                        ]
                    },] }
        ];
        return GdChipsComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'gd-badge',
                        template: "<div  \r\n[ngClass]=\" {\r\n    'new': type == 'new', \r\n    'rejected': type == 'rejected', \r\n    'partially': type == 'partially', \r\n    'approve': type == 'approve', \r\n    'added': type == 'added', \r\n    'small' : size =='small', \r\n    'medium' : size =='medium', \r\n    'large' : size =='large',\r\n    'top'   : position == 'top',\r\n    'bottom' : position == 'bottom'}\" class=\"GdBadge\"><div class=\"label\">{{label}}</div>\r\n</div>    \r\n",
                        styles: [".GdBadge.small{position:relative;display:inline-block;width:15px;height:15px;border-radius:50%;font-size:.5em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.small .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.medium{position:relative;display:inline-block;width:20px;height:20px;border-radius:50%;font-size:.8em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.medium .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.large{position:relative;display:inline-block;width:28px;height:28px;border-radius:50%;font-size:1em;text-align:center;color:#fefefe;-webkit-animation:.3s show-badge;animation:.3s show-badge}.GdBadge.large .label{position:absolute;left:50%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.GdBadge.top{z-index:99999;top:-8px;margin-left:-4px;margin-right:-4px}.GdBadge.bottom{z-index:99999;bottom:-10px;margin-left:-3px;margin-right:-3px}.GdBadge.new{background-color:var(--ion-color-new)!important}.GdBadge.rejected{background-color:var(--ion-color-rejected)!important}.GdBadge.partially{background-color:var(--ion-color-partially)!important}.GdBadge.added{background-color:var(--ion-color-primary)!important}.GdBadge.approve{background-color:var(--ion-color-approve)!important}@-webkit-keyframes show-badge{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}@keyframes show-badge{0%{-webkit-transform:scale(.5);transform:scale(.5)}100%{-webkit-transform:scale(1);transform:scale(1)}}"]
                    }] }
        ];
        /** @nocollapse */
        GdBadgeComponent.ctorParameters = function () { return []; };
        GdBadgeComponent.propDecorators = {
            size: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            label: [{ type: i0.Input }],
            type: [{ type: i0.Input }],
            position: [{ type: i0.Input }]
        };
        return GdBadgeComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdBadgeComponentModule = /** @class */ (function () {
        function GdBadgeComponentModule() {
        }
        GdBadgeComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            angular.IonicModule,
                            badge.MatBadgeModule
                        ],
                        declarations: [GdBadgeComponent],
                        exports: [
                            GdBadgeComponent
                        ]
                    },] }
        ];
        return GdBadgeComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdCheckboxComponent = /** @class */ (function () {
        function GdCheckboxComponent() {
        }
        /**
         * @return {?}
         */
        GdCheckboxComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdCheckboxComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-checkbox',
                        template: "<mat-checkbox color={{color}} >{{ text }}</mat-checkbox>\r\n\r\n\r\n\r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GdCheckboxComponent.ctorParameters = function () { return []; };
        GdCheckboxComponent.propDecorators = {
            text: [{ type: i0.Input }],
            checked: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            disableRipple: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            labelPosition: [{ type: i0.Input }]
        };
        return GdCheckboxComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdCheckboxComponentModule = /** @class */ (function () {
        function GdCheckboxComponentModule() {
        }
        GdCheckboxComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            material.MatCheckboxModule,
                        ],
                        declarations: [GdCheckboxComponent],
                        exports: [
                            GdCheckboxComponent
                        ]
                    },] }
        ];
        return GdCheckboxComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdRadiobuttonComponent = /** @class */ (function () {
        function GdRadiobuttonComponent() {
        }
        /**
         * @return {?}
         */
        GdRadiobuttonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdRadiobuttonComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-radio-button',
                        template: "  <mat-radio-button [color]=\"color\" value=\"1\" >{{ text }}</mat-radio-button>\r\n  \r\n",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GdRadiobuttonComponent.ctorParameters = function () { return []; };
        GdRadiobuttonComponent.propDecorators = {
            color: [{ type: i0.Input }],
            disableRipple: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            labelPosition: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            selected: [{ type: i0.Input }],
            checked: [{ type: i0.Input }],
            text: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            ariaLabel: [{ type: i0.Input, args: ['aria-label',] }]
        };
        return GdRadiobuttonComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdRadiobuttonComponentModule = /** @class */ (function () {
        function GdRadiobuttonComponentModule() {
        }
        GdRadiobuttonComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            material.MatRadioModule,
                        ],
                        declarations: [GdRadiobuttonComponent],
                        exports: [
                            GdRadiobuttonComponent
                        ]
                    },] }
        ];
        return GdRadiobuttonComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdToggleComponent = /** @class */ (function () {
        function GdToggleComponent() {
        }
        /**
         * @return {?}
         */
        GdToggleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdToggleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-toggle',
                        template: "<mat-slide-toggle color={{color}} >{{text}}</mat-slide-toggle>\r\n<!-- <ion-toggle color=\"dark\" ></ion-toggle> -->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GdToggleComponent.ctorParameters = function () { return []; };
        GdToggleComponent.propDecorators = {
            color: [{ type: i0.Input }],
            checked: [{ type: i0.Input }],
            disableRipple: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            required: [{ type: i0.Input }],
            text: [{ type: i0.Input }]
        };
        return GdToggleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdToggleComponentModule = /** @class */ (function () {
        function GdToggleComponentModule() {
        }
        GdToggleComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            material.MatSlideToggleModule,
                        ],
                        declarations: [GdToggleComponent],
                        exports: [
                            GdToggleComponent
                        ]
                    },] }
        ];
        return GdToggleComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSliderComponent = /** @class */ (function () {
        function GdSliderComponent() {
        }
        /**
         * @return {?}
         */
        GdSliderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.max, "1asdasd");
            };
        GdSliderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-slider',
                        template: "<mat-slider min={{min}} max={{max}} step={{step}} color={{color}} thumbLabel={{thumbLabel}} tickInterval={{tickInterval}}>\r\n</mat-slider>\r\n\r\n<!-- <p>{{max}}</p> -->",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GdSliderComponent.ctorParameters = function () { return []; };
        GdSliderComponent.propDecorators = {
            color: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }],
            max: [{ type: i0.Input }],
            min: [{ type: i0.Input }],
            invert: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            vertical: [{ type: i0.Input }],
            step: [{ type: i0.Input }],
            thumbLabel: [{ type: i0.Input }],
            tickInterval: [{ type: i0.Input }]
        };
        return GdSliderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSliderComponentModule = /** @class */ (function () {
        function GdSliderComponentModule() {
        }
        GdSliderComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            material.MatSlideToggleModule,
                            material.MatSliderModule
                        ],
                        declarations: [GdSliderComponent],
                        exports: [
                            GdSliderComponent
                        ]
                    },] }
        ];
        return GdSliderComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdBreadcrumbComponent = /** @class */ (function () {
        function GdBreadcrumbComponent() {
        }
        /**
         * @return {?}
         */
        GdBreadcrumbComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.breadcrumbList);
            };
        GdBreadcrumbComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-breadcrumb',
                        template: "<ul class=\"GdBreadcrumb\">\r\n    <li *ngFor=\"let item of breadcrumbList;index as i;let last = last\">\r\n      <a href=\"#\" [ngClass]=\"{'active': last}\">{{breadcrumbList[i].label}}</a>\r\n      <svg [ngClass]=\"{'invisible': last}\" xmlns=\"http://www.w3.org/2000/svg\" width=\"9.067\" height=\"15.365\" viewBox=\"0 0 9.067 15.365\">\r\n        <path id=\"Path_2606\" data-name=\"Path 2606\" d=\"M130.9-337l7.007,6.946L144.853-337\" transform=\"translate(337.71 145.561) rotate(-90)\" fill=\"none\" stroke=\"#a5b0b7\" stroke-width=\"2\"/>\r\n      </svg>      \r\n    </li>\r\n</ul>",
                        styles: ["ul.GdBreadcrumb{padding:0 10px;list-style:none}ul.GdBreadcrumb>li{display:inline}ul.GdBreadcrumb svg{margin:0 5px;width:12px!important;height:12px!important}ul.GdBreadcrumb .invisible{display:none}ul.GdBreadcrumb .active{color:#333!important;font-weight:400!important;pointer-events:none!important}ul.GdBreadcrumb li a{text-decoration:none;color:var(--ion-color-primary);font-weight:700;-webkit-transition:color .25s;transition:color .25s}ul.GdBreadcrumb li a:hover{color:var(--ion-color-primary-shade)!important}@media only screen and (max-width:720px){ul.GdBreadcrumb>li{display:none}ul.GdBreadcrumb svg{display:none!important}ul.GdBreadcrumb.active{display:inline!important;color:#333!important;font-weight:400!important;pointer-events:none!important}}"]
                    }] }
        ];
        /** @nocollapse */
        GdBreadcrumbComponent.ctorParameters = function () { return []; };
        GdBreadcrumbComponent.propDecorators = {
            breadcrumbList: [{ type: i0.Input }]
        };
        return GdBreadcrumbComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdBreadcrumbComponentModule = /** @class */ (function () {
        function GdBreadcrumbComponentModule() {
        }
        GdBreadcrumbComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            common.CommonModule
                        ],
                        declarations: [GdBreadcrumbComponent],
                        exports: [
                            GdBreadcrumbComponent
                        ]
                    },] }
        ];
        return GdBreadcrumbComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdToolbarComponent = /** @class */ (function () {
        function GdToolbarComponent() {
        }
        /**
         * @return {?}
         */
        GdToolbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdToolbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-toolbar',
                        template: " <ul class=\"toolbar\">\r\n    <img src=\"../../../assets/icon/search.svg\" class=\"search\">\r\n    <img src=\"../../../assets/icon/filter.svg\" class=\"filter\">\r\n    <img src=\"../../../assets/icon/summary.svg\" class=\"summary\" >\r\n  </ul>\r\n",
                        styles: ["ul.toolbar{list-style:none}ul.toolbar img{padding:10px}ul.toolbar img.search{width:50px;height:50px}"]
                    }] }
        ];
        /** @nocollapse */
        GdToolbarComponent.ctorParameters = function () { return []; };
        return GdToolbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdToolbarComponentModule = /** @class */ (function () {
        function GdToolbarComponentModule() {
        }
        GdToolbarComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                        ],
                        declarations: [GdToolbarComponent],
                        exports: [
                            GdToolbarComponent
                        ]
                    },] }
        ];
        return GdToolbarComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdAvatarComponent = /** @class */ (function () {
        function GdAvatarComponent() {
        }
        /**
         * @return {?}
         */
        GdAvatarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdAvatarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-avatar',
                        template: "<div class=\"GdAvatar shadow\" [ngClass]=\"{'avatar-normal': avatarSize== 'normal', \r\n'avatar-small': avatarSize == 'small', 'avatar-large': avatarSize =='large','shadow' : avatarShadow }\">\r\n  <img src=\"{{avatarSrc}}\" >\r\n</div>        \r\n        \r\n        \r\n      <!-- <div class=\"avatar-normal\">\r\n          <img src=\"../../../assets/icon/img.svg\" >\r\n        <div class=\"badge-normal\"> <img src=\"../../../assets/icon/fire-badge.svg\" ></div>\r\n      </div>\r\n      <div class=\"avatar-small\">\r\n          <img src=\"../../../assets/icon/img.svg\">\r\n        <div class=\"badge-small\"></div>\r\n      </div>\r\n      <div class=\"avatar-text\" >\r\n          <img src=\"../../../assets/icon/img.svg\">\r\n        <div class=\"badge-text\"></div>\r\n      </div> -->\r\n   ",
                        styles: [".GdAvatar.avatar-large{width:46px;height:46px;position:relative}.GdAvatar.avatar-large img{border-radius:50%;width:46px;height:46px;-o-object-fit:cover;object-fit:cover}.GdAvatar.avatar-normal{position:relative;width:36px;height:36px}.GdAvatar.avatar-normal img{border-radius:50%;width:36px;height:36px;-o-object-fit:cover;object-fit:cover}.GdAvatar.avatar-small{position:relative;width:26px;height:26px}.GdAvatar.avatar-small img{border-radius:50%;width:26px;height:26px;-o-object-fit:cover;object-fit:cover}.GdAvatar.shadow img{box-shadow:0 0 14px 0 rgba(0,0,0,.3)!important}"]
                    }] }
        ];
        /** @nocollapse */
        GdAvatarComponent.ctorParameters = function () { return []; };
        GdAvatarComponent.propDecorators = {
            avatarSrc: [{ type: i0.Input }],
            avatarSize: [{ type: i0.Input }],
            avatarShadow: [{ type: i0.Input }]
        };
        return GdAvatarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdAvatarComponentModule = /** @class */ (function () {
        function GdAvatarComponentModule() {
        }
        GdAvatarComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            common.CommonModule
                        ],
                        declarations: [GdAvatarComponent],
                        exports: [
                            GdAvatarComponent
                        ]
                    },] }
        ];
        return GdAvatarComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdButtonToggleComponent = /** @class */ (function () {
        function GdButtonToggleComponent() {
            this.toggleList = [];
        }
        /**
         * @return {?}
         */
        GdButtonToggleComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdButtonToggleComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-button-toggle',
                        template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n    <mat-button-toggle *ngFor=\"let item of toggleList\" name=\"\" disabled={{item.disable}} value=\"item.value\">\r\n        <p no-margin>{{item.label}}</p>\r\n    </mat-button-toggle>\r\n</mat-button-toggle-group>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GdButtonToggleComponent.ctorParameters = function () { return []; };
        GdButtonToggleComponent.propDecorators = {
            groupName: [{ type: i0.Input }],
            toggleList: [{ type: i0.Input }]
        };
        return GdButtonToggleComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdButtonToggleComponentModule = /** @class */ (function () {
        function GdButtonToggleComponentModule() {
        }
        GdButtonToggleComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            buttonToggle.MatButtonToggleModule
                        ],
                        declarations: [GdButtonToggleComponent],
                        exports: [
                            GdButtonToggleComponent
                        ]
                    },] }
        ];
        return GdButtonToggleComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdContentComponent = /** @class */ (function () {
        function GdContentComponent() {
        }
        /**
         * @return {?}
         */
        GdContentComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdContentComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-content',
                        template: "<div class=\"content\">\r\n  <ng-content select=\"[content]\"></ng-content>\r\n  <!-- Greatday UI KIT Content -->\r\n</div>",
                        styles: [".content{width:331px;height:516px;background-color:#d3d3d3;border-radius:25px;-ms-grid-row-align:center;align-self:center}p{text-align:center}"]
                    }] }
        ];
        /** @nocollapse */
        GdContentComponent.ctorParameters = function () { return []; };
        return GdContentComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdContentComponentModule = /** @class */ (function () {
        function GdContentComponentModule() {
        }
        GdContentComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                        ],
                        declarations: [GdContentComponent],
                        exports: [
                            GdContentComponent
                        ]
                    },] }
        ];
        return GdContentComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
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
            { type: i0.Component, args: [{
                        selector: 'gd-card',
                        template: "<div class=\"GdCard basic-card\" *ngIf=\"type=='basic-card'\">\r\n<div class=\"loading-bar\" [ngClass]=\"{'full-loaded' : isLoaded }\"></div>\r\n<div class=\"loading-overlay\" *ngIf=\"!isLoaded\"></div>\r\n  <div class=\"head-card\"> \r\n      <ng-content select=[head]></ng-content>\r\n  </div>\r\n  <div class=\"content-card\"> <ng-content select=[content]></ng-content></div>\r\n  <div class=\"footer-card\"> <ng-content select=[footer]> </ng-content> </div>\r\n</div>\r\n\r\n<div class=\"GdCard advance-card\" *ngIf=\"type=='advance-card'\">\r\n\r\n    <div class=\"head-card\"> \r\n        <ng-content select=[head]></ng-content>\r\n    </div>\r\n    <div class=\"content-card\"> <ng-content select=[content]></ng-content></div>\r\n    <div class=\"footer-card\"> <ng-content select=[footer]> </ng-content> </div>\r\n\r\n</div>\r\n<br><button (click)=\"done()\">Done keun loading na</button>",
                        styles: [".GdCard.basic-card{min-width:300px;max-width:300px;min-height:400px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between;box-shadow:0 5px 50px -10px rgba(0,0,0,.55);border-radius:15px;padding:15px;overflow:hidden;position:relative}.GdCard.basic-card .head-card{width:100%;top:0;margin-bottom:10px;margin-top:10px}.GdCard.basic-card .head-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.basic-card .head-card ion-label{font-weight:500}.GdCard.basic-card .footer-card{margin-bottom:10px;margin-top:10px;bottom:0}.GdCard.basic-card .footer-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.advance-card{min-width:250px;min-height:400px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between;box-shadow:0 5px 50px -20px rgba(0,0,0,.4);border-radius:15px;padding:15px}.GdCard.advance-card .head-card{top:0p;margin-bottom:10px;margin-top:10px}.GdCard.advance-card .head-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard.advance-card .head-card ion-label{font-weight:500}.GdCard.advance-card .footer-card{margin-bottom:10px;margin-top:10px;bottom:0}.GdCard.advance-card .footer-card div{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;display:-webkit-box;display:flex;flex-wrap:wrap;place-content:center space-between}.GdCard .loading-bar{background:orange;width:92%;height:4px;position:absolute;top:0;left:0;-webkit-animation:2s alternate load;animation:2s alternate load;-webkit-transition:.3s;transition:.3s;z-index:2}.GdCard .full-loaded{width:100%!important}.GdCard .loading-overlay{background:#fff;width:100%;height:100%;position:absolute;top:0;left:0;opacity:.5;z-index:1;-webkit-transition:.2s;transition:.2s}@-webkit-keyframes load{0%{width:0%}40%{width:60%}100%{width:92%}}@keyframes load{0%{width:0%}40%{width:60%}100%{width:92%}}"]
                    }] }
        ];
        /** @nocollapse */
        GdCardComponent.ctorParameters = function () { return []; };
        GdCardComponent.propDecorators = {
            type: [{ type: i0.Input }]
        };
        return GdCardComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdCardComponentModule = /** @class */ (function () {
        function GdCardComponentModule() {
        }
        GdCardComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            GdChipsComponentModule,
                            buttonToggle.MatButtonToggleModule
                        ],
                        declarations: [GdCardComponent],
                        exports: [
                            GdChipsComponentModule,
                            GdCardComponent
                        ]
                    },] }
        ];
        return GdCardComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdTabsComponent = /** @class */ (function () {
        function GdTabsComponent() {
            this.selectedValue = 0;
            this.i = 0;
            this.positionLabel2 = this.positionLabel;
        }
        /**
         * @return {?}
         */
        GdTabsComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.arraySection = document.querySelectorAll(".gdtab-section");
                console.log('anoo', this.arraySection);
            };
        /**
         * @return {?}
         */
        GdTabsComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var selector = ".gd-sectiontab-" + 0;
                document.querySelector(selector).innerHTML = this.arraySection[0].outerHTML;
            };
        /**
         * @param {?} event
         * @return {?}
         */
        GdTabsComponent.prototype.setValue = /**
         * @param {?} event
         * @return {?}
         */
            function (event) {
                var _this = this;
                this.selectedValue = event;
                console.log(this.selectedValue);
                /** @type {?} */
                var selector = ".gd-sectiontab-" + this.selectedValue;
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    document.querySelector(selector).innerHTML = _this.arraySection[_this.selectedValue].outerHTML;
                }), 0.01);
                console.log(this.arraySection[this.selectedValue].outerHTML);
                console.log(document.querySelector(selector));
            };
        GdTabsComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-tabs',
                        template: "<mat-tab-group selectedIndex=\"0\" (selectedIndexChange)=\"setValue($event)\" [headerPosition]=\"positionLabel\" mat-align-tabs=\"alignLabel\">\r\n  <mat-tab  *ngFor=\"let item of arraySection; index as i\" [label]=\"dataLabel[i]\"> \r\n      <div class=\"gd-sectiontab-{{i}}\">\r\n      </div> \r\n  </mat-tab>\r\n</mat-tab-group>\r\n\r\n<div class=\"tampung\">\r\n  <h1>tumpang</h1>\r\n    <ng-content select=\"[class=gdtab-section]\"></ng-content>\r\n</div>\r\n",
                        styles: [".tampung{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        GdTabsComponent.ctorParameters = function () { return []; };
        GdTabsComponent.propDecorators = {
            dataLabel: [{ type: i0.Input }],
            alignLabel: [{ type: i0.Input }],
            positionLabel: [{ type: i0.Input }]
        };
        return GdTabsComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdTabsComponentModule = /** @class */ (function () {
        function GdTabsComponentModule() {
        }
        GdTabsComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            material.MatTabsModule
                        ],
                        declarations: [GdTabsComponent],
                        exports: [
                            GdTabsComponent
                        ]
                    },] }
        ];
        return GdTabsComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdTooltipComponent = /** @class */ (function () {
        function GdTooltipComponent() {
            this.disabled = false;
        }
        /**
         * @return {?}
         */
        GdTooltipComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdTooltipComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-tooltip',
                        template: "<div class=\"gd-tooltip-component\" matTooltipDisabled=\"{{disabled}}\" matTooltip=\"{{text}}\" matTooltipPosition=\"{{position}}\" matTooltipShowDelay=\"100\" matTooltipHideDelay=\"200\" matTooltipClass=\"tooltip-style\">\r\n  <ng-content></ng-content>\r\n</div>\r\n",
                        encapsulation: i0.ViewEncapsulation.None,
                        styles: [".gd-tooltip-component{display:inline-block}"]
                    }] }
        ];
        /** @nocollapse */
        GdTooltipComponent.ctorParameters = function () { return []; };
        GdTooltipComponent.propDecorators = {
            text: [{ type: i0.Input }],
            position: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }]
        };
        return GdTooltipComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdTooltipComponentModule = /** @class */ (function () {
        function GdTooltipComponentModule() {
        }
        GdTooltipComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            material.MatTooltipModule,
                            material.MatButtonModule
                        ],
                        declarations: [GdTooltipComponent],
                        exports: [
                            GdTooltipComponent
                        ]
                    },] }
        ];
        return GdTooltipComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdProgressSpinnerComponent = /** @class */ (function () {
        function GdProgressSpinnerComponent() {
            this.value = 0;
            this.type = 'primary';
        }
        /**
         * @return {?}
         */
        GdProgressSpinnerComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdProgressSpinnerComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-progress-spinner',
                        template: "<mat-progress-spinner\r\n    *ngIf=\"type == 'primary'\"\r\n    class=\"primary-spinner\"\r\n    mode=\"determinate\"\r\n    value=\"{{value}}\">\r\n</mat-progress-spinner>\r\n\r\n<mat-progress-spinner\r\n    *ngIf=\"type == 'light'\"\r\n    class=\"light-spinner\"\r\n    mode=\"determinate\"\r\n    value=\"{{value}}\">\r\n</mat-progress-spinner>\r\n\r\n<mat-progress-spinner\r\n    *ngIf=\"type == 'dark'\"\r\n    class=\"dark-spinner\"\r\n    mode=\"determinate\"\r\n    value=\"{{value}}\">\r\n</mat-progress-spinner>\r\n",
                        styles: ["::ng-deep .primary-spinner,::ng-deep svg{width:30px!important;height:30px!important}::ng-deep .primary-spinner svg circle{stroke:var(--ion-color-primary)!important}::ng-deep .light-spinner,::ng-deep svg{width:30px!important;height:30px!important}::ng-deep .light-spinner svg circle{stroke:#e9e9e9!important}::ng-deep .dark-spinner,::ng-deep svg{width:30px!important;height:30px!important}::ng-deep .dark-spinner svg circle{stroke:#464646!important}"]
                    }] }
        ];
        /** @nocollapse */
        GdProgressSpinnerComponent.ctorParameters = function () { return []; };
        GdProgressSpinnerComponent.propDecorators = {
            value: [{ type: i0.Input }],
            type: [{ type: i0.Input }]
        };
        return GdProgressSpinnerComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdProgressSpinnerComponentModule = /** @class */ (function () {
        function GdProgressSpinnerComponentModule() {
        }
        GdProgressSpinnerComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            progressSpinner.MatProgressSpinnerModule
                        ],
                        declarations: [GdProgressSpinnerComponent],
                        exports: [
                            GdProgressSpinnerComponent
                        ]
                    },] }
        ];
        return GdProgressSpinnerComponentModule;
    }());

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m)
            return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length)
                    o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdModalComponent = /** @class */ (function () {
        function GdModalComponent(modalController, nav, router$$1) {
            this.modalController = modalController;
            this.nav = nav;
            this.router = router$$1;
            this.height = 100;
            this.lastPosX = 0;
            this.lastPosY = 0;
            this.isDragging = false;
        }
        /**
         * @return {?}
         */
        GdModalComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.holder = document.getElementById('holder');
                this.modalWrapper = document.querySelector('.modal');
                // let oriHeight = 100 - this.height;
                // this.modalWrapper.style.transform = 'translateY(' + (100-this.height) + '%)';
                // console.log(oriHeight);
                console.log("mareisya");
                console.log(this.holder);
                this.panDown = new window['Hammer'](this.holder);
                this.panDown.add(new window['Hammer'].Pan({ direction: window['Hammer'].DIRECTION_ALL, threshold: 0 }));
                this.panDown.on('pan', ( /**
                 * @param {?} ev
                 * @return {?}
                 */function (ev) {
                    console.log("Try Hard!");
                    /** @type {?} */
                    var elem = ev.target;
                    // var oriHeight = (this.modalWrapper.offsetHeight/100) * this.height;
                    if (!_this.isDragging) {
                        _this.isDragging = true;
                        _this.lastPosY = 0;
                    }
                    /** @type {?} */
                    var posY = ev.deltaY + _this.lastPosY;
                    // var outClose = (this.modalWrapper.offsetHeight / 100) * 80;
                    /** @type {?} */
                    var outClose = _this.modalWrapper.offsetHeight - 60;
                    if (posY >= 0) {
                        _this.modalWrapper.style.transform = 'translateY(' + posY + 'px)';
                        _this.modalWrapper.style.transition = 'all 0ms';
                    }
                    if (ev.isFinal) {
                        _this.isDragging = false;
                        _this.modalWrapper.style.transform = 'translateY(0px)';
                        _this.modalWrapper.style.transition = 'all 300ms';
                    }
                    if (posY > outClose) {
                        _this.modalController.dismiss();
                    }
                    // console.log(this.modalWrapper);
                    // console.log(this.isDragging);
                    // console.log(this.lastPosY);
                    // console.log("translateY: " +posY);
                }));
            };
        /**
         * @return {?}
         */
        GdModalComponent.prototype.closeModal = /**
         * @return {?}
         */
            function () {
                this.modalController.dismiss();
            };
        GdModalComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-modal',
                        template: "<div class=\"modal\" [ngClass]=\"{'closeIt': isHide}\" [ngStyle]=\"{'height.%' : height}\">\r\n  <ion-buttons>\r\n      <ion-icon name=\"close\" class=\"close\" (click)=\"closeModal()\" tappable></ion-icon>\r\n  </ion-buttons>\r\n  <div class=\"holder-area\" id=\"holder\">\r\n    <div class=\"holder\"></div>\r\n  </div>\r\n  <div class=\"modal-header\">\r\n      <ng-content select=[modal-header]></ng-content>\r\n  </div>\r\n  <div class=\"modal-content\">\r\n    {{setContentH}}\r\n      <ng-content select=[modal-content]></ng-content>\r\n  </div>\r\n</div>",
                        styles: [".modal{width:90%;min-height:250px;max-height:97%;background-color:#fff;border-radius:25px 25px 0 0;align-self:center;margin:0 auto;align-self:flex-end;position:relative;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.modal .holder-area{height:30px;display:-webkit-box;display:flex;border-radius:25px 25px 0 0;min-height:30px;cursor:-webkit-grab;cursor:grab}.modal .holder-area .holder{background:#e2e2e2;width:80px;height:7px;border-radius:50px;margin:0 auto;-ms-grid-row-align:center;align-self:center}.modal .modal-header{padding:15px 18px;border-bottom:1px solid rgba(190,190,190,.5);z-index:4}.modal .modal-content{padding:10px 18px;overflow:auto}.modal .close{position:absolute;top:-11px;right:-27px;font-size:22px;color:#fff;display:none}@media screen and (min-width:768px){.modal{width:50%;max-width:700px}.close{display:block!important}}"]
                    }] }
        ];
        /** @nocollapse */
        GdModalComponent.ctorParameters = function () {
            return [
                { type: angular.ModalController },
                { type: angular.NavController },
                { type: router.Router }
            ];
        };
        GdModalComponent.propDecorators = {
            height: [{ type: i0.Input }]
        };
        return GdModalComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomHammerConfig = /** @class */ (function (_super) {
        __extends(CustomHammerConfig, _super);
        function CustomHammerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.overrides = {
                'pan': {
                    direction: Hammer.DIRECTION_ALL
                }
            };
            return _this;
        }
        return CustomHammerConfig;
    }(platformBrowser.HammerGestureConfig));
    var GdModalComponentModule = /** @class */ (function () {
        function GdModalComponentModule() {
        }
        GdModalComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule
                        ],
                        providers: [
                            { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                        ],
                        declarations: [GdModalComponent],
                        exports: [
                            GdModalComponent
                        ]
                    },] }
        ];
        return GdModalComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdStepperComponent = /** @class */ (function () {
        function GdStepperComponent() {
            this.i = 0;
        }
        /**
         * @return {?}
         */
        GdStepperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.arraySection = document.querySelectorAll(".gd-stepper-section");
            };
        /**
         * @return {?}
         */
        GdStepperComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.arraySection.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    /** @type {?} */
                    var selector = ".gd-stepper-section-" + _this.i;
                    document.querySelector(selector).innerHTML = element.outerHTML;
                    _this.i++;
                }));
            };
        GdStepperComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-stepper',
                        template: "<mat-horizontal-stepper>\r\n        <mat-step [completed]=\"false\" *ngFor=\"let item of arraySection; index as i\">\r\n                <div class=\"gd-stepper-section-{{i}}\">\r\n                </div> \r\n        </mat-step>\r\n</mat-horizontal-stepper>\r\n<div class=\"tampung\">\r\n        <ng-content></ng-content>\r\n</div>",
                        styles: [".tampung{display:none}"]
                    }] }
        ];
        /** @nocollapse */
        GdStepperComponent.ctorParameters = function () { return []; };
        return GdStepperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdStepperComponentModule = /** @class */ (function () {
        function GdStepperComponentModule() {
        }
        GdStepperComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            stepper.MatStepperModule
                        ],
                        declarations: [GdStepperComponent],
                        exports: [
                            GdStepperComponent
                        ]
                    },] }
        ];
        return GdStepperComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdListComponent = /** @class */ (function () {
        function GdListComponent() {
            this.folders = [
                {
                    name: 'Photos',
                    updated: new Date('2/13/19'),
                },
                {
                    name: 'Recipes',
                    updated: new Date('5/15/19'),
                },
                {
                    name: 'Work',
                    updated: new Date('7/28/19'),
                },
                {
                    name: 'University',
                    updated: new Date('9/20/19'),
                }
            ];
        }
        /**
         * @return {?}
         */
        GdListComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdListComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-list',
                        template: "<mat-list role=\"list\">\r\n  <ng-content select=\"[list]\"></ng-content>\r\n</mat-list>",
                        styles: [".mat-list-icon{color:#d3d3d3}"]
                    }] }
        ];
        /** @nocollapse */
        GdListComponent.ctorParameters = function () { return []; };
        GdListComponent.propDecorators = {
            text: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            disableRipple: [{ type: i0.Input }],
            checkboxPosition: [{ type: i0.Input }],
            selected: [{ type: i0.Input }],
            value: [{ type: i0.Input }],
            disabled: [{ type: i0.Input }]
        };
        return GdListComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdListComponentModule = /** @class */ (function () {
        function GdListComponentModule() {
        }
        GdListComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            list.MatListModule,
                            material.MatIconModule
                        ],
                        declarations: [GdListComponent],
                        exports: [
                            GdListComponent
                        ]
                    },] }
        ];
        return GdListComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdHeaderComponent = /** @class */ (function () {
        function GdHeaderComponent() {
            this.arrowClick = new i0.EventEmitter();
            this.arrowIcon = true;
        }
        /**
         * @return {?}
         */
        GdHeaderComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                console.log(this.logoSrc);
            };
        /**
         * @return {?}
         */
        GdHeaderComponent.prototype.doArrowClick = /**
         * @return {?}
         */
            function () {
                this.arrowClick.emit();
                this.arrowIcon = !this.arrowIcon;
            };
        GdHeaderComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-header',
                        template: "<div class=\"GdHeader\">\r\n    <div class=\"menu start\">\r\n        <div *ngIf=\"logoSrc\" class=\"logo\">\r\n            <img src=\"{{logoSrc}}\" alt=\"\">\r\n        </div>\r\n\r\n        <gd-breadcrumb [breadcrumbList]=breadcrumbList></gd-breadcrumb>\r\n\r\n        <div *ngIf=\"searchBar\" class=\"search-bar\">\r\n            <input type=\"text\" class=\"search-input\" >\r\n            <svg class=\"search-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22.761\" height=\"22.578\" viewBox=\"0 0 22.761 22.578\">\r\n            <g id=\"Group_8226\" data-name=\"Group 8226\" transform=\"translate(-676.854 -74)\">\r\n                <g id=\"Ellipse_185\" data-name=\"Ellipse 185\" transform=\"translate(676.854 85.289) rotate(-45)\" fill=\"none\" stroke=\"#9daec0\" stroke-width=\"2\">\r\n                <circle cx=\"7.983\" cy=\"7.983\" r=\"7.983\" stroke=\"none\"/>\r\n                <circle cx=\"7.983\" cy=\"7.983\" r=\"6.983\" fill=\"none\"/>\r\n                </g>\r\n                <path id=\"Path_2263\" data-name=\"Path 2263\" d=\"M-5616.63-4158.332v7.358\" transform=\"translate(7605.646 -940.531) rotate(-45)\" fill=\"#fff\" stroke=\"#9daec0\" stroke-width=\"2\"/>\r\n            </g>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu end\">\r\n\r\n        <gd-avatar [avatarSrc]=avatarSrc [avatarSize]=avatarSize [avatarShadow]=true></gd-avatar>\r\n        <div class=\"greeting\">Welcome, {{employeeName}} ! \r\n        </div>\r\n        <div class=\"arrow\" (click)=\"doArrowClick()\">\r\n            <svg *ngIf=\"arrowIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"7.41\" viewBox=\"0 0 12 7.41\">\r\n                <path id=\"Path_512\" data-name=\"Path 512\" d=\"M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z\" transform=\"translate(18 -8.59) rotate(90)\" fill=\"#9daec0\"/>\r\n            </svg>\r\n            <svg *ngIf=\"!arrowIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"7.41\" viewBox=\"0 0 12 7.41\">\r\n                <path id=\"Path_512\" data-name=\"Path 512\" d=\"M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z\" transform=\"translate(-6 16) rotate(-90)\" fill=\"#9daec0\"/>\r\n            </svg>                  \r\n        </div>\r\n\r\n    </div>\r\n</div>",
                        styles: [".GdHeader{display:-webkit-box;display:flex;width:100%;place-content:center space-between;padding:16px 20px}.GdHeader .start{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;place-content:start center}.GdHeader .end{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;place-content:end center;margin:auto 10px}.GdHeader .end .greeting{vertical-align:middle;color:var(--ion-color-text-secondary);margin:auto;padding:0 13px;font-size:14px}.GdHeader .end .arrow{margin:auto;padding:5px;border-radius:5px;background-color:transparent;-webkit-transition:background-color .25s;transition:background-color .25s}.GdHeader .end .arrow svg{height:10px!important;width:10px!important}.GdHeader .end .arrow:hover{background-color:var(--ion-color-outline);border-radius:5px;cursor:pointer}.GdHeader gd-avatar:hover{-webkit-transform:scale(1.5);transform:scale(1.5);cursor:pointer}.GdHeader gd-avatar{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s}.GdHeader .logo{margin:auto 5px}.GdHeader .logo img{width:180px}.GdHeader .search-bar{position:relative;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;place-content:start center;margin:auto 10px}.GdHeader .search-bar .search-input{position:relative;border:none;background-color:#eeeef3;border-radius:10px;width:180px;height:35px;margin:auto;padding:5px 5px 5px 35px;-webkit-transition:width .25s;transition:width .25s;font-size:14px}.GdHeader .search-bar .search-input:focus{width:250px;outline:0!important}.GdHeader .search-bar .search-icon{position:absolute!important;margin:auto;left:6px!important;top:8px!important;height:18px!important;width:18px!important}@media only screen and (max-width:720px){.GdHeader{padding:10px}.GdHeader .end .greeting,.GdHeader .start .logo,.GdHeader gd-breadcrumb{display:none}}"]
                    }] }
        ];
        /** @nocollapse */
        GdHeaderComponent.ctorParameters = function () { return []; };
        GdHeaderComponent.propDecorators = {
            breadcrumbList: [{ type: i0.Input }],
            avatarSrc: [{ type: i0.Input }],
            avatarSize: [{ type: i0.Input }],
            employeeName: [{ type: i0.Input }],
            searchBar: [{ type: i0.Input }],
            logoSrc: [{ type: i0.Input }],
            arrowClick: [{ type: i0.Output }]
        };
        return GdHeaderComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdHeaderComponentModule = /** @class */ (function () {
        function GdHeaderComponentModule() {
        }
        GdHeaderComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            chips.MatChipsModule,
                            icon.MatIconModule,
                            GdBreadcrumbComponentModule,
                            GdAvatarComponentModule
                        ],
                        declarations: [GdHeaderComponent],
                        exports: [
                            GdHeaderComponent
                        ]
                    },] }
        ];
        return GdHeaderComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdCarouselComponent = /** @class */ (function () {
        function GdCarouselComponent() {
            this.arraySection = [];
            this.activeSection = 0;
            this.carouselSensitivity = 25;
        }
        /**
         * @return {?}
         */
        GdCarouselComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.arraySection = document.querySelectorAll(".gd-section");
                this.carouselCount = this.arraySection.length;
                this.totalSection = (this.carouselCount * 100) + '%';
                this.carouselWrapper = document.querySelector('.carousel-wrapper');
                this.carouselManager = new window['Hammer'](this.carouselWrapper);
                this.carouselManager.get('pan').set({ threshold: 0, pointers: 0 });
                this.carouselManager.on('pan', ( /**
                 * @param {?} ev
                 * @return {?}
                 */function (ev) {
                    /** @type {?} */
                    var percentage = 100 / _this.carouselCount * ev.deltaX / window.innerWidth;
                    /** @type {?} */
                    var transformPercentage = percentage - 100 / _this.carouselCount * _this.activeSection;
                    _this.carouselWrapper.style.transform = 'translateX(' + transformPercentage + '%)';
                    if (ev.isFinal) {
                        if (ev.velocityX > 1) {
                            _this.goToSection(_this.activeSection - 1);
                        }
                        else if (ev.velocityX < -1) {
                            _this.goToSection(_this.activeSection + 1);
                        }
                        else {
                            if (percentage <= -(_this.carouselSensitivity / _this.carouselCount)) {
                                _this.goToSection(_this.activeSection + 1);
                            }
                            else if (percentage >= (_this.carouselSensitivity / _this.carouselCount)) {
                                _this.goToSection(_this.activeSection - 1);
                            }
                            else {
                                _this.goToSection(_this.activeSection);
                            }
                        }
                    }
                }));
            };
        /**
         * @param {?} number
         * @return {?}
         */
        GdCarouselComponent.prototype.goToSection = /**
         * @param {?} number
         * @return {?}
         */
            function (number) {
                var _this = this;
                if (number < 0) {
                    this.activeSection = 0;
                }
                else if (number > this.carouselCount - 1) {
                    this.activeSection = this.carouselCount - 1;
                }
                else {
                    this.activeSection = number;
                }
                this.carouselWrapper.classList.add('is-animating');
                /** @type {?} */
                var percentage = -(100 / this.carouselCount) * this.activeSection;
                this.carouselWrapper.style.transform = 'translateX(' + percentage + '%)';
                clearTimeout(this.carouselTimer);
                this.carouselTimer = setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.carouselWrapper.classList.remove('is-animating');
                }), 400);
            };
        GdCarouselComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-carousel',
                        template: "<div class=\"carousel-container\">\r\n        <div class=\"carousel-wrapper\" [ngStyle]=\"{'width':totalSection}\">\r\n                <ng-content></ng-content>\r\n        </div>\r\n</div>",
                        styles: [".carousel-container{width:100%;overflow:hidden;position:relative}.carousel-container .carousel-wrapper{display:-webkit-box;display:flex}::ng-deep .gd-section{width:100%;height:500px}::ng-deep .gd-section img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none}.is-animating{-webkit-transition:-webkit-transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}"]
                    }] }
        ];
        /** @nocollapse */
        GdCarouselComponent.ctorParameters = function () { return []; };
        return GdCarouselComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var CustomHammerConfig$1 = /** @class */ (function (_super) {
        __extends(CustomHammerConfig, _super);
        function CustomHammerConfig() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.overrides = {
                'pan': {
                    direction: Hammer.DIRECTION_ALL
                }
            };
            return _this;
        }
        return CustomHammerConfig;
    }(platformBrowser.HammerGestureConfig));
    var GdCarouselComponentModule = /** @class */ (function () {
        function GdCarouselComponentModule() {
        }
        GdCarouselComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                        ],
                        providers: [
                            { provide: platformBrowser.HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig$1 }
                        ],
                        declarations: [GdCarouselComponent],
                        exports: [
                            GdCarouselComponent
                        ]
                    },] }
        ];
        return GdCarouselComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSwapperComponent = /** @class */ (function () {
        function GdSwapperComponent() {
            this.dateToday = new Date();
            this.currentDateChange = new i0.EventEmitter();
            this.dataResult = new i0.EventEmitter();
            this.currentPos = 0;
        }
        /**
         * @return {?}
         */
        GdSwapperComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.dateToday = this.dateToday.getDate();
            };
        /**
         * @return {?}
         */
        GdSwapperComponent.prototype.ngAfterViewInit = /**
         * @return {?}
         */
            function () {
                this.headPanel = document.querySelector(".element-head");
                this.bodyPanel = document.querySelector(".element-body");
                this.containerPanel = document.querySelector(".element-container");
                this.panel = document.querySelector(".head-panel");
                this.totalPanel = document.querySelectorAll(".head-panel").length;
                this.widthPanel = (this.totalPanel * 100) + '%';
            };
        /**
         * @return {?}
         */
        GdSwapperComponent.prototype.toPrev = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.currentDate = this.currentDate - 1;
                this.currentDateChange.emit(this.currentDate);
                this.containerPanel.classList.add("swapper-left");
                this.result = 'kosong';
                this.dataSwapper.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    if (element.date == _this.currentDate) {
                        _this.result = element.nama;
                    }
                }));
                this.dataResult.emit(this.result);
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    _this.containerPanel.classList.remove("swapper-left");
                }), 300);
                // if (this.currentPos < 0) {
                //   this.currentPos = this.currentPos + this.panel.offsetWidth;
                //   this.headPanel.style.transform = 'translateX(' + this.currentPos + 'px)';
                //   this.bodyPanel.style.transform = 'translateX(' + this.currentPos + 'px)';      
                // }
                // else {
                //   console.log("mentok coy")
                // }
            };
        /**
         * @return {?}
         */
        GdSwapperComponent.prototype.toNext = /**
         * @return {?}
         */
            function () {
                var _this = this;
                this.currentDate = this.currentDate + 1;
                if (this.currentDate <= this.dateToday) {
                    this.currentDateChange.emit(this.currentDate);
                    this.containerPanel.classList.add("swapper-right");
                    this.result = 'kosong';
                    this.dataSwapper.forEach(( /**
                     * @param {?} element
                     * @return {?}
                     */function (element) {
                        if (element.date == _this.currentDate) {
                            _this.result = element.nama;
                        }
                    }));
                    this.dataResult.emit(this.result);
                    setTimeout(( /**
                     * @return {?}
                     */function () {
                        _this.containerPanel.classList.remove("swapper-right");
                    }), 300);
                }
                // this.limit = (this.totalPanel-1) * this.panel.offsetWidth * -1;    
                // if (this.currentPos > this.limit) {
                //   this.currentPos = this.currentPos + this.panel.offsetWidth * -1;
                //   this.headPanel.style.transform = 'translateX(' + this.currentPos + 'px)';
                //   this.bodyPanel.style.transform = 'translateX(' + this.currentPos + 'px)';      
                // }
                // else {
                //   console.log("mentok coy")
                // }
            };
        GdSwapperComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-swapper',
                        template: "<div class=\"swapper-container\">\r\n    <div class=\"button-container\">\r\n        <button class=\"leftNavBtn\" (click)=\"toPrev()\"> < </button>\r\n        <button *ngIf=\"currentDate < dateToday\" class=\"rightNavBtn\" (click)=\"toNext()\">></button>\r\n    </div>\r\n    <div class=\"element-container\">\r\n        <div class=\"element-head\" [ngStyle]=\"{'width':widthPanel}\">\r\n            <ng-content select=\".head-panel\"></ng-content>\r\n        </div>\r\n        <div class=\"element-body\" [ngStyle]=\"{'width':widthPanel}\">\r\n            <ng-content select=\".body-panel\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>",
                        styles: [".swapper-container{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%;position:relative}.swapper-container .element-container{width:100%;overflow:hidden}.swapper-container .element-container .element-head{padding:16px;display:-webkit-box;display:flex;position:relative;-webkit-transition:.2s cubic-bezier(.8,0,0,.8);transition:.2s cubic-bezier(.8,0,0,.8)}.swapper-container .element-container .element-head ::ng-deep .head-panel{width:100%;height:50px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.swapper-container .element-container .element-head ::ng-deep .head-panel h1{margin:0;text-align:center}.swapper-container .element-container .element-head .head-panel:nth-child(odd){background:red;color:#fff}.swapper-container .element-container .element-body{padding:16px;display:-webkit-box;display:flex;-webkit-transition:.2s cubic-bezier(.8,0,0,.8);transition:.2s cubic-bezier(.8,0,0,.8)}.swapper-container .element-container .element-body ::ng-deep .body-panel{width:100%}.swapper-container .button-container{position:absolute;z-index:5;width:100%;padding:16px;height:50px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.swapper-container .button-container .leftNavBtn,.swapper-container .button-container .rightNavBtn{font-size:50px;background-color:transparent}@-webkit-keyframes swapper-right{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}60%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}}@keyframes swapper-right{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}60%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}}.swapper-right{-webkit-animation-name:swapper-right;animation-name:swapper-right;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes swapper-left{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}60%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}}@keyframes swapper-left{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}60%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}}.swapper-left{-webkit-animation-name:swapper-left;animation-name:swapper-left;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}"]
                    }] }
        ];
        /** @nocollapse */
        GdSwapperComponent.ctorParameters = function () { return []; };
        GdSwapperComponent.propDecorators = {
            currentDate: [{ type: i0.Input }],
            currentDateChange: [{ type: i0.Output }],
            dataSwapper: [{ type: i0.Input }],
            dataResult: [{ type: i0.Output }]
        };
        return GdSwapperComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSwapperComponentModule = /** @class */ (function () {
        function GdSwapperComponentModule() {
        }
        GdSwapperComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                        ],
                        declarations: [GdSwapperComponent],
                        exports: [
                            GdSwapperComponent
                        ]
                    },] }
        ];
        return GdSwapperComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdProgressbarComponent = /** @class */ (function () {
        function GdProgressbarComponent() {
        }
        /**
         * @return {?}
         */
        GdProgressbarComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { };
        GdProgressbarComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-progressbar',
                        template: "<mat-progress-bar [color]=\"color\" [mode]=\"mode\" [bufferValue]=\"bufferValue\"></mat-progress-bar>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        GdProgressbarComponent.ctorParameters = function () { return []; };
        GdProgressbarComponent.propDecorators = {
            bufferValue: [{ type: i0.Input }],
            color: [{ type: i0.Input }],
            mode: [{ type: i0.Input }],
            value: [{ type: i0.Input }]
        };
        return GdProgressbarComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdProgressbarComponentModule = /** @class */ (function () {
        function GdProgressbarComponentModule() {
        }
        GdProgressbarComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            progressBar.MatProgressBarModule
                        ],
                        declarations: [GdProgressbarComponent],
                        exports: [
                            GdProgressbarComponent
                        ]
                    },] }
        ];
        return GdProgressbarComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSelect2Component = /** @class */ (function () {
        function GdSelect2Component() {
            this.selectedData = new i0.EventEmitter();
            this.selectedFilterData = new i0.EventEmitter();
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
                        for (var _c = __values(this.selectEmployee), _d = _c.next(); !_d.done; _d = _c.next()) {
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
                    catch (e_1_1) {
                        e_1 = { error: e_1_1 };
                    }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return))
                                _a.call(_c);
                        }
                        finally {
                            if (e_1)
                                throw e_1.error;
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
                    try {
                        for (var _e = __values(this.selectedEmployee), _f = _e.next(); !_f.done; _f = _e.next()) {
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
                    catch (e_2_1) {
                        e_2 = { error: e_2_1 };
                    }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return))
                                _b.call(_e);
                        }
                        finally {
                            if (e_2)
                                throw e_2.error;
                        }
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
                        for (var _c = __values(this.selectEmployee), _d = _c.next(); !_d.done; _d = _c.next()) {
                            var listemp = _d.value;
                            listemp.ishidden = false;
                        }
                    }
                    catch (e_3_1) {
                        e_3 = { error: e_3_1 };
                    }
                    finally {
                        try {
                            if (_d && !_d.done && (_a = _c.return))
                                _a.call(_c);
                        }
                        finally {
                            if (e_3)
                                throw e_3.error;
                        }
                    }
                }
                else if (type == 'selected') {
                    try {
                        for (var _e = __values(this.selectedEmployee), _f = _e.next(); !_f.done; _f = _e.next()) {
                            var listemp = _f.value;
                            listemp.ishidden = false;
                        }
                    }
                    catch (e_4_1) {
                        e_4 = { error: e_4_1 };
                    }
                    finally {
                        try {
                            if (_f && !_f.done && (_b = _e.return))
                                _b.call(_e);
                        }
                        finally {
                            if (e_4)
                                throw e_4.error;
                        }
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
                this.selectedEmployee.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
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
                this.selectedEmployee.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    if (element.emp_id == item.emp_id) {
                        _this.selectedEmployee.splice(_this.selectedEmployee.indexOf(item), 1);
                        _this.selectEmployee.push(item);
                    }
                }));
                this.selectEmployee.forEach(( /**
                 * @param {?} elements
                 * @return {?}
                 */function (elements) {
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
                this.selectedEmployee.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
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
                this.selectEmployee.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
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
            { type: i0.Component, args: [{
                        selector: 'gd-select2',
                        template: "<div *ngIf=\"mode == 'employee'\" class=\"card-box\" fxLayout=\"row\" fxLayoutAlign=\"center start\" grd-padding>\r\n    <div fxFlex=\"\" class=\"left-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"9px\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"textSearch\" (input)=\"search($event,'selectable')\">\r\n        </div>\r\n      \r\n        <ion-select\r\n          no-margin\r\n          *ngIf=\"filterList\"\r\n          (ionChange)=\"selectFilter($event)\"\r\n          [(ngModel)]=\"selectedFilter\"\r\n          cancelText=\"Dismiss\"\r\n          interface=\"popover\"\r\n          okText=\"Okay\" tappable>\r\n          <ion-select-option *ngFor=\"let filter of filterList\" value=\"{{filter?.value}}\">{{filter?.label}}</ion-select-option>\r\n        </ion-select>\r\n    \r\n      </div>\r\n        \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Selectable Employee</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"moveAll()\">Move All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" grd-ripple-effect tappable id=x{{i}} [ngStyle]=\"{'top': indexLeave == item ? currentYSelect + 'px' : 'unset'}\" [ngClass]=\"{'animate-forward': indexLeave == item, 'default-forward': indexLeave != item}\" (click)=\"selectItem(item, i)\" *ngFor=\"let item of selectEmployee; index as i\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [hidden]=\"item.ishidden\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"7px\">\r\n            <img src=\"item?.photo\" alt=\"\">\r\n            <div class=\"detail-box\" fxLayout=\"column\" fxLayoutGap=\"4px\">\r\n              <ion-label no-margin>{{item?.Full_Name}}</ion-label>\r\n              <ion-label no-margin>{{item?.pos_name_en }}</ion-label>\r\n            </div>\r\n          </div>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'removed' && !item.isNew \" fxFlex=\"none\" class=\"removed\">Removed</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  \r\n    <div class=\"exchange-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/images/payroll/swap-icon.svg\" alt=\"\">\r\n    </div>\r\n  \r\n    <div fxFlex=\"\" class=\"right-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\" [(ngModel)]=\"textSearch2\" (input)=\"search($event,'selected')\">\r\n        </div>\r\n      </div>\r\n    \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Total <span class=\"selected\">{{selectedEmployee?.length}}</span> Selected</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"clearAll()\">Clear All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" [ngStyle]=\"{'margin-top': toggleMargin ? currentHeightSelect + 'px' : '0px'}\" fxLayout=\"column\" fxLayoutGap=\"9px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" [ngClass]=\"{'animate-forward-right': indexLeave == item.name}\" fxLayoutGap=\"7px\" *ngFor=\"let item of selectedEmployee.slice().reverse(); index as i; first as isFirst\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" [hidden]=\"item.ishidden\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxFlex=\"\" fxLayoutGap=\"7px\">\r\n            <img src=\"item?.photo\" alt=\"\">\r\n            <div fxFlex=\"\" class=\"detail-box\" fxLayout=\"column\" fxLayoutGap=\"4px\">\r\n              <ion-label no-margin>{{item?.Full_Name}}</ion-label>\r\n              <ion-label no-margin>{{item?.pos_name_en}}</ion-label>\r\n            </div>\r\n            <div fxFlex=\"none\" class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n              <ion-label no-margin *ngIf=\"item.status == 'added' && item.isNew\" fxFlex=\"none\" class=\"added\">Added</ion-label>\r\n            </div>\r\n          </div>\r\n          <ion-icon grd-ripple-effect (click)=\"removeItem(item, i)\" tappable fxFlex=\"none\" name=\"close\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div *ngIf=\"mode == 'component'\" class=\"card-box\" fxLayout=\"row\" fxLayoutAlign=\"center start\" grd-padding>\r\n    <div fxFlex=\"\" class=\"left-box\" fxLayout=\"column\">\r\n      \r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"9px\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Selectable Employee</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"moveAll()\">Move All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" fxLayout=\"column\" fxLayoutGap=\"5px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" grd-ripple-effect tappable id=x{{i}} [ngStyle]=\"{'top': indexLeave == item ? currentYSelect + 'px' : 'unset'}\" [ngClass]=\"{'animate-forward': indexLeave == item, 'default-forward': indexLeave != item}\" (click)=\"selectItem(item, i)\" *ngFor=\"let item of selectEmployee; index as i\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"7px\">\r\n          <img src=\"item.img\" alt=\"\">\r\n          <ion-label no-margin>{{item.compName}}</ion-label>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'removed'\" fxFlex=\"none\" class=\"removed\">Removed</ion-label>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"exchange-box\" fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <img src=\"assets/images/payroll/swap-icon.svg\" alt=\"\">\r\n    </div>\r\n    <div fxFlex=\"\" class=\"right-box\" fxLayout=\"column\">\r\n      <div class=\"search-box\" fxFlex=\"none\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex=\"\" class=\"search-section\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"18px\">\r\n          <ion-icon fxFlex=\"none\" name=\"search\"></ion-icon>\r\n          <input fxFlex=\"\" type=\"text\" placeholder=\"Search\">\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"title-box\" fxFlex=\"none\" fxLayout=\"row\">\r\n        <ion-label>Total <span class=\"selected\">5</span> Selected</ion-label>\r\n        <ion-label fxFlex=\"none\" tappable (click)=\"clearAll()\">Clear All</ion-label>\r\n      </div>\r\n  \r\n      <div class=\"list-box\" fxFlex=\"\" [ngStyle]=\"{'margin-top': toggleMargin ? currentHeightSelect + 'px' : '0px'}\" fxLayout=\"column\" fxLayoutGap=\"9px\">\r\n        <div class=\"list-section\" fxFlex=\"none\" [ngClass]=\"{'animate-forward-right': indexLeave == item.name}\" *ngFor=\"let item of selectedEmployee.slice().reverse(); index as i; first as isFirst\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"7px\">\r\n          <img src=\"item.img\" alt=\"\">\r\n          <ion-label no-margin>{{item.compName}}</ion-label>\r\n          <div class=\"status-box\" fxLayout=\"column\" fxLayoutGap=\"4px\" fxLayoutAlign=\"start center\">\r\n            <ion-label no-margin *ngIf=\"item.status == 'added'\" fxFlex=\"none\" class=\"added\">Added</ion-label>\r\n          </div>\r\n          <ion-icon grd-ripple-effect (click)=\"removeItem(item, i)\" tappable fxFlex=\"none\" name=\"close\"></ion-icon>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>",
                        styles: [".selected{color:var(--ion-color-primary)}.removed{background:var(--ion-color-rejected);color:#fff!important;font-size:10px!important;font-family:regular!important;padding:5px;border-radius:200px}.added{background:var(--ion-color-primary);color:#fff!important;font-size:10px!important;font-family:regular!important;padding:5px;border-radius:200px}.edit{color:var(--ion-color-text-secondary)!important;font-size:10px!important;font-family:regular!important}.card-box{background:#fff;box-shadow:0 13px 50px 0 rgba(226,233,237,.81);border-radius:15px;max-width:550px;height:100%;overflow:hidden}.card-box .search-box .search-section{padding:9px 16px;border-radius:10px;border:1px solid var(--ion-color-outline)}.card-box .search-box .search-section input{border:none;width:100%}.card-box .search-box .search-section ion-icon{font-size:23px}.card-box .search-box button{color:var(--ion-color-text-default)!important;font-size:14px!important;text-transform:capitalize;border-color:var(--ion-color-outline)!important;border-radius:10px}.card-box .title-box{position:-webkit-sticky;position:sticky}.card-box .list-box{overflow-y:auto;position:relative}.card-box .list-box .list-section{border-bottom:1px solid var(--ion-color-outline);padding:8px 0;z-index:10}.card-box .list-box .list-section image-component{width:38px;height:38px}.card-box .list-box .list-section image-component img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;border-radius:200px}.card-box .list-box .list-section .detail-box ion-label{font-size:14px!important;font-family:regular!important}.card-box .list-box .list-section .detail-box ion-label:first-child{color:var(--ion-color-text-default)!important}.card-box .list-box .list-section .detail-box ion-label:last-child{color:var(--ion-color-text-secondary)!important}.card-box .list-box .list-section ion-icon{font-size:12px;color:#a5b0b7;padding:10px}.card-box .exchange-box{background:0 0;z-index:1;height:100%;-ms-grid-row-align:center;align-self:center}.card-box .left-box{z-index:2;height:100%}.card-box .left-box .title-box ion-label:last-child{color:var(--ion-color-primary)!important}.card-box .right-box{z-index:2;height:100%}.card-box .right-box .title-box ion-label:last-child{color:var(--ion-color-text-secondary)!important}.card-box .right-box .list-section{border-left:5px solid var(--ion-color-primary);padding-left:6px!important}.card-box .right-box .list-section .detail-box ion-label{width:100px}@-webkit-keyframes toForward{0%{left:0}90%{opacity:1}100%{border-left:5px solid var(--ion-color-primary);left:calc(100% + 18px);top:0;opacity:0}}@keyframes toForward{0%{left:0}90%{opacity:1}100%{border-left:5px solid var(--ion-color-primary);left:calc(100% + 18px);top:0;opacity:0}}.animate-forward{border-left:5px solid #fff;position:absolute;-webkit-animation-name:toForward;animation-name:toForward;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease}.default-forward{position:relative}.animate-forward-right{-webkit-animation-name:toForwardRight;animation-name:toForwardRight;-webkit-animation-duration:.5s;animation-duration:.5s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards;-webkit-animation-timing-function:ease;animation-timing-function:ease}@-webkit-keyframes toForwardRight{0%{opacity:0}100%{opacity:1}}@keyframes toForwardRight{0%{opacity:0}100%{opacity:1}}ion-select{position:relative}"]
                    }] }
        ];
        /** @nocollapse */
        GdSelect2Component.ctorParameters = function () { return []; };
        GdSelect2Component.propDecorators = {
            mode: [{ type: i0.Input }],
            selectEmployee: [{ type: i0.Input, args: ['data',] }],
            listSelectedEmployee: [{ type: i0.Input, args: ['dataSelected',] }],
            filterList: [{ type: i0.Input }],
            selectedFilter: [{ type: i0.Input }],
            selectedData: [{ type: i0.Output }],
            selectedFilterData: [{ type: i0.Output }]
        };
        return GdSelect2Component;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdSelect2ComponentModule = /** @class */ (function () {
        function GdSelect2ComponentModule() {
        }
        GdSelect2ComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            flexLayout.FlexLayoutModule,
                        ],
                        declarations: [GdSelect2Component],
                        exports: [
                            GdSelect2Component
                        ]
                    },] }
        ];
        return GdSelect2ComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdToastComponent = /** @class */ (function () {
        function GdToastComponent() {
            this.botValue = 0;
        }
        /**
         * @return {?}
         */
        GdToastComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        /**
         * @return {?}
         */
        GdToastComponent.prototype.myFunction = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var x = document.getElementById("toast");
                /** @type {?} */
                var multiple = document.createElement("div");
                multiple.classList.add("divToast");
                x.appendChild(multiple);
                multiple.innerHTML = "Hello World " + Math.floor(Date.now() / 1000);
                multiple.style.position = "fixed";
                multiple.style.left = "50%";
                multiple.style.backgroundColor = "#a6a6a6";
                multiple.style.fontSize = "15px";
                multiple.style.minWidth = "250px";
                multiple.style.height = "50px";
                multiple.style.textAlign = "center";
                multiple.style.zIndex = "1";
                multiple.style.paddingTop = "10px";
                multiple.style.transition = "bottom 500ms cubic-bezier(0.4, 0.0, 0.2, 1)";
                multiple.style.animation = "slide-top 1000ms cubic-bezier(0.755, 0.050, 0.855, 0.060) both";
                console.log('children', x.childNodes);
                /** @type {?} */
                var toastChild = document.querySelectorAll(".divToast");
                if (toastChild.length >= 4) {
                    for (var j = 0; j < toastChild.length - 3; j++) {
                        toastChild[j].remove();
                    }
                }
                for (var i = 0; i < toastChild.length; i++) {
                    console.log(i, toastChild[i]);
                    /** @type {?} */
                    var target = ( /** @type {?} */(toastChild[i]));
                    target.style.bottom = ((toastChild.length - i) * 60) + 'px';
                }
                setTimeout(( /**
                 * @return {?}
                 */function () {
                    multiple.remove();
                }), 5000);
            };
        GdToastComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'gd-toast',
                        template: "<div id=\"toast\">\r\n    <button (click)=\"myFunction()\" class=\"btntoast\">Show Snackbar</button>\r\n    \r\n</div>\r\n",
                        styles: [".btntoast{position:relative;background-color:#63befb;border:none;font-size:12px;color:#fff;padding:10px 24px;text-align:center;-webkit-transition-duration:.7s;transition-duration:.7s;text-decoration:none;overflow:hidden;cursor:pointer;border-radius:10px}.btntoast:hover{box-shadow:0 12px 16px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.bottom{position:fixed;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:99999;background-color:red}.snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}.snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}.divToast{bottom:-20px}@-webkit-keyframes slide-top{0%{-webkit-transform:translateY(120px);transform:translateY(120px)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}@keyframes slide-top{0%{-webkit-transform:translateY(120px);transform:translateY(120px)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}"]
                    }] }
        ];
        return GdToastComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdToastComponentModule = /** @class */ (function () {
        function GdToastComponentModule() {
        }
        GdToastComponentModule.decorators = [
            { type: i0.NgModule, args: [{
                        imports: [
                            angular.IonicModule,
                            common.CommonModule
                        ],
                        declarations: [GdToastComponent],
                        exports: [
                            GdToastComponent
                        ]
                    },] }
        ];
        return GdToastComponentModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var GdComponentsModule = /** @class */ (function () {
        function GdComponentsModule() {
        }
        GdComponentsModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [GdComponentsComponent],
                        imports: [
                            common.CommonModule,
                            forms.FormsModule,
                            angular.IonicModule,
                            GdLoadingComponentModule,
                            GdHeaderComponentModule,
                            GdInputComponentModule,
                            GdSelectComponentModule,
                            GdButtonComponentModule,
                            GdButtonToggleComponentModule,
                            GdBadgeComponentModule,
                            GdChipsComponentModule,
                            GdTabsComponentModule,
                            GdStepperComponentModule,
                            GdRadiobuttonComponentModule,
                            GdToggleComponentModule,
                            GdSwapperComponentModule,
                            GdSliderComponentModule,
                            GdCheckboxComponentModule,
                            GdCarouselComponentModule,
                            GdBreadcrumbComponentModule,
                            GdToolbarComponentModule,
                            GdAvatarComponentModule,
                            GdContentComponentModule,
                            GdCardComponentModule,
                            GdTooltipComponentModule,
                            GdListComponentModule,
                            GdSelect2ComponentModule,
                            GdProgressbarComponentModule,
                            GdProgressSpinnerComponentModule,
                            GdModalComponentModule,
                            GdToastComponentModule,
                        ],
                        exports: [
                            forms.FormsModule,
                            GdLoadingComponentModule,
                            GdHeaderComponentModule,
                            GdInputComponentModule,
                            GdSelectComponentModule,
                            GdButtonComponentModule,
                            GdButtonToggleComponentModule,
                            GdBadgeComponentModule,
                            GdChipsComponentModule,
                            GdTabsComponentModule,
                            GdStepperComponentModule,
                            GdRadiobuttonComponentModule,
                            GdToggleComponentModule,
                            GdSwapperComponentModule,
                            GdSliderComponentModule,
                            GdCheckboxComponentModule,
                            GdCarouselComponentModule,
                            GdBreadcrumbComponentModule,
                            GdToolbarComponentModule,
                            GdAvatarComponentModule,
                            GdContentComponentModule,
                            GdCardComponentModule,
                            GdTooltipComponentModule,
                            GdListComponentModule,
                            GdSelect2ComponentModule,
                            GdProgressbarComponentModule,
                            GdProgressSpinnerComponentModule,
                            GdModalComponentModule,
                            GdToastComponentModule,
                        ]
                    },] }
        ];
        return GdComponentsModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.GdComponentsService = GdComponentsService;
    exports.GdComponentsComponent = GdComponentsComponent;
    exports.GdComponentsModule = GdComponentsModule;
    exports.ɵg = GdAvatarComponent;
    exports.ɵf = GdAvatarComponentModule;
    exports.ɵr = GdBadgeComponent;
    exports.ɵq = GdBadgeComponentModule;
    exports.ɵe = GdBreadcrumbComponent;
    exports.ɵd = GdBreadcrumbComponentModule;
    exports.ɵp = GdButtonToggleComponent;
    exports.ɵo = GdButtonToggleComponentModule;
    exports.ɵn = GdButtonComponent;
    exports.ɵm = GdButtonComponentModule;
    exports.ɵbq = GdCardComponent;
    exports.ɵbp = GdCardComponentModule;
    exports.ɵbk = GdCarouselComponent;
    exports.ɵbi = CustomHammerConfig$1;
    exports.ɵbj = GdCarouselComponentModule;
    exports.ɵbh = GdCheckboxComponent;
    exports.ɵbg = GdCheckboxComponentModule;
    exports.ɵt = GdChipsComponent;
    exports.ɵs = GdChipsComponentModule;
    exports.ɵbo = GdContentComponent;
    exports.ɵbn = GdContentComponentModule;
    exports.ɵh = GdHeaderComponent;
    exports.ɵc = GdHeaderComponentModule;
    exports.ɵj = GdInputComponent;
    exports.ɵi = GdInputComponentModule;
    exports.ɵbu = GdListComponent;
    exports.ɵbt = GdListComponentModule;
    exports.ɵb = GdLoadingComponent;
    exports.ɵa = GdLoadingComponentModule;
    exports.ɵcd = GdModalComponent;
    exports.ɵcb = CustomHammerConfig;
    exports.ɵcc = GdModalComponentModule;
    exports.ɵca = GdProgressSpinnerComponent;
    exports.ɵbz = GdProgressSpinnerComponentModule;
    exports.ɵby = GdProgressbarComponent;
    exports.ɵbx = GdProgressbarComponentModule;
    exports.ɵz = GdRadiobuttonComponent;
    exports.ɵy = GdRadiobuttonComponentModule;
    exports.ɵl = GdSelectComponent;
    exports.ɵk = GdSelectComponentModule;
    exports.ɵbw = GdSelect2Component;
    exports.ɵbv = GdSelect2ComponentModule;
    exports.ɵbf = GdSliderComponent;
    exports.ɵbe = GdSliderComponentModule;
    exports.ɵx = GdStepperComponent;
    exports.ɵw = GdStepperComponentModule;
    exports.ɵbd = GdSwapperComponent;
    exports.ɵbc = GdSwapperComponentModule;
    exports.ɵv = GdTabsComponent;
    exports.ɵu = GdTabsComponentModule;
    exports.ɵcf = GdToastComponent;
    exports.ɵce = GdToastComponentModule;
    exports.ɵbb = GdToggleComponent;
    exports.ɵba = GdToggleComponentModule;
    exports.ɵbm = GdToolbarComponent;
    exports.ɵbl = GdToolbarComponentModule;
    exports.ɵbs = GdTooltipComponent;
    exports.ɵbr = GdTooltipComponentModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=gd-components.umd.js.map