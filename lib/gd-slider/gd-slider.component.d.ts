import { OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
import 'hammerjs';
export declare class GdSliderComponent implements OnInit {
    color: ThemePalette;
    disabled: boolean;
    max: number;
    min: number;
    invert: boolean;
    value: number | null;
    vertical: boolean;
    step: number;
    thumbLabel: boolean;
    tickInterval: number | "auto";
    constructor();
    ngOnInit(): void;
}
