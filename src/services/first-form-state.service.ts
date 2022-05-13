import {Injectable} from '@angular/core';
import {BaseFormState} from "./base-form-state";
import {FirstDataModel} from "../models/first-data.model";

@Injectable()
export class FirstFormStateService extends BaseFormState<FirstDataModel> {
  constructor() {
    super({ id: 0, name: ''});
  }
}
