/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
export class GdToastComponent {
    constructor() {
        this.botValue = 0;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
    /**
     * @return {?}
     */
    myFunction() {
        /** @type {?} */
        var x = document.getElementById("toast");
        /** @type {?} */
        var multiple = document.createElement("div");
        multiple.classList.add("divToast");
        x.appendChild(multiple);
        multiple.innerHTML = "Hello World " + Math.floor(Date.now() / 1000);
        multiple.style.position = "fixed";
        multiple.style.left = "50%";
        multiple.style.backgroundColor = "#a6a6a6";
        multiple.style.fontSize = "15px";
        multiple.style.minWidth = "250px";
        multiple.style.height = "50px";
        multiple.style.textAlign = "center";
        multiple.style.zIndex = "1";
        multiple.style.paddingTop = "10px";
        multiple.style.transition = "bottom 500ms cubic-bezier(0.4, 0.0, 0.2, 1)";
        multiple.style.animation = "slide-top 1000ms cubic-bezier(0.755, 0.050, 0.855, 0.060) both";
        console.log('children', x.childNodes);
        /** @type {?} */
        var toastChild = document.querySelectorAll(".divToast");
        if (toastChild.length >= 4) {
            for (let j = 0; j < toastChild.length - 3; j++) {
                toastChild[j].remove();
            }
        }
        for (let i = 0; i < toastChild.length; i++) {
            console.log(i, toastChild[i]);
            /** @type {?} */
            let target = (/** @type {?} */ (toastChild[i]));
            target.style.bottom = ((toastChild.length - i) * 60) + 'px';
        }
        setTimeout((/**
         * @return {?}
         */
        () => {
            multiple.remove();
        }), 5000);
    }
}
GdToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'gd-toast',
                template: "<div id=\"toast\">\r\n    <button (click)=\"myFunction()\" class=\"btntoast\">Show Snackbar</button>\r\n    \r\n</div>\r\n",
                styles: [".btntoast{position:relative;background-color:#63befb;border:none;font-size:12px;color:#fff;padding:10px 24px;text-align:center;-webkit-transition-duration:.7s;transition-duration:.7s;text-decoration:none;overflow:hidden;cursor:pointer;border-radius:10px}.btntoast:hover{box-shadow:0 12px 16px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.bottom{position:fixed;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:99999;background-color:red}.snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}.snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}.divToast{bottom:-20px}@-webkit-keyframes slide-top{0%{-webkit-transform:translateY(120px);transform:translateY(120px)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}@keyframes slide-top{0%{-webkit-transform:translateY(120px);transform:translateY(120px)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}"]
            }] }
];
if (false) {
    /** @type {?} */
    GdToastComponent.prototype.botValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtdG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC10b2FzdC9nZC10b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFRbEQsTUFBTSxPQUFPLGdCQUFnQjtJQU43QjtRQU9FLGFBQVEsR0FBTyxDQUFDLENBQUM7SUE0Q25CLENBQUM7Ozs7SUEzQ0MsUUFBUTtJQUNSLENBQUM7Ozs7SUFFRCxVQUFVOztZQUVKLENBQUMsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQzs7WUFDcEMsUUFBUSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDO1FBQzVDLFFBQVEsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25DLENBQUMsQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEIsUUFBUSxDQUFDLFNBQVMsR0FBRyxjQUFjLEdBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLEdBQUcsSUFBSSxDQUFDLENBQUM7UUFDbkUsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFFLEtBQUssQ0FBQztRQUMzQixRQUFRLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxTQUFTLENBQUM7UUFDM0MsUUFBUSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUUsTUFBTSxDQUFDO1FBQ2hDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFFLE9BQU8sQ0FBQztRQUNqQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxNQUFNLENBQUM7UUFDN0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUMsUUFBUSxDQUFDO1FBQ2xDLFFBQVEsQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFDLEdBQUcsQ0FBQztRQUMxQixRQUFRLENBQUMsS0FBSyxDQUFDLFVBQVUsR0FBQyxNQUFNLENBQUM7UUFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUcsNkNBQTZDLENBQUM7UUFDMUUsUUFBUSxDQUFDLEtBQUssQ0FBQyxTQUFTLEdBQUcsZ0VBQWdFLENBQUM7UUFDNUYsT0FBTyxDQUFDLEdBQUcsQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDOztZQUNsQyxVQUFVLEdBQUcsUUFBUSxDQUFDLGdCQUFnQixDQUFDLFdBQVcsQ0FBQztRQUV2RCxJQUFJLFVBQVUsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO1lBQzFCLEtBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDN0MsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO2FBQ3hCO1NBRUY7UUFFRCxLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7Z0JBQzFCLE1BQU0sR0FBRyxtQkFBQSxVQUFVLENBQUMsQ0FBQyxDQUFDLEVBQWU7WUFDekMsTUFBTSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUMsSUFBSSxDQUFDO1NBQ3pEO1FBQ0QsVUFBVTs7O1FBQUMsR0FBRyxFQUFFO1lBQ2QsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7OztZQS9DRixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLHNJQUF3Qzs7YUFFekM7Ozs7SUFHQyxvQ0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBUYXJnZXRMb2NhdG9yIH0gZnJvbSAnc2VsZW5pdW0td2ViZHJpdmVyJztcclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdnZC10b2FzdCcsXHJcbiAgdGVtcGxhdGVVcmw6ICcuL2dkLXRvYXN0LmNvbXBvbmVudC5odG1sJyxcclxuICBzdHlsZVVybHM6IFsnLi9nZC10b2FzdC5jb21wb25lbnQuc2NzcyddLFxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEdkVG9hc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG4gIGJvdFZhbHVlOmFueSA9IDA7XHJcbiAgbmdPbkluaXQoKSB7XHJcbiAgfVxyXG5cclxuICBteUZ1bmN0aW9uKCkge1xyXG4gICBcclxuICAgIHZhciB4ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0b2FzdFwiKTtcclxuICAgIHZhciBtdWx0aXBsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICBtdWx0aXBsZS5jbGFzc0xpc3QuYWRkKFwiZGl2VG9hc3RcIik7XHJcbiAgICB4LmFwcGVuZENoaWxkKG11bHRpcGxlKTtcclxuICAgIG11bHRpcGxlLmlubmVySFRNTCA9IFwiSGVsbG8gV29ybGQgXCIrIE1hdGguZmxvb3IoRGF0ZS5ub3coKSAvIDEwMDApO1xyXG4gICAgbXVsdGlwbGUuc3R5bGUucG9zaXRpb24gPSBcImZpeGVkXCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5sZWZ0PSBcIjUwJVwiO1xyXG4gICAgbXVsdGlwbGUuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCIjYTZhNmE2XCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5mb250U2l6ZT0gXCIxNXB4XCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5taW5XaWR0aD0gXCIyNTBweFwiO1xyXG4gICAgbXVsdGlwbGUuc3R5bGUuaGVpZ2h0PVwiNTBweFwiO1xyXG4gICAgbXVsdGlwbGUuc3R5bGUudGV4dEFsaWduPVwiY2VudGVyXCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS56SW5kZXg9XCIxXCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5wYWRkaW5nVG9wPVwiMTBweFwiO1xyXG4gICAgbXVsdGlwbGUuc3R5bGUudHJhbnNpdGlvbiA9IFwiYm90dG9tIDUwMG1zIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKVwiO1xyXG4gICAgbXVsdGlwbGUuc3R5bGUuYW5pbWF0aW9uID0gXCJzbGlkZS10b3AgMTAwMG1zIGN1YmljLWJlemllcigwLjc1NSwgMC4wNTAsIDAuODU1LCAwLjA2MCkgYm90aFwiO1xyXG4gICAgY29uc29sZS5sb2coJ2NoaWxkcmVuJywgeC5jaGlsZE5vZGVzKTtcclxuICAgIHZhciB0b2FzdENoaWxkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaXZUb2FzdFwiKTtcclxuICAgIFxyXG4gICAgaWYgKHRvYXN0Q2hpbGQubGVuZ3RoID49IDQpIHtcclxuICAgICAgZm9yKGxldCBqID0gMDsgaiA8IHRvYXN0Q2hpbGQubGVuZ3RoIC0gMzsgaisrKSB7XHJcbiAgICAgICAgdG9hc3RDaGlsZFtqXS5yZW1vdmUoKTtcclxuICAgICAgfVxyXG4gICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0b2FzdENoaWxkLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGksIHRvYXN0Q2hpbGRbaV0pO1xyXG4gICAgICBsZXQgdGFyZ2V0ID0gdG9hc3RDaGlsZFtpXSBhcyBIVE1MRWxlbWVudDtcclxuICAgICAgdGFyZ2V0LnN0eWxlLmJvdHRvbSA9ICgodG9hc3RDaGlsZC5sZW5ndGgtaSkgKiA2MCkrJ3B4JztcclxuICAgIH1cclxuICAgIHNldFRpbWVvdXQoKCkgPT4geyBcclxuICAgICAgbXVsdGlwbGUucmVtb3ZlKCk7XHJcbiAgICB9LCA1MDAwKTtcclxuICB9XHJcbiAgIFxyXG5cclxuIFxyXG59XHJcbiJdfQ==