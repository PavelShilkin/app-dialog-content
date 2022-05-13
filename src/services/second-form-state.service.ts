import {Injectable} from "@angular/core";
import {BaseFormState} from "./base-form-state";
import {SecondDataModel} from "../models/second-data.model";

@Injectable()
export class SecondFormStateService extends BaseFormState<SecondDataModel> {

  constructor() {
    super({id: 0, title: ''});
  }
}
