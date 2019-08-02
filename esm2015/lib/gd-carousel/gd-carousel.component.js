/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import 'hammerjs';
export class GdCarouselComponent {
    constructor() {
        this.arraySection = [];
        this.activeSection = 0;
        this.carouselSensitivity = 25;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.arraySection = document.querySelectorAll(".gd-section");
        this.carouselCount = this.arraySection.length;
        this.totalSection = (this.carouselCount * 100) + '%';
        this.carouselWrapper = document.querySelector('.carousel-wrapper');
        this.carouselManager = new window['Hammer'](this.carouselWrapper);
        this.carouselManager.get('pan').set({ threshold: 0, pointers: 0 });
        this.carouselManager.on('pan', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            /** @type {?} */
            var percentage = 100 / this.carouselCount * ev.deltaX / window.innerWidth;
            /** @type {?} */
            var transformPercentage = percentage - 100 / this.carouselCount * this.activeSection;
            this.carouselWrapper.style.transform = 'translateX(' + transformPercentage + '%)';
            if (ev.isFinal) {
                if (ev.velocityX > 1) {
                    this.goToSection(this.activeSection - 1);
                }
                else if (ev.velocityX < -1) {
                    this.goToSection(this.activeSection + 1);
                }
                else {
                    if (percentage <= -(this.carouselSensitivity / this.carouselCount)) {
                        this.goToSection(this.activeSection + 1);
                    }
                    else if (percentage >= (this.carouselSensitivity / this.carouselCount)) {
                        this.goToSection(this.activeSection - 1);
                    }
                    else {
                        this.goToSection(this.activeSection);
                    }
                }
            }
        }));
    }
    /**
     * @param {?} number
     * @return {?}
     */
    goToSection(number) {
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
        this.carouselTimer = setTimeout((/**
         * @return {?}
         */
        () => {
            this.carouselWrapper.classList.remove('is-animating');
        }), 400);
    }
}
GdCarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-carousel',
                template: "<div class=\"carousel-container\">\r\n        <div class=\"carousel-wrapper\" [ngStyle]=\"{'width':totalSection}\">\r\n                <ng-content></ng-content>\r\n        </div>\r\n</div>",
                styles: [".carousel-container{width:100%;overflow:hidden;position:relative}.carousel-container .carousel-wrapper{display:-webkit-box;display:flex}::ng-deep .gd-section{width:100%;height:500px}::ng-deep .gd-section img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none}.is-animating{-webkit-transition:-webkit-transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}"]
            }] }
];
/** @nocollapse */
GdCarouselComponent.ctorParameters = () => [];
if (false) {
    /** @type {?} */
    GdCarouselComponent.prototype.arraySection;
    /** @type {?} */
    GdCarouselComponent.prototype.totalSection;
    /** @type {?} */
    GdCarouselComponent.prototype.activeSection;
    /** @type {?} */
    GdCarouselComponent.prototype.carouselWrapper;
    /** @type {?} */
    GdCarouselComponent.prototype.carouselCount;
    /** @type {?} */
    GdCarouselComponent.prototype.carouselSensitivity;
    /** @type {?} */
    GdCarouselComponent.prototype.carouselTimer;
    /** @type {?} */
    GdCarouselComponent.prototype.carouselManager;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1jYXJvdXNlbC9nZC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sVUFBVSxDQUFDO0FBT2xCLE1BQU0sT0FBTyxtQkFBbUI7SUFhOUI7UUFYQSxpQkFBWSxHQUFPLEVBQUUsQ0FBQztRQUV0QixrQkFBYSxHQUFPLENBQUMsQ0FBQztRQUl0Qix3QkFBbUIsR0FBRyxFQUFFLENBQUM7SUFLVCxDQUFDOzs7O0lBRWpCLFFBQVE7UUFDTixJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxhQUFhLENBQUMsQ0FBQztRQUM3RCxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDO1FBQzlDLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQztRQUVyRCxJQUFJLENBQUMsZUFBZSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsZUFBZSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUMsQ0FBQyxFQUFFLFFBQVEsRUFBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ2pFLElBQUksQ0FBQyxlQUFlLENBQUMsRUFBRSxDQUFDLEtBQUs7Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFOztnQkFDaEMsVUFBVSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxHQUFHLEVBQUUsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFVBQVU7O2dCQUNyRSxtQkFBbUIsR0FBRyxVQUFVLEdBQUcsR0FBRyxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWE7WUFDcEYsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGFBQWEsR0FBRyxtQkFBbUIsR0FBRyxJQUFJLENBQUM7WUFDbEYsSUFBRyxFQUFFLENBQUMsT0FBTyxFQUFDO2dCQUNaLElBQUcsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUM7b0JBQ2xCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUMsQ0FBQztpQkFDMUM7cUJBQU0sSUFBRyxFQUFFLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFDO29CQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUE7aUJBQ3pDO3FCQUFLO29CQUNKLElBQUcsVUFBVSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsbUJBQW1CLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFDO3dCQUNoRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxDQUFDLENBQUM7cUJBQzFDO3lCQUFNLElBQUcsVUFBVSxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBQzt3QkFDdEUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUMxQzt5QkFBSzt3QkFDRixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztxQkFDeEM7aUJBQ0Y7YUFDRjtRQUNILENBQUMsRUFBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsTUFBTTtRQUNoQixJQUFHLE1BQU0sR0FBRyxDQUFDLEVBQUM7WUFDWixJQUFJLENBQUMsYUFBYSxHQUFHLENBQUMsQ0FBQztTQUN4QjthQUNJLElBQUcsTUFBTSxHQUFHLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFDO1lBQ3RDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsR0FBRyxDQUFDLENBQUE7U0FDNUM7YUFDRztZQUNGLElBQUksQ0FBQyxhQUFhLEdBQUcsTUFBTSxDQUFDO1NBQzdCO1FBRUQsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGNBQWMsQ0FBQyxDQUFDOztZQUUvQyxVQUFVLEdBQUcsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLEdBQUcsSUFBSSxDQUFDLGFBQWE7UUFDakUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGFBQWEsR0FBRyxVQUFVLEdBQUcsSUFBSSxDQUFDO1FBRXpFLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakMsSUFBSSxDQUFDLGFBQWEsR0FBRyxVQUFVOzs7UUFBRSxHQUFHLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQ3hELENBQUMsR0FBRSxHQUFHLENBQUMsQ0FBQztJQUNWLENBQUM7OztZQXRFRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLGFBQWE7Z0JBQ3ZCLHdNQUEyQzs7YUFFNUM7Ozs7OztJQUdDLDJDQUFzQjs7SUFDdEIsMkNBQWlCOztJQUNqQiw0Q0FBc0I7O0lBRXRCLDhDQUFvQjs7SUFDcEIsNENBQWtCOztJQUNsQixrREFBeUI7O0lBQ3pCLDRDQUFrQjs7SUFFbEIsOENBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIENvbnRlbnRDaGlsZCwgVGVtcGxhdGVSZWYsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAnaGFtbWVyanMnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1jYXJvdXNlbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWNhcm91c2VsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1jYXJvdXNlbC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RDYXJvdXNlbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgXHJcbiAgYXJyYXlTZWN0aW9uOmFueSA9IFtdO1xyXG4gIHRvdGFsU2VjdGlvbjphbnk7XHJcbiAgYWN0aXZlU2VjdGlvbjphbnkgPSAwO1xyXG5cclxuICBjYXJvdXNlbFdyYXBwZXI6YW55O1xyXG4gIGNhcm91c2VsQ291bnQ6YW55O1xyXG4gIGNhcm91c2VsU2Vuc2l0aXZpdHkgPSAyNTtcclxuICBjYXJvdXNlbFRpbWVyOmFueTtcclxuXHJcbiAgY2Fyb3VzZWxNYW5hZ2VyOmFueTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICB0aGlzLmFycmF5U2VjdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCIuZ2Qtc2VjdGlvblwiKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxDb3VudCA9IHRoaXMuYXJyYXlTZWN0aW9uLmxlbmd0aDtcclxuICAgIHRoaXMudG90YWxTZWN0aW9uID0gKHRoaXMuY2Fyb3VzZWxDb3VudCAqIDEwMCkgKyAnJSc7XHJcblxyXG4gICAgdGhpcy5jYXJvdXNlbFdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtd3JhcHBlcicpO1xyXG4gICAgdGhpcy5jYXJvdXNlbE1hbmFnZXIgPSBuZXcgd2luZG93WydIYW1tZXInXSh0aGlzLmNhcm91c2VsV3JhcHBlcik7XHJcbiAgICB0aGlzLmNhcm91c2VsTWFuYWdlci5nZXQoJ3BhbicpLnNldCh7IHRocmVzaG9sZDowLCBwb2ludGVyczowIH0pO1xyXG4gICAgdGhpcy5jYXJvdXNlbE1hbmFnZXIub24oJ3BhbicsIChldikgPT57XHJcbiAgICAgIHZhciBwZXJjZW50YWdlID0gMTAwIC8gdGhpcy5jYXJvdXNlbENvdW50ICogZXYuZGVsdGFYIC8gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgIHZhciB0cmFuc2Zvcm1QZXJjZW50YWdlID0gcGVyY2VudGFnZSAtIDEwMCAvIHRoaXMuY2Fyb3VzZWxDb3VudCAqIHRoaXMuYWN0aXZlU2VjdGlvbjtcclxuICAgICAgdGhpcy5jYXJvdXNlbFdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRyYW5zZm9ybVBlcmNlbnRhZ2UgKyAnJSknO1xyXG4gICAgICBpZihldi5pc0ZpbmFsKXtcclxuICAgICAgICBpZihldi52ZWxvY2l0eVggPiAxKXtcclxuICAgICAgICAgIHRoaXMuZ29Ub1NlY3Rpb24odGhpcy5hY3RpdmVTZWN0aW9uIC0gMSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGV2LnZlbG9jaXR5WCA8IC0xKXtcclxuICAgICAgICAgIHRoaXMuZ29Ub1NlY3Rpb24odGhpcy5hY3RpdmVTZWN0aW9uICsgMSlcclxuICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICBpZihwZXJjZW50YWdlIDw9IC0odGhpcy5jYXJvdXNlbFNlbnNpdGl2aXR5IC8gdGhpcy5jYXJvdXNlbENvdW50KSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub1NlY3Rpb24odGhpcy5hY3RpdmVTZWN0aW9uICsgMSk7XHJcbiAgICAgICAgICB9IGVsc2UgaWYocGVyY2VudGFnZSA+PSAodGhpcy5jYXJvdXNlbFNlbnNpdGl2aXR5IC8gdGhpcy5jYXJvdXNlbENvdW50KSl7XHJcbiAgICAgICAgICAgIHRoaXMuZ29Ub1NlY3Rpb24odGhpcy5hY3RpdmVTZWN0aW9uIC0gMSk7XHJcbiAgICAgICAgICB9IGVsc2V7XHJcbiAgICAgICAgICAgICAgdGhpcy5nb1RvU2VjdGlvbih0aGlzLmFjdGl2ZVNlY3Rpb24pO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGdvVG9TZWN0aW9uKG51bWJlcil7XHJcbiAgICBpZihudW1iZXIgPCAwKXtcclxuICAgICAgdGhpcy5hY3RpdmVTZWN0aW9uID0gMDtcclxuICAgIH1cclxuICAgIGVsc2UgaWYobnVtYmVyID4gdGhpcy5jYXJvdXNlbENvdW50IC0gMSl7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2VjdGlvbiA9IHRoaXMuY2Fyb3VzZWxDb3VudCAtIDFcclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgIHRoaXMuYWN0aXZlU2VjdGlvbiA9IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICB0aGlzLmNhcm91c2VsV3JhcHBlci5jbGFzc0xpc3QuYWRkKCdpcy1hbmltYXRpbmcnKTtcclxuXHJcbiAgICB2YXIgcGVyY2VudGFnZSA9IC0oMTAwIC8gdGhpcy5jYXJvdXNlbENvdW50KSAqIHRoaXMuYWN0aXZlU2VjdGlvbjtcclxuICAgIHRoaXMuY2Fyb3VzZWxXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyBwZXJjZW50YWdlICsgJyUpJztcclxuXHJcbiAgICBjbGVhclRpbWVvdXQodGhpcy5jYXJvdXNlbFRpbWVyKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxUaW1lciA9IHNldFRpbWVvdXQoICgpID0+e1xyXG4gICAgICB0aGlzLmNhcm91c2VsV3JhcHBlci5jbGFzc0xpc3QucmVtb3ZlKCdpcy1hbmltYXRpbmcnKTtcclxuICAgIH0sIDQwMCk7XHJcbiAgfVxyXG5cclxufVxyXG4iXX0=