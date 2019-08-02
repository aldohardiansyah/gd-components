/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
import 'hammerjs';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
export class GdModalComponent {
    /**
     * @param {?} modalController
     * @param {?} nav
     * @param {?} router
     */
    constructor(modalController, nav, router) {
        this.modalController = modalController;
        this.nav = nav;
        this.router = router;
        this.height = 100;
        this.lastPosX = 0;
        this.lastPosY = 0;
        this.isDragging = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.holder = document.getElementById('holder');
        this.modalWrapper = document.querySelector('.modal');
        // let oriHeight = 100 - this.height;
        // this.modalWrapper.style.transform = 'translateY(' + (100-this.height) + '%)';
        // console.log(oriHeight);
        console.log("mareisya");
        console.log(this.holder);
        this.panDown = new window['Hammer'](this.holder);
        this.panDown.add(new window['Hammer'].Pan({ direction: window['Hammer'].DIRECTION_ALL, threshold: 0 }));
        this.panDown.on('pan', (/**
         * @param {?} ev
         * @return {?}
         */
        (ev) => {
            console.log("Try Hard!");
            /** @type {?} */
            var elem = ev.target;
            // var oriHeight = (this.modalWrapper.offsetHeight/100) * this.height;
            if (!this.isDragging) {
                this.isDragging = true;
                this.lastPosY = 0;
            }
            /** @type {?} */
            var posY = ev.deltaY + this.lastPosY;
            // var outClose = (this.modalWrapper.offsetHeight / 100) * 80;
            /** @type {?} */
            var outClose = this.modalWrapper.offsetHeight - 60;
            if (posY >= 0) {
                this.modalWrapper.style.transform = 'translateY(' + posY + 'px)';
                this.modalWrapper.style.transition = 'all 0ms';
            }
            if (ev.isFinal) {
                this.isDragging = false;
                this.modalWrapper.style.transform = 'translateY(0px)';
                this.modalWrapper.style.transition = 'all 300ms';
            }
            if (posY > outClose) {
                this.modalController.dismiss();
            }
            // console.log(this.modalWrapper);
            // console.log(this.isDragging);
            // console.log(this.lastPosY);
            // console.log("translateY: " +posY);
        }));
    }
    /**
     * @return {?}
     */
    closeModal() {
        this.modalController.dismiss();
    }
}
GdModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-modal',
                template: "<div class=\"modal\" [ngClass]=\"{'closeIt': isHide}\" [ngStyle]=\"{'height.%' : height}\">\r\n  <ion-buttons>\r\n      <ion-icon name=\"close\" class=\"close\" (click)=\"closeModal()\" tappable></ion-icon>\r\n  </ion-buttons>\r\n  <div class=\"holder-area\" id=\"holder\">\r\n    <div class=\"holder\"></div>\r\n  </div>\r\n  <div class=\"modal-header\">\r\n      <ng-content select=[modal-header]></ng-content>\r\n  </div>\r\n  <div class=\"modal-content\">\r\n    {{setContentH}}\r\n      <ng-content select=[modal-content]></ng-content>\r\n  </div>\r\n</div>",
                styles: [".modal{width:90%;min-height:250px;max-height:97%;background-color:#fff;border-radius:25px 25px 0 0;align-self:center;margin:0 auto;align-self:flex-end;position:relative;display:-webkit-box;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}.modal .holder-area{height:30px;display:-webkit-box;display:flex;border-radius:25px 25px 0 0;min-height:30px;cursor:-webkit-grab;cursor:grab}.modal .holder-area .holder{background:#e2e2e2;width:80px;height:7px;border-radius:50px;margin:0 auto;-ms-grid-row-align:center;align-self:center}.modal .modal-header{padding:15px 18px;border-bottom:1px solid rgba(190,190,190,.5);z-index:4}.modal .modal-content{padding:10px 18px;overflow:auto}.modal .close{position:absolute;top:-11px;right:-27px;font-size:22px;color:#fff;display:none}@media screen and (min-width:768px){.modal{width:50%;max-width:700px}.close{display:block!important}}"]
            }] }
];
/** @nocollapse */
GdModalComponent.ctorParameters = () => [
    { type: ModalController },
    { type: NavController },
    { type: Router }
];
GdModalComponent.propDecorators = {
    height: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    GdModalComponent.prototype.height;
    /** @type {?} */
    GdModalComponent.prototype.holder;
    /** @type {?} */
    GdModalComponent.prototype.panDown;
    /** @type {?} */
    GdModalComponent.prototype.isSwipe;
    /** @type {?} */
    GdModalComponent.prototype.modalWrapper;
    /** @type {?} */
    GdModalComponent.prototype.isHide;
    /** @type {?} */
    GdModalComponent.prototype.setContentH;
    /** @type {?} */
    GdModalComponent.prototype.lastPosX;
    /** @type {?} */
    GdModalComponent.prototype.lastPosY;
    /** @type {?} */
    GdModalComponent.prototype.isDragging;
    /** @type {?} */
    GdModalComponent.prototype.modalController;
    /** @type {?} */
    GdModalComponent.prototype.nav;
    /**
     * @type {?}
     * @private
     */
    GdModalComponent.prototype.router;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtbW9kYWwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC1tb2RhbC9nZC1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pELE9BQU8sVUFBVSxDQUFDO0FBQ2xCLE9BQU8sRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDaEUsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBT3pDLE1BQU0sT0FBTyxnQkFBZ0I7Ozs7OztJQWEzQixZQUNTLGVBQWdDLEVBQ2hDLEdBQWtCLEVBQ2pCLE1BQWM7UUFGZixvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7UUFDaEMsUUFBRyxHQUFILEdBQUcsQ0FBZTtRQUNqQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBZmYsV0FBTSxHQUFVLEdBQUcsQ0FBQztRQVE3QixhQUFRLEdBQVUsQ0FBQyxDQUFDO1FBQ3BCLGFBQVEsR0FBVSxDQUFDLENBQUM7UUFDcEIsZUFBVSxHQUFXLEtBQUssQ0FBQztJQU12QixDQUFDOzs7O0lBRUwsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUNoRCxJQUFJLENBQUMsWUFBWSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDckQscUNBQXFDO1FBQ3JDLGdGQUFnRjtRQUNoRiwwQkFBMEI7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4QixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN6QixJQUFJLENBQUMsT0FBTyxHQUFHLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNqRCxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxHQUFHLENBQUMsRUFBRSxTQUFTLEVBQUUsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLGFBQWEsRUFBRSxTQUFTLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBRSxDQUFDO1FBQzFHLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEtBQUs7Ozs7UUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7O2dCQUNyQixJQUFJLEdBQUcsRUFBRSxDQUFDLE1BQU07WUFDcEIsc0VBQXNFO1lBRXRFLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFO2dCQUNwQixJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFFBQVEsR0FBRyxDQUFDLENBQUM7YUFDbkI7O2dCQUVHLElBQUksR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxRQUFROzs7Z0JBR2hDLFFBQVEsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksR0FBRyxFQUFFO1lBQ2xELElBQUcsSUFBSSxJQUFJLENBQUMsRUFBQztnQkFDWCxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsYUFBYSxHQUFHLElBQUksR0FBRyxLQUFLLENBQUM7Z0JBQ2pFLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUM7YUFDaEQ7WUFFRCxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7Z0JBQ3hCLElBQUksQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFNBQVMsR0FBRyxpQkFBaUIsQ0FBQztnQkFDdEQsSUFBSSxDQUFDLFlBQVksQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLFdBQVcsQ0FBQzthQUNsRDtZQUNELElBQUksSUFBSSxHQUFHLFFBQVEsRUFBRztnQkFDcEIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQzthQUNoQztZQUNELGtDQUFrQztZQUNsQyxnQ0FBZ0M7WUFDaEMsOEJBQThCO1lBQzlCLHFDQUFxQztRQUN2QyxDQUFDLEVBQUMsQ0FBQztJQUNMLENBQUM7Ozs7SUFFRCxVQUFVO1FBQ1IsSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNqQyxDQUFDOzs7WUF0RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxVQUFVO2dCQUNwQiw4akJBQXdDOzthQUV6Qzs7OztZQVBRLGVBQWU7WUFBRSxhQUFhO1lBQzlCLE1BQU07OztxQkFRWixLQUFLOzs7O0lBQU4sa0NBQTZCOztJQUM3QixrQ0FBVzs7SUFDWCxtQ0FBWTs7SUFDWixtQ0FBWTs7SUFDWix3Q0FBaUI7O0lBQ2pCLGtDQUFZOztJQUNaLHVDQUFpQjs7SUFFakIsb0NBQW9COztJQUNwQixvQ0FBb0I7O0lBQ3BCLHNDQUEyQjs7SUFHekIsMkNBQXVDOztJQUN2QywrQkFBeUI7Ozs7O0lBQ3pCLGtDQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgJ2hhbW1lcmpzJztcclxuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyLCBOYXZDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xyXG5pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC1tb2RhbC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5leHBvcnQgY2xhc3MgR2RNb2RhbENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgQElucHV0KCkgaGVpZ2h0Om51bWJlciA9IDEwMDtcclxuICBob2xkZXI6YW55O1xyXG4gIHBhbkRvd246YW55O1xyXG4gIGlzU3dpcGU6YW55O1xyXG4gIG1vZGFsV3JhcHBlcjphbnk7XHJcbiAgaXNIaWRlIDphbnk7XHJcbiAgc2V0Q29udGVudEggOmFueTtcclxuXHJcbiAgbGFzdFBvc1g6bnVtYmVyID0gMDtcclxuICBsYXN0UG9zWTpudW1iZXIgPSAwO1xyXG4gIGlzRHJhZ2dpbmc6Ym9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcixcclxuICAgIHB1YmxpYyBuYXY6IE5hdkNvbnRyb2xsZXIsXHJcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyLFxyXG4gICkgeyB9XHJcblxyXG4gIG5nT25Jbml0KCkge1xyXG4gICAgdGhpcy5ob2xkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaG9sZGVyJyk7XHJcbiAgICB0aGlzLm1vZGFsV3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tb2RhbCcpO1xyXG4gICAgLy8gbGV0IG9yaUhlaWdodCA9IDEwMCAtIHRoaXMuaGVpZ2h0O1xyXG4gICAgLy8gdGhpcy5tb2RhbFdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArICgxMDAtdGhpcy5oZWlnaHQpICsgJyUpJztcclxuICAgIC8vIGNvbnNvbGUubG9nKG9yaUhlaWdodCk7XHJcbiAgICBjb25zb2xlLmxvZyhcIm1hcmVpc3lhXCIpO1xyXG4gICAgY29uc29sZS5sb2codGhpcy5ob2xkZXIpO1xyXG4gICAgdGhpcy5wYW5Eb3duID0gbmV3IHdpbmRvd1snSGFtbWVyJ10odGhpcy5ob2xkZXIpO1xyXG4gICAgdGhpcy5wYW5Eb3duLmFkZCggbmV3IHdpbmRvd1snSGFtbWVyJ10uUGFuKHsgZGlyZWN0aW9uOiB3aW5kb3dbJ0hhbW1lciddLkRJUkVDVElPTl9BTEwsIHRocmVzaG9sZDogMCB9KSApO1xyXG4gICAgdGhpcy5wYW5Eb3duLm9uKCdwYW4nLCAoZXYpID0+e1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlRyeSBIYXJkIVwiKTtcclxuICAgICAgdmFyIGVsZW0gPSBldi50YXJnZXQ7XHJcbiAgICAgIC8vIHZhciBvcmlIZWlnaHQgPSAodGhpcy5tb2RhbFdyYXBwZXIub2Zmc2V0SGVpZ2h0LzEwMCkgKiB0aGlzLmhlaWdodDtcclxuXHJcbiAgICAgIGlmICghdGhpcy5pc0RyYWdnaW5nKSB7XHJcbiAgICAgICAgdGhpcy5pc0RyYWdnaW5nID0gdHJ1ZTtcclxuICAgICAgICB0aGlzLmxhc3RQb3NZID0gMDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdmFyIHBvc1kgPSBldi5kZWx0YVkgKyB0aGlzLmxhc3RQb3NZO1xyXG4gICAgICBcclxuICAgICAgLy8gdmFyIG91dENsb3NlID0gKHRoaXMubW9kYWxXcmFwcGVyLm9mZnNldEhlaWdodCAvIDEwMCkgKiA4MDtcclxuICAgICAgdmFyIG91dENsb3NlID0gdGhpcy5tb2RhbFdyYXBwZXIub2Zmc2V0SGVpZ2h0IC0gNjA7XHJcbiAgICAgIGlmKHBvc1kgPj0gMCl7XHJcbiAgICAgICAgdGhpcy5tb2RhbFdyYXBwZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVkoJyArIHBvc1kgKyAncHgpJztcclxuICAgICAgICB0aGlzLm1vZGFsV3JhcHBlci5zdHlsZS50cmFuc2l0aW9uID0gJ2FsbCAwbXMnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBpZiAoZXYuaXNGaW5hbCkge1xyXG4gICAgICAgIHRoaXMuaXNEcmFnZ2luZyA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMubW9kYWxXcmFwcGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVZKDBweCknO1xyXG4gICAgICAgIHRoaXMubW9kYWxXcmFwcGVyLnN0eWxlLnRyYW5zaXRpb24gPSAnYWxsIDMwMG1zJztcclxuICAgICAgfVxyXG4gICAgICBpZiAocG9zWSA+IG91dENsb3NlICkge1xyXG4gICAgICAgIHRoaXMubW9kYWxDb250cm9sbGVyLmRpc21pc3MoKTtcclxuICAgICAgfVxyXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm1vZGFsV3JhcHBlcik7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuaXNEcmFnZ2luZyk7XHJcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubGFzdFBvc1kpO1xyXG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zbGF0ZVk6IFwiICtwb3NZKTtcclxuICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgY2xvc2VNb2RhbCgpe1xyXG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZGlzbWlzcygpO1xyXG4gIH1cclxuXHJcbn1cclxuIl19