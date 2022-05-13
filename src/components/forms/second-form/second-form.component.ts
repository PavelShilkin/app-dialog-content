import {Component, Optional, SkipSelf} from '@angular/core';
import {BaseFormComponent} from "../base-form.component";
import {SecondDataModel} from "../../../models/second-data.model";
import {SecondFormStateService} from "../../../services/second-form-state.service";
import {SecondFormCreatorService} from "../../../services/second-form-creator.service";

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss'],
  providers: [SecondFormCreatorService]
})
export class SecondFormComponent extends BaseFormComponent<SecondDataModel> {

  constructor(@Optional() @SkipSelf() protected readonly state: SecondFormStateService,
              protected readonly fs: SecondFormCreatorService) {
    super(state, fs);
  }

}
