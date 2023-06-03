import { Component } from '@angular/core';
import Reading from 'src/reading/reading.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'BloodPressure';

  readings: Reading[] = new Array<Reading>();

  updateRecord(readings: Reading[]) {
    const newReadings = new Array<Reading>();

    for (const reading of readings) {
      newReadings.push(new Reading(reading.systolic, reading.diastolic, reading.pulse, reading.date, reading.time, reading.notes));
    }

    this.readings = newReadings;
  }
}
