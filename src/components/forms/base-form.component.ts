import {Component, Input, Optional, SkipSelf} from "@angular/core";
import {BaseFormStateService} from "../../services/base-form-state.service";
import {BaseFormCreatorService} from "../../services/base-form-creator.service";

@Component({
  template: ''
})
export class BaseFormComponent<T> {
  @Input()
  public exampleStateForComponent!: T;

  constructor(@Optional() @SkipSelf()
              protected readonly stateService: BaseFormStateService<T>,
              protected readonly formService: BaseFormCreatorService<T>) {
    this.formService.createFormGroup();
    this.stateService?.state$.subscribe((state) => {
      this.exampleStateForComponent = state
      this.formService.patch(state);
    });
  }
}
