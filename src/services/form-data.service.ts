import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class FormDataService {
  public firstDataComponent$ = new BehaviorSubject('ДАННЫЕ ИЗ СЕРВИСА');
  public secondDataComponent$ = new BehaviorSubject<Array<{ title: string }>>([{title: '3'}, {title: '5'}, {title: 'ДАННЫЕ ИЗ СЕРВИСА'}]);

  constructor() {
  }
}
