import {Injectable} from "@angular/core";
import {BaseFormStateService} from "./base-form-state.service";
import {SecondDataModel} from "../models/second-data.model";

@Injectable()
export class SecondFormStateService extends BaseFormStateService<SecondDataModel> {

  constructor() {
    super({id: 0, title: ''});
  }
}
