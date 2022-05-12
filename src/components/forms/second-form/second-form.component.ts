import {Component, Input, OnInit, Optional, SkipSelf} from '@angular/core';
import {FormDataService} from "../../../services/form-data.service";

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {
  @Input()
  public exampleArray: Array<{ title: string }> = [];

  constructor(@Optional() @SkipSelf() private readonly formDataService: FormDataService) {
  }

  ngOnInit(): void {
    // this.formDataService?.secondDataComponent$.subscribe((data) => this.exampleArray = data);
  }

}
