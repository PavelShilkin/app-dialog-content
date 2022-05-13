import {
  Component,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {DynamicDialogConfig} from "primeng/dynamicdialog";
import {FirstFormComponent} from "../forms/first-form/first-form.component";
import {SecondFormComponent} from "../forms/second-form/second-form.component";
import {FirstDataModel} from "../../models/first-data.model";
import {SecondDataModel} from "../../models/second-data.model";
import {ComponentCreatorsService} from "../../services/component-creators.service";


export interface ComponentConfig<C, S> {
  componentType: Type<C>,
  exampleState: S,
}

export type FirstComponentConfig = ComponentConfig<FirstFormComponent, FirstDataModel>;
export type SecondComponentConfig = ComponentConfig<SecondFormComponent, SecondDataModel>

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {
  @ViewChild('firstForm', {static: true, read: ViewContainerRef})
  public readonly firstForm!: ViewContainerRef;

  @ViewChild('secondForm', {static: true, read: ViewContainerRef})
  public readonly secondForm!: ViewContainerRef;

  constructor(private readonly dialogConfig: DynamicDialogConfig,
              private readonly componentCreator: ComponentCreatorsService) {
  }

  ngOnInit(): void {
    const configData = this.dialogConfig.data;
    this.createFormComponents(configData.firstComponentData, configData.secondComponentData);
  }

  private createFormComponents(firstData: FirstComponentConfig,
                          secondData: SecondComponentConfig): void {
    this.createFirstForm(firstData);
    this.createSecondForm(secondData);
  }

  private createFirstForm(firstData: FirstComponentConfig): void {
    this.componentCreator.createComponentForm(firstData, this.firstForm);
  }

  private createSecondForm(secondData: SecondComponentConfig): void {
    this.componentCreator.createComponentForm(secondData, this.secondForm);
  }

}
