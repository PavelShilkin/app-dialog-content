import {Injectable} from '@angular/core';
import {BaseFormCreatorService} from "./base-form-creator.service";
import {FormBuilder} from "@angular/forms";
import {SecondDataModel} from "../models/second-data.model";

@Injectable()
export class SecondFormCreatorService extends BaseFormCreatorService<SecondDataModel> {

  constructor(protected readonly formBuilder: FormBuilder) {
    super(formBuilder);
  }

  public createFormGroup(): void {
    this.formGroup = this.formBuilder.group({
      id: 0,
      title: ''
    })
  }
}
