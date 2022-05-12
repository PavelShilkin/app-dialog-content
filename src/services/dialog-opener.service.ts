import {Injectable} from '@angular/core';
import {DialogService} from "primeng/dynamicdialog";
import {DialogComponentDataConfigModel} from "../models/dialog-component-data-config.model";

@Injectable()
export class DialogOpenerService {

  constructor(private readonly dialogService: DialogService) {
  }

  public openDialog<C, D>(componentDialogDataConfig: DialogComponentDataConfigModel<C, D>): void {
    this.dialogService.open(componentDialogDataConfig.componentType, {data: componentDialogDataConfig.configData})
  }
}
