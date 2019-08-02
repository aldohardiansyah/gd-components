/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { GdCarouselComponent } from './gd-carousel.component';
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
var GdCarouselComponentModule = /** @class */ (function () {
    function GdCarouselComponentModule() {
    }
    GdCarouselComponentModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        CommonModule,
                        FormsModule,
                        IonicModule,
                    ],
                    providers: [
                        { provide: HAMMER_GESTURE_CONFIG, useClass: CustomHammerConfig }
                    ],
                    declarations: [GdCarouselComponent],
                    exports: [
                        GdCarouselComponent
                    ]
                },] }
    ];
    return GdCarouselComponentModule;
}());
export { GdCarouselComponentModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtY2Fyb3VzZWwubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1jYXJvdXNlbC9nZC1jYXJvdXNlbC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsV0FBVyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFN0MsT0FBTyxFQUFFLFdBQVcsRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzdDLE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBQzlELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxxQkFBcUIsRUFBRSxNQUFNLDJCQUEyQixDQUFDO0FBQ3ZGLE9BQU8sS0FBSyxNQUFNLE1BQU0sVUFBVSxDQUFDO0FBRW5DO0lBQXdDLDhDQUFtQjtJQUEzRDtRQUFBLHFFQU1DO1FBTEMsZUFBUyxHQUFHO1lBQ1YsS0FBSyxFQUFFO2dCQUNMLFNBQVMsRUFBRSxNQUFNLENBQUMsYUFBYTthQUNoQztTQUNGLENBQUE7O0lBQ0gsQ0FBQztJQUFELHlCQUFDO0FBQUQsQ0FBQyxBQU5ELENBQXdDLG1CQUFtQixHQU0xRDs7OztJQUxDLHVDQUlDOztBQUVIO0lBQUE7SUFjd0MsQ0FBQzs7Z0JBZHhDLFFBQVEsU0FBQztvQkFDUixPQUFPLEVBQUU7d0JBQ1AsWUFBWTt3QkFDWixXQUFXO3dCQUNYLFdBQVc7cUJBQ1o7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULEVBQUUsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFFBQVEsRUFBRSxrQkFBa0IsRUFBQztxQkFDaEU7b0JBQ0QsWUFBWSxFQUFFLENBQUMsbUJBQW1CLENBQUM7b0JBQ25DLE9BQU8sRUFBRTt3QkFDUCxtQkFBbUI7cUJBQ3BCO2lCQUNGOztJQUN1QyxnQ0FBQztDQUFBLEFBZHpDLElBY3lDO1NBQTVCLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEZvcm1zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvZm9ybXMnO1xyXG5cclxuaW1wb3J0IHsgSW9uaWNNb2R1bGUgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XHJcbmltcG9ydCB7IEdkQ2Fyb3VzZWxDb21wb25lbnQgfSBmcm9tICcuL2dkLWNhcm91c2VsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEhhbW1lckdlc3R1cmVDb25maWcsIEhBTU1FUl9HRVNUVVJFX0NPTkZJRyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgKiBhcyBIYW1tZXIgZnJvbSAnaGFtbWVyanMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIEN1c3RvbUhhbW1lckNvbmZpZyBleHRlbmRzIEhhbW1lckdlc3R1cmVDb25maWd7XHJcbiAgb3ZlcnJpZGVzID0ge1xyXG4gICAgJ3Bhbic6IHtcclxuICAgICAgZGlyZWN0aW9uOiBIYW1tZXIuRElSRUNUSU9OX0FMTFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5ATmdNb2R1bGUoe1xyXG4gIGltcG9ydHM6IFtcclxuICAgIENvbW1vbk1vZHVsZSxcclxuICAgIEZvcm1zTW9kdWxlLFxyXG4gICAgSW9uaWNNb2R1bGUsXHJcbiAgXSxcclxuICBwcm92aWRlcnM6IFtcclxuICAgIHsgcHJvdmlkZTogSEFNTUVSX0dFU1RVUkVfQ09ORklHLCB1c2VDbGFzczogQ3VzdG9tSGFtbWVyQ29uZmlnfVxyXG4gIF0sXHJcbiAgZGVjbGFyYXRpb25zOiBbR2RDYXJvdXNlbENvbXBvbmVudF0sXHJcbiAgZXhwb3J0cyA6W1xyXG4gICAgR2RDYXJvdXNlbENvbXBvbmVudFxyXG4gIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEdkQ2Fyb3VzZWxDb21wb25lbnRNb2R1bGUge31cclxuIl19