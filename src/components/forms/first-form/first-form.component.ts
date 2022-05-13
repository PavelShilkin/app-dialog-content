import {Component, Optional, SkipSelf} from '@angular/core';
import {FirstFormStateService} from "../../../services/first-form-state.service";
import {BaseFormComponent} from "../base-form.component";
import {FirstDataModel} from "../../../models/first-data.model";

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent extends BaseFormComponent<FirstDataModel> {
  constructor(@Optional() @SkipSelf() protected readonly state: FirstFormStateService) {
    super(state);
  }
}
