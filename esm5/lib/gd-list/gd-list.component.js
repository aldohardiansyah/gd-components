/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
/**
 * @record
 */
export function Section() { }
if (false) {
    /** @type {?} */
    Section.prototype.name;
    /** @type {?} */
    Section.prototype.updated;
}
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
        { type: Component, args: [{
                    selector: 'gd-list',
                    template: "<mat-list role=\"list\">\r\n  <ng-content select=\"[list]\"></ng-content>\r\n</mat-list>",
                    styles: [".mat-list-icon{color:#d3d3d3}"]
                }] }
    ];
    /** @nocollapse */
    GdListComponent.ctorParameters = function () { return []; };
    GdListComponent.propDecorators = {
        text: [{ type: Input }],
        color: [{ type: Input }],
        disableRipple: [{ type: Input }],
        checkboxPosition: [{ type: Input }],
        selected: [{ type: Input }],
        value: [{ type: Input }],
        disabled: [{ type: Input }]
    };
    return GdListComponent;
}());
export { GdListComponent };
if (false) {
    /** @type {?} */
    GdListComponent.prototype.text;
    /** @type {?} */
    GdListComponent.prototype.color;
    /** @type {?} */
    GdListComponent.prototype.disableRipple;
    /** @type {?} */
    GdListComponent.prototype.checkboxPosition;
    /** @type {?} */
    GdListComponent.prototype.selected;
    /** @type {?} */
    GdListComponent.prototype.value;
    /** @type {?} */
    GdListComponent.prototype.disabled;
    /** @type {?} */
    GdListComponent.prototype.folders;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWxpc3QvZ2QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3pELDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBYzs7QUFFaEI7SUFjRTtRQUVBLFlBQU8sR0FBYztZQUNuQjtnQkFDRSxJQUFJLEVBQUUsUUFBUTtnQkFDZCxPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFNBQVM7Z0JBQ2YsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxNQUFNO2dCQUNaLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsWUFBWTtnQkFDbEIsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtTQUNGLENBQUM7SUFuQmMsQ0FBQzs7OztJQXFCakIsa0NBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBbkNkLFNBQVMsU0FBQztvQkFDVCxRQUFRLEVBQUUsU0FBUztvQkFDbkIsb0dBQXVDOztpQkFFeEM7Ozs7O3VCQUdFLEtBQUs7d0JBQ0wsS0FBSztnQ0FDTCxLQUFLO21DQUNMLEtBQUs7MkJBQ0wsS0FBSzt3QkFDTCxLQUFLOzJCQUNMLEtBQUs7O0lBd0JSLHNCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0EvQlksZUFBZTs7O0lBQzFCLCtCQUFrQjs7SUFDbEIsZ0NBQTRCOztJQUM1Qix3Q0FBK0I7O0lBQy9CLDJDQUE2Qzs7SUFDN0MsbUNBQTBCOztJQUMxQixnQ0FBbUI7O0lBQ25CLG1DQUEwQjs7SUFHMUIsa0NBaUJFIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRoZW1lUGFsZXR0ZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsJztcclxuXHJcbmV4cG9ydCBpbnRlcmZhY2UgU2VjdGlvbiB7XHJcbiAgbmFtZTogc3RyaW5nO1xyXG4gIHVwZGF0ZWQ6IERhdGU7XHJcbn0gICBcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1saXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2QtbGlzdC5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2QtbGlzdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdkTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgdGV4dDphbnk7XHJcbiAgQElucHV0KCljb2xvcjogVGhlbWVQYWxldHRlO1xyXG4gIEBJbnB1dCgpZGlzYWJsZVJpcHBsZTogYm9vbGVhbjtcclxuICBASW5wdXQoKWNoZWNrYm94UG9zaXRpb246ICdiZWZvcmUnIHwgJ2FmdGVyJztcclxuICBASW5wdXQoKXNlbGVjdGVkOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpdmFsdWU6IGFueTtcclxuICBASW5wdXQoKWRpc2FibGVkOiBib29sZWFuO1xyXG4gIGNvbnN0cnVjdG9yKCkgeyB9XHJcblxyXG4gIGZvbGRlcnM6IFNlY3Rpb25bXSA9IFtcclxuICAgIHtcclxuICAgICAgbmFtZTogJ1Bob3RvcycsXHJcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCcyLzEzLzE5JyksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUmVjaXBlcycsXHJcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCc1LzE1LzE5JyksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnV29yaycsXHJcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCc3LzI4LzE5JyksXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICBuYW1lOiAnVW5pdmVyc2l0eScsXHJcbiAgICAgIHVwZGF0ZWQ6IG5ldyBEYXRlKCc5LzIwLzE5JyksXHJcbiAgICB9XHJcbiAgXTtcclxuXHJcbiAgbmdPbkluaXQoKSB7fVxyXG5cclxufVxyXG4iXX0=