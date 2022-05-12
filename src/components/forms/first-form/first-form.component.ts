import {Component, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {FormDataService} from "../../../services/form-data.service";

@Component({
  selector: 'app-first-form',
  templateUrl: './first-form.component.html',
  styleUrls: ['./first-form.component.scss'],
})
export class FirstFormComponent implements OnInit {
  @Input()
  public exampleInput = '';

  constructor(@Optional() @SkipSelf() private readonly formDataService: FormDataService) {
  }

  ngOnInit(): void {
    this.formDataService?.firstDataComponent$.subscribe((data) => this.exampleInput = data);
  }

}
