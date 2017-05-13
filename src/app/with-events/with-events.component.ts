import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators, AbstractControl} from '@angular/forms';

@Component({
  selector: 'app-with-events',
  templateUrl: './with-events.component.html',
  styleUrls: ['./with-events.component.css']
})
export class WithEventsComponent implements OnInit {
  
  myForm: FormGroup;
  sku: AbstractControl;
  
  ngOnInit() {
  }
  
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    
    this.sku = this.myForm.controls['sku'];
    
    this.sku.valueChanges.subscribe(
        (value: string) => {
          console.log('sku changed to:', value);
        }
    );
    
    this.myForm.valueChanges.subscribe(
        (form: any) => {
          console.log('form changed to:', form);
        }
    );
    
  }
  
  onSubmit(form: any): void {
    console.log('you submitted value:', form.sku);
  }
}
