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
export class GdListComponent {
    constructor() {
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
    ngOnInit() { }
}
GdListComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-list',
                template: "<mat-list role=\"list\">\r\n  <ng-content select=\"[list]\"></ng-content>\r\n</mat-list>",
                styles: [".mat-list-icon{color:#d3d3d3}"]
            }] }
];
/** @nocollapse */
GdListComponent.ctorParameters = () => [];
GdListComponent.propDecorators = {
    text: [{ type: Input }],
    color: [{ type: Input }],
    disableRipple: [{ type: Input }],
    checkboxPosition: [{ type: Input }],
    selected: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }]
};
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLWxpc3QvZ2QtbGlzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7O0FBR3pELDZCQUdDOzs7SUFGQyx1QkFBYTs7SUFDYiwwQkFBYzs7QUFRaEIsTUFBTSxPQUFPLGVBQWU7SUFRMUI7UUFFQSxZQUFPLEdBQWM7WUFDbkI7Z0JBQ0UsSUFBSSxFQUFFLFFBQVE7Z0JBQ2QsT0FBTyxFQUFFLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQzthQUM3QjtZQUNEO2dCQUNFLElBQUksRUFBRSxTQUFTO2dCQUNmLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7WUFDRDtnQkFDRSxJQUFJLEVBQUUsTUFBTTtnQkFDWixPQUFPLEVBQUUsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDO2FBQzdCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFFLFlBQVk7Z0JBQ2xCLE9BQU8sRUFBRSxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUM7YUFDN0I7U0FDRixDQUFDO0lBbkJjLENBQUM7Ozs7SUFxQmpCLFFBQVEsS0FBSSxDQUFDOzs7WUFuQ2QsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxTQUFTO2dCQUNuQixvR0FBdUM7O2FBRXhDOzs7OzttQkFHRSxLQUFLO29CQUNMLEtBQUs7NEJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7b0JBQ0wsS0FBSzt1QkFDTCxLQUFLOzs7O0lBTk4sK0JBQWtCOztJQUNsQixnQ0FBNEI7O0lBQzVCLHdDQUErQjs7SUFDL0IsMkNBQTZDOztJQUM3QyxtQ0FBMEI7O0lBQzFCLGdDQUFtQjs7SUFDbkIsbUNBQTBCOztJQUcxQixrQ0FpQkUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVGhlbWVQYWxldHRlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBTZWN0aW9uIHtcclxuICBuYW1lOiBzdHJpbmc7XHJcbiAgdXBkYXRlZDogRGF0ZTtcclxufSAgIFxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWxpc3QnLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9nZC1saXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1saXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2RMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBASW5wdXQoKSB0ZXh0OmFueTtcclxuICBASW5wdXQoKWNvbG9yOiBUaGVtZVBhbGV0dGU7XHJcbiAgQElucHV0KClkaXNhYmxlUmlwcGxlOiBib29sZWFuO1xyXG4gIEBJbnB1dCgpY2hlY2tib3hQb3NpdGlvbjogJ2JlZm9yZScgfCAnYWZ0ZXInO1xyXG4gIEBJbnB1dCgpc2VsZWN0ZWQ6IGJvb2xlYW47XHJcbiAgQElucHV0KCl2YWx1ZTogYW55O1xyXG4gIEBJbnB1dCgpZGlzYWJsZWQ6IGJvb2xlYW47XHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgZm9sZGVyczogU2VjdGlvbltdID0gW1xyXG4gICAge1xyXG4gICAgICBuYW1lOiAnUGhvdG9zJyxcclxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzIvMTMvMTknKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdSZWNpcGVzJyxcclxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzUvMTUvMTknKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdXb3JrJyxcclxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzcvMjgvMTknKSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIG5hbWU6ICdVbml2ZXJzaXR5JyxcclxuICAgICAgdXBkYXRlZDogbmV3IERhdGUoJzkvMjAvMTknKSxcclxuICAgIH1cclxuICBdO1xyXG5cclxuICBuZ09uSW5pdCgpIHt9XHJcblxyXG59XHJcbiJdfQ==