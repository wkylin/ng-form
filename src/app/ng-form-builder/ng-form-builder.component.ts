import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-ng-form-builder',
    templateUrl: './ng-form-builder.component.html',
    styleUrls: ['./ng-form-builder.component.css']
})
export class NgFormBuilderComponent implements OnInit {
    
    myForm: FormGroup;
    
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({'sku': ['ABC123']});
    }
    
    onSubmit(value: string): void{
        console.log('you submitted value:', value);
    }
    
    ngOnInit() {
    }
    
}
