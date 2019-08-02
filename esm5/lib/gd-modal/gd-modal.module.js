/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GdModalComponent } from './gd-modal.component';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import * as Hammer from 'hammerjs';
var CustomHammerConfig = /** @class */ (function (_super) {
    tslib_1.__extends(CustomHammerConfig, _super);
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
}(HammerGestureConfig));
export { CustomHammerConfig };
if (false) {
    /** @type {?} */
    CustomHammerConfig.prototype.overrides;
}
var GdModalComponentModule = /** @class */ (function () {
    function GdModalComponentModule() {
    }
    GdModalComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule
                    ],
                    providers: [
                        { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                    ],
                    declarations: [GdModalComponent],
                    exports: [
                        GdModalComponent
                    ]
                },] }
    ];
    return GdModalComponentModule;
}());
export { GdModalComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtbW9kYWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1tb2RhbC9nZC1tb2RhbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHNCQUFzQixDQUFDO0FBQ3hELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBRW5DO0lBQXdDLDhDQUFtQjtJQUEzRDtRQUFBLHFFQU1DO1FBTEMsZUFBUyxHQUFHO1lBQ1YsS0FBSyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYTthQUNoQztTQUNGLENBQUE7O0lBQ0gsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXdDLG1CQUFtQixHQU0xRDs7OztJQUxDLHVDQUlDOztBQUdIO0lBQUE7SUFjc0MsQ0FBQzs7Z0JBZHRDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFdBQVc7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBQztxQkFDaEU7b0JBQ0QsWUFBWSxFQUFFLENBQUMsZ0JBQWdCLENBQUM7b0JBQ2hDLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7cUJBQ2pCO2lCQUNGOztJQUNxQyw2QkFBQztDQUFBLEFBZHZDLElBY3VDO1NBQXpCLHNCQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5pbXBvcnQgeyBJb25pY01vZHVsZSB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcclxuaW1wb3J0IHsgR2RNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vZ2QtbW9kYWwuY29tcG9uZW50JztcclxuaW1wb3J0IHsgSGFtbWVyR2VzdHVyZUNvbmZpZywgSEFNTUVSX0dFU1RVUkVfQ09ORklHIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XHJcbmltcG9ydCAqIGFzIEhhbW1lciBmcm9tICdoYW1tZXJqcyc7XHJcblxyXG5leHBvcnQgY2xhc3MgQ3VzdG9tSGFtbWVyQ29uZmlnIGV4dGVuZHMgSGFtbWVyR2VzdHVyZUNvbmZpZ3tcclxuICBvdmVycmlkZXMgPSB7XHJcbiAgICAncGFuJzoge1xyXG4gICAgICBkaXJlY3Rpb246IEhhbW1lci5ESVJFQ1RJT05fQUxMXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGVcclxuICBdLFxyXG4gIHByb3ZpZGVyczogW1xyXG4gICAgeyBwcm92aWRlOiBIQU1NRVJfR0VTVFVSRV9DT05GSUcsIHVzZUNsYXNzOiBDdXN0b21IYW1tZXJDb25maWd9XHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFtHZE1vZGFsQ29tcG9uZW50XSxcclxuICBleHBvcnRzIDpbXHJcbiAgICBHZE1vZGFsQ29tcG9uZW50XHJcbiAgXVxyXG59KVxyXG5leHBvcnQgY2xhc3MgIEdkTW9kYWxDb21wb25lbnRNb2R1bGUge31cclxuIl19