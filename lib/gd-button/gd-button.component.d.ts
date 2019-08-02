import { OnInit, EventEmitter } from '@angular/core';
export declare class GdButtonComponent implements OnInit {
    text: any;
    color: any;
    size: any;
    type: any;
    coba: any;
    src: any;
    name: any;
    loadingPlaceholder: any;
    loading: Boolean;
    loadingProcess: Boolean;
    onClickBtn: EventEmitter<any>;
    constructor();
    ngOnInit(): void;
    getClick(id: any): void;
    onClick(): void;
}
