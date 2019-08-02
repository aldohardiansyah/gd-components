import { OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';
export declare class GdSelect2Component implements OnInit {
    mode: any;
    selectEmployee: any;
    listSelectedEmployee: any;
    filterList: any;
    selectedFilter: any;
    selectedData: EventEmitter<any>;
    selectedFilterData: EventEmitter<any>;
    text: string;
    selectedEmployee: any;
    indexLeave: any;
    currentYSelect: any;
    currentHeightSelect: any;
    toggleMargin: any;
    textSearch: any;
    textSearch2: any;
    constructor();
    ngOnInit(): void;
    search(val: any, type: any): void;
    cancel(type: any): void;
    selectItem(item: any, i: any): void;
    pushItem(item: any, i: any): void;
    animate(item: any, i: any): void;
    removeItem(item: any, i: any): void;
    clearAll(): void;
    moveAll(): void;
    selectFilter(val: any): void;
}
