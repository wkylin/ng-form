import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
    selector: 'app-width-validations-explicit',
    templateUrl: './width-validations-explicit.component.html',
    styleUrls: ['./width-validations-explicit.component.css']
})
export class WidthValidationsExplicitComponent implements OnInit {
    myForm: FormGroup;
    
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'sku': ['', Validators.required]
        });
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
    
    ngOnInit() {
    }
    
}
