import {Injectable, Type, ViewContainerRef} from '@angular/core';
import {BaseFormComponent} from "../components/forms/base-form.component";

@Injectable()
export class ComponentCreatorsService {

  public createComponentForm<T>(data: { componentType: Type<BaseFormComponent<T>>, exampleState: T }, vcr: ViewContainerRef): void {
    const factory = vcr.createComponent(data.componentType);
    factory.instance.exampleStateForComponent = data.exampleState;
  }
}
