/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
export class GdSwapperComponent {
    constructor() {
        this.dateToday = new Date();
        this.currentDateChange = new EventEmitter();
        this.dataResult = new EventEmitter();
        this.currentPos = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dateToday = this.dateToday.getDate();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.headPanel = document.querySelector(".element-head");
        this.bodyPanel = document.querySelector(".element-body");
        this.containerPanel = document.querySelector(".element-container");
        this.panel = document.querySelector(".head-panel");
        this.totalPanel = document.querySelectorAll(".head-panel").length;
        this.widthPanel = (this.totalPanel * 100) + '%';
    }
    /**
     * @return {?}
     */
    toPrev() {
        this.currentDate = this.currentDate - 1;
        this.currentDateChange.emit(this.currentDate);
        this.containerPanel.classList.add("swapper-left");
        this.result = 'kosong';
        this.dataSwapper.forEach((/**
         * @param {?} element
         * @return {?}
         */
        element => {
            if (element.date == this.currentDate) {
                this.result = element.nama;
            }
        }));
        this.dataResult.emit(this.result);
        setTimeout((/**
         * @return {?}
         */
        () => {
            this.containerPanel.classList.remove("swapper-left");
        }), 300);
        // if (this.currentPos < 0) {
        //   this.currentPos = this.currentPos + this.panel.offsetWidth;
        //   this.headPanel.style.transform = 'translateX(' + this.currentPos + 'px)';
        //   this.bodyPanel.style.transform = 'translateX(' + this.currentPos + 'px)';      
        // }
        // else {
        //   console.log("mentok coy")
        // }
    }
    /**
     * @return {?}
     */
    toNext() {
        this.currentDate = this.currentDate + 1;
        if (this.currentDate <= this.dateToday) {
            this.currentDateChange.emit(this.currentDate);
            this.containerPanel.classList.add("swapper-right");
            this.result = 'kosong';
            this.dataSwapper.forEach((/**
             * @param {?} element
             * @return {?}
             */
            element => {
                if (element.date == this.currentDate) {
                    this.result = element.nama;
                }
            }));
            this.dataResult.emit(this.result);
            setTimeout((/**
             * @return {?}
             */
            () => {
                this.containerPanel.classList.remove("swapper-right");
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
    }
}
GdSwapperComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-swapper',
                template: "<div class=\"swapper-container\">\r\n    <div class=\"button-container\">\r\n        <button class=\"leftNavBtn\" (click)=\"toPrev()\"> < </button>\r\n        <button *ngIf=\"currentDate < dateToday\" class=\"rightNavBtn\" (click)=\"toNext()\">></button>\r\n    </div>\r\n    <div class=\"element-container\">\r\n        <div class=\"element-head\" [ngStyle]=\"{'width':widthPanel}\">\r\n            <ng-content select=\".head-panel\"></ng-content>\r\n        </div>\r\n        <div class=\"element-body\" [ngStyle]=\"{'width':widthPanel}\">\r\n            <ng-content select=\".body-panel\"></ng-content>\r\n        </div>\r\n    </div>\r\n</div>",
                styles: [".swapper-container{display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between;width:100%;position:relative}.swapper-container .element-container{width:100%;overflow:hidden}.swapper-container .element-container .element-head{padding:16px;display:-webkit-box;display:flex;position:relative;-webkit-transition:.2s cubic-bezier(.8,0,0,.8);transition:.2s cubic-bezier(.8,0,0,.8)}.swapper-container .element-container .element-head ::ng-deep .head-panel{width:100%;height:50px;display:-webkit-box;display:flex;-webkit-box-align:center;align-items:center;-webkit-box-pack:center;justify-content:center}.swapper-container .element-container .element-head ::ng-deep .head-panel h1{margin:0;text-align:center}.swapper-container .element-container .element-head .head-panel:nth-child(odd){background:red;color:#fff}.swapper-container .element-container .element-body{padding:16px;display:-webkit-box;display:flex;-webkit-transition:.2s cubic-bezier(.8,0,0,.8);transition:.2s cubic-bezier(.8,0,0,.8)}.swapper-container .element-container .element-body ::ng-deep .body-panel{width:100%}.swapper-container .button-container{position:absolute;z-index:5;width:100%;padding:16px;height:50px;display:-webkit-box;display:flex;-webkit-box-pack:justify;justify-content:space-between}.swapper-container .button-container .leftNavBtn,.swapper-container .button-container .rightNavBtn{font-size:50px;background-color:transparent}@-webkit-keyframes swapper-right{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}60%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}}@keyframes swapper-right{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}60%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}}.swapper-right{-webkit-animation-name:swapper-right;animation-name:swapper-right;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}@-webkit-keyframes swapper-left{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}60%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}}@keyframes swapper-left{0%,100%{opacity:1;-webkit-transform:translateX(0);transform:translateX(0)}30%{opacity:0;-webkit-transform:translateX(-100px);transform:translateX(-100px)}60%{opacity:0;-webkit-transform:translateX(100px);transform:translateX(100px)}}.swapper-left{-webkit-animation-name:swapper-left;animation-name:swapper-left;-webkit-animation-duration:.3s;animation-duration:.3s;-webkit-animation-timing-function:ease-in;animation-timing-function:ease-in}"]
            }] }
];
/** @nocollapse */
GdSwapperComponent.ctorParameters = () => [];
GdSwapperComponent.propDecorators = {
    currentDate: [{ type: Input }],
    currentDateChange: [{ type: Output }],
    dataSwapper: [{ type: Input }],
    dataResult: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GdSwapperComponent.prototype.totalSection;
    /** @type {?} */
    GdSwapperComponent.prototype.headPanel;
    /** @type {?} */
    GdSwapperComponent.prototype.bodyPanel;
    /** @type {?} */
    GdSwapperComponent.prototype.panel;
    /** @type {?} */
    GdSwapperComponent.prototype.totalPanel;
    /** @type {?} */
    GdSwapperComponent.prototype.widthPanel;
    /** @type {?} */
    GdSwapperComponent.prototype.containerPanel;
    /** @type {?} */
    GdSwapperComponent.prototype.dateToday;
    /** @type {?} */
    GdSwapperComponent.prototype.currentDate;
    /** @type {?} */
    GdSwapperComponent.prototype.currentDateChange;
    /** @type {?} */
    GdSwapperComponent.prototype.dataSwapper;
    /** @type {?} */
    GdSwapperComponent.prototype.dataResult;
    /** @type {?} */
    GdSwapperComponent.prototype.currentPos;
    /** @type {?} */
    GdSwapperComponent.prototype.limit;
    /** @type {?} */
    GdSwapperComponent.prototype.result;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2Qtc3dhcHBlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9nZC1jb21wb25lbnRzLyIsInNvdXJjZXMiOlsibGliL2dkLXN3YXBwZXIvZ2Qtc3dhcHBlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFlLE1BQU0sZUFBZSxDQUFDO0FBQ3RFLE9BQU8sRUFBRSxNQUFNLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDdkMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGVBQWUsQ0FBQztBQU83QyxNQUFNLE9BQU8sa0JBQWtCO0lBdUI3QjtRQWJBLGNBQVMsR0FBTyxJQUFJLElBQUksRUFBRSxDQUFDO1FBSWpCLHNCQUFpQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBRzFELGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU3RCxlQUFVLEdBQVEsQ0FBQyxDQUFDO0lBTXBCLENBQUM7Ozs7SUFFRCxRQUFRO1FBQ04sSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxDQUFDO0lBQzVDLENBQUM7Ozs7SUFDRCxlQUFlO1FBRWIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxDQUFDO1FBQ3pELElBQUksQ0FBQyxTQUFTLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUN6RCxJQUFJLENBQUMsY0FBYyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsb0JBQW9CLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxDQUFDO1FBQ2xFLElBQUksQ0FB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d0NBQW9COztJQUNwQixtQ0FBVzs7SUFDWCxvQ0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCwgVGVtcGxhdGVSZWYgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT3V0cHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEV2ZW50RW1pdHRlciB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1zd2FwcGVyJyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2Qtc3dhcHBlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2Qtc3dhcHBlci5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RTd2FwcGVyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHJcbiAgdG90YWxTZWN0aW9uOiBhbnk7XHJcbiAgaGVhZFBhbmVsOiBhbnk7XHJcbiAgYm9keVBhbmVsOiBhbnk7XHJcbiAgcGFuZWw6IGFueTtcclxuICB0b3RhbFBhbmVsOmFueTtcclxuICB3aWR0aFBhbmVsOmFueTtcclxuICBjb250YWluZXJQYW5lbDphbnk7XHJcblxyXG4gIGRhdGVUb2RheTphbnkgPSBuZXcgRGF0ZSgpO1xyXG4gIFxyXG5cclxuICBASW5wdXQoKSBjdXJyZW50RGF0ZTphbnk7XHJcbiAgQE91dHB1dCgpIGN1cnJlbnREYXRlQ2hhbmdlOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgQElucHV0KCkgZGF0YVN3YXBwZXI6YW55O1xyXG4gIEBPdXRwdXQoKSBkYXRhUmVzdWx0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgY3VycmVudFBvczogYW55ID0gMDtcclxuICBsaW1pdDogYW55O1xyXG4gIHJlc3VsdDphbnk7XHJcblxyXG4gIGNvbnN0cnVjdG9yKCkge1xyXG5cclxuICB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5kYXRlVG9kYXkgPSB0aGlzLmRhdGVUb2RheS5nZXREYXRlKCk7ICAgIFxyXG4gIH1cclxuICBuZ0FmdGVyVmlld0luaXQoKSB7XHJcbiAgICBcclxuICAgIHRoaXMuaGVhZFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5lbGVtZW50LWhlYWRcIik7XHJcbiAgICB0aGlzLmJvZHlQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudC1ib2R5XCIpO1xyXG4gICAgdGhpcy5jb250YWluZXJQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZWxlbWVudC1jb250YWluZXJcIik7XHJcbiAgICB0aGlzLnBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5oZWFkLXBhbmVsXCIpO1xyXG4gICAgdGhpcy50b3RhbFBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5oZWFkLXBhbmVsXCIpLmxlbmd0aDtcclxuICAgIHRoaXMud2lkdGhQYW5lbCA9ICh0aGlzLnRvdGFsUGFuZWwgKiAxMDApICsgJyUnO1xyXG4gIH1cclxuXHJcbiAgdG9QcmV2KCkge1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZSA9IHRoaXMuY3VycmVudERhdGUgLSAxO1xyXG4gICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZS5lbWl0KHRoaXMuY3VycmVudERhdGUpO1xyXG4gICAgdGhpcy5jb250YWluZXJQYW5lbC5jbGFzc0xpc3QuYWRkKFwic3dhcHBlci1sZWZ0XCIpO1xyXG5cclxuICAgIHRoaXMucmVzdWx0ID0gJ2tvc29uZyc7ICAgIFxyXG4gICAgdGhpcy5kYXRhU3dhcHBlci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICBpZihlbGVtZW50LmRhdGUgPT0gdGhpcy5jdXJyZW50RGF0ZSl7XHJcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBlbGVtZW50Lm5hbWE7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGF0YVJlc3VsdC5lbWl0KHRoaXMucmVzdWx0KTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgdGhpcy5jb250YWluZXJQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKFwic3dhcHBlci1sZWZ0XCIpO1xyXG4gICAgfSwgMzAwKTtcclxuICAgIFxyXG4gICAgLy8gaWYgKHRoaXMuY3VycmVudFBvcyA8IDApIHtcclxuICAgIC8vICAgdGhpcy5jdXJyZW50UG9zID0gdGhpcy5jdXJyZW50UG9zICsgdGhpcy5wYW5lbC5vZmZzZXRXaWR0aDtcclxuICAgIC8vICAgdGhpcy5oZWFkUGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRoaXMuY3VycmVudFBvcyArICdweCknO1xyXG4gICAgLy8gICB0aGlzLmJvZHlQYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdGhpcy5jdXJyZW50UG9zICsgJ3B4KSc7ICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJtZW50b2sgY295XCIpXHJcbiAgICAvLyB9XHJcbiAgfVxyXG5cclxuICB0b05leHQoKSB7XHJcbiAgICB0aGlzLmN1cnJlbnREYXRlID0gdGhpcy5jdXJyZW50RGF0ZSArIDE7XHJcbiAgICBpZih0aGlzLmN1cnJlbnREYXRlIDw9IHRoaXMuZGF0ZVRvZGF5KXtcclxuICAgICAgdGhpcy5jdXJyZW50RGF0ZUNoYW5nZS5lbWl0KHRoaXMuY3VycmVudERhdGUpOyAgICAgIFxyXG4gICAgICB0aGlzLmNvbnRhaW5lclBhbmVsLmNsYXNzTGlzdC5hZGQoXCJzd2FwcGVyLXJpZ2h0XCIpO1xyXG5cclxuICAgICAgdGhpcy5yZXN1bHQgPSAna29zb25nJztcclxuICAgICAgdGhpcy5kYXRhU3dhcHBlci5mb3JFYWNoKGVsZW1lbnQgPT4ge1xyXG4gICAgICAgIGlmKGVsZW1lbnQuZGF0ZSA9PSB0aGlzLmN1cnJlbnREYXRlKXtcclxuICAgICAgICAgIHRoaXMucmVzdWx0ID0gZWxlbWVudC5uYW1hO1xyXG4gICAgICAgIH1cclxuICAgICAgfSk7XHJcbiAgXHJcbiAgICAgIHRoaXMuZGF0YVJlc3VsdC5lbWl0KHRoaXMucmVzdWx0KTtcclxuXHJcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIHRoaXMuY29udGFpbmVyUGFuZWwuY2xhc3NMaXN0LnJlbW92ZShcInN3YXBwZXItcmlnaHRcIik7XHJcbiAgICAgIH0sIDMwMCk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIHRoaXMubGltaXQgPSAodGhpcy50b3RhbFBhbmVsLTEpICogdGhpcy5wYW5lbC5vZmZzZXRXaWR0aCAqIC0xOyAgICBcclxuICAgIC8vIGlmICh0aGlzLmN1cnJlbnRQb3MgPiB0aGlzLmxpbWl0KSB7XHJcbiAgICAvLyAgIHRoaXMuY3VycmVudFBvcyA9IHRoaXMuY3VycmVudFBvcyArIHRoaXMucGFuZWwub2Zmc2V0V2lkdGggKiAtMTtcclxuICAgIC8vICAgdGhpcy5oZWFkUGFuZWwuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHRoaXMuY3VycmVudFBvcyArICdweCknO1xyXG4gICAgLy8gICB0aGlzLmJvZHlQYW5lbC5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgdGhpcy5jdXJyZW50UG9zICsgJ3B4KSc7ICAgICAgXHJcbiAgICAvLyB9XHJcbiAgICAvLyBlbHNlIHtcclxuICAgIC8vICAgY29uc29sZS5sb2coXCJtZW50b2sgY295XCIpXHJcbiAgICAvLyB9XHJcbiAgICBcclxuICB9XHJcblxyXG59XHJcbiJdfQ==