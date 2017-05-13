import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';


function skuValidator(control: FormControl): { [s: string]: boolean } {
    if (!control.value.match(/^123/)) {
        return {invalidSku: true};
    }
}

@Component({
    selector: 'app-width-validations-explicit',
    templateUrl: './width-validations-explicit.component.html',
    styleUrls: ['./width-validations-explicit.component.css']
})
export class WidthValidationsExplicitComponent implements OnInit {
    myForm: FormGroup;
    
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            // 'sku': ['', Validators.required]
            'sku': ['', Validators.compose([Validators.required, skuValidator])]
        });
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value:', value);
    }
    
    ngOnInit() {
    }
    
}
