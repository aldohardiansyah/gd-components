/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { Input } from '@angular/core';
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
        { type: Component, args: [{
                    selector: 'gd-button-toggle',
                    template: "<mat-button-toggle-group #group=\"matButtonToggleGroup\">\r\n    <mat-button-toggle *ngFor=\"let item of toggleList\" name=\"\" disabled={{item.disable}} value=\"item.value\">\r\n        <p no-margin>{{item.label}}</p>\r\n    </mat-button-toggle>\r\n</mat-button-toggle-group>",
                    styles: [""]
                }] }
    ];
    /** @nocollapse */
    GdButtonToggleComponent.ctorParameters = function () { return []; };
    GdButtonToggleComponent.propDecorators = {
        groupName: [{ type: Input }],
        toggleList: [{ type: Input }]
    };
    return GdButtonToggleComponent;
}());
export { GdButtonToggleComponent };
if (false) {
    /** @type {?} */
    GdButtonToggleComponent.prototype.groupName;
    /** @type {?} */
    GdButtonToggleComponent.prototype.toggleList;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWJ1dHRvbi10b2dnbGUvZ2QtYnV0dG9uLXRvZ2dsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDbEQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUV0QztJQVVFO1FBRlEsZUFBVSxHQUFPLEVBQUUsQ0FBQztJQUkzQixDQUFDOzs7O0lBRUYsMENBQVE7OztJQUFSLGNBQVksQ0FBQzs7Z0JBZGQsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxrQkFBa0I7b0JBQzVCLGdTQUFnRDs7aUJBRWpEOzs7Ozs0QkFHRSxLQUFLOzZCQUNOLEtBQUs7O0lBUVAsOEJBQUM7Q0FBQSxBQWhCRCxJQWdCQztTQVhZLHVCQUF1Qjs7O0lBRWxDLDRDQUF1Qjs7SUFDeEIsNkNBQTZCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG4gIHNlbGVjdG9yOiAnZ2QtYnV0dG9uLXRvZ2dsZScsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWJ1dHRvbi10b2dnbGUuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLWJ1dHRvbi10b2dnbGUuY29tcG9uZW50LnNjc3MnXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIEdkQnV0dG9uVG9nZ2xlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgQElucHV0KCkgZ3JvdXBOYW1lOmFueTtcclxuIEBJbnB1dCgpIHRvZ2dsZUxpc3Q6YW55ID0gW107XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICAgfVxyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG59XHJcbiJdfQ==