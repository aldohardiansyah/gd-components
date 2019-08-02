import { OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
export declare class GdCheckboxComponent implements OnInit {
    text: any;
    checked: boolean;
    color: ThemePalette;
    disableRipple: boolean;
    disabled: any;
    required: boolean;
    labelPosition: 'before' | 'after';
    constructor();
    ngOnInit(): void;
}
