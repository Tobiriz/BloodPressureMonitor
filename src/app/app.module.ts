import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MonitorComponent } from './monitor/monitor.component';
import { ReadingComponent } from './reading/reading.component';
import { RecordComponent } from './record/record.component';
import { NewReadingComponent } from './new-reading/new-reading.component';

@NgModule({
  declarations: [
    AppComponent,
    MonitorComponent,
    ReadingComponent,
    RecordComponent,
    NewReadingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
