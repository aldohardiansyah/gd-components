import { OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
export interface Section {
    name: string;
    updated: Date;
}
export declare class GdListComponent implements OnInit {
    text: any;
    color: ThemePalette;
    disableRipple: boolean;
    checkboxPosition: 'before' | 'after';
    selected: boolean;
    value: any;
    disabled: boolean;
    constructor();
    folders: Section[];
    ngOnInit(): void;
}
