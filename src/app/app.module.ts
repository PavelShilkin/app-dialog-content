import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ButtonModule} from "primeng/button";
import {DialogService} from "primeng/dynamicdialog";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FirstFormComponent} from "../components/forms/first-form/first-form.component";
import {SecondFormComponent} from "../components/forms/second-form/second-form.component";
import {DialogComponent} from "../components/dialog/dialog.component";
import {DialogOpenerService} from "../services/dialog-opener.service";
import {FirstFormStateService} from "../services/first-form-state.service";
import {BaseFormComponent} from "../components/forms/base-form.component";
import {FetchService} from "../services/fetch.service";
import {SecondFormStateService} from "../services/second-form-state.service";
import {ComponentCreatorsService} from "../services/component-creators.service";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FirstFormComponent,
    SecondFormComponent,
    BaseFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [
    DialogService,
    DialogOpenerService,
    FirstFormStateService,
    SecondFormStateService,
    FetchService,
    ComponentCreatorsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
