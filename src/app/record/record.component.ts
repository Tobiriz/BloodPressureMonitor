import { Component, ViewChild, Output, EventEmitter } from '@angular/core';
import { NewReadingComponent as NewReadingForm } from '../new-reading/new-reading.component';
import Reading from '../../reading/reading.class';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.scss']
})
export class RecordComponent {

  @Output() readingAdded = new EventEmitter<Reading[]>();

  @ViewChild(NewReadingForm) newReadingForm: NewReadingForm | undefined;
  newReadingDialog: any;

  readings: Reading[];

  constructor() {
    this.readings = new Array<Reading>();
  }
  
  ngOnInit() {
    this.newReadingDialog = document.getElementById('newReadingDialog');
  }

  openNewReadingForm() {
    this.newReadingDialog.showModal();
    this.newReadingForm?.newReading();
  }

  addReading(reading: Reading) {
    this.readings.push(reading);
    this.readingAdded.emit(this.readings);
  }
}
