/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
var GdToastComponent = /** @class */ (function () {
    function GdToastComponent() {
        this.botValue = 0;
    }
    /**
     * @return {?}
     */
    GdToastComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
    };
    /**
     * @return {?}
     */
    GdToastComponent.prototype.myFunction = /**
     * @return {?}
     */
    function () {
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
            for (var j = 0; j < toastChild.length - 3; j++) {
                toastChild[j].remove();
            }
        }
        for (var i = 0; i < toastChild.length; i++) {
            console.log(i, toastChild[i]);
            /** @type {?} */
            var target = (/** @type {?} */ (toastChild[i]));
            target.style.bottom = ((toastChild.length - i) * 60) + 'px';
        }
        setTimeout((/**
         * @return {?}
         */
        function () {
            multiple.remove();
        }), 5000);
    };
    GdToastComponent.decorators = [
        { type: Component, args: [{
                    selector: 'gd-toast',
                    template: "<div id=\"toast\">\r\n    <button (click)=\"myFunction()\" class=\"btntoast\">Show Snackbar</button>\r\n    \r\n</div>\r\n",
                    styles: [".btntoast{position:relative;background-color:#63befb;border:none;font-size:12px;color:#fff;padding:10px 24px;text-align:center;-webkit-transition-duration:.7s;transition-duration:.7s;text-decoration:none;overflow:hidden;cursor:pointer;border-radius:10px}.btntoast:hover{box-shadow:0 12px 16px 0 rgba(0,0,0,.24),0 17px 50px 0 rgba(0,0,0,.19)}.bottom{position:fixed;bottom:10px;left:50%;-webkit-transform:translateX(-50%);transform:translateX(-50%);z-index:99999;background-color:red}.snackbar{visibility:hidden;min-width:250px;margin-left:-125px;background-color:#333;color:#fff;text-align:center;border-radius:2px;padding:16px;position:fixed;z-index:1;left:50%;bottom:30px;font-size:17px}.snackbar.show{visibility:visible;-webkit-animation:.5s fadein,.5s 2.5s fadeout;animation:.5s fadein,.5s 2.5s fadeout}@-webkit-keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@keyframes fadein{from{bottom:0;opacity:0}to{bottom:30px;opacity:1}}@-webkit-keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}@keyframes fadeout{from{bottom:30px;opacity:1}to{bottom:0;opacity:0}}.divToast{bottom:-20px}@-webkit-keyframes slide-top{0%{-webkit-transform:translateY(120px);transform:translateY(120px)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}@keyframes slide-top{0%{-webkit-transform:translateY(120px);transform:translateY(120px)}100%{-webkit-transform:translateY(-100px);transform:translateY(-100px)}}"]
                }] }
    ];
    return GdToastComponent;
}());
export { GdToastComponent };
if (false) {
    /** @type {?} */
    GdToastComponent.prototype.botValue;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2QtdG9hc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZ2QtY29tcG9uZW50cy8iLCJzb3VyY2VzIjpbImxpYi9nZC10b2FzdC9nZC10b2FzdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFFbEQ7SUFBQTtRQU9FLGFBQVEsR0FBTyxDQUFDLENBQUM7SUE0Q25CLENBQUM7Ozs7SUEzQ0MsbUNBQVE7OztJQUFSO0lBQ0EsQ0FBQzs7OztJQUVELHFDQUFVOzs7SUFBVjs7WUFFTSxDQUFDLEdBQUcsUUFBUSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUM7O1lBQ3BDLFFBQVEsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQztRQUM1QyxRQUFRLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuQyxDQUFDLENBQUMsV0FBVyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hCLFFBQVEsQ0FBQyxTQUFTLEdBQUcsY0FBYyxHQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO1FBQ25FLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRSxLQUFLLENBQUM7UUFDM0IsUUFBUSxDQUFDLEtBQUssQ0FBQyxlQUFlLEdBQUcsU0FBUyxDQUFDO1FBQzNDLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFFLE1BQU0sQ0FBQztRQUNoQyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRSxPQUFPLENBQUM7UUFDakMsUUFBUSxDQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUMsTUFBTSxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFDLFFBQVEsQ0FBQztRQUNsQyxRQUFRLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBQyxHQUFHLENBQUM7UUFDMUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLEdBQUMsTUFBTSxDQUFDO1FBQ2pDLFFBQVEsQ0FBQyxLQUFLLENBQUMsVUFBVSxHQUFHLDZDQUE2QyxDQUFDO1FBQzFFLFFBQVEsQ0FBQyxLQUFLLENBQUMsU0FBUyxHQUFHLGdFQUFnRSxDQUFDO1FBQzVGLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxVQUFVLENBQUMsQ0FBQzs7WUFDbEMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxnQkFBZ0IsQ0FBQyxXQUFXLENBQUM7UUFFdkQsSUFBSSxVQUFVLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTtZQUMxQixLQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsVUFBVSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQzdDLFVBQVUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQzthQUN4QjtTQUVGO1FBRUQsS0FBSSxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDekMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O2dCQUMxQixNQUFNLEdBQUcsbUJBQUEsVUFBVSxDQUFDLENBQUMsQ0FBQyxFQUFlO1lBQ3pDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQztTQUN6RDtRQUNELFVBQVU7OztRQUFDO1lBQ1QsUUFBUSxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3BCLENBQUMsR0FBRSxJQUFJLENBQUMsQ0FBQztJQUNYLENBQUM7O2dCQS9DRixTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLFVBQVU7b0JBQ3BCLHNJQUF3Qzs7aUJBRXpDOztJQStDRCx1QkFBQztDQUFBLEFBbkRELElBbURDO1NBN0NZLGdCQUFnQjs7O0lBQzNCLG9DQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFRhcmdldExvY2F0b3IgfSBmcm9tICdzZWxlbml1bS13ZWJkcml2ZXInO1xyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2dkLXRvYXN0JyxcclxuICB0ZW1wbGF0ZVVybDogJy4vZ2QtdG9hc3QuY29tcG9uZW50Lmh0bWwnLFxyXG4gIHN0eWxlVXJsczogWycuL2dkLXRvYXN0LmNvbXBvbmVudC5zY3NzJ10sXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgR2RUb2FzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcbiAgYm90VmFsdWU6YW55ID0gMDtcclxuICBuZ09uSW5pdCgpIHtcclxuICB9XHJcblxyXG4gIG15RnVuY3Rpb24oKSB7XHJcbiAgIFxyXG4gICAgdmFyIHggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRvYXN0XCIpO1xyXG4gICAgdmFyIG11bHRpcGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgIG11bHRpcGxlLmNsYXNzTGlzdC5hZGQoXCJkaXZUb2FzdFwiKTtcclxuICAgIHguYXBwZW5kQ2hpbGQobXVsdGlwbGUpO1xyXG4gICAgbXVsdGlwbGUuaW5uZXJIVE1MID0gXCJIZWxsbyBXb3JsZCBcIisgTWF0aC5mbG9vcihEYXRlLm5vdygpIC8gMTAwMCk7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjtcclxuICAgIG11bHRpcGxlLnN0eWxlLmxlZnQ9IFwiNTAlXCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcIiNhNmE2YTZcIjtcclxuICAgIG11bHRpcGxlLnN0eWxlLmZvbnRTaXplPSBcIjE1cHhcIjtcclxuICAgIG11bHRpcGxlLnN0eWxlLm1pbldpZHRoPSBcIjI1MHB4XCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5oZWlnaHQ9XCI1MHB4XCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS50ZXh0QWxpZ249XCJjZW50ZXJcIjtcclxuICAgIG11bHRpcGxlLnN0eWxlLnpJbmRleD1cIjFcIjtcclxuICAgIG11bHRpcGxlLnN0eWxlLnBhZGRpbmdUb3A9XCIxMHB4XCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS50cmFuc2l0aW9uID0gXCJib3R0b20gNTAwbXMgY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpXCI7XHJcbiAgICBtdWx0aXBsZS5zdHlsZS5hbmltYXRpb24gPSBcInNsaWRlLXRvcCAxMDAwbXMgY3ViaWMtYmV6aWVyKDAuNzU1LCAwLjA1MCwgMC44NTUsIDAuMDYwKSBib3RoXCI7XHJcbiAgICBjb25zb2xlLmxvZygnY2hpbGRyZW4nLCB4LmNoaWxkTm9kZXMpO1xyXG4gICAgdmFyIHRvYXN0Q2hpbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLmRpdlRvYXN0XCIpO1xyXG4gICAgXHJcbiAgICBpZiAodG9hc3RDaGlsZC5sZW5ndGggPj0gNCkge1xyXG4gICAgICBmb3IobGV0IGogPSAwOyBqIDwgdG9hc3RDaGlsZC5sZW5ndGggLSAzOyBqKyspIHtcclxuICAgICAgICB0b2FzdENoaWxkW2pdLnJlbW92ZSgpO1xyXG4gICAgICB9XHJcbiAgICAgXHJcbiAgICB9XHJcblxyXG4gICAgZm9yKGxldCBpID0gMDsgaSA8IHRvYXN0Q2hpbGQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgY29uc29sZS5sb2coaSwgdG9hc3RDaGlsZFtpXSk7XHJcbiAgICAgIGxldCB0YXJnZXQgPSB0b2FzdENoaWxkW2ldIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgICB0YXJnZXQuc3R5bGUuYm90dG9tID0gKCh0b2FzdENoaWxkLmxlbmd0aC1pKSAqIDYwKSsncHgnO1xyXG4gICAgfVxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7IFxyXG4gICAgICBtdWx0aXBsZS5yZW1vdmUoKTtcclxuICAgIH0sIDUwMDApO1xyXG4gIH1cclxuICAgXHJcblxyXG4gXHJcbn1cclxuIl19