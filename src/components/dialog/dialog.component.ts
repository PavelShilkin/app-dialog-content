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
import {FirstDialogType} from "../../app/app.component";


export interface FirstComponentConfig {
  componentType: Type<FirstFormComponent>,
  exampleInput: string
}


export interface SecondComponentConfig {
  componentType: Type<SecondFormComponent>,
  exampleArray: Array<{ title: string }>
}

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

  constructor(private readonly dialogConfig: DynamicDialogConfig) {
  }

  ngOnInit(): void {
    const configData = this.dialogConfig.data;
    this.createComponent(configData.firstComponentData, configData.secondComponentData);
  }

  private createComponent(firstData: FirstComponentConfig,
                          secondData: SecondComponentConfig): void {
    this.createFirstForm(firstData);
    this.createSecondForm(secondData);
  }

  private createFirstForm(firstData: FirstComponentConfig): void {
    const factory = this.firstForm.createComponent<FirstFormComponent>(firstData.componentType);
    factory.instance.exampleInput = firstData.exampleInput;
  }

  private createSecondForm(secondData: SecondComponentConfig): void {
    const factory = this.secondForm.createComponent(secondData.componentType);
    factory.instance.exampleArray = secondData.exampleArray;
  }

}
