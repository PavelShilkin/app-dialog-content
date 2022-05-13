import {Component} from '@angular/core';
import {DialogOpenerService} from "../services/dialog-opener.service";
import {DialogComponentDataConfigModel} from "../models/dialog-component-data-config.model";
import {DialogComponent, FirstComponentConfig, SecondComponentConfig} from "../components/dialog/dialog.component";
import {FirstFormComponent} from "../components/forms/first-form/first-form.component";
import {SecondFormComponent} from "../components/forms/second-form/second-form.component";
import {FetchService} from "../services/fetch.service";
import {FirstDataModel} from "../models/first-data.model";
import {FirstFormStateService} from "../services/first-form-state.service";
import {SecondFormStateService} from "../services/second-form-state.service";
import {forkJoin} from "rxjs";
import {SecondDataModel} from "../models/second-data.model";

export type FirstDialogType = DialogComponentDataConfigModel<DialogComponent, {
  firstComponentData: FirstComponentConfig,
  secondComponentData: SecondComponentConfig,
}>;

const firstDialogConfig: FirstDialogType = {
  componentType: DialogComponent,
  configData: {
    firstComponentData: {
      componentType: FirstFormComponent,
      exampleState: {id: 123, name: 'JUK'}
    },
    secondComponentData: {
      componentType: SecondFormComponent,
      exampleState: {id: 321, title: 'KUJ'}
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {

  constructor(private readonly dialogService: DialogOpenerService,
              private readonly fetchService: FetchService,
              private readonly firstService: FirstFormStateService,
              private readonly secondService: SecondFormStateService) {
  }

  public openDialog(): void {
    this.fetchData();
    this.dialogService.openDialog(firstDialogConfig);
  }

  private fetchData(): void {
    // эмулируем параллельные запросы для заполнения всей формы если это необходимо
    forkJoin<[FirstDataModel, SecondDataModel]>([this.fetchService.getFirstData(),
      this.fetchService.getSecondData()]).subscribe(([fRes, sRes]) => {
      this.firstService.updateState(fRes);
      this.secondService.updateState(sRes);
    })
  }
}
