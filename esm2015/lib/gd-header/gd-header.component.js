/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Output, EventEmitter } from '@angular/core';
export class GdHeaderComponent {
    constructor() {
        this.arrowClick = new EventEmitter();
        this.arrowIcon = true;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        console.log(this.logoSrc);
    }
    /**
     * @return {?}
     */
    doArrowClick() {
        this.arrowClick.emit();
        this.arrowIcon = !this.arrowIcon;
    }
}
GdHeaderComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-header',
                template: "<div class=\"GdHeader\">\r\n    <div class=\"menu start\">\r\n        <div *ngIf=\"logoSrc\" class=\"logo\">\r\n            <img src=\"{{logoSrc}}\" alt=\"\">\r\n        </div>\r\n\r\n        <gd-breadcrumb [breadcrumbList]=breadcrumbList></gd-breadcrumb>\r\n\r\n        <div *ngIf=\"searchBar\" class=\"search-bar\">\r\n            <input type=\"text\" class=\"search-input\" >\r\n            <svg class=\"search-icon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"22.761\" height=\"22.578\" viewBox=\"0 0 22.761 22.578\">\r\n            <g id=\"Group_8226\" data-name=\"Group 8226\" transform=\"translate(-676.854 -74)\">\r\n                <g id=\"Ellipse_185\" data-name=\"Ellipse 185\" transform=\"translate(676.854 85.289) rotate(-45)\" fill=\"none\" stroke=\"#9daec0\" stroke-width=\"2\">\r\n                <circle cx=\"7.983\" cy=\"7.983\" r=\"7.983\" stroke=\"none\"/>\r\n                <circle cx=\"7.983\" cy=\"7.983\" r=\"6.983\" fill=\"none\"/>\r\n                </g>\r\n                <path id=\"Path_2263\" data-name=\"Path 2263\" d=\"M-5616.63-4158.332v7.358\" transform=\"translate(7605.646 -940.531) rotate(-45)\" fill=\"#fff\" stroke=\"#9daec0\" stroke-width=\"2\"/>\r\n            </g>\r\n            </svg>\r\n        </div>\r\n    </div>\r\n    <div class=\"menu end\">\r\n\r\n        <gd-avatar [avatarSrc]=avatarSrc [avatarSize]=avatarSize [avatarShadow]=true></gd-avatar>\r\n        <div class=\"greeting\">Welcome, {{employeeName}} ! \r\n        </div>\r\n        <div class=\"arrow\" (click)=\"doArrowClick()\">\r\n            <svg *ngIf=\"arrowIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"7.41\" viewBox=\"0 0 12 7.41\">\r\n                <path id=\"Path_512\" data-name=\"Path 512\" d=\"M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z\" transform=\"translate(18 -8.59) rotate(90)\" fill=\"#9daec0\"/>\r\n            </svg>\r\n            <svg *ngIf=\"!arrowIcon\" xmlns=\"http://www.w3.org/2000/svg\" width=\"12\" height=\"7.41\" viewBox=\"0 0 12 7.41\">\r\n                <path id=\"Path_512\" data-name=\"Path 512\" d=\"M10,6,8.59,7.41,13.17,12,8.59,16.59,10,18l6-6Z\" transform=\"translate(-6 16) rotate(-90)\" fill=\"#9daec0\"/>\r\n            </svg>                  \r\n        </div>\r\n\r\n    </div>\r\n</div>",
                styles: [".GdHeader{display:-webkit-box;display:flex;width:100%;place-content:center space-between;padding:16px 20px}.GdHeader .start{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;place-content:start center}.GdHeader .end{display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;place-content:end center;margin:auto 10px}.GdHeader .end .greeting{vertical-align:middle;color:var(--ion-color-text-secondary);margin:auto;padding:0 13px;font-size:14px}.GdHeader .end .arrow{margin:auto;padding:5px;border-radius:5px;background-color:transparent;-webkit-transition:background-color .25s;transition:background-color .25s}.GdHeader .end .arrow svg{height:10px!important;width:10px!important}.GdHeader .end .arrow:hover{background-color:var(--ion-color-outline);border-radius:5px;cursor:pointer}.GdHeader gd-avatar:hover{-webkit-transform:scale(1.5);transform:scale(1.5);cursor:pointer}.GdHeader gd-avatar{-webkit-transform:scale(1);transform:scale(1);-webkit-transition:-webkit-transform .25s;transition:transform .25s;transition:transform .25s,-webkit-transform .25s}.GdHeader .logo{margin:auto 5px}.GdHeader .logo img{width:180px}.GdHeader .search-bar{position:relative;display:-webkit-box;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row;place-content:start center;margin:auto 10px}.GdHeader .search-bar .search-input{position:relative;border:none;background-color:#eeeef3;border-radius:10px;width:180px;height:35px;margin:auto;padding:5px 5px 5px 35px;-webkit-transition:width .25s;transition:width .25s;font-size:14px}.GdHeader .search-bar .search-input:focus{width:250px;outline:0!important}.GdHeader .search-bar .search-icon{position:absolute!important;margin:auto;left:6px!important;top:8px!important;height:18px!important;width:18px!important}@media only screen and (max-width:720px){.GdHeader{padding:10px}.GdHeader .end .greeting,.GdHeader .start .logo,.GdHeader gd-breadcrumb{display:none}}"]
            }] }
];
/** @nocollapse */
GdHeaderComponent.ctorParameters = () => [];
GdHeaderComponent.propDecorators = {
    breadcrumbList: [{ type: Input }],
    avatarSrc: [{ type: Input }],
    avatarSize: [{ type: Input }],
    employeeName: [{ type: Input }],
    searchBar: [{ type: Input }],
    logoSrc: [{ type: Input }],
    arrowClick: [{ type: Output }]
};
if (false) {
    /** @type {?} */
    GdHeaderComponent.prototype.breadcrumbList;
    /** @type {?} */
    GdHeaderComponent.prototype.avatarSrc;
    /** @type {?} */
    GdHeaderComponent.prototype.avatarSize;
    /** @type {?} */
    GdHeaderComponent.prototype.employeeName;
    /** @type {?} */
    GdHeaderComponent.prototype.searchBar;
    /** @type {?} */
    GdHeaderComponent.prototype.logoSrc;
    /** @type {?} */
    GdHeaderComponent.prototype.arrowClick;
    /** @type {?} */
    GdHeaderComponent.prototype.arrowIcon;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtaGVhZGVyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2dkLWNvbXBvbmVudHMvIiwic291cmNlcyI6WyJsaWIvZ2QtaGVhZGVyL2dkLWhlYWRlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFPL0UsTUFBTSxPQUFPLGlCQUFpQjtJQWE1QjtRQUpVLGVBQVUsR0FBdUIsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUU5RCxjQUFTLEdBQVMsSUFBSSxDQUFDO0lBRVAsQ0FBQzs7OztJQUVqQixRQUFRO1FBQ04sT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDNUIsQ0FBQzs7OztJQUdELFlBQVk7UUFDVixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxTQUFTLEdBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQ2pDLENBQUM7OztZQTVCRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFdBQVc7Z0JBQ3JCLDZ1RUFBeUM7O2FBRTFDOzs7Ozs2QkFHRSxLQUFLO3dCQUNMLEtBQUs7eUJBQ0wsS0FBSzsyQkFDTCxLQUFLO3dCQUNMLEtBQUs7c0JBQ0wsS0FBSzt5QkFFTCxNQUFNOzs7O0lBUFAsMkNBQXdCOztJQUN4QixzQ0FBbUI7O0lBQ25CLHVDQUFvQjs7SUFDcEIseUNBQXNCOztJQUN0QixzQ0FBbUI7O0lBQ25CLG9DQUFpQjs7SUFFakIsdUNBQThEOztJQUU5RCxzQ0FBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLWhlYWRlcicsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLWhlYWRlci5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vZ2QtaGVhZGVyLmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBHZEhlYWRlckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblxyXG4gIEBJbnB1dCgpIGJyZWFkY3J1bWJMaXN0O1xyXG4gIEBJbnB1dCgpIGF2YXRhclNyYztcclxuICBASW5wdXQoKSBhdmF0YXJTaXplO1xyXG4gIEBJbnB1dCgpIGVtcGxveWVlTmFtZTtcclxuICBASW5wdXQoKSBzZWFyY2hCYXI7XHJcbiAgQElucHV0KCkgbG9nb1NyYztcclxuXHJcbiAgQE91dHB1dCgpIGFycm93Q2xpY2sgOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcclxuXHJcbiAgYXJyb3dJY29uOmJvb2xlYW49dHJ1ZTtcclxuXHJcbiAgY29uc3RydWN0b3IoKSB7IH1cclxuXHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyh0aGlzLmxvZ29TcmMpO1xyXG4gIH1cclxuXHJcblxyXG4gIGRvQXJyb3dDbGljaygpe1xyXG4gICAgdGhpcy5hcnJvd0NsaWNrLmVtaXQoKTtcclxuICAgIHRoaXMuYXJyb3dJY29uPSF0aGlzLmFycm93SWNvbjtcclxuICB9XHJcblxyXG59XHJcbiJdfQ==