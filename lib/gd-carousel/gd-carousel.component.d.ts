import { OnInit } from '@angular/core';
import 'hammerjs';
export declare class GdCarouselComponent implements OnInit {
    arraySection: any;
    totalSection: any;
    activeSection: any;
    carouselWrapper: any;
    carouselCount: any;
    carouselSensitivity: number;
    carouselTimer: any;
    carouselManager: any;
    constructor();
    ngOnInit(): void;
    goToSection(number: any): void;
}
