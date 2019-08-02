import { OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
export declare class MyErrorStateMatcher implements ErrorStateMatcher {
    isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean;
}
export declare class GdInputComponent implements OnInit {
    color: any;
    placeholder: any;
    label: any;
    type: any;
    required: any;
    hint: any;
    emailFormControl: any;
    basicFormControl: any;
    matcher: any;
    constructor();
    ngOnInit(): void;
    checkName(): any;
}
