import { OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material';
export declare class GdProgressbarComponent implements OnInit {
    bufferValue: number;
    color: ThemePalette;
    mode: 'determinate' | 'indeterminate' | 'buffer' | 'query';
    value: number;
    constructor();
    ngOnInit(): void;
}
