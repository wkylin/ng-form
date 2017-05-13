import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
    selector: 'app-form-ng-model',
    templateUrl: './form-ng-model.component.html',
    styleUrls: ['./form-ng-model.component.css']
})
export class FormNgModelComponent implements OnInit {
    myForm: FormGroup;
    productName: string;
    
    constructor(fb: FormBuilder) {
        this.myForm = fb.group({
            'productName': ['', Validators.required]
        });
    }
    
    onSubmit(value: string): void {
        console.log('you submitted value: ', value);
    }

    ngOnInit() {
    }
    
}
