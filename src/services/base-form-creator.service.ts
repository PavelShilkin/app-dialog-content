import {FormBuilder, FormGroup} from "@angular/forms";
import {Observable, Subscription} from "rxjs";

export abstract class BaseFormCreatorService<T> {
  public formGroup!: FormGroup;

  public valueChangesSubs = new Subscription();

  protected constructor(protected readonly fb: FormBuilder) {
  }

  public abstract createFormGroup(): void;

  public patch(value: T): void {
    this.formGroup.patchValue(value);
  }

  public reset(): void {
    this.formGroup.reset();
  }

  public observeFgChanges(): Observable<T> {
    return this.formGroup.valueChanges;
  }

  public observeFcChanges(fcName: string): Observable<T> | undefined {
    const fc = this.formGroup.get('fcName');

    if (!fc) return;

    return fc.valueChanges;
  }
}
