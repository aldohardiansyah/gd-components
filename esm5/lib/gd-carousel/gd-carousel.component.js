/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import 'hammerjs';
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
        this.carouselManager.on('pan', (/**
         * @param {?} ev
         * @return {?}
         */
        function (ev) {
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
        this.carouselTimer = setTimeout((/**
         * @return {?}
         */
        function () {
            _this.carouselWrapper.classList.remove('is-animating');
        }), 400);
    };
    GdCarouselComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-carousel',
                    template: "<div class=\"carousel-container\">\r\n        <div class=\"carousel-wrapper\" [ngStyle]=\"{'width':totalSection}\">\r\n                <ng-content></ng-content>\r\n        </div>\r\n</div>",
                    styles: [".carousel-container{width:100%;overflow:hidden;position:relative}.carousel-container .carousel-wrapper{display:-webkit-box;display:flex}::ng-deep .gd-section{width:100%;height:500px}::ng-deep .gd-section img{width:100%;height:100%;-o-object-fit:cover;object-fit:cover;pointer-events:none}.is-animating{-webkit-transition:-webkit-transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1);transition:transform .4s cubic-bezier(.5,0,.5,1),-webkit-transform .4s cubic-bezier(.5,0,.5,1)}"]
                }] }
    ];
    /** @nocollapse */
    GdCarouselComponent.ctorParameters = function () { return []; };
    return GdCarouselComponent;
}());
export { GdCarouselComponent };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtY2Fyb3VzZWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1jYXJvdXNlbC9nZC1jYXJvdXNlbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQTRDLE1BQU0sZUFBZSxDQUFDO0FBQ3BGLE9BQU8sVUFBVSxDQUFDO0FBRWxCO0lBa0JFO1FBWEEsaUJBQVksR0FBTyxFQUFFLENBQUM7UUFFdEIsa0JBQWEsR0FBTyxDQUFDLENBQUM7UUFJdEIsd0JBQW1CLEdBQUcsRUFBRSxDQUFDO0lBS1QsQ0FBQzs7OztJQUVqQixzQ0FBUTs7O0lBQVI7UUFBQSxpQkE0QkM7UUEzQkMsSUFBSSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQztRQUM5QyxJQUFJLENBQUMsWUFBWSxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxHQUFHLENBQUMsR0FBRyxHQUFHLENBQUM7UUFFckQsSUFBSSxDQUFDLGVBQWUsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLG1CQUFtQixDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBZSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsU0FBUyxFQUFDLENBQUMsRUFBRSxRQUFRLEVBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsZUFBZSxDQUFDLEVBQUUsQ0FBQyxLQUFLOzs7O1FBQUUsVUFBQyxFQUFFOztnQkFDNUIsVUFBVSxHQUFHLEdBQUcs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SW5pdCwgQ29udGVudENoaWxkLCBUZW1wbGF0ZVJlZiwgSW5wdXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0ICdoYW1tZXJqcyc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWNhcm91c2VsJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2QtY2Fyb3VzZWwuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZENhcm91c2VsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICBcclxuICBhcnJheVNlY3Rpb246YW55ID0gW107XHJcbiAgdG90YWxTZWN0aW9uOmFueTtcclxuICBhY3RpdmVTZWN0aW9uOmFueSA9IDA7XHJcblxyXG4gIGNhcm91c2VsV3JhcHBlcjphbnk7XHJcbiAgY2Fyb3VzZWxDb3VudDphbnk7XHJcbiAgY2Fyb3VzZWxTZW5zaXRpdml0eSA9IDI1O1xyXG4gIGNhcm91c2VsVGltZXI6YW55O1xyXG5cclxuICBjYXJvdXNlbE1hbmFnZXI6YW55O1xyXG5cclxuICBjb25zdHJ1Y3RvcigpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIHRoaXMuYXJyYXlTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5nZC1zZWN0aW9uXCIpO1xyXG4gICAgdGhpcy5jYXJvdXNlbENvdW50ID0gdGhpcy5hcnJheVNlY3Rpb24ubGVuZ3RoO1xyXG4gICAgdGhpcy50b3RhbFNlY3Rpb24gPSAodGhpcy5jYXJvdXNlbENvdW50ICogMTAwKSArICclJztcclxuXHJcbiAgICB0aGlzLmNhcm91c2VsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC13cmFwcGVyJyk7XHJcbiAgICB0aGlzLmNhcm91c2VsTWFuYWdlciA9IG5ldyB3aW5kb3dbJ0hhbW1lciddKHRoaXMuY2Fyb3VzZWxXcmFwcGVyKTtcclxuICAgIHRoaXMuY2Fyb3VzZWxNYW5hZ2VyLmdldCgncGFuJykuc2V0KHsgdGhyZXNob2xkOjAsIHBvaW50ZXJzOjAgfSk7XHJcbiAgICB0aGlzLmNhcm91c2VsTWFuYWdlci5vbigncGFuJywgKGV2KSA9PntcclxuICAgICAgdmFyIHBlcmNlbnRhZ2UgPSAxMDAgLyB0aGlzLmNhcm91c2VsQ291bnQgKiBldi5kZWx0YVggLyB3aW5kb3cuaW5uZXJXaWR0aDtcclxuICAgICAgdmFyIHRyYW5zZm9ybVBlcmNlbnRhZ2UgPSBwZXJjZW50YWdlIC0gMTAwIC8gdGhpcy5jYXJvdXNlbENvdW50ICogdGhpcy5hY3RpdmVTZWN0aW9uO1xyXG4gICAgICB0aGlzLmNhcm91c2VsV3JhcHBlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdHJhbnNmb3JtUGVyY2VudGFnZSArICclKSc7XHJcbiAgICAgIGlmKGV2LmlzRmluYWwpe1xyXG4gICAgICAgIGlmKGV2LnZlbG9jaXR5WCA+IDEpe1xyXG4gICAgICAgICAgdGhpcy5nb1RvU2VjdGlvbih0aGlzLmFjdGl2ZVNlY3Rpb24gLSAxKTtcclxuICAgICAgICB9IGVsc2UgaWYoZXYudmVsb2NpdHlYIDwgLTEpe1xyXG4gICAgICAgICAgdGhpcy5nb1RvU2VjdGlvbih0aGlzLmFjdGl2ZVNlY3Rpb24gKyAxKVxyXG4gICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgIGlmKHBlcmNlbnRhZ2UgPD0gLSh0aGlzLmNhcm91c2VsU2Vuc2l0aXZpdHkgLyB0aGlzLmNhcm91c2VsQ291bnQpKXtcclxuICAgICAgICAgICAgdGhpcy5nb1RvU2VjdGlvbih0aGlzLmFjdGl2ZVNlY3Rpb24gKyAxKTtcclxuICAgICAgICAgIH0gZWxzZSBpZihwZXJjZW50YWdlID49ICh0aGlzLmNhcm91c2VsU2Vuc2l0aXZpdHkgLyB0aGlzLmNhcm91c2VsQ291bnQpKXtcclxuICAgICAgICAgICAgdGhpcy5nb1RvU2VjdGlvbih0aGlzLmFjdGl2ZVNlY3Rpb24gLSAxKTtcclxuICAgICAgICAgIH0gZWxzZXtcclxuICAgICAgICAgICAgICB0aGlzLmdvVG9TZWN0aW9uKHRoaXMuYWN0aXZlU2VjdGlvbik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgZ29Ub1NlY3Rpb24obnVtYmVyKXtcclxuICAgIGlmKG51bWJlciA8IDApe1xyXG4gICAgICB0aGlzLmFjdGl2ZVNlY3Rpb24gPSAwO1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZihudW1iZXIgPiB0aGlzLmNhcm91c2VsQ291bnQgLSAxKXtcclxuICAgICAgdGhpcy5hY3RpdmVTZWN0aW9uID0gdGhpcy5jYXJvdXNlbENvdW50IC0gMVxyXG4gICAgfVxyXG4gICAgZWxzZXtcclxuICAgICAgdGhpcy5hY3RpdmVTZWN0aW9uID0gbnVtYmVyO1xyXG4gICAgfVxyXG5cclxuICAgIHRoaXMuY2Fyb3VzZWxXcmFwcGVyLmNsYXNzTGlzdC5hZGQoJ2lzLWFuaW1hdGluZycpO1xyXG5cclxuICAgIHZhciBwZXJjZW50YWdlID0gLSgxMDAgLyB0aGlzLmNhcm91c2VsQ291bnQpICogdGhpcy5hY3RpdmVTZWN0aW9uO1xyXG4gICAgdGhpcy5jYXJvdXNlbFdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHBlcmNlbnRhZ2UgKyAnJSknO1xyXG5cclxuICAgIGNsZWFyVGltZW91dCh0aGlzLmNhcm91c2VsVGltZXIpO1xyXG4gICAgdGhpcy5jYXJvdXNlbFRpbWVyID0gc2V0VGltZW91dCggKCkgPT57XHJcbiAgICAgIHRoaXMuY2Fyb3VzZWxXcmFwcGVyLmNsYXNzTGlzdC5yZW1vdmUoJ2lzLWFuaW1hdGluZycpO1xyXG4gICAgfSwgNDAwKTtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==