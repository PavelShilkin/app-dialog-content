import {Component, Input, Optional, SkipSelf} from "@angular/core";
import {BaseFormState} from "../../services/base-form-state";

@Component({
  template: ''
})
export class BaseFormComponent<T> {
  @Input()
  public exampleStateForComponent!: T;

  constructor(@Optional() @SkipSelf() protected readonly stateService: BaseFormState<T>) {
    this.stateService?.state$.subscribe((state) => this.exampleStateForComponent = state);
  }
}
