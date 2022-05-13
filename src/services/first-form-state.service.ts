import {Injectable} from '@angular/core';
import {BaseFormStateService} from "./base-form-state.service";
import {FirstDataModel} from "../models/first-data.model";

@Injectable()
export class FirstFormStateService extends BaseFormStateService<FirstDataModel> {
  constructor() {
    super({ id: 0, name: ''});
  }
}
