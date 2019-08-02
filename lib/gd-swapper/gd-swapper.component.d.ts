import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
export declare class GdSwapperComponent implements OnInit {
    totalSection: any;
    headPanel: any;
    bodyPanel: any;
    panel: any;
    totalPanel: any;
    widthPanel: any;
    containerPanel: any;
    dateToday: any;
    currentDate: any;
    currentDateChange: EventEmitter<any>;
    dataSwapper: any;
    dataResult: EventEmitter<any>;
    currentPos: any;
    limit: any;
    result: any;
    constructor();
    ngOnInit(): void;
    ngAfterViewInit(): void;
    toPrev(): void;
    toNext(): void;
}
