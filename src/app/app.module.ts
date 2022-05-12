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
import {FormDataService} from "../services/form-data.service";

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    FirstFormComponent,
    SecondFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ButtonModule
  ],
  providers: [DialogService, DialogOpenerService, FormDataService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
