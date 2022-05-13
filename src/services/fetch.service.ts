import {Injectable} from '@angular/core';
import {delay, Observable, of} from "rxjs";
import {FirstDataModel} from "../models/first-data.model";
import {SecondDataModel} from "../models/second-data.model";

// создан для эмуляции запросов данных
@Injectable()
export class FetchService {

  constructor() {
  }

  public getFirstData(): Observable<FirstDataModel> {
    return of({id: 1, name: 'Angular'}).pipe(delay(1500));
  }

  public getSecondData(): Observable<SecondDataModel> {
    return of({id: 11, title: 'RXJS'}).pipe(delay(1500));
  }
}
