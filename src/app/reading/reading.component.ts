import { Component, Input } from '@angular/core';
import { Prognosis } from 'src/reading/reading.class';

@Component({
  selector: 'app-reading',
  templateUrl: './reading.component.html',
  styleUrls: ['./reading.component.scss']
})
export class ReadingComponent {

  @Input() systolic: number | undefined;
  @Input() diastolic: number | undefined;
  @Input() pulse: number | undefined;
  @Input() date: string | undefined;
  @Input() time: string | undefined;
  @Input() notes: string | undefined;
  @Input() prognosis: Prognosis | undefined;

  constructor() { }

  ngOnInit() {
  }

}
