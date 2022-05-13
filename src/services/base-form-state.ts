import {BehaviorSubject, Observable} from "rxjs";

export abstract class BaseFormState<T> {
  private stateValue$!: BehaviorSubject<T>;

  public readonly state$!: Observable<T>;

  protected constructor(initialStateValue: T) {
    this.stateValue$ = new BehaviorSubject<T>(initialStateValue);
    this.state$ = this.stateValue$.asObservable();
  }

  public updateState(value: T): void {
    this.stateValue$.next(value);
  }

  // Здесь могут описаны базовые методы которые будут одинаковыми
  // для всех стейт сервисов, если же нужна доп логика описывает в расширяемом классе (дочке)
}
