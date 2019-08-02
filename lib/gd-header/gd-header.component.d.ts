import { OnInit, EventEmitter } from '@angular/core';
export declare class GdHeaderComponent implements OnInit {
    breadcrumbList: any;
    avatarSrc: any;
    avatarSize: any;
    employeeName: any;
    searchBar: any;
    logoSrc: any;
    arrowClick: EventEmitter<any>;
    arrowIcon: boolean;
    constructor();
    ngOnInit(): void;
    doArrowClick(): void;
}
