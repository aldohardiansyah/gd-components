import { OnInit } from '@angular/core';
import { ThemePalette, MatRadioButton } from '@angular/material';
export declare class GdRadiobuttonComponent implements OnInit {
    color: ThemePalette;
    disableRipple: boolean;
    disabled: boolean;
    labelPosition: 'before' | 'after';
    required: boolean;
    selected: MatRadioButton;
    checked: boolean;
    text: any;
    value: any;
    ariaLabel: string;
    constructor();
    ngOnInit(): void;
}
