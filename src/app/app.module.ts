import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';
import {SkuFormComponent} from './sku-form/sku-form.component';
import { NgFormBuilderComponent } from './ng-form-builder/ng-form-builder.component';
import { WidthValidationsExplicitComponent } from './width-validations-explicit/width-validations-explicit.component';

@NgModule({
    declarations: [
        AppComponent,
        SkuFormComponent,
        NgFormBuilderComponent,
        WidthValidationsExplicitComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
