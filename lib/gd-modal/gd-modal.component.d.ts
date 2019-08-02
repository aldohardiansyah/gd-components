import { OnInit } from '@angular/core';
import 'hammerjs';
import { ModalController, NavController } from '@ionic/angular';
import { Router } from '@angular/router';
export declare class GdModalComponent implements OnInit {
    modalController: ModalController;
    nav: NavController;
    private router;
    height: number;
    holder: any;
    panDown: any;
    isSwipe: any;
    modalWrapper: any;
    isHide: any;
    setContentH: any;
    lastPosX: number;
    lastPosY: number;
    isDragging: boolean;
    constructor(modalController: ModalController, nav: NavController, router: Router);
    ngOnInit(): void;
    closeModal(): void;
}
