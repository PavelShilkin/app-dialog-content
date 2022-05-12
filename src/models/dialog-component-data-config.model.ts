import {Type} from "@angular/core";

export interface DialogComponentDataConfigModel<C, D> {
  componentType: Type<C>;
  configData: D;
}
