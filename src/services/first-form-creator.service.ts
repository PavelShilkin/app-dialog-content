import {Injectable} from '@angular/core';
import {BaseFormCreatorService} from "./base-form-creator.service";
import {FirstDataModel} from "../models/first-data.model";
import {FormBuilder} from "@angular/forms";

@Injectable()
export class FirstFormCreatorService extends BaseFormCreatorService<FirstDataModel> {

  constructor(protected readonly formBuilder: FormBuilder) {
    super(formBuilder);
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      id: 0,
      name: ''
    })
  }
}
