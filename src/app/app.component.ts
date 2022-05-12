import {Component} from '@angular/core';
import {DialogOpenerService} from "../services/dialog-opener.service";
import {DialogComponentDataConfigModel} from "../models/dialog-component-data-config.model";
import {DialogComponent, FirstComponentConfig, SecondComponentConfig} from "../components/dialog/dialog.component";
import {FirstFormComponent} from "../components/forms/first-form/first-form.component";
import {SecondFormComponent} from "../components/forms/second-form/second-form.component";

export type FirstDialogType = DialogComponentDataConfigModel<DialogComponent, {
  firstComponentData: FirstComponentConfig,
  secondComponentData: SecondComponentConfig,
}>;

const firstDialogConfig: FirstDialogType = {
  componentType: DialogComponent,
  configData: {
    firstComponentData: {
      componentType: FirstFormComponent,
      exampleInput: 'Hello from FirstFormComponent =) данные из Dialog'
    },
    secondComponentData: {
      componentType: SecondFormComponent,
      exampleArray: [{title: '1'}, {title: '2'}, {title: '3'}, {title: 'данные из Dialog'}]
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private readonly dialogService: DialogOpenerService) {
  }

  public openDialog(): void {
    this.dialogService.openDialog(firstDialogConfig);
  }
}
