import { OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
export declare class GdToggleComponent implements OnInit {
    color: ThemePalette;
    checked: boolean;
    disableRipple: boolean;
    disabled: boolean;
    required: boolean;
    text: any;
    constructor();
    ngOnInit(): void;
}
