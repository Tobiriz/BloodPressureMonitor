import { Component, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import Reading from '../../reading/reading.class';

@Component({
  selector: 'app-new-reading',
  templateUrl: './new-reading.component.html',
  styleUrls: ['./new-reading.component.scss']
})
export class NewReadingComponent {

  @Output() addReadingEvent = new EventEmitter<Reading>();

  newReadingDialog: any;

  newReadingForm = new FormGroup({
    systolic: new FormControl(''),
    diastolic: new FormControl(''),
    pulse: new FormControl(''),
    date: new FormControl(''),
    time: new FormControl(''),
    notes: new FormControl('')
  });

  constructor() {
    this.newReadingDialog = document.getElementById('newReadingDialog');
  }
  
  ngOnInit() {
  }
  
  fillDateTimeFields() {
    const now = new Date();
    const currentDate = now.toISOString().substring(0, 10); // Format: YYYY-MM-DD
    const currentTime = now.toTimeString().substring(0, 5); // Format: HH:MM
    
    this.newReadingForm.patchValue({
      date: currentDate,
      time: currentTime
    });
  }
  
  newReading() {
    this.fillDateTimeFields();
  }

  addReading() {
    console.log('addReading() called');
    console.log(this.newReadingForm.value);

    const newReading = new Reading(
      this.newReadingForm.value.systolic as string,
      this.newReadingForm.value.diastolic as string,
      this.newReadingForm.value.pulse as string,
      this.newReadingForm.value.date as string,
      this.newReadingForm.value.time as string,
      this.newReadingForm.value.notes as string
    );

    this.addReadingEvent.emit(newReading);
    
    this.newReadingDialog.close();
    this.newReadingForm.reset();
  }
  
  closeDialog() {
    this.newReadingDialog.close();
    this.newReadingForm.reset();
  }

}
