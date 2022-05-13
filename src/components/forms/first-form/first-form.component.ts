import {Component, Optional, SkipSelf} from '@angular/core';
import {FirstFormStateService} from "../../../services/first-form-state.service";
import {BaseFormComponent} from "../base-form.component";
import {FirstDataModel} from "../../../models/first-data.model";
import {FirstFormCreatorService} from "../../../services/first-form-creator.service";

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
  providers: [FirstFormCreatorService]
})
export class FirstFormComponent extends BaseFormComponent<FirstDataModel> {
  public formGroup = this.fs.formGroup;

  constructor(@Optional() @SkipSelf() protected readonly state: FirstFormStateService,
              protected readonly fs: FirstFormCreatorService) {
    super(state, fs);
  }
}
